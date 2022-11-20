import {useRef} from 'react';
import {useFBX} from '@react-three/drei';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {TPVControls} from './TPVControls';

function Maria() {
  const fbx = useFBX('/models/maria/Maria.fbx');
  const controls = useRef<OrbitControls>(null);
  return;
  <>
    <TPVControls ref={controls}/>
    <mesh>
      <primitive object={fbx}>
        <ambientLight />
        <pointLight position={[100, 0, 0]} />
        <pointLight position={[0, 100, 0]} />
        <pointLight position={[0, 0, 100]} />
        <pointLight position={[-100, 0, 0]} />
        <pointLight position={[0, -100, 0]} />
        <pointLight position={[0, 0, -100]} />
      </primitive>
    </mesh>
  </>;
}

export default Maria;
