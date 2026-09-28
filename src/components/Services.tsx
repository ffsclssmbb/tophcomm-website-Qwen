import { motion } from 'framer-motion';
import { ArrowUpRight, Maximize2, Zap, Layout } from 'lucide-react';

const services = [
  {
    icon: ArrowUpRight,
    title: 'API Integration',
    description: 'Connect disparate systems with robust REST & GraphQL APIs. We build middleware that speaks every protocol.',
  },
  {
    icon: Maximize2,
    title: 'Custom Software',
    description: 'Bespoke applications built from the ground up. ERP, CRM, dashboards — tailored to your exact workflows.',
  },
  {
    icon: Zap,
    title: 'Cloud Infrastructure',
    description: 'Design, migrate, and manage cloud environments on AWS, Azure, or GCP with enterprise-grade security.',
  },
  {
    icon: Layout,
    title: 'Data Pipelines',
    description: 'Real-time ETL and analytics pipelines that transform raw data into actionable business intelligence.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black leading-tight">
            End-to-End Systems Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.2 }}
              className="group"
            >
              <div className="mb-6">
                <service.icon className="w-8 h-8 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
