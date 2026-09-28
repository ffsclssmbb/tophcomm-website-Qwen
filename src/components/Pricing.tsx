import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter Tier',
    subtitle: 'SMEs',
    description: 'Small to mid-size enterprises',
    highlighted: false,
    products: [
      { name: 'FS POS', implementation: '₱35,000', monthly: '₱2,500' },
      { name: 'FS Inventory', implementation: '₱35,000', monthly: '₱2,500' },
      { name: 'FS Reserve', implementation: '₱65,000', monthly: '₱5,500' },
    ],
  },
  {
    name: 'Growth Tier',
    subtitle: 'Multi-branch',
    description: 'Growing businesses with multiple locations',
    highlighted: true,
    products: [
      { name: 'FS POS', implementation: '₱65,000', monthly: '₱5,500' },
      { name: 'FS CRM', implementation: '₱90,000', monthly: '₱7,500' },
      { name: 'FS FleetHaul', implementation: '₱120,000', monthly: '₱10,000' },
    ],
  },
  {
    name: 'Enterprise Tier',
    subtitle: 'Large Organizations',
    description: 'Regional and multi-entity operations',
    highlighted: false,
    products: [
      { name: 'Custom Applications', implementation: '₱650K - ₱1.5M+', monthly: 'Variable' },
      { name: 'Multi-Branch Bundle', implementation: '₱650K+', monthly: '₱55K+' },
      { name: 'Enterprise Platform', implementation: '₱1.2M+', monthly: '₱85K+' },
    ],
  },
];

const bundles = [
  {
    name: 'Starter Business',
    description: 'Retail, café, small chain',
    discount: '10%',
    includes: ['POS', 'Inventory', 'Accounting'],
    implementation: '₱99K',
    monthly: '₱9,500/month',
  },
  {
    name: 'Growth Business',
    description: 'Growing SME / 2-5 branches',
    discount: '15%',
    includes: ['POS', 'Inventory', 'Accounting', 'HR'],
    implementation: '₱155K',
    monthly: '₱14,500/month',
  },
  {
    name: 'Customer Growth',
    description: 'Retail, service, distribution',
    discount: '12%',
    includes: ['CRM', 'POS', 'Accounting'],
    implementation: '₱155K',
    monthly: '₱13,500/month',
  },
  {
    name: 'Operations 360',
    description: 'Fleet/logistics/field ops',
    discount: '15%',
    includes: ['Accounting', 'HR', 'Fleet', 'CRM'],
    implementation: '₱270K',
    monthly: '₱24K/month',
  },
  {
    name: 'Multi-Branch Enterprise',
    description: 'Established regional company',
    discount: '15%',
    includes: ['3-6 modules', '5 branches'],
    implementation: '₱650K+',
    monthly: '₱55K+/month',
  },
  {
    name: 'Enterprise Platform',
    description: 'Large/multi-entity org',
    discount: 'Custom',
    includes: ['6+ modules', 'Integrations', 'Branches'],
    implementation: '₱1.2M+',
    monthly: '₱85K+/month',
  },
];

