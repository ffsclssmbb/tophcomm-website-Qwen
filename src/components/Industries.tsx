import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const industries = [
  {
    name: 'Telecommunications & Infrastructure',
    description: 'Cell towers, infrastructure projects, nationwide rollouts',
    challenges: ['Multi-site tower asset tracking', 'Maintenance scheduling complexity', 'Real-time deployment visibility'],
    solutions: ['SiteAcquire', 'TowerAsset', 'FieldOps', 'SCADA'],
    deployments: ['NCR: Cell tower rollout', 'CEBU: Infrastructure projects', 'DAVAO: Tower network management'],
  },
  {
    name: 'Construction & Real Estate',
    description: 'Multi-site oversight, 3D modeling, cost estimation',
    challenges: ['Multiple project coordination', 'Material cost tracking', 'Stakeholder communication'],
    solutions: ['ConstructPM', 'BIM Suite', 'QuantitySurvey', 'PropertyPMS'],
    deployments: ['NCR: High-rise developments', 'CEBU: Commercial construction', 'DAVAO: Regional projects'],
  },
  {
    name: 'Healthcare & Medical',
    description: 'Clinics, hospitals, patient records, labs',
    challenges: ['Patient data management', 'Appointment scheduling', 'Lab result tracking'],
    solutions: ['EHR', 'PracticeSuite', 'LIMS', 'InstitutionCare'],
    deployments: ['NCR: Hospital networks', 'CEBU: Clinic chains', 'DAVAO: Healthcare facilities'],
  },
  {
    name: 'Hospitality & Tourism',
    description: 'Hotels, resorts, restaurants, tour operators',
    challenges: ['Booking and reservation management', 'Guest experience coordination', 'Multi-property operations'],
    solutions: ['HotelPMS', 'Reserve', 'TravelOps', 'DineOps'],
    deployments: ['NCR: Hotel chains', 'CEBU: Island resorts', 'DAVAO: Tourism operations'],
  },
  {
    name: 'Retail & Distribution',
    description: 'Multi-branch retail, inventory, POS systems',
    challenges: ['Inventory synchronization', 'Sales tracking across branches', 'Supply chain management'],
    solutions: ['POS', 'Inventory', 'CRM', 'Customer Growth Bundle'],
    deployments: ['NCR: Retail chains', 'CEBU: Island retail', 'DAVAO: Nationwide expansion'],
  },
  {
    name: 'Logistics & Transportation',
    description: 'Fleet management, delivery operations, tracking',
    challenges: ['Vehicle tracking and routing', 'Driver management', 'Real-time delivery updates'],
    solutions: ['FleetHaul', 'FieldOps', 'SCADA'],
    deployments: ['NCR: 200+ vehicle fleet', 'CEBU: Regional logistics', 'DAVAO: Nationwide network'],
  },
  {
    name: 'Professional Services',
    description: 'Law firms, agencies, consultants, IT departments',
    challenges: ['Project and time tracking', 'Client billing', 'Resource allocation'],
    solutions: ['PSA', 'LegalPM', 'ITSMA', 'AgencyPro'],
    deployments: ['NCR: Law firms', 'CEBU: Recruitment agencies', 'DAVAO: Consulting firms'],
  },
  {
    name: 'Education & Training',
    description: 'Schools, universities, training centers',
    challenges: ['Student enrollment management', 'Course scheduling', 'Certification tracking'],
    solutions: ['CampusOps', 'TrainCert'],
    deployments: ['NCR: University systems', 'CEBU: Educational institutions', 'DAVAO: Training centers'],
  },
  {
    name: 'Manufacturing & Industrial',
    description: 'Factories, equipment monitoring, compliance',
    challenges: ['Equipment maintenance scheduling', 'Production tracking', 'Safety compliance'],
    solutions: ['APM', 'EHS', 'SCADA', 'Inventory'],
    deployments: ['NCR: Manufacturing in Laguna', 'CEBU: Industrial facilities', 'DAVAO: Operations nationwide'],
  },
  {
    name: 'Security & Facilities',
    description: 'Security agencies, guard scheduling, facilities management',
    challenges: ['Guard shift scheduling', 'Client account management', 'Incident reporting'],
    solutions: ['SecureOps', 'PropertyPMS', 'EHS'],
    deployments: ['NCR: Security agencies', 'CEBU: Regional operations', 'DAVAO: Nationwide network'],
  },
  {
    name: 'Beauty, Wellness & Fitness',
    description: 'Salons, gyms, wellness centers, spas',
    challenges: ['Appointment and class scheduling', 'Member management', 'Service package tracking'],
    solutions: ['GlowFit', 'Reserve', 'CareOps'],
    deployments: ['NCR: Gym chains', 'CEBU: Wellness centers', 'DAVAO: Beauty & fitness'],
  },
  {
    name: 'Specialized Services',
    description: 'Entertainment, funeral services, event production',
    challenges: ['Event and talent management', 'Booking coordination', 'Client relationship management'],
    solutions: ['ShowBiz', 'MemorialCare', 'DineOps'],
    deployments: ['NCR: Entertainment production', 'CEBU: Event services', 'DAVAO: Specialized services'],
  },
];

const stats = [
  { value: '12+', label: 'Industry Verticals Served' },
  { value: '100+', label: 'Deployments Nationwide' },
  { value: '3', label: 'Regional Hubs' },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">12 Industry Verticals</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black mb-6">
            Solutions Built For Every Philippine Industry
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            From telecommunications to specialized services, we serve 12 key industry verticals with tailored solutions and regional expertise.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-xl font-bold text-black mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{industry.description}</p>

              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Key Challenges</p>
                <ul className="space-y-1">
                  {industry.challenges.map((challenge) => (
                    <li key={challenge} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Recommended Solutions</p>
                <div className="flex flex-wrap gap-1.5">
                  {industry.solutions.map((solution) => (
                    <span key={solution} className="px-2 py-0.5 bg-white text-xs text-gray-700 rounded-full">
                      {solution}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Regional Deployments</p>
                <div className="space-y-1">
                  {industry.deployments.map((deployment) => (
                    <p key={deployment} className="text-xs text-gray-600">
                      📍 {deployment}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
            Find the Right Solution for Your Industry
          </h3>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how FS Softwares can transform your business operations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Schedule Industry Consultation
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
