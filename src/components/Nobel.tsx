import {useFBX, useTexture} from '@react-three/drei';
import {Mesh, MeshPhongMaterial, MeshStandardMaterial} from 'three';

function Nobel() {
  const fbx = useFBX('/models/nobel/nobel.fbx');
  console.log((fbx.children[0] as Mesh).material);
  const [aoMap, map, normalMap, roughnessMap, metalnessMap] =
  useTexture( [
    '/models/nobel/nobel_AOmixed.png',
    '/models/nobel/nobel_Color.png',
    '/models/nobel/nobel_Normal.png',
    '/models/nobel/nobel_Roughness.png',
    '/models/nobel/nobel_Metallic.png',
  ]);
  fbx.traverse((child)=>{
    if (child instanceof Mesh) {
      const oldMaterial = ((child as Mesh).material as MeshPhongMaterial);
      child.material = new MeshStandardMaterial({
        color: oldMaterial.color,
        metalness: 2.5,
        roughness: 3,
        aoMap,
        map,
        normalMap,
        roughnessMap,
        metalnessMap,
      });
    }
  });
  console.log((fbx.children[0] as Mesh).material);
  return <mesh>
    <primitive object={fbx}>
      <ambientLight />
      <pointLight position={[100, 0, 0]} />
      <pointLight position={[0, 100, 0]} />
      <pointLight position={[0, 0, 100]} />
      <pointLight position={[-100, 0, 0]} />
      <pointLight position={[0, -100, 0]} />
      <pointLight position={[0, 0, -100]} />
    </primitive>
  </mesh>;
}

export default Nobel;
