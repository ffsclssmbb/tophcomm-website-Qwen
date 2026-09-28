import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    question: 'What is FS Softwares and how can I explore your products?',
    answer: 'FS Softwares is our dedicated software division with 20 business management solutions spanning accounting, retail, distribution, manufacturing, construction, telecom, transport, hospitality, healthcare, education, and more. You can explore our full Solution Explorer at our Discovery Portal.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-bg py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-muted mb-4">FAQ</p>
          <h2 className="font-sans text-4xl md:text-6xl font-medium text-text tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-b border-black/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <h3 className="font-display text-lg md:text-xl font-semibold text-black pr-8 group-hover:text-accent-dark transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm md:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Discovery Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 text-black font-medium text-sm hover:bg-black hover:text-white transition-all"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="https://fs-softwares-library.sassy-goat-1694.chatgpt.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-accent transition-all"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Explore FS Softwares
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
