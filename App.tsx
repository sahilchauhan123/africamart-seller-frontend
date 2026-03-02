import React, { useState, useEffect } from 'react';
import { View } from './types';
import Onboarding from './components/Onboarding';
import Signup from './views/SignupView';
import Login from './views/LoginView';
import OtpVerification from './components/OtpVerification';
import DashboardView from './views/Business/DashboardView';
import ProductListView from './views/Product/ProductListView';
import AddProductView from './views/Product/AddProductView';
import ChatSessionView from './views/Leads/ChatSessionView';
import BusinessSetupView from './views/Business/BusinessSetupView';
import BusinessMessagesView from './views/Leads/BusinessMessagesView';
import ProfileView from './views/Business/ProfileView';
import EditProfileView from './views/Business/EditProfileView';
import InquiryListView from './views/Leads/InquiryListView';
import LeadDetailsView from './views/Leads/LeadDetailsView';
import MessageSearchView from './views/Leads/MessageSearchView';
import BusinessVisibilityView from './views/Static/BusinessVisibilityView';
import ContinentalReachView from './views/Static/ContinentalReachView';
import EasySetupToolkitView from './views/Static/EasySetupToolkitView';

import PremiumServices from './components/PremiumServices';
import BusinessInfoView from './views/Business/BusinessInfoView';
import RecentUploads from './components/RecentUploads';
import Notifications from './components/Notifications';
import BusinessReportView from './views/Business/BusinessReportView';
import FAQsView from './views/Static/FAQsView';
import RoadmapView from './views/Static/RoadmapView';
import AboutUsView from './views/Static/AboutUsView';
import ContactSupportView from './views/Static/ContactSupportView';
import PoliciesView from './views/Static/PoliciesView';
import Settings from './components/Settings';
import ViewsSummary from './components/ViewsSummary';
import ResponseRateSummary from './components/ResponseRateSummary';
import Drawer from './components/common/Drawer';
import Header from './components/common/Header';

import { AuthService } from './services/AuthService';

