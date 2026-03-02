import React from 'react';
import { View } from '../../types';
import { MOCK_INQUIRIES } from '../../constants';
import Drawer from '../../components/common/Drawer';
import { useDashboardController } from '../../controllers/useDashboardController';
import {
    Plus,
    Eye,
    TrendingUp,
    Users,
    MapPin,
    Rocket,
    ArrowLeftRight,
    MessageSquare
} from 'lucide-react';

interface Props {
    onNavigate: (view: View) => void;
    onOpenDrawer: () => void;
}

const DashboardView: React.FC<Props> = ({ onNavigate, onOpenDrawer }) => {
    const { state, actions } = useDashboardController(onNavigate);
    const { isOverlayOpen, showWelcomeModal, activeMonthIndex, months, isProfileComplete } = state;
    const { setIsOverlayOpen, setShowWelcomeModal, setActiveMonthIndex, navigateTo } = actions;

    return (
        <div className="flex flex-col h-full bg-background-light overflow-hidden relative">
            {/* Unified Responsive Dashboard */}
            <main className="flex-1 overflow-y-auto no-scrollbar p-4 lg:p-10">
                <div className="max-w-7xl mx-auto space-y-8 lg:space-y-10">
                    {/* Quick Actions */}
                    <section>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            <button onClick={() => onNavigate(View.ADD_PRODUCT)} className="bg-white p-4 lg:p-5 rounded-xl shadow-sm border border-slate-200 transition-all flex flex-col items-center text-center group active:scale-95">
                                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2 lg:mb-3">
                                    <Plus size={20} />
                                </div>
                                <span className="font-bold text-slate-800 text-xs lg:text-[13px]">Add Product</span>
                                <span className="hidden lg:block text-[10px] text-slate-400 mt-0.5">Update inventory</span>
                            </button>
                            <button onClick={() => onNavigate(View.INQUIRY_LIST)} className="bg-white p-4 lg:p-5 rounded-xl shadow-sm border border-slate-200 transition-all flex flex-col items-center text-center group active:scale-95">
                                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-2 lg:mb-3">
                                    <Eye size={20} />
                                </div>
                                <span className="font-bold text-slate-800 text-xs lg:text-[13px]">Check Leads</span>
                                <span className="hidden lg:block text-[10px] text-slate-400 mt-0.5">12 new today</span>
                            </button>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                        <div className="lg:col-span-2 space-y-8">
                            {/* Business Overview */}
                            <section>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8 gap-4">
                                    <h2 className="text-lg lg:text-xl font-bold tracking-tight text-slate-800">Business Overview</h2>
                                    <div className="flex items-center gap-2 lg:gap-3 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
                                        <div className="flex-shrink-0 flex items-center bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm gap-2">
                                            <TrendingUp className="text-blue-500" size={16} />
                                            <span className="text-[10px] lg:text-[11px] font-bold text-slate-600 uppercase">VIEWS: <span className="text-blue-600">1.2K</span></span>
                                        </div>
                                        <div className="flex-shrink-0 flex items-center bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm gap-2">
                                            <Users className="text-purple-500" size={16} />
                                            <span className="text-[10px] lg:text-[11px] font-bold text-slate-600 uppercase">LEADS: <span className="text-purple-600">85</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                    {/* Leads Chart Card */}
                                    <div className="bg-white border border-slate-200 rounded-xl p-5 lg:p-6 relative overflow-hidden flex flex-col h-[200px] lg:h-[220px] shadow-sm">
                                        <div className="flex justify-between items-start mb-2 relative z-10">
                                            <div>
                                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">{months[activeMonthIndex].full} LEADS</p>
                                                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-800">{months[activeMonthIndex].leads}</h3>
                                            </div>
                                            <button
                                                onClick={() => onNavigate(View.PREMIUM_SERVICES)}
                                                className="bg-primary text-white text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors flex items-center gap-1 active:scale-95"
                                            >
                                                <Rocket size={12} />
                                                Boost
                                            </button>
                                        </div>
                                        <div className="flex-1 flex items-end gap-2 lg:gap-2.5 pb-0">
                                            {months.map((m, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => setActiveMonthIndex(idx)}
                                                    className={`${idx === activeMonthIndex ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-slate-200 hover:bg-slate-300'} w-full rounded-lg cursor-pointer transition-all`}
                                                    style={{ height: m.height }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Response Rate Card */}
                                    <div className="bg-white border border-slate-200 rounded-xl p-5 lg:p-6 flex flex-col h-[200px] lg:h-[220px] shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">RESPONSE RATE</p>
                                                <div className="flex items-baseline gap-2">
                                                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-800">92%</h3>
                                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Avg Score</span>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                                <MessageSquare className="text-emerald-500" size={16} />
                                            </div>
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-center text-[10px] font-bold">
                                                    <span className="text-emerald-600 flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                                        Within 24hrs
                                                    </span>
                                                    <span className="text-slate-800">115</span>
                                                </div>
                                                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-emerald-500 h-full w-[92%] rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                                        After 24hrs
                                                    </span>
                                                    <span>10</span>
                                                </div>
                                                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-slate-300 h-full w-[8%] rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="pt-2 border-t border-slate-100 mt-auto">
                                                <p className="text-[9px] text-slate-400 italic">Respond within 24h for higher visibility.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Profile Completion */}
                                {!isProfileComplete && (
                                    <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-6 lg:gap-8 border border-primary/20 shadow-sm relative overflow-hidden group">
                                        <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-full h-full -rotate-90">
                                                <circle className="text-slate-100" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                                                <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="26.38" strokeWidth="4"></circle>
                                            </svg>
                                            <span className="absolute text-xs font-bold text-slate-800">85%</span>
                                        </div>
                                        <div className="flex-1 text-center sm:text-left">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                                <h4 className="text-sm font-bold text-slate-800">Profile Completeness</h4>
                                                <button onClick={() => onNavigate(View.EDIT_PROFILE)} className="text-primary text-xs font-bold hover:underline">Complete now →</button>
                                            </div>
                                            <p className="text-[11px] text-slate-500 leading-relaxed">Increase your profile completeness score to gain 40% more visibility in buyer search results.</p>
                                        </div>
                                    </div>
                                )}
                            </section>
                        </div>

                        {/* Recent Inquiries */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center justify-between mb-6 lg:mb-8">
                                <h2 className="text-lg lg:text-xl font-bold tracking-tight text-slate-800">Recent Inquiries</h2>
                                <button onClick={() => onNavigate(View.INQUIRY_LIST)} className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">VIEW ALL</button>
                            </div>
                            <div className="space-y-3">
                                {MOCK_INQUIRIES.slice(0, 5).map((inq) => (
                                    <div key={inq.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-primary/20 transition-all cursor-pointer group active:scale-[0.98]" onClick={() => onNavigate(View.LEAD_DETAILS)}>
                                        <div className="flex items-start gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-sm font-bold text-orange-500 border border-orange-200 flex-shrink-0">{inq.initials}</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2 mb-0.5">
                                                    <h4 className="font-bold text-slate-800 text-sm group-hover:text-primary transition-colors truncate">{inq.companyName}</h4>
                                                    <span className="bg-primary/5 text-primary text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0">NEW</span>
                                                </div>
                                                <p className="text-[11px] text-slate-400 font-medium">{inq.time}</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-600 font-medium leading-normal line-clamp-1 mb-2">{inq.message}</p>
                                        <div className="flex items-center text-slate-500 text-[10px] font-bold tracking-wider">
                                            <MapPin size={12} className="mr-1.5 text-slate-400" />
                                            {inq.location.toUpperCase()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Onboarding Tip Popup */}
            {showWelcomeModal && !isProfileComplete && (
                <div className="fixed bottom-6 lg:bottom-10 right-4 lg:right-10 z-[110] w-[calc(100%-2rem)] lg:w-[380px] transform animate-in slide-in-from-bottom-5 fade-in duration-500">
                    <div className="bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden group border border-slate-200/60 ring-1 ring-black/5">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-primary group-hover:scale-110 transition-transform">
                            <Rocket size={100} className="-mt-4 -mr-4" />
                        </div>
                        <div className="flex gap-4 items-start relative z-10">
                            <div className="w-10 h-10 bg-blue-50/80 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100/50 shadow-inner">
                                <Rocket className="text-primary w-5 h-5 animate-bounce-slow" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-bold text-sm tracking-tight text-slate-800">Onboarding Tip</h3>
                                    <button onClick={() => setShowWelcomeModal(false)} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors p-1 -mr-2">
                                        <Plus className="rotate-45" size={16} />
                                    </button>
                                </div>
                                <p className="text-slate-500 text-[11px] leading-relaxed mb-4">
                                    Welcome! To start selling, please finish your <span className="text-slate-800 font-bold underline decoration-primary/40 hover:decoration-primary/80 transition-colors underline-offset-4 decoration-2">Profile Completeness</span> section.
                                </p>
                                <button
                                    onClick={() => {
                                        setShowWelcomeModal(false);
                                        onNavigate(View.EDIT_PROFILE);
                                    }}
                                    className="bg-primary hover:bg-blue-600 text-white text-[10px] font-bold py-2 px-6 rounded-full transition-all active:scale-95 shadow-lg shadow-primary/20 pointer-events-auto"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Switch Mode Overlay */}
            {isOverlayOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setIsOverlayOpen(false)}
                    ></div>
                    <div className="relative bg-white w-full max-w-md rounded-[28px] p-8 lg:p-10 shadow-2xl flex flex-col items-center text-center transform animate-in zoom-in fade-in duration-300">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0026C0] mb-6">
                            <ArrowLeftRight size={40} />
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 tracking-tight">Switch to Buyer Mode</h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 px-2">
                            Posting a requirement is a buyer-specific feature. Please switch to your buyer profile to continue.
                        </p>
                        <div className="w-full flex flex-col gap-3">
                            <button className="w-full bg-[#0026C0] text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-800 transition-colors shadow-lg shadow-[#0026C0]/20 active:scale-95">
                                Switch to Buyer
                            </button>
                            <button
                                onClick={() => setIsOverlayOpen(false)}
                                className="w-full bg-transparent text-slate-400 py-3 rounded-xl font-bold text-sm hover:text-slate-600 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardView;