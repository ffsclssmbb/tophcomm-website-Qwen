import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', icon: '📦' },
  { value: 80, suffix: '+', label: 'Enterprise Clients', icon: '🏢' },
  { value: 99.9, suffix: '%', label: 'System Uptime', icon: '⚡' },
  { value: 24, suffix: '/7', label: 'Support Coverage', icon: '🛡️' },
  { value: 12, suffix: '+', label: 'Technologies', icon: '🔧' },
  { value: 5, suffix: ' yrs', label: 'Industry Experience', icon: '📈' },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target % 1 === 0 ? Math.round(target * eased) : Math.round(target * eased * 10) / 10);
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Marquee banner */}
        <div className="reveal mb-20 overflow-hidden border-y border-white/5 py-6">
          <div className="flex marquee-track" style={{ width: 'max-content' }}>
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-8 px-4">
                {['SYSTEMS INTEGRATION', '•', 'API DEVELOPMENT', '•', 'CLOUD INFRASTRUCTURE', '•', 'DATA PIPELINES', '•', 'CUSTOM SOFTWARE', '•', 'MANAGED SUPPORT', '•'].map((text, i) => (
                  <span key={`${setIdx}-${i}`} className={`text-2xl md:text-3xl font-heading font-bold whitespace-nowrap ${
                    text === '•' ? 'text-accent' : 'text-white/5'
                  }`}>
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="reveal glass-card p-6 text-center group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1 group-hover:text-accent-light transition-colors">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-xs text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
