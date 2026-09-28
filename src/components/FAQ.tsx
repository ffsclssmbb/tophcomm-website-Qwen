import { useState } from 'react';

const faqs = [
  {
    question: 'How long does a typical integration project take?',
    answer: 'Most projects range from 8-16 weeks depending on complexity. Simple API integrations can be completed in 4-6 weeks, while full enterprise system overhauls may take 4-6 months. We provide a detailed timeline during our Discovery phase.',
  },
  {
    question: 'Do you work with existing legacy systems?',
    answer: 'Absolutely. Legacy modernization is one of our core specialties. We can wrap existing systems with modern APIs, gradually migrate functionality, or build integration layers that allow old and new systems to coexist seamlessly.',
  },
  {
    question: 'What cloud platforms do you support?',
    answer: 'We are certified partners with AWS, Azure, and Google Cloud Platform. We also work with hybrid and multi-cloud architectures, and can help you choose the right platform (or combination) for your specific needs.',
  },
  {
    question: 'How do you handle data security and compliance?',
    answer: 'Security is built into every layer of our solutions. We follow SOC 2, GDPR, and HIPAA compliance frameworks as needed. All integrations include encryption at rest and in transit, role-based access control, and comprehensive audit logging.',
  },
  {
    question: 'What does your managed support include?',
    answer: 'Our managed support includes 24/7 monitoring, incident response with defined SLAs (as fast as 15-minute response for critical issues), proactive maintenance, performance optimization, quarterly business reviews, and a dedicated support engineer.',
  },
  {
    question: 'Can you work with our existing development team?',
    answer: 'Yes, we frequently embed with client teams. We can augment your existing developers, provide architecture leadership, or operate as a fully managed extension of your engineering department. We adapt to your workflows, tools, and communication style.',
  },
  {
    question: 'What is DigiCard and when will it launch?',
    answer: 'DigiCard is our upcoming digital business card platform featuring NFC technology, real-time analytics, custom branding, and team management. It is currently in final development and will launch soon. Join our waitlist to be among the first users.',
  },
  {
    question: 'How is pricing structured?',
    answer: 'We offer flexible pricing models: fixed-fee for well-defined projects, time-and-materials for evolving scopes, and monthly retainers for ongoing support. Every engagement starts with a free consultation where we provide a detailed estimate.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 overflow-hidden" aria-label="Frequently asked questions">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-xs text-accent-light font-medium uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Everything you need to know about working with Tophcomm Systems.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal glass-card overflow-hidden"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-heading font-semibold text-white pr-4 text-sm md:text-base">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === i ? 'bg-accent/20 rotate-180' : 'bg-white/5'
                }`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={openIndex === i ? '#60a5fa' : '#71717a'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`faq-answer ${openIndex === i ? 'open' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <div className="px-6 pb-6 text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <div className="reveal mt-12 text-center">
          <p className="text-text-muted mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
