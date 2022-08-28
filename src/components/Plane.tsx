import {useRef} from 'react';
import {usePlane} from '@react-three/cannon';

function Plane(props: JSX.IntrinsicElements['mesh']) {
  const [ref] = usePlane(
      ()=>({rotation: [-Math.PI / 2, 0, 0]}),
      useRef<THREE.Mesh>(null),
  );
  return (
    <mesh
      {...props}
      ref={ref}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

export default Plane;
