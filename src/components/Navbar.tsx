import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#integration' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-white group">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
              <g transform="rotate(-30 12 12)">
                <circle cx="7.3" cy="3.2" r="1.45"/>
                <rect x="5.5" y="4.7" width="3.6" height="14.6" rx="1.8"/>
                <rect x="14.9" y="4.7" width="3.6" height="14.6" rx="1.8"/>
                <circle cx="16.7" cy="20.8" r="1.45"/>
              </g>
            </svg>
            <span className="text-[15.5px] font-semibold tracking-tight">
              Tophcomm<span className="font-normal opacity-70">.systems</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-pill">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href="#contact" className="hidden md:inline-flex btn btn-solid">
            Start for Free
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-md border border-border bg-white/5 flex items-center justify-center"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col gap-1">
              <span className={`w-4 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-4 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-4 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(24px)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 pt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-white text-2xl font-medium py-3"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 btn btn-solid"
                style={{ height: 48, fontSize: 16, padding: '0 24px' }}
              >
                Start for Free
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
