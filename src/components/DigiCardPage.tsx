import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, RoundedBox } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Smartphone, BarChart3, Palette, Users, Shield, Zap } from 'lucide-react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';

function CardMesh({ hovered }: { hovered: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * (hovered ? 0.35 : 0.12);
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, hovered ? 0.15 : 0.05, 0.05);
  });
  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={mesh}>
        <RoundedBox args={[3.4, 2.1, 0.08]} radius={0.12} smoothness={8}>
          <meshStandardMaterial color="#0a0a0a" metalness={0.85} roughness={0.2} envMapIntensity={1.2} />
        </RoundedBox>
        <mesh position={[0, 0.55, 0.045]}><planeGeometry args={[2.8, 0.08]} /><meshBasicMaterial color="#f97316" /></mesh>
        <mesh position={[-1.1, 0.15, 0.05]}><boxGeometry args={[0.45, 0.35, 0.02]} /><meshStandardMaterial color="#c9a227" metalness={1} roughness={0.3} /></mesh>
        <mesh position={[1.2, -0.5, 0.05]}><ringGeometry args={[0.12, 0.18, 32]} /><meshBasicMaterial color="#f97316" transparent opacity={0.9} /></mesh>
      </group>
    </Float>
  );
}

function Scene({ hovered }: { hovered: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-4, 2, 2]} intensity={0.6} color="#f97316" />
      <CardMesh hovered={hovered} />
      <ContactShadows position={[0, -1.4, 0]} opacity={0.45} scale={8} blur={2.5} />
      <Environment preset="city" />
    </>
  );
}

const features = [
  { icon: Smartphone, title: 'NFC & QR', desc: 'Tap or scan — instant share of your digital identity.' },
  { icon: BarChart3, title: 'Live Analytics', desc: 'See who viewed your card, when, and from where.' },
  { icon: Palette, title: 'Full Branding', desc: 'Match company colors, logo, and layout perfectly.' },
  { icon: Users, title: 'Team Hub', desc: 'Provision cards for entire teams with role templates.' },
  { icon: Shield, title: 'Secure Profile', desc: 'Control visibility; revoke access in one click.' },
  { icon: Zap, title: 'Always Current', desc: 'Update once — every shared link stays in sync.' },
];

export default function DigiCardPage() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="min-h-screen bg-bg text-text relative overflow-hidden">
      <div className="grain" aria-hidden="true" />
      <div className="pointer-events-none absolute top-0 right-0 w-[60vw] h-[50vh] opacity-30" style={{ background: 'radial-gradient(ellipse at top right, rgba(249,115,22,0.25), transparent 60%)' }} />
      <header className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><ArrowLeft size={16} />Back to Tophcomm</Link>
        <div className="flex items-center gap-2 text-white">
          <CreditCard size={18} className="text-orange-500" />
          <span className="font-semibold tracking-tight">DigiCard</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">Preview</span>
        </div>
      </header>
      <main className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-4">Innovation Lab · Hidden preview</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6">Your identity.<br /><span className="text-orange-400">Digitally alive.</span></h1>
            <p className="text-muted text-lg leading-relaxed max-w-md mb-8">DigiCard replaces paper cards with NFC-ready, analytics-powered digital identities — branded, team-managed, and always up to date.</p>
            <div className="flex flex-wrap gap-3">
              <a href="/#contact" className="btn btn-solid" style={{ height: 44, padding: '0 20px' }}>Join waitlist</a>
              <Link to="/client" className="btn btn-ghost" style={{ height: 44, padding: '0 20px' }}>Client portal</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="h-[380px] md:h-[440px] rounded-2xl overflow-hidden border border-white/10 bg-black/40"
            onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
            <Suspense fallback={<div className="h-full flex items-center justify-center text-muted text-sm">Loading 3D card…</div>}>
              <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.75]}><Scene hovered={hovered} /></Canvas>
            </Suspense>
          </motion.div>
        </div>
        <section className="mt-20 md:mt-28">
          <h2 className="text-2xl md:text-3xl font-medium mb-10 tracking-tight">Platform features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass p-6 group hover:border-orange-500/30 transition-colors">
                <f.icon className="w-8 h-8 text-orange-400 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-medium text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <p className="mt-16 text-center text-xs text-muted/70">DigiCard is a Tophcomm Systems / FS Softwares innovation product. This route is not listed in the main navigation.</p>
      </main>
    </div>
  );
}
