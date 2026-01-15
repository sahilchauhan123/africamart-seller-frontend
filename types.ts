
export enum View {
  ONBOARDING = 'ONBOARDING',
  SIGNUP = 'SIGNUP',
  OTP = 'OTP',
  DASHBOARD = 'DASHBOARD',
  PRODUCT_LIST = 'PRODUCT_LIST',
  ADD_PRODUCT = 'ADD_PRODUCT',
  INQUIRY_LIST = 'INQUIRY_LIST',
  LEAD_DETAILS = 'LEAD_DETAILS',
  CHAT = 'CHAT',
  PROFILE = 'PROFILE',
  EDIT_PROFILE = 'EDIT_PROFILE',
  MESSAGES = 'MESSAGES',
  MESSAGE_SEARCH = 'MESSAGE_SEARCH',
  CATEGORIES = 'CATEGORIES',
  ADD_CATEGORY = 'ADD_CATEGORY',
  PREMIUM_SERVICES = 'PREMIUM_SERVICES',
  BUSINESS_INFO = 'BUSINESS_INFO',
  RECENT_UPLOADS = 'RECENT_UPLOADS',
  NOTIFICATIONS = 'NOTIFICATIONS'
}

export interface Product {
  id: string;
  name: string;
  price: string;
  unit: string;
  category: string;
  image: string;
  description: string;
}

export interface Inquiry {
  id: string;
  companyName: string;
  message: string;
  status: 'New Lead' | 'Viewed' | 'Replied' | 'Urgent';
  time: string;
  location: string;
  initials: string;
}

export interface User {
  name: string;
  businessName: string;
  category: string;
  location: string;
  email: string;
  score: number;
  rating?: string;
  reviews?: number;
  yearsInBusiness?: string;
  employees?: string;
  about?: string;
  expertise?: string[];
  certifications?: string[];
}
