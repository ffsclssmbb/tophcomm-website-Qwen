export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 50%)'
      }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[860px] w-full px-6 pb-24 md:pb-32">
        {/* Badge */}
        <div className="badge appear appear--pop" style={{ ['--d' as any]: '0.22s', marginBottom: 22 }}>
          <svg width="18" height="20" viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.45))' }}>
            <path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z"/>
          </svg>
          <span>Operational Business Infrastructure</span>
        </div>

        {/* H1 */}
        <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-medium tracking-[-0.045em] leading-[1.12] text-white mb-0">
          <span className="headline-line appear appear--mask" style={{ ['--d' as any]: '0.42s' }}>
            Build <em className="headline-em">business systems</em> that
          </span>
          <span className="headline-line appear appear--mask" style={{ ['--d' as any]: '0.62s' }}>
            scale across the nation.
          </span>
        </h1>

        {/* Lede */}
        <p className="appear appear--soft text-[#9a9a9a] text-[15.5px] md:text-[18px] font-normal leading-[1.55] tracking-[-0.015em] mt-5 max-w-[470px]" style={{ ['--d' as any]: '0.82s' }}>
          Deploy 20 enterprise-grade business management solutions across 12 Philippine industries. Born in Mindanao, built for the nation.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <a href="#contact" className="btn btn-solid appear appear--btn" style={{ ['--d' as any]: '0.96s', height: 42, padding: '0 18px' }}>
            Start for Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#integration" className="btn btn-ghost appear appear--side" style={{ ['--d' as any]: '1.10s', height: 42, padding: '0 18px' }}>
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
