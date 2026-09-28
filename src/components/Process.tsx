import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const phases = [
  {
    title: 'Phase 1: Discovery',
    steps: [
      {
        number: '1',
        title: 'Introduction & Discovery',
        description: 'Initial consultation and needs assessment',
        weDo: ['Understand your business goals', 'Assess current processes', 'Identify key pain points'],
        youGet: ['Discovery document', 'Initial roadmap'],
      },
      {
        number: '2',
        title: 'Portfolio Learning Walkthrough',
        description: 'Explore relevant solutions for your business',
        weDo: ['Product demonstrations', 'Use case exploration', 'Feature walkthrough'],
        youGet: ['Product recommendations', 'Feature alignment map'],
      },
      {
        number: '3',
        title: 'Business Requirement Identification',
        description: 'Document workflows and operational needs',
        weDo: ['Workflow documentation', 'Integration requirements', 'User role definition'],
        youGet: ['Requirements document', 'Process flows'],
      },
    ],
  },
  {
    title: 'Phase 2: Solution Design',
    steps: [
      {
        number: '4',
        title: 'Executive Collaboration',
        description: 'Stakeholder alignment and decision-making',
        weDo: ['Stakeholder meetings', 'Budget alignment', 'Executive sign-off'],
        youGet: ['Stakeholder approval', 'Budget allocation'],
      },
      {
        number: '5',
        title: 'Solution Mapping & Pattern Selection',
        description: 'Choose Pattern A or B architecture for your needs',
        weDo: ['Architecture selection', 'Technology stack review', 'Deployment profile choice'],
        youGet: ['Architecture document', 'Technical roadmap'],
      },
      {
        number: '6',
        title: 'Proposal & Commercial Terms',
        description: 'Scope definition, timeline, and investment breakdown',
        weDo: ['Detailed proposal', 'Timeline planning', 'Commercial terms'],
        youGet: ['Signed proposal', 'Project charter'],
      },
    ],
  },
  {
    title: 'Phase 3: Delivery',
    steps: [
      {
        number: '7',
        title: 'Pre-Transfer Knowledge Transfer',
        description: 'The hinge between delivery and operational ownership',
        weDo: ['Train operational users', 'Build system understanding', 'Prepare for handover'],
        youGet: ['Trained team', 'Knowledge transfer docs'],
        highlight: true,
      },
      {
        number: '8',
        title: 'Build, Deployment & Go-Live',
        description: 'Pattern B build, E2E testing, and phased rollout',
        weDo: ['Development completion', 'Comprehensive testing', 'Regional deployment coordination'],
        youGet: ['Live system', 'Deployment report'],
      },
      {
        number: '9',
        title: 'Post-Go-Live Support',
        description: 'Managed support, continuous improvement, quarterly reviews',
        weDo: ['Ongoing technical support', 'Performance monitoring', 'Continuous optimization'],
        youGet: ['Support tickets resolved', 'Quarterly insights'],
      },
    ],
  },
];

const deploymentHubs = [
  { name: 'NCR (Luzon)', coverage: 'National Capital Region & Northern Philippines' },
  { name: 'Cebu (Visayas)', coverage: 'Visayas & Central Philippines' },
  { name: 'Davao (Mindanao)', coverage: 'Mindanao & Southern Philippines' },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">9-Step Sales-to-Go-Live Journey</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black mb-6">
            The FS Softwares Sales-to-Go-Live Journey
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            From discovery to delivery, we guide you through every step with pre-transfer knowledge transfer as our key differentiator.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="space-y-16 md:space-y-24">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-8 text-center">
                {phase.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {phase.steps.map((step, stepIndex) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: stepIndex * 0.1 }}
                    className={`rounded-2xl p-6 ${
                      step.highlight
                        ? 'bg-accent text-white'
                        : 'bg-gray-50 text-black'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-bold ${
                        step.highlight ? 'bg-white text-accent' : 'bg-black text-white'
                      }`}>
                        {step.number}
                      </div>
                      <h4 className="font-display text-lg font-bold">{step.title}</h4>
                    </div>
                    <p className={`text-sm mb-4 ${step.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                      {step.description}
                    </p>

                    <div className="mb-4">
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                        step.highlight ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        What We Do
                      </p>
                      <ul className="space-y-1">
                        {step.weDo.map((item) => (
                          <li key={item} className="text-sm flex items-start gap-2">
                            <span className="mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                        step.highlight ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        You Get
                      </p>
                      <ul className="space-y-1">
                        {step.youGet.map((item) => (
                          <li key={item} className="text-sm flex items-start gap-2">
                            <span className="mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {step.highlight && (
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-xs font-semibold">⭐ KEY DIFFERENTIATOR</p>
                        <p className="text-xs mt-1 text-white/90">
                          Pre-Transfer Knowledge Transfer is the hinge between software delivery and operational ownership. Your people own the system, not just IT.
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nationwide Deployment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            🌏 Nationwide Deployment Coordinated from 3 Strategic Hubs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {deploymentHubs.map((hub, i) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <h4 className="font-display text-xl font-bold text-black mb-2">{hub.name}</h4>
                <p className="text-sm text-gray-600">{hub.coverage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
            Ready to Start Your FS Softwares Journey?
          </h3>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our team to discuss your business needs and the right solution for you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Start Your Journey
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
