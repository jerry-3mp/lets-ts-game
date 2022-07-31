import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

function Apollo() {
    const mtls = "/models/apollo/Apollo_Command_Module.mtl";
    const materials = useLoader(MTLLoader, mtls);
    const obj = useLoader(OBJLoader, "/models/apollo/Apollo_Command_Module.obj", (loader) => {
      materials.preload();
      (loader as OBJLoader).setMaterials(materials);
    });
  
    console.log(obj);
    return <primitive object={obj} scale={0.4} />;
}

export default Apollo;
