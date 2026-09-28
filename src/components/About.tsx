import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Sticky Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              We believe in the power of design & technology
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              Tophcomm Systems is a team of engineers, architects, and strategists dedicated to solving complex integration challenges. We don't just build software — we build the connective tissue that makes your entire enterprise work as one.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              From Fortune 500 companies to innovative startups, our clients trust us to deliver mission-critical systems that scale, perform, and evolve with their business.
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
      </div>
    </section>
  );
}
