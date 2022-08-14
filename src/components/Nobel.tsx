// import { useFBX } from '@react-three/drei';
import {useLoader} from '@react-three/fiber';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';

function Nobel() {
  const fbx = useLoader(FBXLoader, '/models/nobel/nobel.fbx');
  // const fbx = useFBX('/Poimandres.fbx');
  return <primitive object={fbx}>
    <ambientLight />
    <pointLight position={[0, 0, 0]} />
  </primitive>;
}

export default Nobel;
