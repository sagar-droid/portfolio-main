import React from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "./Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";

const HeroCanvas = ({ isMobile }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <Float speed={0.5}>
        <Planet scale={isMobile ? 0.7 : 1} />
      </Float>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 4, 1]}>
          <Lightformer
            form={"circle"}
            intensity={2}
            position={[0, 5, -9]}
            scale={10}
          />
          <Lightformer
            form={"circle"}
            intensity={2}
            position={[0, 3, 1]}
            scale={10}
          />
          <Lightformer
            form={"circle"}
            intensity={2}
            position={[-5, -1, -1]}
            scale={10}
          />
          <Lightformer
            form={"circle"}
            intensity={2}
            position={[10, 1, 0]}
            scale={16}
          />
        </group>
      </Environment>
    </Canvas>
  );
};

export default HeroCanvas;
