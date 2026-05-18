
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
            <header className={`bg-white fixed top-0 left-0 right-0 z-50 px-4 h-16 shadow-sm border-b border-slate-200 lg:hidden ${currentView === View.EDIT_PROFILE ? 'hidden' : 'flex'} items-center shrink-0`}>
                <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto w-full">
                    {(showBackButton && currentView !== View.SETTINGS) || isListView ? (
                        <div className="flex items-center w-full relative">
                            {isListView ? (
                                <button onClick={onOpenDrawer} className="text-slate-700 p-1 rounded-md hover:bg-slate-100 transition flex items-center justify-center z-10">
                                    <Menu className="text-slate-700" size={30} />
                                </button>
                            ) : (
                                <button onClick={onBack} aria-label="Go back" className="text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors z-10">
                                    <ArrowLeft className="text-slate-700" size={24} />
                                </button>
                            )}
                            <h1 className="absolute inset-0 flex items-center justify-center text-slate-800 text-lg font-semibold tracking-wide pointer-events-none">
                                {title || 'Details'}
                            </h1>
                            <div className="flex items-center absolute right-0 z-10">
                                {props.onAdd && (
                                    <button
                                        onClick={props.onAdd}
                                        className="text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors flex items-center justify-center"
                                    >
                                        <Plus className="text-slate-700" size={24} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-3">
                                <button onClick={onOpenDrawer} className="text-slate-700 p-1 rounded-md hover:bg-slate-100 transition flex items-center justify-center">
                                    <Menu className="text-slate-700" size={30} />
                                </button>
                                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center cursor-pointer text-slate-500" onClick={() => onNavigate(View.PROFILE)}>
                                    <User size={18} />
                                </div>
                            </div>
                            <div className="flex-grow flex justify-center">
                                <button className="text-slate-700 text-[10px] font-bold border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-100 transition flex items-center gap-1">
                                    <ArrowLeftRight size={16} />
                                    BUYER MODE
                                </button>
                            </div>
                            <div className="relative">
                                <button onClick={() => onNavigate(View.NOTIFICATIONS)} className="text-slate-700 p-1 rounded-md hover:bg-slate-100 transition">
                                    <Bell className="text-slate-700" size={24} />
                                </button>
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white pointer-events-none"></span>
                            </div>
                        </>
                    )}
                </div>
            </header>

            {/* Desktop Header */}
            <header className="bg-white border-b border-slate-200 shadow-sm px-10 h-[72px] hidden lg:flex items-center justify-between fixed top-0 right-0 left-0 lg:left-72 z-50 shrink-0">
                <div className="flex-1 flex items-center gap-4">
                    {showBackButton && !isListView && (
                        <>
                            <button onClick={onBack} className="text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition flex items-center justify-center">
                                <ArrowLeft className="text-slate-700" size={24} />
                            </button>
                            <div className="h-6 w-px bg-slate-200"></div>
                        </>
                    )}
                    {title && <h1 className="text-slate-800 font-semibold text-base tracking-wide">{title}</h1>}

                </div>
                <div className="flex items-center gap-6 ml-8">
                    <div className="flex gap-1">
                        <div className="relative group">
                            <button onClick={() => onNavigate(View.NOTIFICATIONS)} className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-full transition-all relative text-slate-700">
                                <Bell size={24} />
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white pointer-events-none"></span>
                            </button>
                            <span className="tooltip">Notifications</span>
                        </div>
                        <div className="relative group">
                            <button onClick={() => onNavigate(View.SETTINGS)} className={`w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-full transition-all text-slate-700 ${currentView === View.SETTINGS ? 'bg-slate-100' : ''}`}>
                                <Settings size={24} />
                            </button>
                            <span className="tooltip">Settings</span>
                        </div>
                    </div>
                    <div className="h-8 w-[1px] bg-slate-200"></div>
                    <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-[10px] font-bold border border-slate-200 transition-all flex items-center gap-2 whitespace-nowrap">
                        <ArrowLeftRight size={16} />
                        SWITCH TO BUYER
                    </button>
                    <div className="relative group flex items-center gap-3 pl-2 cursor-pointer" onClick={() => onNavigate(View.PROFILE)}>
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-slate-800 leading-none">{MOCK_USER.name}</p>
                            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tight">Verified Seller</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden ring-2 ring-slate-100 shadow-sm flex items-center justify-center text-slate-600">
                            <User size={24} />
                        </div>
                        <span className="tooltip">View Profile</span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
