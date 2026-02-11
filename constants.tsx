
import { Product, Inquiry, User } from './types';

export const MOCK_USER: User = {
  name: 'Username',
  businessName: 'Global Agro Supplies Ltd.',
  category: 'Wholesale Distributor',
  location: 'Paynesville, Monrovia',
  email: 'alex@eliteliberia.com',
  score: 85,
  rating: '4.8',
  reviews: 125,
  yearsInBusiness: '12+',
  employees: '25-50',
  about: 'Global Agro Supplies Ltd. is a leading provider of agricultural inputs and equipment in West Africa. We specialize in high-quality seeds, fertilizers, and modern irrigation systems designed for tropical farming conditions.',
  expertise: ['Seeds & Grains', 'Organic Fertilizer', 'Irrigation Systems'],
  certifications: ['Certified Food Distributor', 'Eco-Farm Partner', 'ISO 9001:2015']
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hybrid Corn Seeds',
    price: '$12.50',
    unit: '50kg Sack',
    category: 'Seeds',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6vNMCLXKYtUgAvW1aJKp7yHzlToMo8izh6DBneGPKiQQ_-F4TRIsNqiFUIitDWNLtOkyK8-VEgsKl0V5k8arHidkQkYgrUo0aGFgeF5kEAlF0VIIgdE1NygHG3VTWazqxp3aJOXGQmbmMQYpZIPsDzUfyIQYbaCK9MLYlEBneXRcUUi876TgIFK_nLuphU4p-qywermvJWX_zV3Phpf054WzQ5vu_7oRru7xoDCq7spaNJrY1trrs5BLqQEByEF9swm2Td7l5HHQ',
    description: 'High yield hybrid corn seeds suitable for tropical climates.'
  },
  {
    id: '2',
    name: 'NPK Fertilizer',
    price: '$45.00',
    unit: 'Bag',
    category: 'Fertilizers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk8lOwDDwZbAzVqR2WifxL0L9e9K6rfq5DWwTjaurwRk8wW4sApyNJr0TJK8yRC9zSKjLKQusX3hB2KyKBnRHGBHF5stR3oSpwe1Ne2SfhmE_5e_bkTUZCm6CtoGTXjSOjvRdc0fTDszGVpvuJTvCauMYzscx3HOiX8J-6PUDloOdk3Va9SdM1RUmGTFeooOWo1Sq-cvH4vyEObVf-luJKvaXKZBq0AUQTy9ovvqCj6zPQMIcoFtkqjiOG1KpcoanKxQ4U7VViW1g',
    description: 'Premium imported NPK fertilizer for all crop types.'
  }
];

export const MOCK_INQUIRIES: Inquiry[] = [
  {
    id: '1',
    companyName: 'Construction Hub Ltd.',
    message: 'Inquiry about bulk pricing for Cement bags and steel rods...',
    status: 'New Lead',
    time: 'Just now',
    location: 'Monrovia, Liberia',
    initials: 'CNH'
  },
  {
    id: '2',
    companyName: 'AgriCorp International',
    message: 'Looking for a quotation on 500kg of Rice seeds...',
    status: 'Viewed',
    time: '25m ago',
    location: 'Red Light, Paynesville',
    initials: 'AGR'
  },
  {
    id: '3',
    companyName: 'TechPro Solutions',
    message: 'Interested in purchasing office furniture and electronics...',
    status: 'New Lead',
    time: '1h ago',
    location: 'Sinkor, Monrovia',
    initials: 'TPS'
  },
  {
    id: '4',
    companyName: 'FreshMart Distributors',
    message: 'Need wholesale prices for fresh produce and dairy products...',
    status: 'Urgent',
    time: '2h ago',
    location: 'Congo Town',
    initials: 'FMD'
  },
  {
    id: '5',
    companyName: 'BuildRight Supplies',
    message: 'Request for quote on construction materials for new project...',
    status: 'Viewed',
    time: '3h ago',
    location: 'Paynesville',
    initials: 'BRS'
  },
  {
    id: '6',
    companyName: 'Global Trading Co.',
    message: 'Bulk order inquiry for imported electronics and appliances...',
    status: 'New Lead',
    time: '5h ago',
    location: 'Broad Street, Monrovia',
    initials: 'GTC'
  }
];
