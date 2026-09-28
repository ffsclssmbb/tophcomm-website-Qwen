export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['API Integration', 'Custom Software', 'Cloud Infrastructure', 'Data Pipelines', 'Legacy Modernization', 'Managed Support'],
    Divisions: ['FS Softwares', 'DigiCard Innovation'],
    Company: ['About Us', 'Our Process', 'Careers', 'Blog', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="relative border-t border-white/5 bg-base-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center">
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
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-xs">
              Enterprise software and systems integration. Connecting your business into one unified platform.
            </p>
            <div className="flex gap-3">
              {['Li', 'Tw', 'Gh'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all text-xs font-medium"
                >
                  {social}
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
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-xs text-text-muted">
              <span className="w-2 h-2 rounded-full bg-green-neon animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
