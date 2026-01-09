
import React from 'react';
import { View } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: View) => void;
}

const Drawer: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-primary pt-12 pb-6 px-5 text-white relative">
          <button className="absolute top-4 right-4 text-white z-10 p-1 bg-white/20 rounded-full hover:bg-white/30 transition" onClick={onClose}>
            <span className="material-icons-round text-xl">close</span>
          </button>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center text-xl font-bold uppercase">N</div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg leading-tight">Username</h3>
              <button onClick={() => { onNavigate(View.PROFILE); onClose(); }} className="flex items-center gap-1 text-blue-100 text-xs hover:text-white transition-colors mt-0.5">
                <span>Visit Profile</span>
                <span className="material-icons-round text-xs">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto no-scrollbar">
          <div className="py-4">
            <button onClick={() => { onNavigate(View.DASHBOARD); onClose(); }} className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors text-gray-600">
              <span className="material-icons-round">home</span>
              <span className="font-bold text-sm tracking-wide">HOME</span>
            </button>
            <button onClick={() => { onNavigate(View.PRODUCT_LIST); onClose(); }} className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors text-gray-600">
              <span className="material-icons-round">inventory_2</span>
              <span className="font-medium text-sm">Manage Products</span>
            </button>
            <button onClick={() => { onNavigate(View.INQUIRY_LIST); onClose(); }} className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors text-gray-600">
              <span className="material-icons-round">analytics</span>
              <span className="font-medium text-sm">Leads & Inquiries</span>
            </button>
          </div>

          <div className="border-b border-gray-100 mx-6"></div>

          <div className="pt-5 pb-2">
            <div className="px-6 mb-2">
              <span className="font-bold text-xs text-gray-400 uppercase tracking-wider">SELLER MANAGER</span>
            </div>
            <button className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors text-gray-600">
              <span className="material-icons-round">description</span>
              <span className="font-medium text-sm">Business Info</span>
            </button>
            <button onClick={() => { onNavigate(View.CHAT); onClose(); }} className="w-full flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors text-gray-600">
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="material-icons-round">chat_bubble_outline</span>
                  <span className="font-medium text-sm">Messages</span>
                </div>
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">20+</span>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Drawer;
