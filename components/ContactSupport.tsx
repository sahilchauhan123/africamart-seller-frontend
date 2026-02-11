
import React from 'react';
import {
    Search,
    HelpCircle,
    Headphones,
    AlertTriangle,
    ArrowRight,
    Paperclip,
    ShieldCheck,
    ChevronRight,
    Store,
    X,
} from 'lucide-react';
import { View } from '../types';

interface Props {
    onBack?: () => void;
    onNavigate?: (view: any) => void;
    onSignup?: () => void;
    isDashboardMode?: boolean;
}

const ContactSupport: React.FC<Props> = ({ onBack, onNavigate, onSignup, isDashboardMode = false }) => {
    const content = (
        <>
            {!isDashboardMode && (
                <>
                    {/* Mobile Header */}
                    <header className="lg:hidden sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex justify-between items-center h-16">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                        <Store size={24} />
                                    </div>
                                    <div>
                                        <span className="text-xl font-bold tracking-tight text-slate-900">AfricaMart</span>
                                        <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">Help & Support</p>
                                    </div>
                                </div>

                                <button onClick={onBack} className="p-2 text-slate-600">
                                    <X size={24} />
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Desktop Header */}
                    <header className="hidden lg:block fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
                        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
                            <div className="flex items-center">
                                <button onClick={onBack} className="text-2xl font-extrabold text-primary flex items-center gap-1">
                                    <Store className="w-8 h-8 text-primary" />
                                    AfricaMart
                                </button>
                            </div>
                            <nav className="flex items-center gap-10">
                                <button onClick={onBack} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors uppercase">THE PLATFORM</button>
                                <button className="text-sm font-bold text-primary uppercase">CONTACT SUPPORT</button>
                            </nav>
                            <div className="flex items-center gap-6">
                                <button onClick={() => onNavigate(View.LOGIN)} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">Login</button>
                                <button
                                    onClick={onSignup}
                                    className="bg-primary hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </header>
                </>
            )}

            <main className={`flex-1 overflow-y-auto no-scrollbar ${isDashboardMode ? 'bg-[#f8fafc] dark:bg-slate-900' : ''}`}>
                <div className={`flex flex-col min-h-[calc(100vh-72px)]`}>
                    <div className={`max-w-7xl w-full mx-auto px-6 lg:px-10 ${isDashboardMode ? 'pt-10' : 'pt-10 lg:pt-32'} pb-12`}>
                        <div className="text-center mb-16 pt-4 lg:pt-0">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                                <span className="md:hidden">Help & Support</span>
                                <span className="hidden md:block">How can we help you today?</span>
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                Search our knowledge base or reach out to our team of dedicated support specialists.
                            </p>
                            <div className="relative max-w-2xl mx-auto group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={24} />
                                <input
                                    className="w-full pl-16 pr-6 py-5 rounded-[2rem] border-none shadow-xl shadow-slate-200/50 dark:shadow-none dark:bg-slate-800 dark:border dark:border-slate-700 focus:ring-4 focus:ring-primary/10 text-lg font-medium transition-all"
                                    placeholder="Search for help topics, guides..."
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <HelpCircle className="text-primary dark:text-blue-400 group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Help Center</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Browse our detailed guides and frequently asked questions for quick answers.</p>
                                <div className="text-primary dark:text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Visit FAQs <ArrowRight size={18} />
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer border-primary/20">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <Headphones className="text-primary dark:text-blue-400 group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Chat with Support</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Connect instantly with one of our support representatives for live assistance.</p>
                                <div className="text-primary dark:text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Start Chatting <ArrowRight size={18} />
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                                <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
                                    <AlertTriangle className="text-rose-600 dark:text-rose-400 group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Report a Problem</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Experiencing a bug or technical issue? Let our engineering team know immediately.</p>
                                <div className="text-rose-600 dark:text-rose-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Report Issue <ArrowRight size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="bg-slate-50 dark:bg-slate-900/50 py-16 sm:py-20 border-y border-slate-100 dark:border-slate-800">
                        <div className="max-w-3xl mx-auto px-6">
                            <div className="sm:bg-white sm:dark:bg-slate-800 sm:rounded-[2.5rem] sm:shadow-xl sm:shadow-slate-200/50 dark:shadow-none sm:border border-slate-100 dark:border-slate-700 overflow-hidden">
                                <div className="sm:bg-slate-50 sm:dark:bg-slate-800/50 px-0 sm:px-10 py-0 sm:py-8 sm:border-b border-slate-100 dark:border-slate-700 text-center sm:text-left">
                                    <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Send us a Message</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">We typically respond within 2-4 business hours.</p>
                                </div>
                                <div className="px-0 py-10 sm:p-10">
                                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2.5">
                                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                                <input
                                                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 dark:bg-slate-900 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-700 dark:text-white"
                                                    placeholder="Briefly describe the issue"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="space-y-2.5">
                                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                                                <div className="relative">
                                                    <select className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 dark:bg-slate-900 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-700 dark:text-white">
                                                        <option value="Technical">Technical Support</option>
                                                        <option value="Billing">Billing & Invoices</option>
                                                        <option value="Account">Account Management</option>
                                                        <option value="Logistics">Logistics & Shipping</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                            <textarea
                                                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 dark:bg-slate-900 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-slate-700 dark:text-white resize-none"
                                                placeholder="Describe your problem in detail..."
                                                rows={6}
                                            ></textarea>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                                            <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest" type="button">
                                                <Paperclip size={18} />
                                                Attach files or screenshots
                                            </button>
                                            <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-wide hover:bg-blue-700 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all" type="submit">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="mt-auto max-w-7xl w-full mx-auto px-6 lg:px-10">
                        <div className="mt-8 lg:mt-10 border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-8 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 dark:text-slate-400 shadow-inner">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-white">Policies & Trust</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Your security is our top priority.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-8">
                                <a className="text-xs font-black text-slate-400 hover:text-primary uppercase tracking-widest transition-colors cursor-pointer" onClick={() => onNavigate?.(View.POLICIES)}>Terms of Service</a>
                                <a className="text-xs font-black text-slate-400 hover:text-primary uppercase tracking-widest transition-colors cursor-pointer" onClick={() => onNavigate?.(View.POLICIES)}>Privacy Policy</a>
                                <a className="text-xs font-black text-slate-400 hover:text-primary uppercase tracking-widest transition-colors cursor-pointer" onClick={() => onNavigate?.(View.POLICIES)}>Cookie Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );

    if (isDashboardMode) return content;

    return (
        <div className="bg-white text-gray-900 antialiased min-h-screen font-display transition-colors duration-200">
            {content}
        </div>
    );
};

export default ContactSupport;
