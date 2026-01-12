
import React from 'react';
import { View } from '../../types';

interface HeaderProps {
    onOpenDrawer: () => void;
    onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDrawer, onNavigate }) => {
    return (
        <>
            {/* Mobile Header */}
            <header className="bg-primary sticky top-0 z-50 px-4 py-3 shadow-md lg:hidden">
                <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <button onClick={onOpenDrawer} className="text-white p-1 rounded-md hover:bg-white/10 transition">
                            <span className="material-icons-round text-3xl">menu</span>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white/30 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => onNavigate(View.PROFILE)}>
                            <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi46GtpiM2PCOQBHANxFI9RbtsMJaAKLO_wmlPAAI9F3P8WF4Ol7CjQYs4bVfLnxrSMCfSNXNeQZNlSe5fCq1nvg6iZK9cONpUeEMCCP0YutzWEoXUtRyuz5USsT-FRNDsMLjixVN0_9RsTDgd2TXFi9OZ8lX0X5GwJX3Zb-AjabzDVPsA4t09tANJ6-oBYYqtF1RK_ZE0PH2XuqcFnS0mHoUyU1lr8hykoYW9ig6b4rqQOWYvQFo666LkAWEMXSTWA60ibVTejNI" />
                        </div>
                    </div>
                    <div className="flex-grow max-w-md">
                        <div className="relative">
                            <input className="w-full pl-4 pr-10 py-2 rounded-full text-sm border-none focus:ring-2 focus:ring-blue-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm" placeholder="Search Service / Prod.." type="text" />
                            <span className="material-icons-round absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="text-white p-1 rounded-md hover:bg-white/10 transition">
                            <span className="material-icons-round text-2xl">notifications</span>
                        </button>
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary"></span>
                    </div>
                </div>
            </header>

            {/* Desktop Header */}
            <header className="bg-primary px-10 py-4 hidden lg:flex items-center justify-between sticky top-0 z-10 shrink-0">
                <div className="flex-1 max-w-xl relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-lg">search</span>
                    <input className="w-full pl-11 pr-6 py-2 rounded-full bg-white/10 border border-white/20 focus:ring-0 focus:border-white/40 text-sm placeholder:text-white/60 text-white transition-all" placeholder="Search orders, leads or products..." type="text" />
                </div>
                <div className="flex items-center gap-6 ml-8">
                    <div className="flex gap-1">
                        <button className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all relative text-white">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all text-white">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                    <div className="h-8 w-[1px] bg-white/20"></div>
                    <div className="flex items-center gap-3 pl-2" onClick={() => onNavigate(View.PROFILE)}>
                        <div className="text-right hidden sm:block cursor-pointer">
                            <p className="text-sm font-semibold text-white leading-none">Alex Morgan</p>
                            <p className="text-[10px] text-white/60 mt-1 uppercase tracking-tight">Premium Seller</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden ring-2 ring-white/20 shadow-sm cursor-pointer">
                            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Eqks3xaGkRR47eC_n-KD-ZZQxpPYJBc4QWzBAMTC9qrGmlEmTimWBqZ0CkaQ6HAIDTRY15qvQh-g8QvtTDWsiOgtQMB9OdWRLyYORjqKIN3j5eBynAlieVlutCuAgogW_0WELcadpEeEJk0TOxnQ-C1WHru2N_izun9fWOAsl1iJBtc821I4mTw-xVOLGHAyd-rXtEuKjJrOPEvULVrZBBNCvYVSHJwACytM9_WkDvTFm0keFxjX641HuX0Xw6XAqsCdRlNk2e8" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
