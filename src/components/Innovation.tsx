import { motion } from 'framer-motion';
import { Cpu, CreditCard, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { softwareProducts, softwareCategories } from '../data/softwareCatalog';

export default function Innovation() {
  // Get featured products from each category
  const featuredProducts = softwareCategories.slice(0, 4).map(cat => {
    const products = softwareProducts.filter(p => p.category === cat.id);
    return { ...cat, products };
  });

  return (
    <section id="innovation" className="bg-bg py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-muted mb-4">Our Divisions</p>
          <h2 className="font-sans text-4xl md:text-6xl font-medium text-text leading-tight tracking-tight">
            Innovation Labs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* FS Softwares */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-10 md:p-12 text-white"
          >
            <div className="mb-8">
              <Cpu className="w-12 h-12 text-green-400" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              FS Softwares
            </h3>
            <p className="text-sm text-gray-400 mb-6">Systems Division • {softwareProducts.length} Business Solutions</p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our dedicated software division building specialized enterprise tools — from intake management systems to workflow automation platforms. Each product is battle-tested in real enterprise environments.
            </p>
            
            {/* Featured Products Preview */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {featuredProducts.map((cat) => (
                <div key={cat.id} className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-green-400 font-medium mb-1">{cat.name}</div>
                  <div className="text-xs text-gray-400">{cat.products.length} products</div>
                </div>
              ))}
            </div>

            <a 
              href="https://fs-softwares-library.sassy-goat-1694.chatgpt.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
            >
              Explore FS Softwares Platform
              <ArrowUpRight size={16} />
            </a>
            
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-500/10 rounded-full blur-[80px] group-hover:bg-green-500/20 transition-all duration-500" />
          </motion.div>

          {/* DigiCard Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-black p-10 md:p-12 text-white border border-orange-500/20"
          >
            <div className="flex items-center justify-between mb-8">
              <CreditCard className="w-12 h-12 text-orange-500" strokeWidth={1.5} />
              <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/25 text-xs font-semibold uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              DigiCard
            </h3>
            <p className="text-sm text-orange-400/80 mb-6">Innovation</p>
            <p className="text-gray-300 leading-relaxed mb-8">
              A next-generation digital business card platform. Replace paper cards with dynamic, interactive digital identities that update in real-time. NFC-enabled, analytics-powered, and fully branded.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['NFC Technology', 'Real-time Analytics', 'Custom Branding', 'Team Management'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {feature}
                </div>
              ))}
            </div>
            <a href="/digicard" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium">
              Open DigiCard preview
              <ArrowUpRight size={16} />
            </a>
            {/* Decorative glow */}
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition-all duration-500" />
          </motion.div>
        </div>

        {/* Full Software Catalog Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-3xl p-8 md:p-12 border border-white/10 bg-white/[0.03]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Complete Product Catalog
              </h3>
              <p className="text-sm text-gray-600">
                {softwareProducts.length} business management solutions across {softwareCategories.length} categories
              </p>
            </div>
            <a
              href="https://member-tophcomm-fssoftwares.netlify.app/#/intake"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-accent transition-colors"
            >
              Discovery Portal
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softwareCategories.map((category) => {
              const categoryProducts = softwareProducts.filter(p => p.category === category.id);
              return (
                <div key={category.id} className="bg-white/5 rounded-xl p-4 border border-white/8">
                  <h4 className="font-display text-sm font-semibold text-white mb-2">
                    {category.name}
                  </h4>
                  <div className="text-2xl font-bold text-accent mb-1">
                    {categoryProducts.length}
                  </div>
                  <p className="text-xs text-gray-500">products</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
