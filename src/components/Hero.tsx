import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';

// Custom shader for morphing diagonal streaks
const shaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  },
  vertexShader: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uResolution;
    
    // Simplex noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m;
      m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    
    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= uResolution.x / uResolution.y;
      
      // Domain warping
      float t = uTime * 0.15;
      vec2 q = vec2(
        snoise(p + vec2(t, 0.0)),
        snoise(p + vec2(0.0, t))
      );
      
      vec2 r = vec2(
        snoise(p + 4.0 * q + vec2(1.7 + t, 9.2)),
        snoise(p + 4.0 * q + vec2(8.3 + t, 2.8))
      );
      
      float f = snoise(p + 4.0 * r);
      
      // Diagonal streaks
      float streak = sin((p.x + p.y) * 3.0 + f * 2.0 + t) * 0.5 + 0.5;
      streak = pow(streak, 3.0);
      
      // Colors
      vec3 baseDark1 = vec3(0.04, 0.04, 0.06);
      vec3 baseDark2 = vec3(0.12, 0.15, 0.22);
      vec3 highlight = vec3(0.35, 0.35, 0.4);
      
      vec3 color = mix(baseDark1, baseDark2, f * 0.5 + 0.5);
      color = mix(color, highlight, streak * 0.4);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(() => new THREE.ShaderMaterial(shaderMaterial), []);

  useFrame((state) => {
    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* WebGL Background */}
      <div className="absolute inset-0">
        <Canvas dpr={[1, 2]} style={{ position: 'absolute', inset: 0 }}>
          <ShaderPlane />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        style={{ y }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12"
      >
        <div className="max-w-[1400px] w-full text-center">
          <h1 className="font-display text-5xl md:text-[100px] font-bold leading-[1.1] tracking-tight text-white">
            We create smart & effective
            <br />
            digital solution
            <span className="inline-block w-[100px] md:w-[450px] h-2.5 md:h-3 bg-white rounded-r-full ml-2 align-middle origin-left animate-[scaleX_1.5s_ease-out_forwards]" style={{ transform: 'scaleX(0)' }} />
          </h1>
        </div>

        {/* Rotating Badge */}
        <div className="absolute bottom-12 right-12 hidden md:block">
          <div className="relative w-32 h-32 animate-[spin_10s_linear_infinite]">
            <svg viewBox="0 0 128 128" className="w-full h-full">
              <defs>
                <path id="circle" d="M 64,64 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
              </defs>
              <text fill="white" fontSize="10" fontFamily="Inter" letterSpacing="2">
                <textPath href="#circle">
                  START A PROJECT • START A PROJECT •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Discovery Link Button */}
        <div className="absolute bottom-12 left-12 hidden md:block">
          <a
            href="https://member-tophcomm-fssoftwares.netlify.app/#/intake"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Explore FS Softwares
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
