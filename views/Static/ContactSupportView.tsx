
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
    Youtube,
    Facebook,
    Instagram,
    Twitter,
    Linkedin
} from 'lucide-react';
import { View } from '../../types';

interface Props {
    onBack?: () => void;
    onNavigate?: (view: any) => void;
    onSignup?: () => void;
    isDashboardMode?: boolean;
}

const ContactSupportView: React.FC<Props> = ({ onBack, onNavigate, onSignup, isDashboardMode = false }) => {
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


                    {!isDashboardMode ? (
                        <>
                            {/* Mobile Brand Footer */}
                            <footer className="lg:hidden bg-[#001B4B] text-white pt-16 pb-12 px-8 mt-12 rounded-t-[3rem] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                <div className="max-w-md mx-auto relative z-10">
                                    {/* Brand Section */}
                                    <div className="flex flex-col items-center mb-12 text-center">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Store className="w-9 h-9 text-blue-400" />
                                            <div className="flex flex-col leading-none">
                                                <span className="text-2xl font-black tracking-tighter uppercase">Africa</span>
                                                <span className="text-2xl font-light tracking-widest uppercase text-white/70">Mart</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-blue-200/60 max-w-xs leading-relaxed font-medium">
                                            Empowering African businesses with digital tools for global trade and local excellence.
                                        </p>
                                    </div>

                                    {/* Links Grid */}
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16 px-4">
                                        <div className="space-y-5">
                                            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">B2B Growth</h4>
                                            <ul className="space-y-4 text-[13px] font-bold text-white/80">
                                                <li><a href="#" className="hover:text-white transition-colors">Sell on AfricaMart</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">RFQ Marketplace</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Bulk Trading</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Seller Success</a></li>
                                            </ul>
                                        </div>
                                        <div className="space-y-5">
                                            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Startup Info</h4>
                                            <ul className="space-y-4 text-[13px] font-bold text-white/80">
                                                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Tech Stack</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Verification</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Scale Program</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Social & Contact */}
                                    <div className="flex flex-col items-center border-t border-white/10 pt-12">
                                        <div className="flex gap-7 mb-10 text-white/40">
                                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Youtube size={22} /></a>
                                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Facebook size={22} /></a>
                                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Instagram size={22} /></a>
                                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Twitter size={22} /></a>
                                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Linkedin size={22} /></a>
                                        </div>

                                        <div className="text-[10px] font-black tracking-widest uppercase text-white/30 flex flex-wrap justify-center gap-x-5 gap-y-3 mb-8">
                                            <a href="#" className="hover:text-white">Privacy Policy</a>
                                            <a href="#" className="hover:text-white">Terms of Use</a>
                                            <a href="#" className="hover:text-white">Return Policy</a>
                                        </div>

                                        <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">
                                            © 2026 AfricaMart Inc. All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </footer>

                            {/* Desktop Footer */}
                            <footer className="hidden lg:block pt-16 bg-[#0026C0] text-white">
                                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
                                    <div className="md:col-span-4 space-y-8">
                                        <div className="flex items-center space-x-2">
                                            <Store className="w-8 h-8 text-white" />
                                            <span className="text-2xl font-bold tracking-tight text-white uppercase">AfricaMart</span>
                                        </div>
                                        <p className="text-white/70 max-w-sm leading-relaxed text-lg">
                                            We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa's economy through digital and cross boarder connectivity.
                                        </p>
                                    </div>
                                    <div className="md:col-span-2 space-y-6">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Business</h4>
                                        <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                                            <li><a className="hover:text-white transition-colors" href="#">Buy Leads</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Post RFQ</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Verified Suppliers</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Success Stories</a></li>
                                        </ul>
                                    </div>
                                    <div className="md:col-span-2 space-y-6">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Solutions</h4>
                                        <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                                            <li><a className="hover:text-white transition-colors" href="#">Logistics</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Trade Finance</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Escrow Payments</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">API & Integration</a></li>
                                        </ul>
                                    </div>
                                    <div className="md:col-span-2 space-y-6">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Company</h4>
                                        <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                                            <li><a className="hover:text-white transition-colors" href="#">Our Mission</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Investors</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Newsroom</a></li>
                                        </ul>
                                    </div>
                                    <div className="md:col-span-2 space-y-6">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Resources</h4>
                                        <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                                            <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Compliance</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                                            <li><a className="hover:text-white transition-colors" href="#">Trade Guides</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-[#001da1] py-10 px-4 border-t border-white/10">
                                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                                        <p className="text-white/60 text-sm font-medium">© 2026 AfricaMart Inc. All rights reserved.</p>
                                        <div className="flex items-center space-x-8">
                                            <a className="text-white/60 hover:text-white transition-colors" href="#">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.847.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                                            </a>
                                            <a className="text-white/60 hover:text-white transition-colors" href="#">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                            </a>
                                            <a className="text-white/60 hover:text-white transition-colors" href="#">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </>
                    ) : (
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
                    )}
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

export default ContactSupportView;
