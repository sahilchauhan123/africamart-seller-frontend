
import React from 'react';
import { View } from '../../types';
import { Store, X, ArrowRight, ArrowLeft, Youtube, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface Props {
    onBack: () => void;
    onSignup: () => void;
    onNavigate: (view: View) => void;
}

const ContinentalReachView: React.FC<Props> = ({ onBack, onSignup, onNavigate }) => {
    return (
        <div className="bg-white text-gray-900 antialiased min-h-screen font-display">
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
                                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">Reach</p>
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
                        <button onClick={() => onNavigate(View.ABOUT_US)} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors uppercase">ABOUT US</button>
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

            <main className="lg:pt-20">
                {/* Desktop Back Button */}
                <div className="hidden lg:flex max-w-6xl mx-auto px-6 py-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest">Back</span>
                    </button>
                </div>
                {/* Key Strategic Benefits - Moved Up */}
                <section className="pb-12 pt-4 bg-section-grey">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Key Strategic Benefits</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl group">
                                <span className="material-symbols-outlined text-primary text-5xl mb-6 block">local_shipping</span>
                                <h4 className="text-xl font-bold mb-4">Cross-Border Logistics</h4>
                                <p className="text-slate-600">End-to-end fulfillment support including customs clearance and regional warehousing solutions.</p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl group">
                                <span className="material-symbols-outlined text-primary text-5xl mb-6 block">currency_exchange</span>
                                <h4 className="text-xl font-bold mb-4">Multi-Currency Payments</h4>
                                <p className="text-slate-600">Accept payments in local currencies and settle in your preferred tender with competitive exchange rates.</p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl group">
                                <span className="material-symbols-outlined text-primary text-5xl mb-6 block">insights</span>
                                <h4 className="text-xl font-bold mb-4">Regional Market Insights</h4>
                                <p className="text-slate-600">Data-driven reports on regional demand, pricing trends, and competitor analysis across Africa.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seamless Borderless Trade - Moved Down */}
                <section className="py-16 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900 tracking-tight">Seamless Borderless Trade</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    AfricaMart is re-engineering the way local manufacturers and wholesalers operate. By removing the traditional friction of cross-border commerce, we enable you to list your products in one region and find eager buyers in another. Our platform handles the complexity of regional regulations, allowing you to focus purely on production and quality.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900 tracking-tight">Connecting the Ecosystem</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Whether you are based in Lagos, Nairobi, or Cairo, our digital infrastructure bridges the gap. We've built a unified network that connects verified manufacturers to a vast database of regional buyers. This isn't just a marketplace; it's a strategic expansion tool designed for the ambitious African entrepreneur.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visualize Your Expansion section */}
                <section className="py-16 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="relative flex justify-center items-center">
                                <div className="relative w-full aspect-square max-w-md bg-slate-50 rounded-full flex items-center justify-center p-8">
                                    <span className="material-symbols-outlined text-[280px] text-slate-200 opacity-50 select-none">map</span>
                                    <div className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_0_4px_rgba(0,38,192,0.2)] top-[30%] left-[25%]"></div>
                                    <div className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_0_4px_rgba(0,38,192,0.2)] top-[45%] left-[55%]"></div>
                                    <div className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_0_4px_rgba(0,38,192,0.2)] top-[70%] left-[40%]"></div>
                                    <div className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_0_4px_rgba(0,38,192,0.2)] top-[20%] right-[30%]"></div>
                                    <div className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_0_4px_rgba(0,38,192,0.2)] bottom-[20%] right-[40%]"></div>
                                    <svg className="absolute inset-0 w-full h-full opacity-30 stroke-primary/40 fill-none" viewBox="0 0 400 400">
                                        <path d="M100,120 L220,180 L160,280 L280,80" strokeDasharray="5 5" strokeWidth="1.5"></path>
                                        <path d="M220,180 L240,320" strokeDasharray="5 5" strokeWidth="1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight tracking-tight">Visualize Your Expansion</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Our platform provides more than just a listing; it provides a roadmap. Track your growth as your products move from one region to another, visualizing your trade routes and expanding your influence across the entire continent.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-xl">hub</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold">Centralized Logistics Hub</h5>
                                            <p className="text-slate-500 text-sm">Manage all continental shipments from a single, unified dashboard.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-xl">travel_explore</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold">Route Optimization</h5>
                                            <p className="text-slate-500 text-sm">Automated selection of the fastest and most cost-effective routes for your goods.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA section */}
                <section className="py-16 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">Ready to reach new frontiers?</h2>
                        <button onClick={onSignup} className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-xl transition-all transform hover:scale-[1.05] shadow-2xl shadow-blue-500/30 text-xl">
                            Expand Your Market Now
                        </button>
                        <p className="mt-6 text-slate-500 text-sm">Connect with buyers in 50+ African nations today.</p>
                    </div>
                </section>
            </main>

            {/* Mobile Footer */}
            <footer className="lg:hidden bg-[#001B4B] text-white pt-16 pb-12 px-8 mt-12 rounded-t-[3rem] relative overflow-hidden">
                <div className="max-w-md mx-auto relative z-10">
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

                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16 px-4">
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">B2B Growth</h4>
                            <ul className="space-y-4 text-[13px] font-bold text-white/80">
                                <li><a href="#" className="hover:text-white transition-colors">Sell on AfricaMart</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">RFQ Marketplace</a></li>
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Startup Info</h4>
                            <ul className="space-y-4 text-[13px] font-bold text-white/80">
                                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Verification</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-center border-t border-white/10 pt-12">
                        <div className="flex gap-7 mb-10 text-white/40">
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Youtube size={22} /></a>
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Facebook size={22} /></a>
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Instagram size={22} /></a>
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Twitter size={22} /></a>
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Linkedin size={22} /></a>
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
                            <li><a className="hover:text-white transition-colors" href="#">Verified Suppliers</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Solutions</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                            <li><a className="hover:text-white transition-colors" href="#">Logistics</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Escrow Payments</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Company</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                            <li><a className="hover:text-white transition-colors" href="#">Our Mission</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Newsroom</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Resources</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                            <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#001da1] py-10 px-4 border-t border-white/10">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-white/60 text-sm font-medium">© 2026 AfricaMart Inc. All rights reserved.</p>
                        <div className="flex items-center space-x-8">
                            <a href="#" className="text-white/60 hover:text-white"><Twitter size={20} /></a>
                            <a href="#" className="text-white/60 hover:text-white"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContinentalReachView;
