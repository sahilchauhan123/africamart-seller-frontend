
import React from 'react';
import { View } from '../types';

interface NotificationsProps {
    onBack: () => void;
    onNavigate: (view: View) => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onBack, onNavigate }) => {
    return (
        <>
            {/* Mobile View */}
            <div className="flex flex-col min-h-full bg-background-light font-display text-[#121417] relative antialiased lg:hidden">
                {/* Header - App branded style */}
                <header className="bg-primary sticky top-0 z-50 px-4 py-4 flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-3">
                        <button onClick={onBack} className="text-white flex items-center p-1 rounded-full hover:bg-white/10 transition-colors">
                            <span className="material-icons-round" style={{ fontSize: '24px' }}>arrow_back_ios</span>
                        </button>
                        <h1 className="text-white text-lg font-bold tracking-tight">Notifications</h1>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                        <span className="material-icons-round text-white" style={{ fontSize: '20px' }}>more_vert</span>
                    </div>
                </header>

                {/* Mark all as read bar */}
                <div className="flex items-center justify-end px-4 py-3 bg-white border-b border-gray-100 sticky top-16 z-40">
                    <button className="text-primary text-sm font-semibold hover:opacity-80 transition-opacity">
                        Mark all as read
                    </button>
                </div>

                <main className="max-w-md mx-auto w-full flex-1 px-0 pb-12">
                    <section>
                        <h3 className="text-[#677583] text-[10px] font-bold uppercase tracking-widest px-4 pt-6 pb-2">Today</h3>

                        {/* Notification Item 1 - New Inquiry */}
                        <div className="bg-[#E8F2F7] border-l-4 border-primary px-4 py-5 mb-0.5 transition-all hover:bg-white cursor-pointer relative">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <span className="material-icons-round" style={{ fontSize: '22px' }}>inbox</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <p className="font-bold text-[15px] leading-tight text-[#121417]">New Inquiry Received</p>
                                        <div className="flex items-center gap-2 pr-1">
                                            <p className="text-[10px] font-medium text-gray-500 whitespace-nowrap">15m ago</p>
                                            <div className="w-2 h-2 bg-[#3DA5DC] rounded-full"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#4a5561] leading-snug line-clamp-2">
                                        A buyer is interested in 'Industrial Valves from Delhi'. View details to send a quotation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Notification Item 2 - Buyer Reply */}
                        <div className="bg-[#E8F2F7] border-l-4 border-primary px-4 py-5 mb-0.5 transition-all hover:bg-white cursor-pointer relative">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                    <span className="material-icons-round" style={{ fontSize: '22px' }}>chat</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <p className="font-bold text-[15px] leading-tight text-[#121417]">Buyer Replied</p>
                                        <div className="flex items-center gap-2 pr-1">
                                            <p className="text-[10px] font-medium text-gray-500 whitespace-nowrap">1h ago</p>
                                            <div className="w-2 h-2 bg-[#3DA5DC] rounded-full"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#4a5561] leading-snug line-clamp-2">
                                        New message regarding 'PVC Pipes'. Quick replies are 3x more likely to convert to an order.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[#677583] text-[10px] font-bold uppercase tracking-widest px-4 pt-6 pb-2">Yesterday</h3>

                        {/* Notification Item 3 - Missed Inquiry */}
                        <div className="bg-white border-b border-gray-50 px-4 py-5 transition-all hover:bg-[#F8FAFC] cursor-pointer">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                                    <span className="material-icons-round" style={{ fontSize: '22px' }}>notification_important</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <p className="font-bold text-[15px] leading-tight text-[#121417]">Missed Inquiry Alert</p>
                                        <p className="text-[10px] font-medium text-gray-400 whitespace-nowrap">4h ago</p>
                                    </div>
                                    <p className="text-sm text-[#677583] leading-snug line-clamp-2">
                                        You have pending inquiries. Remember that faster replies significantly increase your closing chances.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Notification Item 4 - New Buyer Requirement */}
                        <div className="bg-white border-b border-gray-50 px-4 py-5 transition-all hover:bg-[#F8FAFC] cursor-pointer">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <span className="material-icons-round" style={{ fontSize: '22px' }}>assignment</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <p className="font-bold text-[15px] leading-tight text-[#121417]">New Buyer Requirement</p>
                                        <p className="text-[10px] font-medium text-gray-400 whitespace-nowrap">1d ago</p>
                                    </div>
                                    <p className="text-sm text-[#677583] leading-snug line-clamp-2">
                                        A new requirement for 'Electrical Cables' matches your profile. Apply now to get the lead.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[#677583] text-[10px] font-bold uppercase tracking-widest px-4 pt-6 pb-2">Earlier</h3>

                        {/* Notification Item 5 - Profile Incomplete */}
                        <div className="bg-white border-b border-gray-50 px-4 py-5 transition-all hover:bg-[#F8FAFC] cursor-pointer">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                                    <span className="material-icons-round" style={{ fontSize: '22px' }}>account_circle</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <p className="font-bold text-[15px] leading-tight text-[#121417]">Profile Incomplete</p>
                                        <p className="text-[10px] font-medium text-gray-400 whitespace-nowrap">2d ago</p>
                                    </div>
                                    <p className="text-sm text-[#677583] leading-snug line-clamp-2">
                                        Complete your business profile to gain buyer trust and get more high-quality inquiries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Notification Item 6 - Product Needs Update */}
                        <div className="bg-white border-b border-gray-50 px-4 py-5 transition-all hover:bg-[#F8FAFC] cursor-pointer">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                                    <span className="material-icons-round" style={{ fontSize: '22px' }}>cancel</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <p className="font-bold text-[15px] leading-tight text-[#121417]">Product Needs Update</p>
                                        <p className="text-[10px] font-medium text-gray-400 whitespace-nowrap">3d ago</p>
                                    </div>
                                    <p className="text-sm text-[#677583] leading-snug line-clamp-2" style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        Listing for 'Hydraulic Pump' was rejected due to missing specifications. Update to resume sales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block w-full bg-white dark:bg-slate-950 font-display">
                <div className="w-full px-10 py-10">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white cursor-pointer hover:text-primary transition-colors">Notifications</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Stay updated with your latest business activities.</p>
                        </div>
                        <button className="flex items-center gap-2 text-primary dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-4 py-2 rounded-md font-medium text-sm transition-colors border border-blue-100 dark:border-blue-900/50">
                            <span className="material-symbols-outlined text-[18px]">done_all</span>
                            Mark all as read
                        </button>
                    </div>
                    <div className="space-y-12">
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] whitespace-nowrap">Today</h3>
                                <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
                                <div className="py-6 flex items-start gap-5 group relative">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">Inquiry</span>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-semibold text-slate-900 dark:text-white cursor-pointer hover:text-primary transition-colors" onClick={() => onNavigate(View.INQUIRY_LIST)}>New Inquiry Received</h4>
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                </div>
                                            </div>
                                            <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">15m ago</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-[14px] mt-1.5 leading-relaxed max-w-4xl">
                                            A buyer from Delhi is interested in <span className="text-slate-900 dark:text-slate-200 font-medium">'Industrial Valves'</span>. View details to send a professional quotation and close the deal.
                                        </p>
                                    </div>
                                </div>
                                <div className="py-6 flex items-start gap-5 group relative">
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-emerald-600 text-[20px]">chat</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5">Response</span>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-semibold text-slate-900 dark:text-white cursor-pointer hover:text-primary transition-colors" onClick={() => onNavigate(View.CHAT)}>Buyer Replied</h4>
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                </div>
                                            </div>
                                            <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">1h ago</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-[14px] mt-1.5 leading-relaxed max-w-4xl">
                                            New message regarding <span className="text-slate-900 dark:text-slate-200 font-medium">'PVC Pipes'</span>. Quick replies are 3x more likely to convert to an order according to our stats.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] whitespace-nowrap">Yesterday</h3>
                                <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
                                <div className="py-6 flex items-start gap-5 group relative">
                                    <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-red-500 text-[20px]">notifications_active</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-red-500 dark:text-red-400 uppercase tracking-wider mb-0.5">Alert</span>
                                                <h4 className="font-semibold text-slate-900 dark:text-white cursor-pointer hover:text-primary transition-colors" onClick={() => onNavigate(View.INQUIRY_LIST)}>Missed Inquiry Alert</h4>
                                            </div>
                                            <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">4h ago</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-[14px] mt-1.5 leading-relaxed max-w-4xl">
                                            You have pending inquiries from yesterday. Remember that faster replies significantly increase your seller rating and trust score.
                                        </p>
                                    </div>
                                </div>
                                <div className="py-6 flex items-start gap-5 group relative">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-blue-500 text-[20px]">assignment</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">Inquiry</span>
                                                <h4 className="font-semibold text-slate-900 dark:text-white cursor-pointer hover:text-primary transition-colors" onClick={() => onNavigate(View.INQUIRY_LIST)}>New Buyer Requirement</h4>
                                            </div>
                                            <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">1d ago</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-[14px] mt-1.5 leading-relaxed max-w-4xl">
                                            A new requirement for <span className="text-slate-900 dark:text-slate-200 font-medium">'Electrical Cables'</span> matches your profile categories. Apply now to get the contact info.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] whitespace-nowrap">Earlier</h3>
                                <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
                                <div className="py-6 flex items-start gap-5 group relative">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-orange-500 text-[20px]">account_circle</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-orange-500 dark:text-orange-400 uppercase tracking-wider mb-0.5">System</span>
                                                <h4 className="font-semibold text-slate-900 dark:text-white cursor-pointer hover:text-primary transition-colors" onClick={() => onNavigate(View.EDIT_PROFILE)}>Profile Incomplete</h4>
                                            </div>
                                            <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">2d ago</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-[14px] mt-1.5 leading-relaxed max-w-4xl">
                                            Complete your business profile including GST and warehouse location to gain buyer trust and get more high-quality inquiries.
                                        </p>
                                    </div>
                                </div>
                                <div className="py-6 flex items-start gap-5 group relative">
                                    <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-red-500 text-[20px]">error</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-red-500 dark:text-red-400 uppercase tracking-wider mb-0.5">Alert</span>
                                                <h4 className="font-semibold text-slate-900 dark:text-white cursor-pointer hover:text-primary transition-colors" onClick={() => onNavigate(View.PRODUCT_LIST)}>Product Needs Update</h4>
                                            </div>
                                            <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">3d ago</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-[14px] mt-1.5 leading-relaxed max-w-4xl">
                                            Listing for <span className="text-slate-900 dark:text-slate-200 font-medium">'Hydraulic Pump'</span> was rejected due to missing technical specifications. Update to resume visibility.
                                        </p>
                                        <button className="mt-4 px-3 py-1.5 rounded bg-slate-50 dark:bg-slate-900 text-[13px] font-semibold text-primary dark:text-blue-400 inline-flex items-center gap-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors border border-slate-200 dark:border-slate-800">
                                            Update Listing <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="mt-16 flex justify-center pb-20">
                        <button className="bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-8 py-2.5 rounded-full font-medium text-sm hover:text-primary dark:hover:text-blue-400 transition-all border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-blue-900/50">
                            Load older notifications
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Notifications;
