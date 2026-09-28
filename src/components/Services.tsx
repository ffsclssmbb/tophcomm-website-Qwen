import { useRef } from 'react';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
      </svg>
    ),
    title: 'API Integration',
    description: 'Connect disparate systems with robust REST & GraphQL APIs. We build middleware that speaks every protocol.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'OAuth'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Custom Software',
    description: 'Bespoke applications built from the ground up. ERP, CRM, dashboards — tailored to your exact workflows.',
    tags: ['React', 'Node.js', 'Python', 'Cloud'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    title: 'Cloud Infrastructure',
    description: 'Design, migrate, and manage cloud environments on AWS, Azure, or GCP with enterprise-grade security.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
        <path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    ),
    title: 'Data Pipelines',
    description: 'Real-time ETL and analytics pipelines that transform raw data into actionable business intelligence.',
    tags: ['ETL', 'Analytics', 'BI', 'Real-time'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Legacy Modernization',
    description: 'Transform outdated systems into modern architectures without losing critical business logic or data.',
    tags: ['Migration', 'Refactor', 'Replatform'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Managed Support',
    description: '24/7 monitoring, maintenance, and incident response. We keep your systems running at peak performance.',
    tags: ['24/7', 'SLA', 'Monitoring', 'DevOps'],
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleGlare = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--glare-x', `${x}%`);
    card.style.setProperty('--glare-y', `${y}%`);
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-xs text-accent-light font-medium uppercase tracking-wider">What We Do</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            End-to-End
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Systems </span>
            Solutions
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            From initial architecture to ongoing support, we deliver the full spectrum of software and systems integration services.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal glass-card card-glare p-8 group cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseMove={handleGlare}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-accent-light transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 text-text-muted border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Platform marquee */}
        <div className="mt-20 reveal">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-text-muted mb-8">Technologies We Work With</p>
          <div className="relative overflow-hidden">
            <div className="flex marquee-track" style={{ width: 'max-content' }}>
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-12 px-6">
                  {['React', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'Terraform', 'Jenkins', 'Kafka', 'Elasticsearch'].map((tech, i) => (
                    <span key={`${setIdx}-${i}`} className="text-sm font-medium text-text-muted/60 whitespace-nowrap hover:text-accent-light transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
