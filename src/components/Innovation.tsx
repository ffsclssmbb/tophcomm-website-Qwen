import { motion } from 'framer-motion';
import { Cpu, CreditCard, Zap, Shield } from 'lucide-react';

export default function Innovation() {
  return (
    <section id="innovation" className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Our Divisions</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black leading-tight">
            Innovation Labs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FS Softwares */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-10 md:p-12 text-white"
          >
            {/* Replace with your FS Softwares logo:
                <img src="/images/fs-softwares-logo.png" alt="FS Softwares" className="h-16 w-auto mb-6" />
            */}
            <div className="mb-8">
              <Cpu className="w-12 h-12 text-green-400" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              FS Softwares
            </h3>
            <p className="text-sm text-gray-400 mb-6">Systems Division</p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our dedicated software division building specialized enterprise tools — from intake management systems to workflow automation platforms. Each product is battle-tested in real enterprise environments.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Intake Systems', 'Workflow Engine', 'Report Builder', 'Data Sync'].map((product) => (
                <div key={product} className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {product}
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
              Explore FS Softwares →
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
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-white p-10 md:p-12 text-black border border-orange-100"
          >
            {/* Replace with your DigiCard image:
                <img src="/images/digicard-hero.png" alt="DigiCard" className="w-full h-48 object-cover rounded-2xl mb-6" />
            */}
            <div className="flex items-center justify-between mb-8">
              <CreditCard className="w-12 h-12 text-orange-500" strokeWidth={1.5} />
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              DigiCard
            </h3>
            <p className="text-sm text-gray-500 mb-6">Innovation</p>
            <p className="text-gray-700 leading-relaxed mb-8">
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
            <a href="#contact" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors text-sm font-medium">
              Join the Waitlist →
            </a>
            {/* Decorative glow */}
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition-all duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
