import { useRef, useState } from 'react';

export default function Innovation() {
  const digiCardRef = useRef<HTMLDivElement>(null);
  const fsCardRef = useRef<HTMLDivElement>(null);
  const [digiTilt, setDigiTilt] = useState({ x: 0, y: 0 });
  const [fsTilt, setFsTilt] = useState({ x: 0, y: 0 });

  const handleTilt = (
    e: React.MouseEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement>,
    setTilt: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  return (
    <section id="innovation" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-xs text-accent-light font-medium uppercase tracking-wider">Our Divisions</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Innovation
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Labs</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Beyond integration services, we build proprietary products that push the boundaries of enterprise technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FS Softwares Card */}
          <div
            ref={fsCardRef}
            className="reveal glass-card p-8 lg:p-10 relative overflow-hidden group cursor-default"
            style={{
              transform: `perspective(1000px) rotateX(${fsTilt.y}deg) rotateY(${fsTilt.x}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            onMouseMove={(e) => handleTilt(e, fsCardRef, setFsTilt)}
            onMouseLeave={() => setFsTilt({ x: 0, y: 0 })}
          >
            {/* Green glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-neon/10 rounded-full blur-[80px] group-hover:bg-green-neon/15 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-green-neon/15 border border-green-neon/25 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">FS Softwares</h3>
                  <p className="text-sm text-green-neon">Systems Division</p>
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                Our dedicated software division building specialized enterprise tools — from intake management systems to workflow automation platforms. 
                Each product is battle-tested in real enterprise environments before release.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Intake Systems', 'Workflow Engine', 'Report Builder', 'Data Sync'].map((product, i) => (
                  <div key={i} className="px-3 py-2.5 rounded-lg bg-green-neon/5 border border-green-neon/10 text-sm text-text-secondary flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-neon" />
                    {product}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-green-neon hover:text-green-neon/80 transition-colors cursor-pointer">
                <span>Explore FS Softwares</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full bg-green-neon/10 border border-green-neon/20 text-[10px] text-green-neon font-medium">
              ACTIVE
            </div>
          </div>

          {/* DigiCard Innovation Card */}
          <div
            ref={digiCardRef}
            className="reveal glass-card p-8 lg:p-10 relative overflow-hidden group cursor-default"
            style={{
              transform: `perspective(1000px) rotateX(${digiTilt.y}deg) rotateY(${digiTilt.x}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            onMouseMove={(e) => handleTilt(e, digiCardRef, setDigiTilt)}
            onMouseLeave={() => setDigiTilt({ x: 0, y: 0 })}
          >
            {/* Orange glow */}
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-accent/10 rounded-full blur-[80px] group-hover:bg-orange-accent/15 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange-accent/15 border border-orange-accent/25 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">DigiCard</h3>
                  <p className="text-sm text-orange-accent">Innovation</p>
                </div>
              </div>

              {/* Launch badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-accent/10 border border-orange-accent/20 mb-6 launch-pulse">
                <span className="w-2 h-2 rounded-full bg-orange-accent animate-pulse" />
                <span className="text-xs text-orange-accent font-semibold uppercase tracking-wider">Launching Soon</span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                A next-generation digital business card platform. Replace paper cards with dynamic, interactive digital identities 
                that update in real-time. NFC-enabled, analytics-powered, and fully branded.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {['NFC Technology', 'Real-time Analytics', 'Custom Branding', 'Team Management'].map((feature, i) => (
                  <div key={i} className="px-3 py-2.5 rounded-lg bg-orange-accent/5 border border-orange-accent/10 text-sm text-text-secondary flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-accent" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Preview card mockup */}
              <div className="relative mt-4">
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-orange-accent/10 to-orange-accent/5 border border-orange-accent/15 p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-text-muted mb-1">DigiCard Preview</div>
                    <div className="text-sm font-heading font-semibold text-white">Your Brand Here</div>
                    <div className="text-xs text-text-muted mt-1">tap to connect</div>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-orange-accent/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-orange-accent hover:text-orange-accent/80 transition-colors cursor-pointer mt-6">
                <span>Join the Waitlist</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute top-6 right-6 px-2.5 py-1 rounded-full bg-orange-accent/10 border border-orange-accent/20 text-[10px] text-orange-accent font-medium">
              COMING SOON
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
