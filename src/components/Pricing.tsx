import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for small projects and startups',
    features: [
      'Single system integration',
      'Basic API development',
      'Email support',
      'Monthly progress reports',
      '30-day warranty',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'Ideal for growing businesses',
    features: [
      'Multi-system integration',
      'Custom software development',
      'Cloud infrastructure setup',
      'Priority support (24/7)',
      'Weekly progress reports',
      'Dedicated project manager',
      '90-day warranty',
      'Performance monitoring',
    ],
    cta: 'Contact Sales',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale enterprise needs',
    features: [
      'Full enterprise architecture',
      'Legacy system modernization',
      'Multi-cloud infrastructure',
      '24/7 dedicated support team',
      'Real-time dashboards',
      'SLA-backed response times',
      'Quarterly business reviews',
      'Unlimited warranty',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black mb-6">
            Flexible Plans for Every Scale
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Every project is unique. We offer tailored pricing based on your specific requirements, timeline, and scope.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`rounded-3xl p-8 md:p-10 ${
                plan.highlighted
                  ? 'bg-black text-white scale-105 shadow-2xl'
                  : 'bg-gray-50 text-black'
              }`}
            >
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="font-display text-4xl font-bold">{plan.price}</div>
                <p className={`text-xs mt-2 ${plan.highlighted ? 'text-gray-500' : 'text-gray-500'}`}>
                  Tailored to your project scope
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-accent' : 'text-black'
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-accent-dark'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
