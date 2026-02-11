
import React from 'react';
import {
    ChevronLeft,
    MessageSquare,
    Clock,
    Zap,
    TrendingUp,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Timer,
    History
} from 'lucide-react';
import { View } from '../types';

interface Props {
    onBack: () => void;
    onNavigate: (view: View) => void;
}

const ResponseRateSummary: React.FC<Props> = ({ onBack, onNavigate }) => {
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
                    <h1 className="text-lg font-semibold tracking-tight text-white">Response Analysis</h1>
                </div>
                <div className="w-10"></div>
            </header>

            {/* Content Area */}
            <main className="flex-1 pt-20 pb-10 px-4 overflow-y-auto no-scrollbar lg:hidden">
                <div className="max-w-sm mx-auto space-y-6">

                    {/* Hero Stats Card */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                            <Zap size={100} />
                        </div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-5 shadow-sm">
                                <MessageSquare size={32} />
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Overall Response Rate</p>
                            <h2 className="text-5xl font-black text-slate-900 mb-2">92%</h2>
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
                                <TrendingUp size={16} className="text-emerald-500" />
                                <span className="text-xs font-bold text-emerald-600">Excellent Performance</span>
                            </div>
                        </div>
                    </div>

                    {/* Time Breakdown Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-4 shadow-sm">
                                <Clock size={20} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Avg Time</h4>
                            <p className="text-2xl font-black text-slate-800">4.5h</p>
                            <p className="text-[10px] text-green-500 font-bold mt-1">Faster than 80%</p>
                        </div>
                        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 mb-4 shadow-sm">
                                <Timer size={20} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">First Reply</h4>
                            <p className="text-2xl font-black text-slate-800">1.2h</p>
                            <p className="text-[10px] text-primary font-bold mt-1">Top Tier</p>
                        </div>
                    </div>

                    {/* Detailed Analysis Section */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-7 text-white overflow-hidden relative border border-white/10 shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mt-10 -mr-10"></div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                                <History size={20} className="text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm tracking-tight">Response Distribution</h3>
                                <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Last 30 Days</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-white/70 font-bold">Within 2 hours</span>
                                    <span className="font-black">65%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[65%] rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)]"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-white/70 font-bold">2 - 12 hours</span>
                                    <span className="font-black">27%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[27%] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.3)]"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-white/70 font-bold">More than 12 hours</span>
                                    <span className="font-black text-white/40">8%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-slate-600 w-[8%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Strategy Card */}
                    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0">
                            <Zap size={20} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-slate-800 mb-1">Impact on Sales</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Sellers who respond within <span className="text-primary font-bold">2 hours</span> are <span className="text-slate-900 font-bold">3x more likely</span> to close a lead successfully.
                            </p>
                        </div>
                    </div>

                    {/* Trust Factor Card */}
                    <div className="bg-emerald-500/5 rounded-[2rem] p-6 border border-emerald-500/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">High Trust Rating</h4>
                        <p className="text-xs text-slate-400 font-medium mb-6">Your quick response rate has awarded you the "Reliable Responder" badge.</p>
                        <button
                            onClick={onBack}
                            className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-2xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-all text-xs tracking-widest uppercase flex items-center gap-2"
                        >
                            Back to Dashboard <CheckCircle2 size={16} />
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ResponseRateSummary;
