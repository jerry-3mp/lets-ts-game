import {Physics} from '@react-three/cannon';
import {Stars} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import Plane from '../components/Plane';
import TPVPlayer from '../components/TPVPlayer';

function TPVMovement() {
  return (
    <Canvas>
      <Stars />
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <TPVPlayer />
        <Plane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}/>
      </Physics>
    </Canvas>
  );
}

export default TPVMovement;
