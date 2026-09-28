import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Tophcomm Systems transformed our fragmented tech stack into a seamless, unified platform. Our operational efficiency increased by 40% within the first quarter.",
    author: "David Chen",
    role: "CTO",
    company: "Meridian Logistics",
    initials: "DC",
  },
  {
    quote: "The API integration they built connects all 12 of our legacy systems without a single point of failure. Zero downtime since launch — that's remarkable.",
    author: "Sarah Mitchell",
    role: "VP of Engineering",
    company: "Atlas Financial Group",
    initials: "SM",
  },
  {
    quote: "Their team understood our complex requirements from day one. The cloud migration was flawless, and the ongoing support has been exceptional.",
    author: "James Okonkwo",
    role: "Director of IT",
    company: "Pinnacle Healthcare",
    initials: "JO",
  },
  {
    quote: "FS Softwares' intake management system replaced three separate tools. We saved $200K annually and our team actually enjoys using it.",
    author: "Maria Gonzalez",
    role: "Operations Manager",
    company: "Vertex Manufacturing",
    initials: "MG",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden" aria-label="Client testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-xs text-accent-light font-medium uppercase tracking-wider">Client Stories</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Industry Leaders</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Don't just take our word for it — hear from the enterprises we've helped transform.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="reveal max-w-4xl mx-auto mb-12">
          <div className="glass-card testimonial-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            
            <svg className="w-10 h-10 mx-auto mb-6 text-accent/30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>

            <blockquote className="text-xl md:text-2xl font-heading text-white leading-relaxed mb-8 min-h-[100px] flex items-center justify-center">
              <span className="animate-fade-in" key={active}>
                {testimonials[active].quote}
              </span>
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-sm font-bold text-accent-light">
                {testimonials[active].initials}
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">{testimonials[active].author}</div>
                <div className="text-sm text-text-muted">
                  {testimonials[active].role}, {testimonials[active].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setIsAutoPlaying(false); }}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? 'w-8 h-2 bg-accent'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Mini cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setIsAutoPlaying(false); }}
              className={`reveal glass-card p-5 text-left transition-all duration-300 ${
                i === active ? 'border-accent/30 bg-accent/5' : 'hover:bg-white/[0.03]'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  i === active ? 'bg-accent/20 text-accent-light' : 'bg-white/5 text-text-muted'
                }`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.author}</div>
                  <div className="text-xs text-text-muted">{t.company}</div>
                </div>
              </div>
              <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                {t.quote}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
