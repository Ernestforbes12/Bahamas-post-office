import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  const texture = new THREE.TextureLoader().load('/earth.jpg');

  return (
    <mesh ref={meshRef} rotation={[0.3, 4.8, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function BahamasGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 2.8] }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-5, 0, 0]} color="#00BFA5" intensity={0.5} />
      <Globe />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default BahamasGlobe;