const App: React.FC = () => {
  const [currentView, setInternalView] = useState<View>(View.ONBOARDING);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const publicViews = [
    View.ONBOARDING,
    View.SIGNUP,
    View.OTP,
    View.LOGIN,
    View.FAQS,
    View.ROADMAP,
    View.ABOUT_US,
    View.CONTACT_SUPPORT,
    View.POLICIES,
    View.EASY_SETUP_TOOLKIT,
    View.BUSINESS_VISIBILITY,
    View.CONTINENTAL_REACH
  ];

  useEffect(() => {
    const checkUserAuth = async () => {
      setIsAuthLoading(true);
      const isAuth = await AuthService.checkAuth();
      setIsAuthenticated(isAuth);
      setIsAuthLoading(false);
    };
    checkUserAuth();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace('/', '');
      const viewKey = path.toUpperCase().replace(/-/g, '_');

      if (Object.values(View).includes(viewKey as View)) {
        setInternalView(viewKey as View);
      } else if (!path || path === '') {
        const defaultPath = '/' + String(View.ONBOARDING).toLowerCase().replace(/_/g, '-');
        window.history.replaceState(null, '', defaultPath);
        setInternalView(View.ONBOARDING);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    if (!isAuthLoading) {
      const isPublic = publicViews.includes(currentView);
      if (!isAuthenticated && !isPublic) {
        setCurrentView(View.LOGIN);
      } else if (isAuthenticated && (currentView === View.LOGIN || currentView === View.SIGNUP || currentView === View.ONBOARDING)) {
        setCurrentView(View.DASHBOARD);
      }
    }
  }, [currentView, isAuthenticated, isAuthLoading]);

  const setCurrentView = (view: View) => {
    setInternalView(view);
    const path = '/' + String(view).toLowerCase().replace(/_/g, '-');
    window.history.pushState(null, '', path);
  };

  const isAuthView = windowWidth >= 1024
    ? ![View.ONBOARDING, View.SIGNUP, View.OTP, View.BUSINESS_SETUP, View.ROADMAP, View.FAQS, View.ABOUT_US, View.BUSINESS_VISIBILITY, View.CONTINENTAL_REACH, View.VIEWS_SUMMARY, View.RESPONSE_RATE_SUMMARY, View.EASY_SETUP_TOOLKIT, View.LOGIN].includes(currentView)
    : ![View.ONBOARDING, View.SIGNUP, View.OTP, View.BUSINESS_SETUP, View.ROADMAP, View.FAQS, View.ABOUT_US, View.CONTACT_SUPPORT, View.POLICIES, View.BUSINESS_VISIBILITY, View.CONTINENTAL_REACH, View.VIEWS_SUMMARY, View.RESPONSE_RATE_SUMMARY, View.EASY_SETUP_TOOLKIT, View.LOGIN].includes(currentView);

  if (isAuthLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background-light">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const renderView = () => {
    switch (currentView) {

      case View.ONBOARDING:
        return <Onboarding onNext={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.SIGNUP:
        return <Signup onBack={() => setCurrentView(View.ONBOARDING)} onNext={() => setCurrentView(View.OTP)} onLogin={() => setCurrentView(View.LOGIN)} />;
      case View.OTP:
        return <OtpVerification onBack={() => setCurrentView(View.SIGNUP)} onNext={() => {
          setIsAuthenticated(true);
          setCurrentView(View.DASHBOARD);
        }} />;
      case View.BUSINESS_SETUP:
        return <BusinessSetupView onBack={() => setCurrentView(View.OTP)} onNext={() => setCurrentView(View.DASHBOARD)} />;
      case View.DASHBOARD:
        return <DashboardView onNavigate={(view: View) => setCurrentView(view)} onOpenDrawer={() => setIsDrawerOpen(true)} />;
      case View.PRODUCT_LIST:
        return (
          <ProductListView
            onBack={() => setIsDrawerOpen(true)}
            onAdd={() => setCurrentView(View.ADD_PRODUCT)}
            onEdit={() => setCurrentView(View.ADD_PRODUCT)}
            onReachBuyers={() => setCurrentView(View.PREMIUM_SERVICES)}
          />
        );
      case View.ADD_PRODUCT:
        return <AddProductView onBack={() => setCurrentView(View.PRODUCT_LIST)} onSave={() => setCurrentView(View.PRODUCT_LIST)} />;
      case View.INQUIRY_LIST:
        return <InquiryListView onBack={() => setIsDrawerOpen(true)} onSelectLead={() => setCurrentView(View.LEAD_DETAILS)} />;
      case View.LEAD_DETAILS:
        return <LeadDetailsView onBack={() => setCurrentView(View.INQUIRY_LIST)} onAccept={() => setCurrentView(View.CHAT)} />;
      case View.MESSAGES:
        return <BusinessMessagesView onNavigate={setCurrentView} onOpenDrawer={() => setIsDrawerOpen(true)} />;
      case View.MESSAGE_SEARCH:
        return <MessageSearchView onBack={() => setCurrentView(View.MESSAGES)} onNavigate={setCurrentView} />;
      case View.CHAT:
        return <ChatSessionView onBack={() => setCurrentView(View.MESSAGES)} />;
      case View.PROFILE:
        return <ProfileView onBack={() => setIsDrawerOpen(true)} onEdit={() => setCurrentView(View.EDIT_PROFILE)} />;
      case View.EDIT_PROFILE:
        return <EditProfileView onBack={() => setCurrentView(View.PROFILE)} onSave={() => setCurrentView(View.DASHBOARD)} />;

      case View.PREMIUM_SERVICES:
        return <PremiumServices onBack={() => setCurrentView(View.PRODUCT_LIST)} />;
      case View.BUSINESS_INFO:
        return <EditProfileView onBack={() => setIsDrawerOpen(true)} onSave={() => setCurrentView(View.DASHBOARD)} />;
      case View.RECENT_UPLOADS:
        return <RecentUploads onBack={() => setCurrentView(View.BUSINESS_INFO)} />;
      case View.NOTIFICATIONS:
        return <Notifications onBack={() => setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} />;
      case View.BUSINESS_REPORT:
        return <BusinessReportView onBack={() => setCurrentView(View.DASHBOARD)} />;
      case View.FAQS:
        return <FAQsView onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} />;
      case View.CONTACT_SUPPORT:
        return <ContactSupportView isDashboardMode={windowWidth >= 1024} onBack={() => windowWidth < 1024 ? window.history.back() : setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} onSignup={() => setCurrentView(View.SIGNUP)} />;
      case View.POLICIES:
        return <PoliciesView isDashboardMode={windowWidth >= 1024} onBack={() => windowWidth < 1024 ? window.history.back() : setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} onSignup={() => setCurrentView(View.SIGNUP)} />;
      case View.SETTINGS:
        return <Settings onNavigate={setCurrentView} />;
      case View.ROADMAP:
        return <RoadmapView onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} />;
      case View.ABOUT_US:
        return <AboutUsView onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.BUSINESS_VISIBILITY:
        return <BusinessVisibilityView onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.CONTINENTAL_REACH:
        return <ContinentalReachView onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.VIEWS_SUMMARY:
        return <ViewsSummary onBack={() => setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} />;
      case View.RESPONSE_RATE_SUMMARY:
        return <ResponseRateSummary onBack={() => setCurrentView(View.DASHBOARD)} onNavigate={setCurrentView} />;
      case View.EASY_SETUP_TOOLKIT:
        return <EasySetupToolkitView onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onNavigate={setCurrentView} />;
      case View.LOGIN:
        return <Login onBack={() => setCurrentView(View.ONBOARDING)} onSignup={() => setCurrentView(View.SIGNUP)} onLoginSuccess={() => {
          setIsAuthenticated(true);
          setCurrentView(View.DASHBOARD);
        }} />;
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
          onLogout={async () => {
            await AuthService.logout();
            setIsAuthenticated(false);
            setCurrentView(View.LOGIN);
          }}
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
                          currentView === View.BUSINESS_INFO ? "Business Management" :
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
