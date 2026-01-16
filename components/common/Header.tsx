
import React from 'react';
import { View } from '../../types';

interface HeaderProps {
    onOpenDrawer: () => void;
    onNavigate: (view: View) => void;
    currentView?: View;
    onBack?: () => void;
    onAdd?: () => void;
    title?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    const { onOpenDrawer, onNavigate, currentView, onBack, title } = props;
    const isLeadDetails = currentView === View.LEAD_DETAILS;
    const isProductManager = currentView === View.PRODUCT_LIST;
    const isAddProduct = currentView === View.ADD_PRODUCT;

    const isInquiryList = currentView === View.INQUIRY_LIST;
    const isDashboard = currentView === View.DASHBOARD;
    const showBackButton = (isLeadDetails || isAddProduct || currentView === View.RECENT_UPLOADS || currentView === View.EDIT_PROFILE) && onBack;
    const isListView = isProductManager || isInquiryList || currentView === View.BUSINESS_INFO;
    return (
        <>
            {/* Mobile Header */}
            <header className={`bg-primary fixed top-0 left-0 right-0 z-50 px-4 h-16 shadow-md lg:hidden ${currentView === View.EDIT_PROFILE ? 'hidden' : 'flex'} items-center shrink-0`}>
                <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto w-full">
                    {showBackButton || isListView ? (
                        <div className="flex items-center w-full relative">
                            {isListView ? (
                                <button onClick={onOpenDrawer} className="text-white p-1 rounded-md hover:bg-white/10 transition flex items-center justify-center z-10">
                                    <span className="material-icons-round text-3xl leading-none">menu</span>
                                </button>
                            ) : (
                                <button onClick={onBack} aria-label="Go back" className="text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10">
                                    <span className="material-icons-round text-2xl">arrow_back</span>
                                </button>
                            )}
                            <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold tracking-wide pointer-events-none">
                                {title || 'Details'}
                            </h1>
                            <div className="flex items-center absolute right-0 z-10">
                                {props.onAdd && (
                                    <button
                                        onClick={props.onAdd}
                                        className="text-white p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                                    >
                                        <span className="material-icons-round text-2xl">add</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-3">
                                <button onClick={onOpenDrawer} className="text-white p-1 rounded-md hover:bg-white/10 transition flex items-center justify-center">
                                    <span className="material-icons-round text-3xl leading-none">menu</span>
                                </button>
                                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white/30 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => onNavigate(View.PROFILE)}>
                                    <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi46GtpiM2PCOQBHANxFI9RbtsMJaAKLO_wmlPAAI9F3P8WF4Ol7CjQYs4bVfLnxrSMCfSNXNeQZNlSe5fCq1nvg6iZK9cONpUeEMCCP0YutzWEoXUtRyuz5USsT-FRNDsMLjixVN0_9RsTDgd2TXFi9OZ8lX0X5GwJX3Zb-AjabzDVPsA4t09tANJ6-oBYYqtF1RK_ZE0PH2XuqcFnS0mHoUyU1lr8hykoYW9ig6b4rqQOWYvQFo666LkAWEMXSTWA60ibVTejNI" />
                                </div>
                            </div>
                            <div className="flex-grow flex justify-center">
                                <button className="text-white text-[10px] font-bold border border-white/30 px-3 py-1.5 rounded-full hover:bg-white/10 transition flex items-center gap-1">
                                    <span className="material-icons-round text-sm">swap_horiz</span>
                                    BUYER MODE
                                </button>
                            </div>
                            <div className="relative">
                                <button onClick={() => onNavigate(View.NOTIFICATIONS)} className="text-white p-1 rounded-md hover:bg-white/10 transition">
                                    <span className="material-icons-round text-2xl">notifications</span>
                                </button>
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary pointer-events-none"></span>
                            </div>
                        </>
                    )}
                </div>
            </header>

            {/* Desktop Header */}
            <header className="bg-primary px-10 h-[72px] hidden lg:flex items-center justify-between fixed top-0 right-0 left-0 lg:left-72 z-10 shrink-0">
                <div className="flex-1 flex items-center gap-4">
                    {showBackButton && !isListView && (
                        <>
                            <button onClick={onBack} className="text-white p-2 rounded-lg hover:bg-white/10 transition flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">arrow_back</span>
                            </button>
                            <div className="h-6 w-px bg-white/20"></div>
                        </>
                    )}
                    {title && currentView !== View.BUSINESS_INFO && <h1 className="text-white font-semibold text-base tracking-wide">{title}</h1>}
                    {currentView === View.BUSINESS_INFO && (
                        <div className="flex-grow max-w-2xl relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/60">search</span>
                            <input
                                className="w-full bg-white/10 border-transparent focus:border-white/20 focus:ring-0 text-white placeholder-white/60 rounded-lg pl-10 py-2 transition-all outline-none"
                                placeholder="Search documents..."
                                type="text"
                            />
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-6 ml-8">
                    <div className="flex gap-1">
                        <button onClick={() => onNavigate(View.NOTIFICATIONS)} className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all relative text-white">
                            <span className="material-symbols-outlined leading-none">notifications</span>
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-primary pointer-events-none"></span>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all text-white">
                            <span className="material-symbols-outlined leading-none">settings</span>
                        </button>
                    </div>
                    <div className="h-8 w-[1px] bg-white/20"></div>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-[10px] font-bold border border-white/20 transition-all flex items-center gap-2 whitespace-nowrap">
                        <span className="material-symbols-outlined text-sm">sync_alt</span>
                        SWITCH TO BUYER
                    </button>
                    <div className="flex items-center gap-3 pl-2" onClick={() => onNavigate(View.PROFILE)}>
                        <div className="text-right hidden sm:block cursor-pointer">
                            <p className="text-sm font-semibold text-white leading-none">Alex Morgan</p>
                            <p className="text-[10px] text-white/60 mt-1 uppercase tracking-tight">Premium Seller</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden ring-2 ring-white/20 shadow-sm cursor-pointer">
                            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi46GtpiM2PCOQBHANxFI9RbtsMJaAKLO_wmlPAAI9F3P8WF4Ol7CjQYs4bVfLnxrSMCfSNXNeQZNlSe5fCq1nvg6iZK9cONpUeEMCCP0YutzWEoXUtRyuz5USsT-FRNDsMLjixVN0_9RsTDgd2TXFi9OZ8lX0X5GwJX3Zb-AjabzDVPsA4t09tANJ6-oBYYqtF1RK_ZE0PH2XuqcFnS0mHoUyU1lr8hykoYW9ig6b4rqQOWYvQFo666LkAWEMXSTWA60ibVTejNI" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
