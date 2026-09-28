import { useState } from 'react';

const systems = [
  { id: 'crm', label: 'CRM', angle: 0, color: '#3b82f6', desc: 'Customer relationship management — Salesforce, HubSpot, and custom solutions unified through a single data layer.' },
  { id: 'erp', label: 'ERP', angle: 60, color: '#8b5cf6', desc: 'Enterprise resource planning connecting finance, HR, supply chain, and operations into real-time workflows.' },
  { id: 'cloud', label: 'Cloud', angle: 120, color: '#06b6d4', desc: 'Multi-cloud infrastructure orchestration across AWS, Azure, and GCP with automated scaling and failover.' },
  { id: 'data', label: 'Data', angle: 180, color: '#10b981', desc: 'Data warehouse and analytics pipeline processing millions of events daily for actionable business intelligence.' },
  { id: 'api', label: 'API', angle: 240, color: '#f59e0b', desc: 'API gateway layer handling authentication, rate limiting, and routing across all integrated systems.' },
  { id: 'fs', label: 'FS', angle: 300, color: '#10b981', desc: 'FS Softwares product suite — specialized tools built by our innovation division for niche enterprise needs.' },
];

export default function Integration() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="integration" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-xs text-accent-light font-medium uppercase tracking-wider">How It Connects</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            One Platform,
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Every System</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We build the integration layer that connects all your business systems into a unified, real-time ecosystem.
          </p>
        </div>

        {/* Interactive Hub */}
        <div className="reveal flex flex-col lg:flex-row items-center gap-16">
          {/* Hub Diagram */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex-shrink-0">
            {/* Center hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center glow-blue">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full border border-accent/20 pulse-ring" />
                <div className="absolute -inset-4 rounded-full border border-accent/10 pulse-ring" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Orbiting nodes */}
            {systems.map((sys) => {
              const rad = (sys.angle * Math.PI) / 180;
              const radius = 140;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isActive = active === sys.id;

              return (
                <button
                  key={sys.id}
                  className={`absolute w-14 h-14 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'scale-125 border-white/30 shadow-lg'
                      : 'hover:scale-110 border-white/10'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 28px)`,
                    top: `calc(50% + ${y}px - 28px)`,
                    background: isActive ? `${sys.color}30` : 'rgba(255,255,255,0.04)',
                    color: sys.color,
                    boxShadow: isActive ? `0 0 20px ${sys.color}40` : 'none',
                  }}
                  onMouseEnter={() => setActive(sys.id)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : sys.id)}
                >
                  {sys.label}
                </button>
              );
            })}

            {/* Connection lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {systems.map((sys) => {
                const rad = (sys.angle * Math.PI) / 180;
                const radius = 140;
                const x = Math.cos(rad) * radius + 192;
                const y = Math.sin(rad) * radius + 192;
                const isActive = active === sys.id;
                return (
                  <line
                    key={sys.id}
                    x1="192"
                    y1="192"
                    x2={x}
                    y2={y}
                    stroke={isActive ? sys.color : 'rgba(255,255,255,0.06)'}
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray={isActive ? 'none' : '4 4'}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>
          </div>

          {/* Description panel */}
          <div className="flex-1 max-w-lg">
            <div className="glass-card p-8 min-h-[200px]">
              {active ? (
                <div className="animate-[fadeIn_0.3s_ease]">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: systems.find((s) => s.id === active)?.color }}
                    />
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {systems.find((s) => s.id === active)?.label}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {systems.find((s) => s.id === active)?.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-accent-light">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <span>Integrated through our unified platform</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4M12 8h.01"/>
                    </svg>
                  </div>
                  <p className="text-text-secondary">
                    Hover or tap a system node to explore how each integrates with your enterprise architecture.
                  </p>
                </div>
              )}
            </div>

            {/* Stack layers */}
            <div className="mt-6 space-y-3">
              {['Application Layer', 'Integration Layer (Tophcomm)', 'Infrastructure Layer'].map((layer, i) => (
                <div key={i} className="glass-card px-5 py-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{layer}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="w-6 h-1.5 rounded-full"
                        style={{
                          background: j <= (4 - i) ? 'rgba(59, 130, 246, 0.6)' : 'rgba(255,255,255,0.05)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
