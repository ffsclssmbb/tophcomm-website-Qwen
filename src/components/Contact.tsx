import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" aria-label="Contact us">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px]" aria-hidden="true" />

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
              Ready to integrate your systems? Tell us about your project and we'll respond within 24 hours with a tailored proposal.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <a href="mailto:hello@tophcomm.systems" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text-muted">Email</p>
                  <p className="text-white font-medium group-hover:text-accent-light transition-colors">hello@tophcomm.systems</p>
                </div>
              </a>

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

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-neon/10 border border-green-neon/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text-muted">Response Time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social links */}
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
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-xs font-medium">{social.letter}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            {submitted ? (
              <div className="glass-card p-8 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-green-neon/10 border border-green-neon/20 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7"/>
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-text-secondary">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-text-muted mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all ${
                        errors.name ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-text-muted mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all ${
                        errors.email ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-company" className="block text-xs uppercase tracking-wider text-text-muted mb-2">Company</label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-xs uppercase tracking-wider text-text-muted mb-2">Service</label>
                    <select
                      id="contact-service"
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
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-text-muted mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-light transition-all duration-300 glow-blue magnetic-btn flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-text-muted text-center">
                  By submitting, you agree to our privacy policy. We'll never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
