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
import BusinessSetup from './components/BusinessSetup';
import BusinessVisibility from './components/BusinessVisibility';
import ContinentalReach from './components/ContinentalReach';
import EasySetupToolkit from './components/EasySetupToolkit';
import Login from './components/Login';

import PremiumServices from './components/PremiumServices';
import BusinessInfo from './components/BusinessInfo';
import RecentUploads from './components/RecentUploads';
import Notifications from './components/Notifications';
import BusinessReport from './components/BusinessReport';
import FAQs from './components/FAQs';
import Roadmap from './components/Roadmap';
import AboutUs from './components/AboutUs';
import ContactSupport from './components/ContactSupport';
import Policies from './components/Policies';
import Settings from './components/Settings';
import ViewsSummary from './components/ViewsSummary';
import ResponseRateSummary from './components/ResponseRateSummary';
import Drawer from './components/common/Drawer';
import Header from './components/common/Header';

const App: React.FC = () => {
  const [currentView, setInternalView] = useState<View>(View.ONBOARDING);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    setInternalView(view);
    window.location.hash = view;
  };

  const isAuthView = windowWidth >= 1024
    ? ![View.ONBOARDING, View.SIGNUP, View.OTP, View.BUSINESS_SETUP, View.ROADMAP, View.FAQS, View.ABOUT_US, View.BUSINESS_VISIBILITY, View.CONTINENTAL_REACH, View.VIEWS_SUMMARY, View.RESPONSE_RATE_SUMMARY, View.EASY_SETUP_TOOLKIT, View.LOGIN].includes(currentView)
    : ![View.ONBOARDING, View.SIGNUP, View.OTP, View.BUSINESS_SETUP, View.ROADMAP, View.FAQS, View.ABOUT_US, View.CONTACT_SUPPORT, View.POLICIES, View.BUSINESS_VISIBILITY, View.CONTINENTAL_REACH, View.VIEWS_SUMMARY, View.RESPONSE_RATE_SUMMARY, View.EASY_SETUP_TOOLKIT, View.LOGIN].includes(currentView);

  const renderView = () => {
    switch (currentView) {

      case View.ONBOARDING:
        return <Onboarding onNext={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.SIGNUP:
        return <Signup onBack={() => setCurrentView(View.ONBOARDING)} onNext={() => setCurrentView(View.OTP)} onLogin={() => setCurrentView(View.LOGIN)} />;
      case View.OTP:
        return <OtpVerification onBack={() => setCurrentView(View.SIGNUP)} onNext={() => setCurrentView(View.BUSINESS_SETUP)} />;
      case View.BUSINESS_SETUP:
        return <BusinessSetup onBack={() => setCurrentView(View.OTP)} onNext={() => setCurrentView(View.DASHBOARD)} />;
      case View.DASHBOARD:
        return <Dashboard onNavigate={(view: View) => setCurrentView(view)} onOpenDrawer={() => setIsDrawerOpen(true)} />;
      case View.PRODUCT_LIST:
        return (
          <ProductManager
            onBack={() => setIsDrawerOpen(true)}
            onAdd={() => setCurrentView(View.ADD_PRODUCT)}
            onEdit={() => setCurrentView(View.ADD_PRODUCT)}
            onReachBuyers={() => setCurrentView(View.PREMIUM_SERVICES)}
          />
        );
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
        return <EditProfile onBack={() => setCurrentView(View.PROFILE)} onSave={() => setCurrentView(View.DASHBOARD)} />;

      case View.PREMIUM_SERVICES:
        return <PremiumServices onBack={() => setCurrentView(View.PRODUCT_LIST)} />;
      case View.BUSINESS_INFO:
        return <BusinessInfo onOpenDrawer={() => setIsDrawerOpen(true)} onViewAll={() => setCurrentView(View.RECENT_UPLOADS)} />;
      case View.RECENT_UPLOADS:
        return <RecentUploads onBack={() => setCurrentView(View.BUSINESS_INFO)} />;
      case View.NOTIFICATIONS:
        return <Notifications onBack={() => setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} />;
      case View.BUSINESS_REPORT:
        return <BusinessReport onBack={() => setCurrentView(View.DASHBOARD)} />;
      case View.FAQS:
        return <FAQs onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} />;
      case View.CONTACT_SUPPORT:
        return <ContactSupport isDashboardMode={windowWidth >= 1024} onBack={() => windowWidth < 1024 ? window.history.back() : setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} onSignup={() => setCurrentView(View.SIGNUP)} />;
      case View.POLICIES:
        return <Policies isDashboardMode={windowWidth >= 1024} onBack={() => windowWidth < 1024 ? window.history.back() : setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} onSignup={() => setCurrentView(View.SIGNUP)} />;
      case View.SETTINGS:
        return <Settings onNavigate={setCurrentView} />;
      case View.ROADMAP:
        return <Roadmap onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} />;
      case View.ABOUT_US:
        return <AboutUs onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.BUSINESS_VISIBILITY:
        return <BusinessVisibility onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.CONTINENTAL_REACH:
        return <ContinentalReach onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.VIEWS_SUMMARY:
        return <ViewsSummary onBack={() => setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} />;
      case View.RESPONSE_RATE_SUMMARY:
        return <ResponseRateSummary onBack={() => setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} />;
      case View.EASY_SETUP_TOOLKIT:
        return <EasySetupToolkit onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.LOGIN:
        return <Login onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onLoginSuccess={() => setCurrentView(View.DASHBOARD)} />;
      default:
        return <Onboarding onNext={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
    }
  };

  const hideHeader = [View.ONBOARDING, View.SIGNUP, View.OTP, View.BUSINESS_SETUP, View.MESSAGES, View.CHAT, View.MESSAGE_SEARCH, View.PREMIUM_SERVICES, View.NOTIFICATIONS, View.PROFILE, View.BUSINESS_REPORT, View.FAQS, View.ROADMAP, View.ABOUT_US, View.BUSINESS_VISIBILITY, View.CONTINENTAL_REACH, View.VIEWS_SUMMARY, View.RESPONSE_RATE_SUMMARY, View.EASY_SETUP_TOOLKIT, View.LOGIN].includes(currentView);

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
            onBack={(currentView === View.LEAD_DETAILS || currentView === View.PRODUCT_LIST || currentView === View.ADD_PRODUCT || currentView === View.INQUIRY_LIST || currentView === View.BUSINESS_INFO || currentView === View.RECENT_UPLOADS || currentView === View.EDIT_PROFILE || currentView === View.CONTACT_SUPPORT || currentView === View.SETTINGS) ? () => {
              if (currentView === View.LEAD_DETAILS) setCurrentView(View.INQUIRY_LIST);
              else if (currentView === View.ADD_PRODUCT) setCurrentView(View.PRODUCT_LIST);
              else if (currentView === View.RECENT_UPLOADS) setCurrentView(View.BUSINESS_INFO);
              else if (currentView === View.EDIT_PROFILE) setCurrentView(View.PROFILE);
              else if (currentView === View.SETTINGS) window.history.back();
              else setIsDrawerOpen(true);
            } : undefined}
            title={
              currentView === View.LEAD_DETAILS ? "Lead Request Details" :
                currentView === View.ADD_PRODUCT ? "Add New Product" :
                  currentView === View.PRODUCT_LIST ? "Manage Products" :
                    currentView === View.INQUIRY_LIST ? "Leads & Inquiries" :
                      currentView === View.CONTACT_SUPPORT ? "Contact Support" :
                        currentView === View.DASHBOARD ? "Dashboard" :
                          currentView === View.BUSINESS_INFO ? "Document Management" :
                            currentView === View.RECENT_UPLOADS ? "Recent Uploads" :
                              currentView === View.BUSINESS_REPORT ? "Business Report" :
                                currentView === View.PROFILE ? "Seller Profile" :
                                  currentView === View.EDIT_PROFILE ? "Edit Profile" :
                                    currentView === View.SETTINGS ? "Account Settings" :
                                      undefined
            }
            onAdd={undefined}
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
