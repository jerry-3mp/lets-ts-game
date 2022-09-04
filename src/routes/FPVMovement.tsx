import {Physics} from '@react-three/cannon';
import {OrbitControls, Stars} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import Box from '../components/Box';
import Plane from '../components/Plane';



function FPVMovement() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box position={[0, 2, 0]}/>
        <Plane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}/>
      </Physics>
    </Canvas>
  );
}

export default FPVMovement;

