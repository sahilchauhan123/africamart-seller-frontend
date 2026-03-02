import React from 'react';
import { ArrowLeft, Info, Users, Download, Share2 } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const BusinessReportView: React.FC<Props> = ({ onBack }) => {
    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col font-sans">
            {/* Mobile View */}
            <div className="lg:hidden flex flex-col h-full bg-slate-50">
                <header className="bg-primary fixed top-0 left-0 right-0 z-50 px-4 h-16 shadow-md flex items-center shrink-0">
                    <div className="flex items-center w-full relative">
                        <button onClick={onBack} aria-label="Go back" className="text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10">
                            <ArrowLeft className="text-white" size={24} />
                        </button>
                        <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold tracking-wide pointer-events-none">
                            Business Report
                        </h1>
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10">
                            <Share2 size={20} />
                        </button>
                    </div>
                </header>

                <main className="px-4 py-6 space-y-6 flex-1 overflow-y-auto no-scrollbar pt-20">
                    {/* Total Leads */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative group">
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Leads</span>
                                <div className="relative group cursor-help">
                                    <Info size={16} className="text-slate-300" />
                                    {/* Tooltip hidden on click mostly on mobile, but keeping structure */}
                                </div>
                            </div>
                            <Users className="text-blue-600" size={24} />
                        </div>
                        <div className="flex items-baseline gap-3">
                            <h3 className="text-4xl font-bold text-slate-900">1,248</h3>
                            <div className="text-[11px] font-medium text-slate-500">
                                vs 1,102 <span className="text-slate-400">last month</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Product Views */}
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative group h-full flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Product Views</span>
                                <div className="relative group cursor-help">
                                    <Info size={16} className="text-slate-300" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-bold text-slate-900">8,420</h3>
                                <p className="text-[10px] text-slate-400 font-medium mt-1">Buyer interest is high</p>
                            </div>
                        </div>

                        {/* Response Rate */}
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative group h-full flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Response</span>
                                <div className="relative group cursor-help">
                                    <Info size={16} className="text-slate-300" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900 leading-none">320 <span className="text-slate-400 text-sm font-normal">/ 500</span></h3>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="bg-blue-600 h-full w-[64%]"></div>
                                </div>
                                <p className="text-[10px] text-slate-400 font-medium">64% of leads answered</p>
                            </div>
                        </div>
                    </div>

                    {/* Top Regions */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-slate-900">Top Regions</h2>
                            <div className="relative group cursor-help">
                                <Info size={18} className="text-slate-300" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">1</div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Monrovia</p>
                                        <p className="text-[11px] font-medium text-slate-400">Paynesville, Red Light, Sinkor</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">482 Leads</p>
                                    <div className="w-20 h-1 bg-slate-100 rounded-full mt-2 overflow-hidden ml-auto">
                                        <div className="bg-emerald-500 h-full w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">2</div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Ghana</p>
                                        <p className="text-[11px] font-medium text-slate-400">Kumasi, Accra, Tema</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">315 Leads</p>
                                    <div className="w-20 h-1 bg-slate-100 rounded-full mt-2 overflow-hidden ml-auto">
                                        <div className="bg-emerald-500 h-full w-[60%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">3</div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Nigeria</p>
                                        <p className="text-[11px] font-medium text-slate-400">Lagos, Abuja, Kano</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">228 Leads</p>
                                    <div className="w-20 h-1 bg-slate-100 rounded-full mt-2 overflow-hidden ml-auto">
                                        <div className="bg-emerald-500 h-full w-[45%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">4</div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Namibia</p>
                                        <p className="text-[11px] font-medium text-slate-400">Windhoek, Oshakati</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">194 Leads</p>
                                    <div className="w-20 h-1 bg-slate-100 rounded-full mt-2 overflow-hidden ml-auto">
                                        <div className="bg-emerald-500 h-full w-[38%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 pb-12">
                        <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-200 transition active:scale-[0.98]">
                            Download PDF Report
                            <Download size={18} />
                        </button>
                    </div>
                </main>
            </div>

            {/* Desktop Placeholder */}
            <div className="hidden lg:flex items-center justify-center h-full flex-1 bg-slate-50">
                <div className="text-center p-8">
                    <h2 className="text-xl font-bold text-slate-900">Business Report</h2>
                    <p className="text-slate-500 mt-2">This report is optimized for mobile viewing.</p>
                    <button onClick={onBack} className="mt-4 text-blue-600 hover:underline">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessReportView;
