
import React, { useState, useEffect } from 'react';
import { View } from './types';
import Onboarding from './components/Onboarding';
import Signup from './components/Signup';
import OtpVerification from './components/OtpVerification';
import Dashboard from './components/Dashboard';
import ProductManager from './components/ProductManager';
import AddProduct from './components/AddProduct';
import InquiryList from './components/InquiryList';
import LeadDetails from './components/LeadDetails';
import ChatSession from './components/ChatSession';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.ONBOARDING);

  const renderView = () => {
    switch (currentView) {
      case View.ONBOARDING:
        return <Onboarding onNext={() => setCurrentView(View.SIGNUP)} />;
      case View.SIGNUP:
        return <Signup onBack={() => setCurrentView(View.ONBOARDING)} onNext={() => setCurrentView(View.OTP)} />;
      case View.OTP:
        return <OtpVerification onBack={() => setCurrentView(View.SIGNUP)} onNext={() => setCurrentView(View.DASHBOARD)} />;
      case View.DASHBOARD:
        return <Dashboard
          onNavigate={(view: View) => setCurrentView(view)}
        />;
      case View.PRODUCT_LIST:
        return <ProductManager onBack={() => setCurrentView(View.DASHBOARD)} onAdd={() => setCurrentView(View.ADD_PRODUCT)} />;
      case View.ADD_PRODUCT:
        return <AddProduct onBack={() => setCurrentView(View.PRODUCT_LIST)} onSave={() => setCurrentView(View.PRODUCT_LIST)} />;
      case View.INQUIRY_LIST:
        return <InquiryList onBack={() => setCurrentView(View.DASHBOARD)} onSelectLead={() => setCurrentView(View.LEAD_DETAILS)} />;
      case View.LEAD_DETAILS:
        return <LeadDetails onBack={() => setCurrentView(View.INQUIRY_LIST)} onAccept={() => setCurrentView(View.CHAT)} />;
      case View.CHAT:
        return <ChatSession onBack={() => setCurrentView(View.LEAD_DETAILS)} />;
      case View.PROFILE:
        return <Profile onBack={() => setCurrentView(View.DASHBOARD)} onEdit={() => setCurrentView(View.EDIT_PROFILE)} />;
      case View.EDIT_PROFILE:
        return <EditProfile onBack={() => setCurrentView(View.PROFILE)} onSave={() => setCurrentView(View.PROFILE)} />;
      default:
        return <Onboarding onNext={() => setCurrentView(View.SIGNUP)} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderView()}
    </div>
  );
};

export default App;
