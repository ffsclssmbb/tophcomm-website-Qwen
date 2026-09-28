import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-xs text-accent-light font-medium uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Together</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              Ready to integrate your systems? Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text-muted">Email</p>
                  <p className="text-white font-medium">hello@tophcomm.systems</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text-muted">Website</p>
                  <p className="text-white font-medium">tophcomm.systems</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text-muted">Location</p>
                  <p className="text-white font-medium">Remote-first, Global</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all appearance-none"
                  >
                    <option value="" className="bg-base">Select a service</option>
                    <option value="api" className="bg-base">API Integration</option>
                    <option value="custom" className="bg-base">Custom Software</option>
                    <option value="cloud" className="bg-base">Cloud Infrastructure</option>
                    <option value="data" className="bg-base">Data Pipelines</option>
                    <option value="legacy" className="bg-base">Legacy Modernization</option>
                    <option value="support" className="bg-base">Managed Support</option>
                    <option value="digicard" className="bg-base">DigiCard Innovation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-light transition-all duration-300 glow-blue magnetic-btn flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 5 5L20 7"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
