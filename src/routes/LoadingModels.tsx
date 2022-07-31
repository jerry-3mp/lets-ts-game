import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Poimandres } from "../components/Poimandres";

function LoadingModels() {
    return (
        <div className = "App-header">
            <Canvas style={{width: "300px", height: "300px"}}>
                <Suspense fallback={null}>
                    <Poimandres />
                    <OrbitControls />
                    <Environment preset="sunset" background />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default LoadingModels;