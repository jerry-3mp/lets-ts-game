import {useEffect, useRef} from 'react';
import {useFBX} from '@react-three/drei';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {TPVControls} from './TPVControls';
import {Vector3} from 'three';
import {useFrame, useThree} from '@react-three/fiber';
import {useKeyboardControls} from '../hooks/useKeyboardControls';
import {BoxProps, useBox} from '@react-three/cannon';
import {toFixedNumber} from '../utils/NumberUtils';

const SPEED = 6;

function Maria(props: BoxProps) {
  const fbx = useFBX('/models/maria/Maria.fbx');
  const controls = useRef<OrbitControls>(null);
  const {camera} = useThree();
  const {moveForward, moveBackward, moveLeft, moveRight, jump} =
    useKeyboardControls();
  const pos = useRef([0, 0, 0]);
  const [ref, api] = useBox(() => ({
    mass: 1,
    type: 'Dynamic',
    ...props,
  }), useRef<THREE.Mesh>(null));
  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  useEffect(() => api.position.subscribe((v) => {
    const xDiff = v[0] - pos.current[0];
    const yDiff = v[1] - pos.current[1];
    const zDiff = v[2] - pos.current[2];
    camera.position.copy(
        new Vector3(
            camera.position.x + (xDiff),
            camera.position.y + (yDiff),
            camera.position.z + (zDiff),
        ),
    );
    if (controls.current !== null) {
      controls.current.target.copy(
          new Vector3(
              controls.current.target.x + (xDiff),
              controls.current.target.y + (yDiff),
              controls.current.target.z + (zDiff),
          ),
      );
      // controls.current.update();
      // controls.current.saveState();
    }
    pos.current = v;
  }), [api.position]);

  useFrame(() => {
    const frontVector = new Vector3(
        0,
        0,
        (moveBackward ? 1 : 0) - (moveForward ? 1 : 0),
    );
    const sideVector = new Vector3(
        (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
        0,
        0,
    );

    const direction = new Vector3();
    direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(toFixedNumber(velocity.current[1], 2)) < 0.05) {
      api.velocity.set(velocity.current[0], 8, velocity.current[2]);
    }
  });

  return <>
    <TPVControls ref={controls}/>
    <mesh ref={ref}>
      <primitive object={fbx} scale={[0.03, 0.03, 0.03]}/>
    </mesh>
  </>;
}

export default Maria;
