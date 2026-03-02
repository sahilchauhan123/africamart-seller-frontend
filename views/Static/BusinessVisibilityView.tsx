
import React from 'react';
import { View } from '../../types';
import { Store, X, ArrowRight, ArrowLeft, Youtube, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface Props {
    onBack: () => void;
    onSignup: () => void;
    onNavigate: (view: View) => void;
}

const BusinessVisibilityView: React.FC<Props> = ({ onBack, onSignup, onNavigate }) => {
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
                                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">Visibility</p>
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



                {/* Why Visibility Matters */}
                <section className="pb-12 pt-4 bg-section-grey">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Why Visibility Matters</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl group">
                                <span className="material-symbols-outlined text-primary text-5xl mb-6 block">search_insights</span>
                                <h4 className="text-xl font-bold mb-4">Top of Search Results</h4>
                                <p className="text-slate-600">Secure the coveted 'Position 0' for your most important keywords and bypass the competition instantly.</p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl group">
                                <span className="material-symbols-outlined text-primary text-5xl mb-6 block">verified</span>
                                <h4 className="text-xl font-bold mb-4">Premium Badge of Trust</h4>
                                <p className="text-slate-600">Display the Verified Premier Seller badge, proven to increase click-through rates by up to 45%.</p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl group">
                                <span className="material-symbols-outlined text-primary text-5xl mb-6 block">cell_tower</span>
                                <h4 className="text-xl font-bold mb-4">Social Media Spotlights</h4>
                                <p className="text-slate-600">Get featured in our weekly 'Supplier Spotlight' newsletters and social media campaigns across the continent.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Market Leader & SEO optimized Discovery */}
                <section className="py-16 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900 tracking-tight">The Market Leader Position</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    In a marketplace of thousands, standing out is the difference between a browse and a sale. Our Brand Visibility tools ensure your business is the first one buyers see when they look for quality products. By leveraging high-traffic placements across the AfricaMart homepage and category headers, we put your brand front and center.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900 tracking-tight">SEO Optimized Discovery</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    It's not just about internal traffic. We optimize your business profile for external search engines, ensuring your products rank high on Google and Bing. This double-layered approach guarantees that whether buyers are searching on AfricaMart or via global search engines, your storefront is perfectly positioned for discovery.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual Prestige section */}
                <section className="py-16 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-2xl relative">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-2">
                                                <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-slate-400">image</span>
                                                </div>
                                                <div>
                                                    <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                                                    <div className="h-3 w-20 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-wider flex items-center gap-1">
                                                <span className="material-symbols-outlined text-xs">workspace_premium</span>
                                                Featured Seller
                                            </div>
                                        </div>
                                        <div className="h-48 w-full bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                                            <span className="material-symbols-outlined text-6xl text-slate-200">inventory_2</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="h-6 w-24 bg-primary/10 rounded"></div>
                                            <div className="h-8 w-24 bg-primary rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">Visual Prestige in Every Search</h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    The "Featured Seller" tag is more than just a label—it's a signal of quality and reliability. In our marketplace, products with this tag receive 3x more inquiries compared to standard listings.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 font-medium text-slate-700">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        Prioritized placement in category feeds
                                    </li>
                                    <li className="flex items-center gap-3 font-medium text-slate-700">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        Enhanced card designs to grab attention
                                    </li>
                                    <li className="flex items-center gap-3 font-medium text-slate-700">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        Exclusive 'Premium' filter inclusion
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA section */}
                <section className="py-16 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">Ready to be the first choice?</h2>
                        <button onClick={onSignup} className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-xl transition-all transform hover:scale-[1.05] shadow-2xl shadow-blue-500/30 text-xl">
                            Promote Your Business?
                        </button>
                        <p className="mt-6 text-slate-500 text-sm">Join the top 5% of sellers dominating the African B2B market.</p>
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

export default BusinessVisibilityView;
