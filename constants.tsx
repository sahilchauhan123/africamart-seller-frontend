
import { Product, Inquiry, User } from './types';

export const MOCK_USER: User = {
  name: 'John Doe',
  businessName: 'Global Agro Supplies Ltd.',
  category: 'Wholesale Distributor',
  location: 'Paynesville, Monrovia',
  score: 25
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
  }
];
