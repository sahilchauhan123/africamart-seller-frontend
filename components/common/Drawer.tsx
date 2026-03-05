
import React, { useState } from 'react';
import { View } from '../../types';
import {
  X,
  Store,
  Home,
  Package,
  TrendingUp,
  FileText,
  MessageCircle,
  Bell,
  ChevronDown,
  HelpCircle,
  Headphones,
  AlertTriangle,
  ShieldCheck,
  Info,
  BadgeCheck,
  LayoutDashboard,
  Landmark,
  Send,
  LogOut,
  CheckCircle,
  Users,
  Layers,
  Map,
  Globe,
  Settings
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: View) => void;
  currentView: View;
  isOnboarding?: boolean;
  onLogout?: () => void;
}

const Drawer: React.FC<Props> = ({ isOpen, onClose, onNavigate, currentView, isOnboarding, onLogout }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);


  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 left-0 h-full w-[85%] max-w-[300px] lg:w-72 lg:max-w-none bg-white z-[70] lg:z-50 shadow-2xl flex flex-col transition-transform duration-300 lg:translate-x-0 lg:shadow-none lg:border-r lg:border-gray-100 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-white px-6 h-16 lg:h-[72px] flex items-center shrink-0 relative border-b border-gray-100">
          <button className="absolute top-4 right-4 text-gray-400 z-10 p-1 hover:bg-gray-100 rounded-full transition lg:hidden" onClick={onClose}>
            <X size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm shadow-primary/30">
              <Store className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight leading-none text-slate-800">AfricaMart</h1>
              <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mt-0.5">Seller Center</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
          {isOnboarding ? (
            <div className="flex flex-col h-full">
              <div className="py-4 flex-1">
                <div className="px-6 py-2 mb-2">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 w-fit px-3 py-1 rounded-full">Explore</p>
                </div>
                <button
                  onClick={() => { onNavigate(View.ABOUT_US); if (window.innerWidth < 1024) onClose(); }}
                  className="w-full flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-gray-50 text-slate-600"
                >
                  <Globe className="text-slate-400" size={24} />
                  <span className="text-sm font-bold tracking-wide">ABOUT US</span>
                </button>

                <div className="border-b border-gray-100 mx-6 my-4"></div>

                <div className="px-6 py-2 mb-2">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 w-fit px-3 py-1 rounded-full">Support</p>
                </div>
                <button
                  onClick={() => { onNavigate(View.FAQS); if (window.innerWidth < 1024) onClose(); }}
                  className="w-full flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-gray-50 text-slate-600"
                >
                  <HelpCircle className="text-slate-400" size={24} />
                  <span className="text-sm font-bold tracking-wide">Help & Assistance</span>
                </button>
                <button
                  onClick={() => { onNavigate(View.CONTACT_SUPPORT); if (window.innerWidth < 1024) onClose(); }}
                  className="w-full flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-gray-50 text-slate-600"
                >
                  <Headphones className="text-slate-400" size={24} />
                  <span className="text-sm font-bold tracking-wide">Contact Support</span>
                </button>
              </div>

              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={() => { onNavigate(View.SIGNUP); if (window.innerWidth < 1024) onClose(); }}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                >
                  Join AfricaMart
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="py-4">
                <button
                  onClick={() => { onNavigate(View.DASHBOARD); if (window.innerWidth < 1024) onClose(); }}
                  className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.DASHBOARD ? 'bg-blue-50 text-primary font-bold border-r-4 border-primary' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                  <Home className={currentView === View.DASHBOARD ? 'text-primary' : 'text-gray-400'} size={24} />
                  <span className="text-sm tracking-wide">Home</span>
                </button>
                <button
                  onClick={() => { onNavigate(View.PRODUCT_LIST); if (window.innerWidth < 1024) onClose(); }}
                  className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.PRODUCT_LIST ? 'bg-blue-50 text-primary font-bold border-r-4 border-primary' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                  <Package className={currentView === View.PRODUCT_LIST ? 'text-primary' : 'text-gray-400'} size={24} />
                  <span className="text-sm">Manage Products</span>
                </button>

                <button
                  onClick={() => { onNavigate(View.INQUIRY_LIST); if (window.innerWidth < 1024) onClose(); }}
                  className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.INQUIRY_LIST ? 'bg-blue-50 text-primary font-bold border-r-4 border-primary' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                  <TrendingUp className={currentView === View.INQUIRY_LIST ? 'text-primary' : 'text-gray-400'} size={24} />
                  <span className="text-sm">Leads & Inquiries</span>
                </button>
              </div>

              <div className="border-b border-gray-100 mx-6"></div>

              <div className="pt-2 pb-2">
                <button
                  onClick={() => { onNavigate(View.BUSINESS_INFO); if (window.innerWidth < 1024) onClose(); }}
                  className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.BUSINESS_INFO ? 'bg-blue-50 text-primary font-bold border-r-4 border-primary' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                  <FileText className={currentView === View.BUSINESS_INFO ? 'text-primary' : 'text-gray-400'} size={24} />
                  <span className="font-medium text-sm">Business Management</span>
                </button>
                <button
                  onClick={() => { onNavigate(View.MESSAGES); if (window.innerWidth < 1024) onClose(); }}
                  className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.MESSAGES ? 'bg-blue-50 text-primary font-bold border-r-4 border-primary' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <MessageCircle className={currentView === View.MESSAGES ? 'text-primary' : 'text-gray-400'} size={24} />
                      <span className="text-sm">Messages</span>
                    </div>
                    <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">20+</span>
                  </div>
                </button>
                <button
                  onClick={() => { onNavigate(View.NOTIFICATIONS); if (window.innerWidth < 1024) onClose(); }}
                  className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.NOTIFICATIONS ? 'bg-blue-50 text-primary font-bold border-r-4 border-primary' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Bell className={currentView === View.NOTIFICATIONS ? 'text-primary' : 'text-gray-400'} size={24} />
                      <span className="text-sm">Notifications</span>
                    </div>
                    <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">5</span>
                  </div>
                </button>
              </div>

              <div className="border-b border-gray-100 mx-6"></div>

              <div className="mt-2 flex flex-col gap-1 flex-1">
                <button
                  onClick={() => setIsHelpOpen(!isHelpOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-[#f3f6fa] hover:brightness-95 transition-all outline-none"
                >
                  <span className="font-bold text-black text-xs tracking-wider uppercase">Help & Support</span>
                  <ChevronDown className={`text-gray-400 transition-transform ${isHelpOpen ? 'rotate-180' : ''}`} size={24} />
                </button>
                {isHelpOpen && (
                  <div className="flex flex-col bg-white border-b border-gray-50">
                    <button
                      onClick={() => { onNavigate(View.SETTINGS); if (window.innerWidth < 1024) onClose(); }}
                      className={`w-full flex items-center gap-4 px-6 py-3.5 text-sm font-medium transition-colors ${currentView === View.SETTINGS ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Settings className={currentView === View.SETTINGS ? 'text-primary' : 'text-gray-400'} size={20} />
                      <span>Settings</span>
                    </button>
                    <button
                      onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                      className="w-full flex items-center gap-4 px-6 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <HelpCircle className="text-gray-400" size={20} />
                      <span>Help Center (FAQs)</span>
                    </button>
                    <button
                      onClick={() => { onNavigate(View.CONTACT_SUPPORT); if (window.innerWidth < 1024) onClose(); }}
                      className={`w-full flex items-center gap-4 px-6 py-3.5 text-sm font-medium transition-colors ${currentView === View.CONTACT_SUPPORT ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Headphones className={currentView === View.CONTACT_SUPPORT ? 'text-primary' : 'text-gray-400'} size={20} />
                      <span>Contact Support</span>
                    </button>
                    <button
                      onClick={() => { onNavigate(View.POLICIES); if (window.innerWidth < 1024) onClose(); }}
                      className={`w-full flex items-center gap-4 px-6 py-3.5 text-sm font-medium transition-colors ${currentView === View.POLICIES ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <ShieldCheck className={currentView === View.POLICIES ? 'text-primary' : 'text-gray-400'} size={20} />
                      <span>Policies</span>
                    </button>
                  </div>
                )}
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-[#f3f6fa] hover:brightness-95 transition-all outline-none"
                >
                  <span className="font-bold text-black text-xs tracking-wider uppercase">More</span>
                  <ChevronDown className={`text-gray-400 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} size={24} />
                </button>
                {isMoreOpen && (
                  <div className="flex flex-col bg-white border-b border-gray-50">
                    <button
                      onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                      className="w-full flex items-center gap-4 px-6 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <Info className="text-gray-400" size={20} />
                      <span>About AfricaMart</span>
                    </button>
                    <button
                      onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                      className="w-full flex items-center gap-4 px-6 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <BadgeCheck className="text-gray-400" size={20} />
                      <span>AfricaMart Services</span>
                    </button>
                  </div>
                )}

                <div className="mt-auto border-t border-gray-100">
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-4 px-6 py-4 text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={24} />
                    <span className="text-sm font-bold tracking-widest uppercase">Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Drawer;
