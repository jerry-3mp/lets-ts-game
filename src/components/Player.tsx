import {useEffect, useRef} from 'react';
import {useSphere, SphereProps} from '@react-three/cannon';
import {useFrame, useThree} from '@react-three/fiber';
import {Vector3} from 'three';
import {useKeyboardControls} from '../hooks/useKeyboardControls';
import {toFixedNumber} from '../utils/NumberUtils';

const SPEED = 6;

function Player(props: SphereProps) {
  const {camera} = useThree();
  const {moveForward, moveBackward, moveLeft, moveRight, jump} =
    useKeyboardControls();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    ...props,
  }), useRef<THREE.Mesh>(null));
  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);
  const pos = useRef([0, 0, 0]);
  useEffect(() =>
    api.position.subscribe((v) => (pos.current = v)), [api.position]);

  useFrame(() => {
    camera.position.copy(
        new Vector3(pos.current[0], pos.current[1], pos.current[2]),
    );
    const direction = new Vector3();

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

  return (
    <>
      <FPVControls />
      <mesh
        ref={ref}>
      </mesh>
    </>
  );
}

export default Player;
