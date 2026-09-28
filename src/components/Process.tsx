import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    subtitle: 'Week 1-2',
    description: 'We map your current systems, identify integration gaps, and define the target architecture. Every stakeholder gets a voice.',
    deliverables: ['Systems audit report', 'Integration roadmap', 'Technical architecture', 'Risk assessment'],
  },
  {
    num: '02',
    title: 'Design & Prototype',
    subtitle: 'Week 3-4',
    description: 'Interactive prototypes and API specifications. You see and test the solution before we build it — no surprises.',
    deliverables: ['UI/UX prototypes', 'API specifications', 'Data flow diagrams', 'Security design'],
  },
  {
    num: '03',
    title: 'Build & Integrate',
    subtitle: 'Week 5-10',
    description: 'Agile sprints with weekly demos. We build in stages, integrating each system incrementally with zero downtime.',
    deliverables: ['Working integrations', 'Automated tests', 'CI/CD pipeline', 'Documentation'],
  },
  {
    num: '04',
    title: 'Deploy & Support',
    subtitle: 'Ongoing',
    description: 'Production deployment with monitoring, SLA-backed support, and continuous optimization as your business evolves.',
    deliverables: ['Production deploy', '24/7 monitoring', 'Performance tuning', 'Quarterly reviews'],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-32 overflow-hidden" aria-label="Our process">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-xs text-accent-light font-medium uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            From Concept to
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Production</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            A proven four-phase methodology that delivers predictable results, on time and on budget.
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps list */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left glass-card p-6 transition-all duration-300 group ${
                  activeStep === i ? 'border-accent/30 bg-accent/5' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 transition-all duration-300 ${
                    activeStep === i ? 'bg-accent text-white glow-blue' : 'bg-white/5 text-text-muted group-hover:text-white'
                  }`}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-heading text-lg font-semibold transition-colors ${
                        activeStep === i ? 'text-white' : 'text-text-secondary group-hover:text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <span className="text-xs text-text-muted">{step.subtitle}</span>
                    </div>
                    <p className="text-sm text-text-muted">{step.description}</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-4 ml-16">
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-500"
                      style={{ width: activeStep === i ? '100%' : activeStep > i ? '100%' : '0%' }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="glass-card p-8 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center font-heading font-bold text-xl text-accent-light">
                {steps[activeStep].num}
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">{steps[activeStep].title}</h3>
                <p className="text-sm text-text-muted">{steps[activeStep].subtitle}</p>
              </div>
            </div>

            <p className="text-text-secondary leading-relaxed mb-8">
              {steps[activeStep].description}
            </p>

            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-text-muted mb-4">Key Deliverables</h4>
              <div className="space-y-3">
                {steps[activeStep].deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-green-neon/10 border border-green-neon/20 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 5 5L20 7"/>
                      </svg>
                    </div>
                    <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
