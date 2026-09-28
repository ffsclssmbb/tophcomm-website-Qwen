import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, uptime: 0 });

  // WebGL-like animated background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => { prefersReducedMotion = motionQuery.matches; };
    motionQuery.addEventListener('change', handleMotionChange);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const particleCount = prefersReducedMotion ? 20 : 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      time += prefersReducedMotion ? 0 : 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Diagonal streaks
      for (let i = 0; i < 5; i++) {
        const offset = Math.sin(time + i * 1.2) * 100;
        const gradient = ctx.createLinearGradient(
          canvas.width * 0.2 + offset, 0,
          canvas.width * 0.8 + offset, canvas.height
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.03 + Math.sin(time + i) * 0.02})`);
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(canvas.width * (0.1 + i * 0.15) + offset, 0);
        ctx.lineTo(canvas.width * (0.2 + i * 0.15) + offset, 0);
        ctx.lineTo(canvas.width * (0.1 + i * 0.15) + offset + canvas.height * 0.5, canvas.height);
        ctx.lineTo(canvas.width * (0.0 + i * 0.15) + offset + canvas.height * 0.5, canvas.height);
        ctx.fill();
      }

      // Particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Counter animation
  useEffect(() => {
    const targets = { projects: 150, clients: 80, uptime: 99.9 };
    const duration = 2000;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounters({
        projects: Math.round(targets.projects * eased),
        clients: Math.round(targets.clients * eased),
        uptime: Math.round(targets.uptime * eased * 10) / 10,
      });

      if (progress < 1) requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          tick();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // 3D tilt on cards
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = e.currentTarget.querySelectorAll('.tilt-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -8;
      const rotateY = (x - centerX) / centerX * 8;
      (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = e.currentTarget.querySelectorAll('.tilt-card');
    cards.forEach((card) => {
      (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-50 z-0" aria-hidden="true" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-neon animate-pulse" aria-hidden="true" />
              <span className="text-sm text-accent-light font-medium">Systems Integration Experts</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-white">Enterprise</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-blue-400 to-accent-light bg-clip-text text-transparent">
                Software
              </span>
              <br />
              <span className="text-white">&amp; Systems</span>
              <br />
              <span className="text-text-secondary">Integration</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-lg mb-10 leading-relaxed">
              We connect your business systems into one unified platform. From API integration to cloud infrastructure, 
              Tophcomm Systems delivers solutions that scale with your enterprise.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-accent text-white font-semibold text-base hover:bg-accent-light transition-all duration-300 glow-blue magnetic-btn inline-flex items-center gap-2"
              >
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-base hover:bg-white/5 hover:border-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                Our Services
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 md:gap-12" aria-label="Key statistics">
              <div>
                <div className="text-3xl font-heading font-bold text-white" aria-label={`${counters.projects}+ projects delivered`}>{counters.projects}+</div>
                <div className="text-sm text-text-muted mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-white" aria-label={`${counters.clients}+ enterprise clients`}>{counters.clients}+</div>
                <div className="text-sm text-text-muted mt-1">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-white" aria-label={`${counters.uptime}% system uptime`}>{counters.uptime}%</div>
                <div className="text-sm text-text-muted mt-1">System Uptime</div>
              </div>
            </div>
          </div>

          {/* Right: 3D Interactive Cards */}
          <div
            className="relative h-[500px] hidden lg:block"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            aria-hidden="true"
          >
            {/* Card 1: API */}
            <div className="tilt-card absolute top-8 left-8 w-56 h-40 glass-card p-5 float-animation cursor-default" style={{ zIndex: 3 }}>
              <div className="tilt-card-inner">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-white text-sm">API Gateway</h3>
                <p className="text-xs text-text-muted mt-1">RESTful & GraphQL endpoints</p>
                <div className="mt-3 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-1 flex-1 rounded-full bg-accent/30" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Cloud */}
            <div className="tilt-card absolute top-24 right-4 w-52 h-44 glass-card p-5 float-animation-delayed cursor-default" style={{ zIndex: 4 }}>
              <div className="tilt-card-inner">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-white text-sm">Cloud Infrastructure</h3>
                <p className="text-xs text-text-muted mt-1">AWS · Azure · GCP</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-neon" />
                  <span className="text-[10px] text-green-neon">All systems operational</span>
                </div>
              </div>
            </div>

            {/* Card 3: Data */}
            <div className="tilt-card absolute bottom-20 left-16 w-60 h-44 glass-card p-5 float-animation-delayed-2 cursor-default" style={{ zIndex: 5 }}>
              <div className="tilt-card-inner">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
                    <path d="M3 12A9 3 0 0 0 21 12"/>
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-white text-sm">Data Warehouse</h3>
                <p className="text-xs text-text-muted mt-1">Real-time analytics pipeline</p>
                <div className="mt-3 grid grid-cols-6 gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-4 rounded-sm" style={{ background: `rgba(59, 130, 246, ${0.2 + Math.random() * 0.6})` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: FS Softwares */}
            <div className="tilt-card absolute bottom-8 right-8 w-48 h-36 glass-card p-4 float-animation cursor-default border-green-neon/20" style={{ zIndex: 3 }}>
              <div className="tilt-card-inner">
                <div className="w-8 h-8 rounded-lg bg-green-neon/20 flex items-center justify-center mb-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-white text-xs">FS Softwares</h3>
                <p className="text-[10px] text-text-muted mt-1">Product Suite</p>
              </div>
            </div>

            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <line x1="140" y1="100" x2="280" y2="160" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
              <line x1="280" y1="200" x2="180" y2="320" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
              <line x1="200" y1="340" x2="320" y2="380" stroke="rgba(16,185,129,0.15)" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
            </svg>
          </div>
        </div>

        {/* Rotating badge */}
        <div className="absolute bottom-12 right-8 hidden xl:block" aria-hidden="true">
          <div className="relative w-28 h-28">
            <svg viewBox="0 0 120 120" className="w-full h-full animate-[spin_20s_linear_infinite]">
              <defs>
                <path id="circlePath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
              </defs>
              <text fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter" letterSpacing="3">
                <textPath href="#circlePath">
                  START A PROJECT • START A PROJECT •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center glow-blue">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
