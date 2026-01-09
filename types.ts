
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
  MESSAGES = 'MESSAGES'
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
  score: number;
}
