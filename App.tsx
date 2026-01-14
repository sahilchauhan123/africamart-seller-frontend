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
import BusinessMessages from './components/BusinessMessages';
import MessageSearch from './components/MessageSearch';
import Drawer from './components/common/Drawer';
import Header from './components/common/Header';

const App: React.FC = () => {
  const [currentView, setInternalView] = useState<View>(View.ONBOARDING);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (Object.values(View).includes(hash as View)) {
        setInternalView(hash as View);
      } else if (!hash) {
        window.location.hash = View.ONBOARDING;
      }
    };

    // Handle initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setCurrentView = (view: View) => {
    window.location.hash = view;
  };

  const isAuthView = ![View.ONBOARDING, View.SIGNUP, View.OTP].includes(currentView);

  const renderView = () => {
    switch (currentView) {
      case View.ONBOARDING:
        return <Onboarding onNext={() => setCurrentView(View.SIGNUP)} />;
      case View.SIGNUP:
        return <Signup onBack={() => setCurrentView(View.ONBOARDING)} onNext={() => setCurrentView(View.OTP)} />;
      case View.OTP:
        return <OtpVerification onBack={() => setCurrentView(View.SIGNUP)} onNext={() => setCurrentView(View.DASHBOARD)} />;
      case View.DASHBOARD:
        return <Dashboard onNavigate={(view: View) => setCurrentView(view)} onOpenDrawer={() => setIsDrawerOpen(true)} />;
      case View.PRODUCT_LIST:
        return <ProductManager onBack={() => setIsDrawerOpen(true)} onAdd={() => setCurrentView(View.ADD_PRODUCT)} onEdit={() => setCurrentView(View.ADD_PRODUCT)} />;
      case View.ADD_PRODUCT:
        return <AddProduct onBack={() => setCurrentView(View.PRODUCT_LIST)} onSave={() => setCurrentView(View.PRODUCT_LIST)} />;
      case View.INQUIRY_LIST:
        return <InquiryList onBack={() => setIsDrawerOpen(true)} onSelectLead={() => setCurrentView(View.LEAD_DETAILS)} />;
      case View.LEAD_DETAILS:
        return <LeadDetails onBack={() => setCurrentView(View.INQUIRY_LIST)} onAccept={() => setCurrentView(View.CHAT)} />;
      case View.MESSAGES:
        return <BusinessMessages onNavigate={setCurrentView} onOpenDrawer={() => setIsDrawerOpen(true)} />;
      case View.MESSAGE_SEARCH:
        return <MessageSearch onBack={() => setCurrentView(View.MESSAGES)} onNavigate={setCurrentView} />;
      case View.CHAT:
        return <ChatSession onBack={() => setCurrentView(View.MESSAGES)} />;
      case View.PROFILE:
        return <Profile onBack={() => setIsDrawerOpen(true)} onEdit={() => setCurrentView(View.EDIT_PROFILE)} />;
      case View.EDIT_PROFILE:
        return <EditProfile onBack={() => setCurrentView(View.PROFILE)} onSave={() => setCurrentView(View.PROFILE)} />;
      default:
        return <Onboarding onNext={() => setCurrentView(View.SIGNUP)} />;
    }
  };

  const hideHeader = [View.MESSAGES, View.CHAT, View.MESSAGE_SEARCH, View.PROFILE, View.EDIT_PROFILE].includes(currentView);

  return (
    <div className={`bg-background-light ${isAuthView ? 'h-screen overflow-hidden flex flex-col' : 'min-h-screen'}`}>
      {isAuthView && (
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onNavigate={(view) => {
            setCurrentView(view);
            setIsDrawerOpen(false);
          }}
          currentView={currentView}
        />
      )}
      <div className={isAuthView ? "lg:pl-72 flex flex-col h-full overflow-y-auto" : ""}>
        {isAuthView && !hideHeader && (
          <Header
            onOpenDrawer={() => setIsDrawerOpen(true)}
            onNavigate={(view) => setCurrentView(view)}
            currentView={currentView}
            onBack={currentView === View.LEAD_DETAILS ? () => setCurrentView(View.INQUIRY_LIST) : undefined}
            title={currentView === View.LEAD_DETAILS ? "Lead Details" : undefined}
          />
        )}
        <main className={`flex-1 relative ${isAuthView && !hideHeader ? "pt-16 lg:pt-[72px]" : ""}`}>
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
