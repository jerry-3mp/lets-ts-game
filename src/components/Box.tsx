import {useRef, useState} from 'react';
import {useBox} from '@react-three/cannon';

function Box(props: JSX.IntrinsicElements['mesh']) {
  const [ref, api] = useBox(
      ()=>({mass: 1, position: [0, 2, 0]}),
      useRef<THREE.Mesh>(null),
  );
  const [hovered, hover] = useState(false);
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => {
        api.velocity.set(0, 10, 0);
      }}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry attach="geometry"/>
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default Box;
