import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
const Hero3D = lazy(() => import('./Hero3D'));

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      <Suspense fallback={null}><Hero3D /></Suspense>
      <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 50%), linear-gradient(to bottom, transparent 60%, #000 100%)' }} />
      <div className="absolute inset-0 z-[1] opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="relative z-10 flex flex-col items-center text-center max-w-[860px] w-full px-6 pb-24 md:pb-32">
        <motion.div initial={{ opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="badge mb-[22px]">
          <svg width="18" height="20" viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.45))' }}><path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z"/></svg>
          <span>Operational Business Infrastructure</span>
        </motion.div>
        <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-medium tracking-[-0.045em] leading-[1.12] text-white mb-0">
          <motion.span className="headline-line block" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            Build <em className="headline-em">business systems</em> that
          </motion.span>
          <motion.span className="headline-line block" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
            scale across the nation.
          </motion.span>
        </h1>
        <motion.p className="text-[#9a9a9a] text-[15.5px] md:text-[18px] font-normal leading-[1.55] tracking-[-0.015em] mt-5 max-w-[470px]" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          Deploy 20 enterprise-grade business management solutions across 12 Philippine industries. Born in Mindanao, built for the nation.
        </motion.p>
        <motion.div className="flex flex-wrap items-center justify-center gap-3 mt-7" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.75 }}>
          <a href="#contact" className="btn btn-solid" style={{ height: 42, padding: '0 18px' }}>Start for Free<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <a href="#integration" className="btn btn-ghost" style={{ height: 42, padding: '0 18px' }}>Explore Solutions</a>
        </motion.div>
        <motion.div className="flex flex-wrap justify-center gap-2 mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          {['NCR Hub', 'Cebu Hub', 'Davao HQ'].map((hub) => (
            <span key={hub} className="text-[11px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted">{hub}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
