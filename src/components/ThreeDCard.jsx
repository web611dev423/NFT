import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ThreeDCard = () => {
  const { scene } = useGLTF("cards/creation_without_case.glb");

  useEffect(() => {
    console.log(scene);
  }, []);

  return (
    <div className="w-[35vw] h-[45vw] flex items-center justify-center">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={15} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <primitive
          object={scene}
          position={[0, 1.5, 0]}
          rotation={[0, Math.PI, 0]}
          scale={0.3}
        />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDCard;
