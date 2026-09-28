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
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black">
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
      </div>
    </section>
  );
}
