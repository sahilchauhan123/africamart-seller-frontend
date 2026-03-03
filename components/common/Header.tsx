
import React from 'react';
import { MOCK_USER } from '../../constants';
import { View } from '../../types';
import {
    Menu,
    ArrowLeft,
    Plus,
    ArrowLeftRight,
    Bell,
    Search,
    User,
    Settings
} from 'lucide-react';

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
    const showBackButton = (isLeadDetails || isAddProduct || currentView === View.RECENT_UPLOADS || currentView === View.EDIT_PROFILE || currentView === View.SETTINGS) && onBack;
    const isListView = isProductManager || isInquiryList || currentView === View.BUSINESS_INFO;
    return (
        <>
            {/* Mobile Header */}
            <header className={`bg-primary fixed top-0 left-0 right-0 z-50 px-4 h-16 shadow-md lg:hidden ${currentView === View.EDIT_PROFILE ? 'hidden' : 'flex'} items-center shrink-0`}>
                <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto w-full">
                    {(showBackButton && currentView !== View.SETTINGS) || isListView ? (
                        <div className="flex items-center w-full relative">
                            {isListView ? (
                                <button onClick={onOpenDrawer} className="text-white p-1 rounded-md hover:bg-white/10 transition flex items-center justify-center z-10">
                                    <Menu className="text-white" size={30} />
                                </button>
                            ) : (
                                <button onClick={onBack} aria-label="Go back" className="text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10">
                                    <ArrowLeft className="text-white" size={24} />
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
                                        <Plus className="text-white" size={24} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-3">
                                <button onClick={onOpenDrawer} className="text-white p-1 rounded-md hover:bg-white/10 transition flex items-center justify-center">
                                    <Menu className="text-white" size={30} />
                                </button>
                                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 overflow-hidden flex-shrink-0 flex items-center justify-center cursor-pointer text-white/70" onClick={() => onNavigate(View.PROFILE)}>
                                    <User size={18} />
                                </div>
                            </div>
                            <div className="flex-grow flex justify-center">
                                <button className="text-white text-[10px] font-bold border border-white/30 px-3 py-1.5 rounded-full hover:bg-white/10 transition flex items-center gap-1">
                                    <ArrowLeftRight size={16} />
                                    BUYER MODE
                                </button>
                            </div>
                            <div className="relative">
                                <button onClick={() => onNavigate(View.NOTIFICATIONS)} className="text-white p-1 rounded-md hover:bg-white/10 transition">
                                    <Bell className="text-white" size={24} />
                                </button>
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary pointer-events-none"></span>
                            </div>
                        </>
                    )}
                </div>
            </header>

            {/* Desktop Header */}
            <header className="bg-primary px-10 h-[72px] hidden lg:flex items-center justify-between fixed top-0 right-0 left-0 lg:left-72 z-50 shrink-0">
                <div className="flex-1 flex items-center gap-4">
                    {showBackButton && !isListView && (
                        <>
                            <button onClick={onBack} className="text-white p-2 rounded-lg hover:bg-white/10 transition flex items-center justify-center">
                                <ArrowLeft className="text-white" size={24} />
                            </button>
                            <div className="h-6 w-px bg-white/20"></div>
                        </>
                    )}
                    {title && <h1 className="text-white font-semibold text-base tracking-wide">{title}</h1>}

                </div>
                <div className="flex items-center gap-6 ml-8">
                    <div className="flex gap-1">
                        <button onClick={() => onNavigate(View.NOTIFICATIONS)} className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all relative text-white">
                            <Bell size={24} />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-primary pointer-events-none"></span>
                        </button>
                        <button onClick={() => onNavigate(View.SETTINGS)} className={`w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all text-white ${currentView === View.SETTINGS ? 'bg-white/20' : ''}`}>
                            <Settings size={24} />
                        </button>
                    </div>
                    <div className="h-8 w-[1px] bg-white/20"></div>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-[10px] font-bold border border-white/20 transition-all flex items-center gap-2 whitespace-nowrap">
                        <ArrowLeftRight size={16} />
                        SWITCH TO BUYER
                    </button>
                    <div className="flex items-center gap-3 pl-2" onClick={() => onNavigate(View.PROFILE)}>
                        <div className="text-right hidden sm:block cursor-pointer">
                            <p className="text-sm font-semibold text-white leading-none">{MOCK_USER.name}</p>
                            <p className="text-[10px] text-white/60 mt-1 uppercase tracking-tight">Verified Seller</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden ring-2 ring-white/20 shadow-sm flex items-center justify-center cursor-pointer text-white/80">
                            <User size={24} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
