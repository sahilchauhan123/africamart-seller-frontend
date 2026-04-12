
import React, { useState } from 'react';
import {
    X,
    Check,
    Bookmark,
    Package,
    Banknote,
    MapPin,
    LayoutGrid,
    Timer,
    FileText,
    Star,
    Eye,
    Send,
    CheckCircle2,
    ShoppingCart,
    Images,
    BadgeCheck,
    HelpCircle,
    ChevronLeft,
    Phone
} from 'lucide-react';

import { useLeadsController } from '../../controllers/useLeadsController';

interface Props {
    onBack: () => void;
    onAccept: () => void;
    lead: any;
}

const LeadDetailsView: React.FC<Props> = ({ onBack, onAccept, lead }) => {
    const { state, actions } = useLeadsController();
    const { selectedCurrency } = state;
    const { setSelectedCurrency } = actions;

    if (!lead) {
        return (
            <div className="flex h-full items-center justify-center bg-slate-50">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">No Lead Selected</p>
            </div>
        );
    }

    // Mock exchange rates (relative to 1 LD)
    const rates: Record<string, number> = {
        USD: 1 / 193.50,
        EUR: 1 / 210.25,
        GBP: 1 / 245.10,
        NGN: 1 * 7.5,
    };

    const estValueLD = 300;
    const convertedValue = (estValueLD * rates[selectedCurrency]).toFixed(2);
    const exchangeRate = (1 / rates[selectedCurrency]).toFixed(2);

    return (
        <div className="bg-[#F8FAFC] font-sans text-slate-900 antialiased min-h-full flex flex-col focus:outline-none">
            {/* --- MOBILE VIEW --- */}
            <div className="lg:hidden flex flex-col bg-[#F3F4F6] min-h-screen">
                <main className="flex-grow p-4 pb-8 space-y-4">
                    {/* Image Section */}
                    <div className="relative w-full h-64 bg-white rounded-xl shadow-sm overflow-hidden flex items-center justify-center group">
                        <img
                            alt={lead.product_name}
                            className="object-contain w-full h-full p-4 transform transition-transform duration-500 group-hover:scale-105"
                            src={lead.product_image || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"}
                        />
                        <div className="absolute top-3 left-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-green-200">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            ACTIVE LEAD
                        </div>
                    </div>

                    {/* Title & Info Card */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 leading-tight mb-2 uppercase tracking-tight">{lead.product_name || "Product Inquiry"}</h2>
                                <div className="flex items-center text-sm text-slate-500">
                                    <Timer size={16} className="mr-1" />
                                    <span>Posted {lead.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 text-primary">
                                <Package size={24} />
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Quantity</span>
                            <span className="text-lg font-bold mt-1 tracking-tight">{lead.quantity} Units</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-2 text-green-600">
                                <Banknote size={24} />
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Est. Value</span>
                            <span className="text-lg font-bold mt-1 tracking-wider text-green-600 font-black">---</span>
                        </div>
                    </div>

                    {/* Specifications Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 bg-slate-50">
                            <h3 className="font-semibold text-gray-900">Lead Specifications</h3>
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="p-4 flex items-start gap-4">
                                <div className="mt-1 text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Delivery Location</p>
                                    <p className="font-medium text-gray-900">{lead.location || "Location Not Specified"}</p>
                                </div>
                            </div>
                            <div className="p-4 flex items-start gap-4">
                                <div className="mt-1 text-primary">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Buyer Requirement</p>
                                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                        Inquiry received for {lead.product_name}. Buyer needs {lead.quantity} units delivered.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 flex items-start gap-4">
                                <div className="mt-1 text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Buyer Contact</p>
                                    <p className="font-bold text-gray-900">{lead.buyer_phone || "No Phone Provided"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buyer Profile Card */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-black text-primary text-center">
                                {lead.initials}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 uppercase tracking-tight">{lead.companyName}</p>
                                {lead.buyer_phone && (
                                    <div className="flex items-center gap-1.5 text-primary text-xs font-bold mt-1 bg-primary/5 px-2 py-0.5 rounded w-fit border border-primary/10">
                                        <Phone size={12} />
                                        <span>{lead.buyer_phone}</span>
                                    </div>
                                )}
                                <div className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5 ml-0.5">
                                    Verified Buyer
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* --- DESKTOP VIEW --- */}
            <div className="hidden lg:flex flex-col h-full bg-[#F8FAFC]">
                {/* Desktop Action Sub-header */}
                <div className="hidden lg:block bg-white border-b border-slate-200 z-30 shadow-sm flex-none">
                    <div className="max-w-[1536px] mx-auto px-10 py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-slate-500 text-sm">
                            <span className="font-bold text-primary italic uppercase tracking-widest">Inquiry Details</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={onBack}
                                className="px-6 py-2 text-slate-600 font-bold text-sm rounded-lg hover:bg-slate-50 border border-slate-300 transition-all flex items-center space-x-2"
                            >
                                <ChevronLeft size={20} />
                                <span>BACK TO LEADS</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Content Area */}
                <main className="flex-1 bg-[#F8FAFC]">
                    <div className="max-w-[1536px] mx-auto p-4 lg:px-10 lg:pt-2 lg:pb-10 space-y-6">
                        {/* Stats Section / Key Info */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 lg:p-6 flex items-center shadow-sm">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mr-4 lg:mr-5 shrink-0">
                                    <ShoppingCart className="!w-8 !h-8" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Product Title</p>
                                    <h2 className="text-lg lg:text-xl font-extrabold text-slate-900 truncate uppercase tracking-tight">{lead.product_name}</h2>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 flex items-center shadow-sm">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                                    <Package size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Quantity</p>
                                    <p className="text-base lg:text-lg font-black tracking-tighter">{lead.quantity} Units</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 flex items-center shadow-sm">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                                    <Banknote size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Est. Value</p>
                                    <p className="text-base lg:text-lg font-black tracking-wider text-slate-300">N/A</p>
                                </div>
                            </div>
                        </div>

                        {/* Two-Column Layout for Desktop */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column: Image and Details */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Product Image Section */}
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                                    <div className="relative bg-slate-50 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                                        <img
                                            alt={lead.product_name}
                                            className="max-h-[250px] lg:max-h-[350px] object-contain p-6"
                                            src={lead.product_image || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"}
                                        />
                                        <div className="absolute top-4 lg:top-6 left-4 lg:left-6">
                                            <span className="bg-emerald-100 text-emerald-700 px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-bold flex items-center space-x-2 border border-emerald-200">
                                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                                <span>ACTIVE LEAD</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Specifications Section */}
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                                        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Lead Specifications</h3>
                                        <span className="text-[10px] lg:text-xs text-slate-400 font-black italic uppercase tracking-tighter">Received {lead.time}</span>
                                    </div>
                                    <div className="p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-10 gap-x-6">
                                        <div className="flex items-start space-x-4">
                                            <MapPin className="text-primary mt-1" size={24} />
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Delivery Location</p>
                                                <p className="text-slate-900 font-bold text-sm lg:text-base">{lead.location || "Location Not Specified"}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <Timer className="text-primary mt-1" size={24} />
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Inquiry Status</p>
                                                <span className="mt-1 inline-block bg-primary/10 text-primary px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-primary/20">{lead.status}</span>
                                            </div>
                                        </div>

                                        <div className="col-span-1 sm:col-span-2 pt-6 border-t border-slate-50">
                                            <div className="flex items-start space-x-4">
                                                <FileText className="text-primary mt-1" size={24} />
                                                <div className="flex-1">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Requirement Details</p>
                                                    <div className="bg-slate-50 p-4 lg:p-5 rounded-xl border-l-4 border-primary italic text-slate-700 leading-relaxed font-medium">
                                                        "Buyer {lead.companyName} is interested in purchasing {lead.quantity} units of {lead.product_name}. Please prepare a formal quotation for the inquiry."
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1 sm:col-span-2 pt-6 border-t border-slate-100">
                                            <div className="flex items-start space-x-4">
                                                <Phone className="text-primary mt-1" size={24} />
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Buyer Contact</p>
                                                    <div className="flex items-center gap-3">
                                                        <p className="text-slate-900 font-extrabold text-base lg:text-lg tracking-tight">{lead.buyer_phone || "Not Shared"}</p>
                                                        {lead.buyer_phone && (
                                                            <span className="bg-primary/5 text-primary text-[10px] font-black px-2 py-0.5 rounded border border-primary/10 uppercase tracking-widest">Available</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Profile Sidebar */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                                        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Buyer Profile</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-lg lg:text-xl font-black text-primary border border-primary/20 shadow-inner shrink-0">
                                                {lead.initials}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 text-sm lg:text-base uppercase tracking-tight">{lead.companyName}</h4>
                                                {lead.buyer_phone && (
                                                    <div className="flex items-center gap-2 text-primary text-xs font-bold mt-1 bg-primary/5 px-3 py-1 rounded-lg border border-primary/10 w-fit">
                                                        <Phone size={14} />
                                                        <span>{lead.buyer_phone}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <div className="flex items-center text-primary bg-primary/5 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">
                                                        Verified Buyer
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-6 border-slate-100" />
                                        <div className="bg-primary p-5 rounded-xl text-white relative overflow-hidden group">
                                            <div className="relative z-10">
                                                <div className="flex items-center text-[9px] font-black bg-white/20 w-fit px-2 py-0.5 rounded-full mb-3 tracking-widest">
                                                    <BadgeCheck size={14} className="mr-1" />
                                                    ELITE BUYER
                                                </div>
                                                <h4 className="font-bold text-sm mb-1 leading-tight uppercase tracking-tighter">Trusted Partner</h4>
                                                <p className="text-blue-100 text-[10px] lg:text-xs leading-relaxed font-medium opacity-80">This buyer has a history of high-value inquiries on AfricaMart.</p>
                                            </div>
                                            <div className="absolute -right-4 -bottom-4 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full blur-xl transition-transform group-hover:scale-150 duration-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LeadDetailsView;
