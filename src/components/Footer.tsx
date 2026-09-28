import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={containerRef} className="relative bg-bg text-text overflow-hidden">
      <motion.div style={{ y }} className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>

          {/* CTA */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 tracking-tight"
            >
              Let's shape
              <br />
              <em className="font-serif italic text-muted">something new</em>
            </motion.h2>
            <motion.a
              href="mailto:hello@tophcomm.systems"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="btn btn-solid"
              style={{ height: 48, padding: '0 24px', fontSize: 16 }}
            >
              Contact us
              <ArrowUpRight size={20} />
            </motion.a>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted">
                © {new Date().getFullYear()} Tophcomm Systems. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted hover:text-text transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted hover:text-text transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted hover:text-text transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted hover:text-text transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
