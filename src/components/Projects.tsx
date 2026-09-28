import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 📸 Replace these image URLs with your own project images:
// Place files in public/images/ and use paths like '/images/project-1.jpg'
const projects = [
  {
    id: 1,
    number: '01',
    tags: '2026 • Tech • Web Platform',
    title: 'Enterprise API Gateway',
    description: 'A unified API management platform connecting 12+ legacy systems with real-time monitoring and automated failover.',
    image: '/images/project-1.jpg', // Replace with: '/images/project-1.jpg'
    fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#f8f9fa',
  },
  {
    id: 2,
    number: '02',
    tags: '2025 • Finance • Cloud Migration',
    title: 'Cloud Infrastructure Overhaul',
    description: 'Complete migration from on-premise to multi-cloud architecture with zero downtime and 40% cost reduction.',
    image: '/images/project-2.jpg', // Replace with: '/images/project-2.jpg'
    fallbackImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    color: '#f1f5f9',
  },
  {
    id: 3,
    number: '03',
    tags: '2025 • Healthcare • Data Platform',
    title: 'Real-Time Analytics Dashboard',
    description: 'HIPAA-compliant data pipeline processing millions of events daily for actionable business intelligence.',
    image: '/images/project-3.jpg', // Replace with: '/images/project-3.jpg'
    fallbackImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    color: '#f4f4f5',
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="bg-bg py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-wider text-muted mb-4">Latest Projects</p>
            <h2 className="font-sans text-4xl md:text-6xl font-medium text-text tracking-tight">
              Case Studies
            </h2>
          </motion.div>
          <div className="flex gap-2">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="relative h-[600px] max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => {
              const offset = (index - currentIndex + projects.length) % projects.length;
              const isActive = offset === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 1 : 1 - offset * 0.05,
                    y: isActive ? 0 : -offset * 30,
                    zIndex: isActive ? 30 : 30 - offset,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -100) nextProject();
                    if (info.offset.x > 100) prevProject();
                  }}
                  onClick={() => !isActive && setCurrentIndex(index)}
                  className="absolute inset-0 cursor-pointer"
                  style={{ pointerEvents: isActive ? 'auto' : 'auto' }}
                >
                  <div
                    className="h-full rounded-3xl overflow-hidden shadow-2xl"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="h-full grid grid-cols-1 md:grid-cols-2">
                      {/* Left Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-display font-bold text-lg">
                              {project.number}
                            </div>
                            <p className="text-xs uppercase tracking-wider text-accent-dark font-medium">
                              {project.tags}
                            </p>
                          </div>
                          <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed mb-8">
                            {project.description}
                          </p>
                        </div>
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-accent-dark transition-colors w-fit">
                          View case study
                          <ChevronRight size={16} />
                        </button>
                      </div>

                      {/* Right Image */}
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = project.fallbackImage;
                          }}
                        />
                        {/* Glassmorphism shapes */}
                        <div className="absolute top-8 left-8 w-20 h-20 rounded-lg backdrop-blur-sm bg-white/90 mix-blend-overlay" />
                        <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full backdrop-blur-sm bg-white/90 mix-blend-overlay" />
                        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full backdrop-blur-sm bg-white/90 mix-blend-overlay" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