const supportTiers = [
  {
    name: 'Essential',
    price: '₱8K - ₱12K/month',
    description: 'Single-system SME',
    coverage: ['Business-hours support', 'System monitoring', 'Daily backups', 'Email support'],
    responseTime: 'Next business day',
    recommended: false,
  },
  {
    name: 'Priority',
    price: '₱18K - ₱30K/month',
    description: 'Multi-system/Revenue-critical',
    coverage: ['Same-day response', 'Escalation path', 'Proactive monitoring', 'Phone + Email support'],
    responseTime: 'Same business day',
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: '₱35K - ₱75K+/month',
    description: 'Multi-branch/Mission-critical',
    coverage: ['On-call escalation', 'Reporting & governance', 'Quarterly reviews', '24/7 access'],
    responseTime: 'Immediate/On-call',
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-muted mb-4">Transparent, Flexible, Scalable Pricing</p>
          <h2 className="font-sans text-4xl md:text-6xl font-medium text-text mb-6 tracking-tight">
            Pricing Built For Your Growth Stage
          </h2>
          <p className="text-base md:text-lg text-muted max-w-3xl mx-auto">
            From startups to enterprises, we have flexible pricing models with 50/30/20 payment terms and nationwide implementation support.
          </p>
        </motion.div>

        {/* Product-Based Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Product-Based Pricing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`rounded-3xl p-8 md:p-10 ${
                  tier.highlighted
                    ? 'bg-black text-white scale-105 shadow-2xl'
                    : 'bg-gray-50 text-black'
                }`}
              >
                {tier.highlighted && (
                  <div className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="font-display text-2xl font-bold mb-2">{tier.name}</h4>
                  <p className={`text-sm ${tier.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tier.subtitle}
                  </p>
                  <p className={`text-sm mt-2 ${tier.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.products.map((product) => (
                    <div key={product.name} className="border-b border-white/10 pb-4 last:border-0">
                      <p className="font-semibold mb-2">{product.name}</p>
                      <div className="flex justify-between text-sm">
                        <span className={tier.highlighted ? 'text-gray-400' : 'text-gray-600'}>
                          Implementation:
                        </span>
                        <span className="font-medium">{product.implementation}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className={tier.highlighted ? 'text-gray-400' : 'text-gray-600'}>
                          Monthly:
                        </span>
                        <span className="font-medium">{product.monthly}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`w-full py-4 rounded-full font-semibold text-sm transition-colors text-center block ${
                    tier.highlighted
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-black text-white hover:bg-accent'
                  }`}
                >
                  Get Quote
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Bundles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Popular Bundles
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Save 10-15% when bundling multiple products. Perfect for specific use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((bundle, i) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-display text-xl font-bold text-black mb-1">{bundle.name}</h4>
                    <p className="text-sm text-gray-600">{bundle.description}</p>
                  </div>
                  <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                    {bundle.discount}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {bundle.includes.map((item) => (
                      <span key={item} className="px-2 py-1 bg-white text-xs text-gray-700 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Implementation</span>
                    <span className="font-bold text-black">{bundle.implementation}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly</span>
                    <span className="font-bold text-accent">{bundle.monthly}</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-4 w-full py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-accent transition-colors text-center block"
                >
                  Get Bundle Quote
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Managed IT & Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Managed IT & Support Services
            </h3>
            <p className="text-base text-gray-600">
              Choose the support tier that matches your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-2xl p-6 ${
                  tier.recommended ? 'bg-accent text-white' : 'bg-gray-50 text-black'
                }`}
              >
                {tier.recommended && (
                  <div className="inline-block px-3 py-1 bg-white text-accent text-xs font-semibold rounded-full mb-4">
                    Recommended
                  </div>
                )}
                <h4 className="font-display text-2xl font-bold mb-2">{tier.name}</h4>
                <p className={`text-2xl font-bold mb-2 ${tier.recommended ? 'text-white' : 'text-black'}`}>
                  {tier.price}
                </p>
                <p className={`text-sm mb-6 ${tier.recommended ? 'text-white/80' : 'text-gray-600'}`}>
                  {tier.description}
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Coverage:</p>
                  {tier.coverage.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-current/20">
                  <p className="text-xs opacity-70 mb-1">Response Time:</p>
                  <p className="text-sm font-semibold">{tier.responseTime}</p>
                </div>

                <a
                  href="#contact"
                  className={`mt-6 w-full py-3 rounded-full font-semibold text-sm transition-colors text-center block ${
                    tier.recommended
                      ? 'bg-white text-accent hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-accent'
                  }`}
                >
                  Select Plan
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 md:p-12 text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-8">
            Flexible Payment Terms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50%</div>
              <p className="text-sm text-gray-600">Mobilization</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">30%</div>
              <p className="text-sm text-gray-600">UAT / Ready-for-Go-Live</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">20%</div>
              <p className="text-sm text-gray-600">Production Acceptance</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
            Need a Custom Quote? Let's Discuss Your Needs
          </h3>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Every business is unique. We provide customized pricing based on your specific requirements, scale, and deployment preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-accent transition-colors"
            >
              Request Custom Quote
              <ArrowUpRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
