import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'integration', label: 'Integration' },
  { id: 'process', label: 'Process' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-base/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center glow-blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-tight text-white group-hover:text-accent-light transition-colors">
                  TOPHCOMM
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted -mt-1">
                  Systems
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-accent bg-accent/10'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-full bg-accent text-white hover:bg-accent-light transition-all duration-300 magnetic-btn glow-blue"
              >
                Start a Project
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 bg-base/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-2xl font-heading font-semibold transition-all duration-300 ${
                activeSection === link.id ? 'text-accent' : 'text-text-secondary hover:text-white'
              }`}
              style={{ transitionDelay: `${i * 50}ms`, transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)', opacity: mobileOpen ? 1 : 0 }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-accent text-white glow-blue"
            style={{ transitionDelay: '300ms', transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)', opacity: mobileOpen ? 1 : 0 }}
          >
            Start a Project
          </button>
        </div>
      </div>
    </>
  );
}
