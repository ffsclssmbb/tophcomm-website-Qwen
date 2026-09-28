import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tophcomm-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('tophcomm-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('tophcomm-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="cookie-banner max-w-4xl mx-auto glass-card p-5 md:p-6 pointer-events-auto border-white/10 bg-base-light/95 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                <path d="M8.5 8.5v.01"/>
                <path d="M16 15.5v.01"/>
                <path d="M12 12v.01"/>
                <path d="M11 17v.01"/>
                <path d="M7 14v.01"/>
              </svg>
              <h3 className="font-heading font-semibold text-white text-sm">Cookie Preferences</h3>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              We use essential cookies to ensure the site works properly, and optional analytics cookies to help us improve your experience. You can accept all or manage your preferences.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-xs font-medium text-text-muted hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-all"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="px-5 py-2 text-xs font-semibold text-white bg-accent rounded-lg hover:bg-accent-light transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
