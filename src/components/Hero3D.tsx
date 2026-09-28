import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 1800;
  const positions = useRef(new Float32Array(count * 3));
  if (positions.current[0] === 0 && positions.current[1] === 0) {
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions.current[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions.current[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions.current[i * 3 + 2] = r * Math.cos(phi);
    }
  }
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
  });
  return (
    <Points ref={ref} positions={positions.current} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#6b9fff" size={0.028} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  );
}

function CoreOrb() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.08;
  });
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.1, 1]} />
      <meshStandardMaterial color="#1e3a8a" metalness={0.7} roughness={0.25} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[4, 4, 4]} intensity={0.8} color="#93c5fd" />
          <ParticleField />
          <CoreOrb />
        </Canvas>
      </Suspense>
    </div>
  );
}
