// FS Softwares — Complete Software Catalog
// Source: https://fs-softwares-library.sassy-goat-1694.chatgpt.site
// Discovery Link: https://fs-softwares-library.sassy-goat-1694.chatgpt.site

export interface SoftwareProduct {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  modules: string[];
  icon: string; // Lucide icon name
  status: 'active' | 'beta' | 'coming-soon';
}

export const softwareCategories = [
  {
    id: 'financial',
    name: 'Financial & Accounting',
    description: 'Core financial systems and accounting management',
  },
  {
    id: 'retail',
    name: 'Retail & Commerce',
    description: 'Point of sale, e-commerce, and omnichannel solutions',
  },
  {
    id: 'operations',
    name: 'Operations & Logistics',
    description: 'Distribution, inventory, transport, and fleet management',
  },
  {
    id: 'industry',
    name: 'Industry-Specific',
    description: 'Manufacturing, construction, telecom, and hospitality',
  },
  {
    id: 'service',
    name: 'Service & CRM',
    description: 'Customer relationship, field service, and procurement',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Management',
    description: 'HR, assets, property, education, and healthcare',
  },
];

export const softwareProducts: SoftwareProduct[] = [
  // ============ FINANCIAL & ACCOUNTING ============
  {
    id: 'accounting',
    number: '01',
    name: 'Accounting & Financial Management',
    category: 'financial',
    description: 'Financial backbone: all operational systems ultimately reconcile to the FS accounting core.',
    modules: ['General Ledger', 'AR / AP', 'Banking & Reconciliation'],
    icon: 'Calculator',
    status: 'active',
  },

  // ============ RETAIL & COMMERCE ============
  {
    id: 'pos-retail',
    number: '02',
    name: 'POS & Retail Management',
    category: 'retail',
    description: 'Connects every sale to stock, payment, tax and the ledger.',
    modules: ['POS', 'Cashier & Shift', 'Product & Pricing'],
    icon: 'ShoppingCart',
    status: 'active',
  },
  {
    id: 'ecommerce',
    number: '20',
    name: 'E-Commerce & Omnichannel Management',
    category: 'retail',
    description: 'Creates one commercial layer across web, marketplace and physical channels.',
    modules: ['Channels', 'Orders', 'Inventory Sync'],
    icon: 'Globe',
    status: 'active',
  },

  // ============ OPERATIONS & LOGISTICS ============
  {
    id: 'distribution',
    number: '03',
    name: 'Distribution & Wholesale Management',
    category: 'operations',
    description: 'Controls the full order-to-cash cycle for distributors.',
    modules: ['Sales Orders', 'Customer Credit', 'Warehouse'],
    icon: 'Truck',
    status: 'active',
  },
  {
    id: 'inventory',
    number: '04',
    name: 'Inventory & Warehouse Management',
    category: 'operations',
    description: 'Provides the shared inventory truth used by retail, distribution, manufacturing and e-commerce.',
    modules: ['Warehouse', 'Stock Ledger', 'Barcode / Batch / Serial'],
    icon: 'Package',
    status: 'active',
  },
  {
    id: 'transport',
    number: '09',
    name: 'Transport & Fleet Management',
    category: 'operations',
    description: 'Measures every vehicle as an operational and financial unit.',
    modules: ['Vehicles', 'Drivers', 'Trips'],
    icon: 'Bus',
    status: 'active',
  },

  // ============ INDUSTRY-SPECIFIC ============
  {
    id: 'restaurant',
    number: '05',
    name: 'Restaurant & Café Management',
    category: 'industry',
    description: 'Turns menu sales into measurable food cost and profitability.',
    modules: ['POS', 'Menu & Recipes', 'Kitchen'],
    icon: 'UtensilsCrossed',
    status: 'active',
  },
  {
    id: 'manufacturing',
    number: '06',
    name: 'Manufacturing & Production Management',
    category: 'industry',
    description: 'Links raw materials to finished-goods cost and profitability.',
    modules: ['BOM', 'Work Orders', 'Material Planning'],
    icon: 'Factory',
    status: 'active',
  },
  {
    id: 'construction',
    number: '07',
    name: 'Construction & Project Management',
    category: 'industry',
    description: 'Creates a project-level commercial and financial control system.',
    modules: ['Contracts', 'Projects', 'BOQ / Budget'],
    icon: 'HardHat',
    status: 'active',
  },
  {
    id: 'telecom',
    number: '08',
    name: 'Telecom Project & Field Operations',
    category: 'industry',
    description: 'Specialized operating layer for telecom deployment and field programs.',
    modules: ['Programs / Sites', 'Field Operations', 'Equipment'],
    icon: 'Radio',
    status: 'active',
  },
  {
    id: 'hotel',
    number: '17',
    name: 'Hotel & Hospitality Management',
    category: 'industry',
    description: 'Unifies room revenue and ancillary revenue centers.',
    modules: ['Reservations', 'Rooms', 'Guest'],
    icon: 'Bed',
    status: 'active',
  },

  // ============ SERVICE & CRM ============
  {
    id: 'car-rental',
    number: '10',
    name: 'Car Rental & Mobility Management',
    category: 'service',
    description: 'Manages the rental lifecycle from booking to return and settlement.',
    modules: ['Reservations', 'Rental Contracts', 'Dispatch'],
    icon: 'Car',
    status: 'active',
  },
  {
    id: 'field-service',
    number: '11',
    name: 'Service & Field Service Management',
    category: 'service',
    description: 'Connects field execution directly to service revenue and margin.',
    modules: ['Service Requests', 'Scheduling', 'Work Orders'],
    icon: 'Wrench',
    status: 'active',
  },
  {
    id: 'crm',
    number: '12',
    name: 'CRM & Sales Management',
    category: 'service',
    description: 'Creates the commercial front door to the FS ecosystem.',
    modules: ['Leads', 'Opportunities', 'Quotes'],
    icon: 'Users',
    status: 'active',
  },
  {
    id: 'procurement',
    number: '13',
    name: 'Procurement & Supplier Management',
    category: 'service',
    description: 'Applies structured control before money leaves the business.',
    modules: ['Requests', 'RFQ', 'Supplier Comparison'],
    icon: 'ClipboardList',
    status: 'active',
  },

  // ============ ENTERPRISE MANAGEMENT ============
  {
    id: 'hr-payroll',
    number: '14',
    name: 'HR, Payroll & Workforce Management',
    category: 'enterprise',
    description: 'Turns workforce activity into controlled payroll and labor-cost data.',
    modules: ['Employee Master', 'Attendance', 'Leave'],
    icon: 'UserCheck',
    status: 'active',
  },
  {
    id: 'asset',
    number: '15',
    name: 'Asset & Equipment Management',
    category: 'enterprise',
    description: 'Provides lifecycle control from acquisition to retirement.',
    modules: ['Asset Register', 'Capitalization', 'Assignment'],
    icon: 'Box',
    status: 'active',
  },
  {
    id: 'property',
    number: '16',
    name: 'Property & Real Estate Management',
    category: 'enterprise',
    description: 'Links property operations to recurring revenue and cost.',
    modules: ['Properties', 'Units', 'Tenants'],
    icon: 'Building',
    status: 'active',
  },
  {
    id: 'clinic',
    number: '18',
    name: 'Clinic & Healthcare Management',
    category: 'enterprise',
    description: 'Separates sensitive clinical data from controlled financial workflows.',
    modules: ['Patient', 'Appointments', 'Services'],
    icon: 'HeartPulse',
    status: 'active',
  },
  {
    id: 'education',
    number: '19',
    name: 'Education & School Management',
    category: 'enterprise',
    description: 'Connects the student lifecycle with institutional financial management.',
    modules: ['Student', 'Enrollment', 'Fees'],
    icon: 'GraduationCap',
    status: 'active',
  },
];

export const getProductsByCategory = (categoryId: string) =>
  softwareProducts.filter((p) => p.category === categoryId);

export const getProductCount = () => softwareProducts.length;

export const DISCOVERY_URL = 'https://fs-softwares-library.sassy-goat-1694.chatgpt.site';
