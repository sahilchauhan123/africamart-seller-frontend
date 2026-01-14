
import React from 'react';
import { View } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: View) => void;
  currentView: View;
}

const Drawer: React.FC<Props> = ({ isOpen, onClose, onNavigate, currentView }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 left-0 h-full w-[85%] max-w-[300px] bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 lg:translate-x-0 lg:shadow-none lg:border-r lg:z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-white px-6 h-16 flex items-center shrink-0 relative border-b border-gray-100">
          <button className="absolute top-4 right-4 text-gray-400 z-10 p-1 hover:bg-gray-100 rounded-full transition lg:hidden" onClick={onClose}>
            <span className="material-icons-round text-xl">close</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm shadow-primary/30">
              <span className="material-icons-round text-2xl text-white">storefront</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight leading-none text-slate-800">AfricaMart</h1>
              <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mt-0.5">Seller Center</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto no-scrollbar">
          <div className="py-4">
            <button
              onClick={() => { onNavigate(View.DASHBOARD); if (window.innerWidth < 1024) onClose(); }}
              className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.DASHBOARD ? 'bg-blue-50 text-primary font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
            >
              <span className={`material-icons-round ${currentView === View.DASHBOARD ? 'text-primary' : 'text-gray-400'}`}>home</span>
              <span className="text-sm tracking-wide">HOME</span>
            </button>
            <button
              onClick={() => { onNavigate(View.PRODUCT_LIST); if (window.innerWidth < 1024) onClose(); }}
              className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.PRODUCT_LIST ? 'bg-blue-50 text-primary font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
            >
              <span className={`material-icons-round ${currentView === View.PRODUCT_LIST ? 'text-primary' : 'text-gray-400'}`}>inventory_2</span>
              <span className="text-sm">Manage Products</span>
            </button>
            <button
              onClick={() => { onNavigate(View.INQUIRY_LIST); if (window.innerWidth < 1024) onClose(); }}
              className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.INQUIRY_LIST ? 'bg-blue-50 text-primary font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
            >
              <span className={`material-icons-round ${currentView === View.INQUIRY_LIST ? 'text-primary' : 'text-gray-400'}`}>analytics</span>
              <span className="text-sm">Leads & Inquiries</span>
            </button>
          </div>

          <div className="border-b border-gray-100 mx-6"></div>

          <div className="pt-2 pb-2">
            <button
              className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors text-gray-600"
            >
              <span className="material-icons-round text-gray-400">description</span>
              <span className="font-medium text-sm">Business Info</span>
            </button>
            <button
              onClick={() => { onNavigate(View.MESSAGES); if (window.innerWidth < 1024) onClose(); }}
              className={`w-full flex items-center gap-4 px-6 py-3.5 transition-colors ${currentView === View.MESSAGES ? 'bg-blue-50 text-primary font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
            >
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`material-icons-round ${currentView === View.MESSAGES ? 'text-primary' : 'text-gray-400'}`}>chat_bubble_outline</span>
                  <span className="text-sm">Messages</span>
                </div>
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">20+</span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 hidden lg:flex flex-col flex-shrink-0 z-20 fixed inset-y-0 left-0 font-display">
        <div className="px-8 h-[72px] flex items-center shrink-0 bg-white border-b border-slate-100">
          <h1 className="text-xl font-bold flex items-center gap-3 text-slate-800 tracking-tight">
            <span className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white shadow-sm shadow-brand/20">
              <span className="material-symbols-outlined text-sm leading-none">dashboard</span>
            </span>
            PLATFORM
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-8 overflow-y-auto">
          <div className="space-y-1">
            <a
              onClick={() => onNavigate(View.DASHBOARD)}
              className={`flex items-center gap-4 px-6 py-3 transition-all rounded-r-xl cursor-pointer ${currentView === View.DASHBOARD ? 'bg-slate-50 border-l-4 border-brand' : 'text-slate-500 hover:text-black'}`}
            >
              <span className={`material-symbols-outlined text-[22px] ${currentView === View.DASHBOARD ? 'font-bold text-brand' : ''}`}>home</span>
              <span className={`text-sm tracking-wide ${currentView === View.DASHBOARD ? 'font-bold text-black' : 'font-medium'}`}>HOME</span>
            </a>
            <a
              onClick={() => onNavigate(View.DASHBOARD)}
              className={`flex items-center gap-4 px-6 py-3 transition-all cursor-pointer ${currentView === View.DASHBOARD ? 'text-brand font-bold bg-slate-50/50' : 'text-slate-500 hover:text-black'}`}
            >
              <span className="material-symbols-outlined text-[22px]">account_balance</span>
              <span className="font-medium text-sm">Your Dashboard</span>
            </a>
            <a
              onClick={() => onNavigate(View.ADD_PRODUCT)}
              className={`flex items-center gap-4 px-6 py-3 transition-all cursor-pointer ${currentView === View.ADD_PRODUCT ? 'text-brand font-bold bg-slate-50/50' : 'text-slate-500 hover:text-black'}`}
            >
              <span className="material-symbols-outlined text-[22px]">send</span>
              <span className="font-medium text-sm">Send Enquiries</span>
            </a>
          </div>
          <div className="px-6">
            <hr className="border-slate-100" />
          </div>
          <div className="space-y-1">
            <a
              onClick={() => onNavigate(View.INQUIRY_LIST)}
              className={`flex items-center gap-4 px-6 py-3 transition-all cursor-pointer ${currentView === View.INQUIRY_LIST ? 'text-brand font-bold bg-slate-50/50' : 'text-slate-500 hover:text-black'}`}
            >
              <span className="material-symbols-outlined text-[22px]">trending_up</span>
              <span className="font-medium text-sm">View Lead Requests</span>
            </a>
            <a
              onClick={() => onNavigate(View.PRODUCT_LIST)}
              className={`flex items-center gap-4 px-6 py-3 transition-all cursor-pointer ${currentView === View.PRODUCT_LIST ? 'text-brand font-bold bg-slate-50/50' : 'text-slate-500 hover:text-black'}`}
            >
              <span className="material-symbols-outlined text-[22px]">inventory_2</span>
              <span className="font-medium text-sm">Manage Products</span>
            </a>
            <a
              onClick={() => onNavigate(View.PROFILE)}
              className={`flex items-center gap-4 px-6 py-3 transition-all cursor-pointer ${currentView === View.PROFILE ? 'text-brand font-bold bg-slate-50/50' : 'text-slate-500 hover:text-black'}`}
            >
              <span className="material-symbols-outlined text-[22px]">description</span>
              <span className="font-medium text-sm">Business Information</span>
            </a>
            <a
              onClick={() => onNavigate(View.MESSAGES)}
              className={`flex items-center justify-between px-6 py-3 transition-all cursor-pointer ${currentView === View.MESSAGES ? 'text-brand font-bold bg-slate-50/50' : 'text-slate-500 hover:text-black'}`}
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span className="font-medium text-sm">Messages</span>
              </div>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">20+</span>
            </a>
          </div>
        </nav>
        <div className="p-8 border-t border-slate-100">
          <button className="flex items-center gap-4 px-4 py-2 transition-all text-slate-400 hover:text-red-500 w-full text-left">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Drawer;
