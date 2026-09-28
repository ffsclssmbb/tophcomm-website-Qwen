import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const footerLinks = {
    Services: ['API Integration', 'Custom Software', 'Cloud Infrastructure', 'Data Pipelines', 'Legacy Modernization', 'Managed Support'],
    Divisions: ['FS Softwares', 'DigiCard Innovation'],
    Company: ['About Us', 'Our Process', 'Careers', 'Blog', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="relative border-t border-white/5 bg-base-light" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter section */}
        <div className="py-16 border-b border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-text-secondary text-sm mb-6">
              Get insights on systems integration, cloud architecture, and product updates delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="animate-fade-in flex items-center justify-center gap-2 text-green-neon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7"/>
                </svg>
                <span className="font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email for newsletter"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-xs text-text-muted mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="#hero" className="flex items-center gap-3 mb-4 group" aria-label="Tophcomm Systems home">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white">TOPHCOMM</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-text-muted -mt-0.5">Systems</span>
              </div>
            </a>
            <p className="text-sm text-text-muted leading-relaxed mb-5 max-w-xs">
              Enterprise software and systems integration. Connecting your business into one unified platform.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', letter: 'Li' },
                { label: 'Twitter', letter: 'Tw' },
                { label: 'GitHub', letter: 'Gh' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all text-xs font-medium"
                >
                  {social.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-muted hover:text-accent-light transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {currentYear} Tophcomm Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-xs text-text-muted">
              <span className="w-2 h-2 rounded-full bg-green-neon animate-pulse" aria-hidden="true" />
              All systems operational
            </span>
            <a href="#" className="text-xs text-text-muted hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-text-muted hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
