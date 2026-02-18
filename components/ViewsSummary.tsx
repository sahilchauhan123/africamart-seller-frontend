
import React from 'react';
import {
    ChevronLeft,
    TrendingUp,
    TrendingDown,
    Eye,
    MousePointer2,
    Users,
    Search,
    ShieldCheck,
    ArrowRight,
    ArrowUpRight
} from 'lucide-react';
import { View } from '../types';

interface Props {
    onBack: () => void;
    onNavigate: (view: View) => void;
}

const ViewsSummary: React.FC<Props> = ({ onBack, onNavigate }) => {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-sans antialiased text-slate-900">
            {/* Mobile Header */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-primary flex items-center px-4 z-50 shadow-md lg:hidden">
                <button
                    onClick={onBack}
                    className="p-2 -ml-2 text-white/80 hover:text-white transition-colors active:scale-90"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex-1 text-center">
                    <h1 className="text-lg font-semibold tracking-tight text-white">Total Views Summary</h1>
                </div>
                <div className="w-10"></div>
            </header>

            {/* Content Area */}
            <main className="flex-1 pt-20 pb-10 px-4 overflow-y-auto no-scrollbar lg:hidden">
                <div className="max-w-sm mx-auto space-y-6">

                    {/* Hero Stats Card */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                            <TrendingUp size={100} />
                        </div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-5 shadow-sm">
                                <Eye size={32} />
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Cumulative Visibility</p>
                            <h2 className="text-5xl font-black text-slate-900 mb-2">1,245</h2>
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full border border-green-100 shadow-sm">
                                <TrendingUp size={16} className="text-green-500" />
                                <span className="text-xs font-bold text-green-600">+12% vs last month</span>
                            </div>
                        </div>
                    </div>

                    {/* Performance Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 mb-4 shadow-sm">
                                <MousePointer2 size={20} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Click Rate</h4>
                            <p className="text-2xl font-black text-slate-800">4.2%</p>
                            <p className="text-[10px] text-green-500 font-bold mt-1">↑ 0.8%</p>
                        </div>
                        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-4 shadow-sm">
                                <Users size={20} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Direct Hits</h4>
                            <p className="text-2xl font-black text-slate-800">512</p>
                            <p className="text-[10px] text-amber-500 font-bold mt-1">↔ Stable</p>
                        </div>
                    </div>

                    {/* Search Engine Visibility */}
                    <div className="bg-slate-900 rounded-[2rem] p-6 text-white overflow-hidden relative border border-white/10 shadow-xl">
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mb-10 -mr-10"></div>
                        <div className="flex items-center justify-between mb-6 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                                    <Search size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm tracking-tight">External SEO Reach</h3>
                                    <p className="text-[10px] text-white/50 font-medium font-bold uppercase tracking-widest">Google & Bing Views</p>
                                </div>
                            </div>
                            <span className="text-xs font-black text-primary">LIVE</span>
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/5">
                                <span className="text-xs font-bold text-white/70">Google Search</span>
                                <span className="text-sm font-black">642</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/5">
                                <span className="text-xs font-bold text-white/70">AfricaMart Direct</span>
                                <span className="text-sm font-black">408</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/5">
                                <span className="text-xs font-bold text-white/70">Social Referrals</span>
                                <span className="text-sm font-black">195</span>
                            </div>
                        </div>
                    </div>

                    {/* Visibility Tip */}
                    <div className="bg-[#F0F4FF] rounded-3xl p-6 border border-primary/5 flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0">
                            <ShieldCheck size={20} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-slate-800 mb-1">Boost Your Visibility</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">
                                Complete your business profile documents to gain up to <span className="text-primary font-bold">40% more exposure</span> across search results.
                            </p>
                            <button
                                onClick={() => onNavigate(View.EDIT_PROFILE)}
                                className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest hover:underline"
                            >
                                Complete Now <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Action Card */}
                    <button
                        onClick={() => onNavigate(View.BUSINESS_VISIBILITY)}
                        className="w-full bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                                <TrendingUp size={24} />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-sm">Visibility Insights</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Detailed analytics report</p>
                            </div>
                        </div>
                        <ArrowUpRight size={20} className="text-slate-300 group-hover:text-primary transition-colors" />
                    </button>

                </div>
            </main>

            {/* Desktop Fallback (if any) */}
            <div className="hidden lg:flex flex-col items-center justify-center h-full text-slate-400">
                <Eye size={48} className="mb-4 opacity-20" />
                <p>Detailed view is optimized for mobile.</p>
            </div>
        </div>
    );
};

export default ViewsSummary;
