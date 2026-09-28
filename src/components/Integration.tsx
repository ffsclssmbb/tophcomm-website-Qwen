import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Database, Cloud, Shield, Network, FileText } from 'lucide-react';
import { softwareCategories, softwareProducts } from '../data/softwareCatalog';

const integrationFlow = [
  { icon: FileText, label: 'Financial', color: 'bg-blue-500', products: 1 },
  { icon: GitBranch, label: 'Retail', color: 'bg-purple-500', products: 2 },
  { icon: Database, label: 'Operations', color: 'bg-green-500', products: 3 },
  { icon: Cloud, label: 'Industry', color: 'bg-cyan-500', products: 5 },
  { icon: Shield, label: 'Service', color: 'bg-red-500', products: 4 },
  { icon: Network, label: 'Enterprise', color: 'bg-orange-500', products: 5 },
];

export default function Integration() {
  return (
    <section id="integration" className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">How It Connects</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
            One Platform, Every System
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Our FS Softwares suite delivers 20 business management solutions across six core categories — from accounting and retail to manufacturing, healthcare, and education — creating a unified ecosystem for your enterprise.
          </p>
        </motion.div>

        {/* Integration Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrationFlow.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors h-full">
                  <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-black mb-1">{item.label}</h4>
                  <p className="text-xs text-gray-500">{item.products} products</p>
                </div>
                {/* Connector arrow */}
                {i < integrationFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Software Catalog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Complete Software Catalog
            </h3>
            <p className="text-base text-gray-600">
              {softwareProducts.length} business management solutions across {softwareCategories.length} categories
            </p>
          </div>

          <div className="space-y-8">
            {softwareCategories.map((category, catIndex) => {
              const categoryProducts = softwareProducts.filter(p => p.category === category.id);
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                >
                  <div className="mb-4">
                    <h4 className="font-display text-2xl font-bold text-black mb-1">
                      {category.name}
                    </h4>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-display text-lg font-semibold text-black">
                            {product.name}
                          </h5>
                          {product.status === 'beta' && (
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                              Beta
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {product.modules.map((mod) => (
                            <span
                              key={mod}
                              className="px-2 py-0.5 bg-white text-xs text-gray-600 rounded-full"
                            >
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-accent transition-colors"
            >
              Discover FS Softwares Platform
              <ArrowUpRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
