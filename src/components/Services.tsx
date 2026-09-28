import { motion } from 'framer-motion';
import { ArrowUpRight, Maximize2, Zap, Layout } from 'lucide-react';
import { softwareCategories, softwareProducts } from '../data/softwareCatalog';

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
    <section id="services" className="bg-bg py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-muted mb-4">What We Do</p>
          <h2 className="font-sans text-4xl md:text-6xl font-medium text-text leading-tight tracking-tight">
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
                <service.icon className="w-8 h-8 text-text" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-2xl font-medium text-text mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FS Softwares Product Catalog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 md:mt-32"
        >
          <div className="mb-12">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">FS Softwares Division</p>
            <h3 className="font-sans text-3xl md:text-4xl font-medium text-text mb-4 tracking-tight">
              {softwareProducts.length} Business Management Solutions
            </h3>
            <p className="text-base text-muted max-w-2xl">
              Our dedicated software division delivers 20 business management solutions spanning financial, retail, operations, industry-specific, service, and enterprise categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareCategories.map((category, i) => {
              const categoryProducts = softwareProducts.filter(p => p.category === category.id);
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass p-6"
                >
                  <h4 className="font-sans text-xl font-medium text-text mb-2 tracking-tight">
                    {category.name}
                  </h4>
                  <p className="text-sm text-muted mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {categoryProducts.slice(0, 3).map((product) => (
                      <div key={product.id} className="flex items-center gap-2 text-sm text-stat">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        {product.name}
                      </div>
                    ))}
                    {categoryProducts.length > 3 && (
                      <div className="text-xs text-muted pt-1">
                        +{categoryProducts.length - 3} more products
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Discovery Link */}
          <div className="mt-12 text-center">
            <a
              href="https://fs-softwares-library.sassy-goat-1694.chatgpt.site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
              style={{ height: 44, padding: '0 20px', fontSize: 14 }}
            >
              Explore FS Softwares
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
