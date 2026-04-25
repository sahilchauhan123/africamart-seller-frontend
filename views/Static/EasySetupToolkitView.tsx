import React from 'react';
import { View } from '../../types';
import { Store, X, ArrowRight, ArrowLeft, Youtube, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface Props {
    onBack: () => void;
    onSignup: () => void;
    onNavigate: (view: View) => void;
}

const EasySetupToolkitView: React.FC<Props> = ({ onBack, onSignup, onNavigate }) => {
    return (
        <div className="bg-white text-[#121018] antialiased min-h-screen font-display">
            {/* Mobile Header */}
            <header className="lg:hidden sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <Store size={24} />
                            </div>
                            <div>
                                <span className="text-xl font-bold tracking-tight text-slate-900">Lasomaa</span>
                                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">Easy Setup</p>
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
                            Lasomaa
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
                <div className="hidden lg:flex max-w-6xl mx-auto px-4 py-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest">Back</span>
                    </button>
                </div>
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-4 pb-24 px-6 bg-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="mb-8 inline-flex items-center justify-center p-6 bg-primary/5 rounded-full">
                            <span className="material-symbols-outlined text-primary text-6xl">magic_button</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-[#121018] leading-[1.1] tracking-tight mb-6">
                            Get Online in Minutes with <span className="text-primary">Easy Setup</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#675e8d] max-w-2xl mx-auto leading-relaxed font-medium">
                            Experience the most intuitive onboarding process designed to get your business running instantly. No technical knowledge required.
                        </p>

                    </div>
                </section>

                {/* 3-Step Onboarding */}
                <section className="py-20 px-6 bg-background-light">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                            {/* Connector Line (Desktop Only) */}
                            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-primary/20 -z-0"></div>
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center relative z-10 group">
                                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/30 transition-transform group-hover:scale-110">
                                    <span className="material-symbols-outlined text-3xl">how_to_reg</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#121018] mb-2">1. Register Business</h3>
                                <p className="text-[#675e8d] font-medium">Simple identity verification to get started securely.</p>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center relative z-10 group">
                                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/30 transition-transform group-hover:scale-110">
                                    <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#121018] mb-2">2. Add Products</h3>
                                <p className="text-[#675e8d] font-medium">Intuitive product upload with AI assistance for descriptions.</p>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center relative z-10 group">
                                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/30 transition-transform group-hover:scale-110">
                                    <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#121018] mb-2">3. Start Selling</h3>
                                <p className="text-[#675e8d] font-medium">Launch your store and reach millions of customers across Africa.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Toolkit Deep-Dive */}
                <section className="py-24 px-6 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl font-extrabold mb-8 text-slate-900 tracking-tight leading-tight">Professional Seller Toolkit</h2>
                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Smart Category Mapping</h4>
                                        <p className="text-slate-600 leading-relaxed font-medium">We automatically sorts your products into the most relevant categories, maximizing visibility and search rankings for potential buyers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Quick Product Publishing</h4>
                                        <p className="text-slate-600 leading-relaxed font-medium">Get your items live in seconds. Our simple platform lets you present your products to millions of buyers across the continent with ease.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined text-2xl">language</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Multilingual Localization</h4>
                                        <p className="text-slate-600 leading-relaxed font-medium">Translate product listings automatically to reach regional markets with localized language support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 w-full">
                            <div className="relative group">
                                {/* Decorative background frame (Desktop Only) */}
                                <div className="hidden lg:block absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10"></div>

                                <div className="bg-primary/5 p-4 rounded-[2rem] border border-primary/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                                    {/* Swiper Container */}
                                    <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-4">
                                        {[
                                            { src: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768897852/Screenshot_2026-01-20_140022_hyixhi.png", alt: "Manage Products" },
                                            { src: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768861863/Screenshot_2026-01-20_035440_iqjstq.png", alt: "Business Dashboard" },
                                            { src: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768897684/Screenshot_2026-01-20_041523_ux42m7.png", alt: "Communications Hub" }
                                        ].map((img, idx) => (
                                            <div key={idx} className="min-w-full snap-center">
                                                <img
                                                    alt={img.alt}
                                                    className="rounded-2xl shadow-lg w-full object-cover aspect-video lg:aspect-auto"
                                                    src={img.src}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pagination Dots */}
                                    <div className="flex justify-center gap-2 mt-2">
                                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                                        <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                                        <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                                    </div>

                                    {/* Swipe Indicator (Mobile Only) */}
                                    <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-widest pointer-events-none">
                                        <ArrowRight className="w-3 h-3" />
                                        Swipe to Explore
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Lasomaa */}
                <section className="py-24 px-6 bg-background-light">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Why Sellers Choose Lasomaa</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
                            {[
                                { icon: 'terminal', title: 'Zero Technical Skills', text: "If you can post on social media, you can run an Lasomaa store. It's that simple." },
                                { icon: 'verified', title: 'Professional Brand', text: "Get a sleek storefront that looks as good as global brands without hiring a designer." },
                                { icon: 'smartphone', title: 'Mobile Management', text: "Manage orders, update stock, and chat with buyers all from your mobile device." },
                                { icon: 'monitoring', title: 'Real-time Analytics', text: "Understand what's selling and why. Data-driven growth at your fingertips." }
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                                    <span className="material-symbols-outlined text-primary text-5xl mb-6 block transition-transform group-hover:scale-110">{benefit.icon}</span>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                                    <p className="text-slate-600 font-medium leading-relaxed">{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-4xl mx-auto rounded-[3.5rem] bg-[#001da1] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">Ready to scale your business?</h2>
                            <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto font-medium text-blue-50 leading-relaxed">Join 50,000+ active sellers across the continent and start your journey today.</p>
                            <button
                                onClick={onSignup}
                                className="w-full md:w-auto bg-white text-primary px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:shadow-[0_25px_60px_rgba(255,255,255,0.25)] transition-all active:scale-[0.98] group flex items-center justify-center gap-3 tracking-wide relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <span className="relative z-10 flex items-center gap-3">
                                    CREATE SELLER ACCOUNT
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <p className="mt-8 text-[11px] opacity-50 font-bold uppercase tracking-[0.3em]">No credit card required • Cancel anytime</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Mobile Footer */}
            <footer className="lg:hidden bg-[#001B4B] text-white pt-16 pb-12 px-8 mt-12 rounded-t-[3rem] relative overflow-hidden">
                <div className="max-w-md mx-auto relative z-10">
                    <div className="flex flex-col items-center mb-12 text-center">
                        <div className="flex items-center gap-2 mb-4">
                            <Store className="w-9 h-9 text-blue-400" />
                            <div className="flex flex-col leading-none text-left">
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
                                <li><a href="#" className="hover:text-white transition-colors">Sell on Lasomaa</a></li>
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

                    <div className="flex flex-col items-center border-t border-white/10 pt-12 text-center">
                        <div className="flex gap-7 mb-10 text-white/40">
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Youtube size={22} /></a>
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Facebook size={22} /></a>
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Instagram size={22} /></a>
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Twitter size={22} /></a>
                            <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Linkedin size={22} /></a>
                        </div>
                        <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">
                            © 2026 Lasomaa Inc. All rights reserved.
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
                            <span className="text-2xl font-bold tracking-tight text-white uppercase">Lasomaa</span>
                        </div>
                        <p className="text-white/70 max-w-sm leading-relaxed text-lg font-medium">
                            We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa's economy through digital and cross boarder connectivity.
                        </p>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Business</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-medium">
                            <li><a className="hover:text-white transition-colors" href="#">Buy Leads</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Verified Suppliers</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Solutions</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-medium">
                            <li><a className="hover:text-white transition-colors" href="#">Logistics</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Escrow Payments</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-medium">
                            <li><a className="hover:text-white transition-colors" href="#">Our Mission</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Newsroom</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-medium">
                            <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#001da1] py-10 px-4 border-t border-white/10">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-white/60 text-sm font-medium uppercase tracking-widest">© 2026 Lasomaa Inc. All rights reserved.</p>
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

export default EasySetupToolkitView;
