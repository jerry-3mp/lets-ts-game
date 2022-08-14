import {Environment, OrbitControls} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import {Suspense} from 'react';
import Apollo from '../components/Apollo';
import Nobel from '../components/Nobel';
import {Pistol} from '../components/Pistol';
import {Poimandres} from '../components/Poimandres';

function LoadingModels() {
  return (
    <div className = "App-header">
      <Canvas style={{width: '80vw', height: '450px'}}>
        <Suspense fallback={null}>
          <Poimandres />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
      <Canvas style={{width: '80vw', height: '450px'}}>
        <Suspense fallback={null}>
          <Pistol />
          <OrbitControls />
          <Environment preset="lobby" background />
        </Suspense>
      </Canvas>
      <Canvas style={{width: '80vw', height: '450px'}}>
        <Suspense fallback={null}>
          <Apollo />
          <OrbitControls />
          <Environment preset="park" background />
        </Suspense>
      </Canvas>
      <Canvas style={{width: '80vw', height: '450px'}}>
        <Suspense fallback={null}>
          <Nobel />
          <OrbitControls />
          <Environment preset="park" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default LoadingModels;
