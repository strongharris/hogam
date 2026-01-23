import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Cone, TorusKnot, Outlines, Environment } from '@react-three/drei';
import * as THREE from 'three';

const InkMountain = ({ position, scale = 1, distortion = 0.4 }: { position: [number, number, number]; scale?: number; distortion?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  // Subtle breathing animation for the mountains
  useFrame((state) => {
    if (ref.current) {
       const t = state.clock.getElapsedTime();
       ref.current.rotation.y = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <Cone ref={ref} args={[1, 2, 4]} position={position} scale={scale}>
        {/* Toon material for matte ink look */}
        {/* @ts-ignore */}
        <meshToonMaterial color="#111111" />
        {/* Outlines to make it look drawn */}
        <Outlines thickness={0.05} color="#333333" />
      </Cone>
    </Float>
  );
};

const FloatingPersimmon = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={1} floatingRange={[0, 0.5]}>
      <Sphere args={[0.3, 32, 32]} position={position}>
        <MeshDistortMaterial
          color="#F36A2D"
          speed={2}
          distort={0.3}
          radius={1}
        />
        <Outlines thickness={0.02} color="#D54A1E" />
      </Sphere>
    </Float>
  );
};

const AbstractBrushStroke = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <TorusKnot ref={ref} args={[1.5, 0.2, 100, 16]} position={[0, 0, -2]}>
        {/* @ts-ignore */}
        <meshToonMaterial color="#111111" transparent opacity={0.1} side={THREE.DoubleSide} />
      </TorusKnot>
    </Float>
  );
};

export const InkScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.8} />
        {/* @ts-ignore */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        
        {/* Left background mountain */}
        <InkMountain position={[-2, -1, -2]} scale={1.5} />
        
        {/* Right foreground mountain */}
        <InkMountain position={[2.5, -1.5, 0]} scale={1.2} />
        
        {/* Distant center mountain */}
        <InkMountain position={[0, -0.5, -4]} scale={2} />

        {/* Floating Persimmons */}
        <FloatingPersimmon position={[1.5, 1.5, 1]} />
        <FloatingPersimmon position={[-1.5, 0.5, 2]} />
        
        {/* Abstract background strokes */}
        <AbstractBrushStroke />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};