import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

// 📸 Replace these image URLs with your own:
// Place files in public/images/ and use paths like '/images/about-1.jpg'
const images = {
  about1: '/images/about-1.jpg',
  about1Fallback: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  about2: '/images/about-2.jpg',
  about2Fallback: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  about3: '/images/about-3.jpg',
  about3Fallback: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
};

const hubs = [
  {
    name: 'NCR Hub',
    region: 'Luzon',
    location: 'Metro Manila / Quezon City',
    coverage: 'Luzon, Northern Philippines, Metro Manila, Cavite, Laguna',
    icon: '🏢',
  },
  {
    name: 'Cebu Hub',
    region: 'Visayas',
    location: 'Cebu City',
    coverage: 'Visayas, Central Philippines, Cebu, Bohol, Negros',
    icon: '🏝️',
  },
  {
    name: 'Davao Headquarters',
    region: 'Mindanao',
    location: 'Davao City',
    coverage: 'Mindanao, Southern Philippines, Davao, GenSan, Zamboanga',
    icon: '🌴',
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="about" ref={containerRef} className="bg-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          {/* Left: Sticky Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Born in Mindanao | Built for the Philippines</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              About FS Softwares & TophComm Systems
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              We're a Philippine-based software company building enterprise-grade business management systems with nationwide reach and local presence.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              TophComm Systems is the development powerhouse behind FS Softwares. Founded in Mindanao and now serving the entire Philippines, we're on a mission to democratize enterprise-grade business systems for Philippine SMEs and enterprises.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We started with a simple observation: 73% of Philippine SMEs still run critical operations from spreadsheets. No real-time visibility. No data integration. No operational control across multiple locations. So we built FS Softwares—not just software installations, but a pathway to operational ownership.
            </p>
          </motion.div>

          {/* Right: Masonry Grid with Parallax */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div style={{ y: y1 }} className="col-span-1">
              <img
                src={images.about1}
                alt="Team collaboration"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = images.about1Fallback;
                }}
              />
            </motion.div>
            <div className="col-span-1 space-y-4 md:space-y-6">
              <motion.div style={{ y: y2 }}>
                <img
                  src={images.about2}
                  alt="Office workspace"
                  className="w-full h-[250px] md:h-[300px] object-cover rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = images.about2Fallback;
                  }}
                />
              </motion.div>
              <motion.div style={{ y: y3 }}>
                <img
                  src={images.about3}
                  alt="Team meeting"
                  className="w-full h-[250px] md:h-[300px] object-cover rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = images.about3Fallback;
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-display text-xl font-bold text-black mb-3">Our Mission</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Democratize enterprise-grade business systems for Philippine SMEs and enterprises
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="font-display text-xl font-bold text-black mb-3">Our Vision</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every Philippine business, from Batanes to Jolo, running on systems that work
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-display text-xl font-bold text-black mb-3">Our Approach</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Find the bottleneck. Fix the workflow. See the numbers. Build ownership.
            </p>
          </div>
        </motion.div>

        {/* Three Strategic Hubs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            Three Strategic Hubs, One Nationwide Commitment
          </h3>
          <p className="text-base text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We believe in local presence with global standards. Our three-hub strategy ensures nationwide coverage with regional expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hubs.map((hub, i) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{hub.icon}</div>
                <h4 className="font-display text-xl font-bold text-black mb-1">{hub.name}</h4>
                <p className="text-sm text-accent font-medium mb-3">{hub.region}</p>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{hub.location}</p>
                </div>
                <div className="pt-3 border-t border-gray-100 mt-3">
                  <p className="text-xs text-gray-500 mb-1">Coverage:</p>
                  <p className="text-xs text-gray-600">{hub.coverage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Leadership
          </h3>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center text-4xl flex-shrink-0">
                👨‍💼
              </div>
              <div className="flex-1">
                <h4 className="font-display text-2xl font-bold text-black mb-1">Fritz Suarez</h4>
                <p className="text-sm text-accent font-medium mb-4">Program Creator & Owner | Founder</p>
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-gray-600">✓ Certified Property Manager (CPM®)</p>
                  <p className="text-xs text-gray-600">✓ Certified Logistics & Supply Chain Professional (CLMP®, CLSSMBB®, CLSCM®)</p>
                  <p className="text-xs text-gray-600">✓ Certified Information Systems Security Professional (CISSP®)</p>
                  <p className="text-xs text-gray-600">✓ Project Management Professional (PMP®)</p>
                  <p className="text-xs text-gray-600">✓ Lean Six Sigma Master Black Belt</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700"><strong>Based in:</strong> Davao City, Mindanao</p>
                  <p className="text-sm text-gray-700"><strong>Overseeing:</strong> Nationwide operations across 3 hubs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '👥', title: 'Operational Ownership', desc: 'Your people own the system, not just IT departments' },
              { icon: '🔍', title: 'Transparency', desc: 'No black boxes. Clear pricing, documented processes, honest communication.' },
              { icon: '🇵🇭', title: 'Philippine Pride', desc: 'Built here, for here. From Mindanao to the nation with local expertise.' },
              { icon: '📈', title: 'Sustainable Growth', desc: 'We price complexity, not just software. ROI-focused solutions.' },
              { icon: '🤝', title: 'Local Presence', desc: 'Three hubs, one commitment: being where you are when you need us.' },
              { icon: '⚙️', title: 'Technical Excellence', desc: 'Modern architecture, E2E tested, production-ready systems.' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h4 className="font-display text-lg font-bold text-black mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
