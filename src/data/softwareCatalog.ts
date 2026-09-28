// FS Softwares — Complete Software Catalog
// Source: Tophcomm Systems / FS Softwares Division
// Discovery Link: https://member-tophcomm-fssoftwares.netlify.app/#/intake

export interface SoftwareProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string; // Lucide icon name
  status: 'active' | 'beta' | 'coming-soon';
  discoveryUrl?: string;
}

export const softwareCategories = [
  {
    id: 'intake',
    name: 'Intake Systems',
    description: 'Streamline client onboarding with intelligent intake workflows',
  },
  {
    id: 'workflow',
    name: 'Workflow Automation',
    description: 'Automate repetitive processes and boost operational efficiency',
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Transform raw data into actionable business intelligence',
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for enterprise-grade performance',
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise security solutions',
  },
  {
    id: 'integration',
    name: 'Systems Integration',
    description: 'Connect disparate systems into a unified platform',
  },
];

export const softwareProducts: SoftwareProduct[] = [
  // ============ INTAKE SYSTEMS ============
  {
    id: 'client-intake-pro',
    name: 'Client Intake Pro',
    category: 'intake',
    description: 'Enterprise-grade client intake platform with smart forms, e-signatures, and automated routing. Replace paper-based onboarding with a seamless digital experience.',
    features: ['Smart dynamic forms', 'E-signature integration', 'Automated document routing', 'Multi-step workflows', 'Custom branding'],
    icon: 'FileText',
    status: 'active',
    discoveryUrl: 'https://member-tophcomm-fssoftwares.netlify.app/#/intake',
  },
  {
    id: 'patient-intake',
    name: 'Patient Intake Suite',
    category: 'intake',
    description: 'HIPAA-compliant patient intake system for healthcare providers. Digital forms, insurance verification, and EHR integration.',
    features: ['HIPAA compliant', 'Insurance verification', 'EHR integration (Epic, Cerner)', 'Patient portal', 'Multi-language support'],
    icon: 'HeartPulse',
    status: 'active',
  },
  {
    id: 'hr-onboarding',
    name: 'HR Onboarding Hub',
    category: 'intake',
    description: 'Streamline employee onboarding with automated workflows, document collection, and training assignment.',
    features: ['Document management', 'Training assignments', 'IT provisioning triggers', 'Compliance tracking', 'Manager dashboards'],
    icon: 'Users',
    status: 'active',
  },
  {
    id: 'vendor-intake',
    name: 'Vendor Intake Manager',
    category: 'intake',
    description: 'Centralized vendor onboarding and management with compliance checks, document verification, and risk assessment.',
    features: ['Vendor risk scoring', 'Compliance verification', 'Contract management', 'Performance tracking', 'Automated renewals'],
    icon: 'Building2',
    status: 'active',
  },

  // ============ WORKFLOW AUTOMATION ============
  {
    id: 'workflow-engine',
    name: 'Workflow Engine X',
    category: 'workflow',
    description: 'Visual workflow builder with drag-and-drop interface. Automate complex business processes without coding.',
    features: ['Visual workflow builder', 'Conditional logic', 'API webhooks', 'Scheduled triggers', 'Version control'],
    icon: 'GitBranch',
    status: 'active',
  },
  {
    id: 'task-automator',
    name: 'Task Automator',
    category: 'workflow',
    description: 'Intelligent task automation with AI-powered routing, priority scoring, and escalation rules.',
    features: ['AI task routing', 'Priority scoring', 'SLA management', 'Escalation rules', 'Performance analytics'],
    icon: 'Zap',
    status: 'active',
  },
  {
    id: 'approval-flow',
    name: 'Approval Flow',
    category: 'workflow',
    description: 'Multi-level approval workflows with delegation, parallel processing, and audit trails.',
    features: ['Multi-level approvals', 'Delegation rules', 'Parallel processing', 'Audit trails', 'Mobile approvals'],
    icon: 'CheckSquare',
    status: 'active',
  },
  {
    id: 'notification-hub',
    name: 'Notification Hub',
    category: 'workflow',
    description: 'Omnichannel notification system with SMS, email, push, and in-app messaging capabilities.',
    features: ['Multi-channel delivery', 'Template engine', 'Scheduling', 'Delivery tracking', 'A/B testing'],
    icon: 'Bell',
    status: 'active',
  },

  // ============ DATA & ANALYTICS ============
  {
    id: 'report-builder',
    name: 'Report Builder Pro',
    category: 'data',
    description: 'Drag-and-drop report builder with 50+ chart types, scheduled exports, and white-label options.',
    features: ['50+ chart types', 'Scheduled exports', 'White-label reports', 'Data blending', 'Custom formulas'],
    icon: 'BarChart3',
    status: 'active',
  },
  {
    id: 'data-sync',
    name: 'DataSync Engine',
    category: 'data',
    description: 'Real-time data synchronization across systems with conflict resolution and transformation rules.',
    features: ['Real-time sync', 'Conflict resolution', 'Data transformation', 'Bidirectional sync', 'Monitoring dashboard'],
    icon: 'RefreshCw',
    status: 'active',
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    category: 'data',
    description: 'Customizable analytics dashboards with real-time data, KPI tracking, and predictive insights.',
    features: ['Real-time data', 'KPI tracking', 'Predictive insights', 'Custom widgets', 'Role-based access'],
    icon: 'LineChart',
    status: 'active',
  },
  {
    id: 'etl-pipeline',
    name: 'ETL Pipeline Manager',
    category: 'data',
    description: 'Visual ETL pipeline builder for data extraction, transformation, and loading across sources.',
    features: ['Visual pipeline builder', '100+ connectors', 'Data quality checks', 'Scheduling', 'Error handling'],
    icon: 'Database',
    status: 'beta',
  },

  // ============ CLOUD INFRASTRUCTURE ============
  {
    id: 'cloud-orchestrator',
    name: 'Cloud Orchestrator',
    category: 'cloud',
    description: 'Multi-cloud management platform for AWS, Azure, and GCP with cost optimization and compliance.',
    features: ['Multi-cloud support', 'Cost optimization', 'Compliance monitoring', 'Auto-scaling', 'Disaster recovery'],
    icon: 'Cloud',
    status: 'active',
  },
  {
    id: 'container-manager',
    name: 'Container Manager',
    category: 'cloud',
    description: 'Kubernetes management platform with simplified deployments, monitoring, and auto-scaling.',
    features: ['K8s management', 'One-click deploys', 'Auto-scaling', 'Service mesh', 'GitOps integration'],
    icon: 'Container',
    status: 'active',
  },
  {
    id: 'backup-vault',
    name: 'Backup Vault',
    category: 'cloud',
    description: 'Enterprise backup solution with immutable storage, ransomware protection, and instant recovery.',
    features: ['Immutable storage', 'Ransomware protection', 'Instant recovery', 'Cross-region replication', 'Compliance retention'],
    icon: 'HardDrive',
    status: 'active',
  },
  {
    id: 'monitoring-suite',
    name: 'Monitoring Suite',
    category: 'cloud',
    description: 'Full-stack monitoring with APM, infrastructure metrics, log aggregation, and alerting.',
    features: ['APM monitoring', 'Infrastructure metrics', 'Log aggregation', 'Custom alerting', 'Distributed tracing'],
    icon: 'Activity',
    status: 'active',
  },

  // ============ CYBERSECURITY ============
  {
    id: 'threat-shield',
    name: 'Threat Shield',
    category: 'security',
    description: 'AI-powered threat detection and response platform with real-time monitoring and automated remediation.',
    features: ['AI threat detection', 'Real-time monitoring', 'Automated response', 'Vulnerability scanning', 'Compliance reporting'],
    icon: 'Shield',
    status: 'active',
  },
  {
    id: 'identity-manager',
    name: 'Identity Manager',
    category: 'security',
    description: 'Centralized identity and access management with SSO, MFA, and role-based access control.',
    features: ['Single sign-on (SSO)', 'Multi-factor auth', 'Role-based access', 'Audit logging', 'Directory sync'],
    icon: 'Key',
    status: 'active',
  },
  {
    id: 'compliance-tracker',
    name: 'Compliance Tracker',
    category: 'security',
    description: 'Automated compliance monitoring for SOC 2, HIPAA, GDPR, and PCI-DSS frameworks.',
    features: ['Multi-framework support', 'Automated evidence', 'Gap analysis', 'Risk scoring', 'Audit preparation'],
    icon: 'FileCheck',
    status: 'active',
  },
  {
    id: 'qa-automation',
    name: 'QA Automation Suite',
    category: 'security',
    description: 'End-to-end test automation with visual testing, API testing, and performance benchmarking.',
    features: ['Visual regression', 'API testing', 'Performance testing', 'Cross-browser', 'CI/CD integration'],
    icon: 'TestTube',
    status: 'active',
  },

  // ============ SYSTEMS INTEGRATION ============
  {
    id: 'api-gateway',
    name: 'API Gateway Pro',
    category: 'integration',
    description: 'Enterprise API management with rate limiting, authentication, analytics, and developer portal.',
    features: ['Rate limiting', 'OAuth 2.0 / API keys', 'Usage analytics', 'Developer portal', 'Versioning'],
    icon: 'Router',
    status: 'active',
  },
  {
    id: 'middleware-hub',
    name: 'Middleware Hub',
    category: 'integration',
    description: 'Central middleware platform connecting legacy systems with modern APIs and microservices.',
    features: ['Protocol translation', 'Message queuing', 'Legacy adapters', 'Data mapping', 'Error handling'],
    icon: 'Network',
    status: 'active',
  },
  {
    id: 'webhook-manager',
    name: 'Webhook Manager',
    category: 'integration',
    description: 'Reliable webhook delivery with retry logic, payload transformation, and delivery guarantees.',
    features: ['Retry logic', 'Payload transformation', 'Delivery guarantees', 'Signing verification', 'Dashboard'],
    icon: 'Webhook',
    status: 'active',
  },
  {
    id: 'connector-library',
    name: 'Connector Library',
    category: 'integration',
    description: 'Pre-built connectors for 200+ SaaS applications including Salesforce, SAP, Oracle, and more.',
    features: ['200+ connectors', 'Salesforce / SAP / Oracle', 'Custom connector SDK', 'Data mapping', 'Sync scheduling'],
    icon: 'Plug',
    status: 'active',
  },
];

export const getProductsByCategory = (categoryId: string) =>
  softwareProducts.filter((p) => p.category === categoryId);

export const getProductCount = () => softwareProducts.length;
