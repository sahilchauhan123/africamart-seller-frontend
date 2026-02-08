import React from 'react';
import {
    Rocket,
    Search,
    Bot,
    ChevronRight,
    RotateCcw,
    Users,
    Store,
    TrendingUp,
    Truck,
    Globe,
    Check,
    MapPin,
    Mail,
    ArrowRight,
    X
} from 'lucide-react';
import { View } from '../types';

interface Props {
    onBack: () => void;
    onSignup: () => void;
    onNavigate: (view: View) => void;
}

const Roadmap: React.FC<Props> = ({ onBack, onSignup, onNavigate }) => {
    return (
        <div className="bg-white text-gray-900 antialiased min-h-screen">
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
                                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">Our Road Map</p>
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
                        <button onClick={() => onNavigate(View.ABOUT_US)} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors uppercase">ABOUT US</button>
                    </nav>
                    <div className="flex items-center gap-6">
                        <a className="text-sm font-bold text-slate-700 hover:text-primary transition-colors" href="#">LOGIN</a>
                        <button
                            onClick={onSignup}
                            className="bg-primary hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Width Hero Section */}
            <section
                className="w-full min-h-[480px] flex flex-col items-center justify-center p-8 relative overflow-hidden bg-cover bg-center bg-no-repeat lg:pt-32"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 38, 192, 0.85), rgba(0, 20, 100, 0.9)), url("https://media.istockphoto.com/id/1364023819/vector/africa-map-with-polygonal-glowing-shapes.jpg?s=612x612&w=0&k=20&c=xo_R85TYnK4LJyw4Ot1N3KMhzL3HgSov31KtEel2OB0=")`
                }}
            >
                <div className="flex flex-col gap-8 text-center max-w-3xl z-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                            Our Vision & <span className="text-blue-300">Strategic Roadmap</span>
                        </h1>
                        <p className="text-white/90 text-sm font-normal leading-relaxed md:text-xl max-w-2xl mx-auto">
                            Building the future of B2B ecommerce infrastructure across Africa. From our initial launch to pan-African trade integration, explore our journey.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-white text-primary text-base font-bold leading-normal transition-all hover:scale-105 hover:bg-blue-50 shadow-xl shadow-black/20">
                            Download Roadmap PDF
                        </button>
                        <button onClick={onSignup} className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-transparent border-2 border-white/30 text-white text-base font-bold leading-normal transition-all hover:bg-white/10 backdrop-blur-sm">
                            Join the Network
                        </button>
                    </div>
                </div>
            </section>

            <main className="flex flex-col items-center py-16 px-4 max-w-6xl mx-auto">
                <div className="w-full flex flex-col gap-20">

                    {/* Launch Visualization Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-[#111218] text-2xl font-bold leading-tight tracking-[-0.015em]">Operational Hub</h2>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">Live Now</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2 bg-slate-50 rounded-3xl shadow-sm border border-gray-100 p-2 overflow-hidden relative h-[400px]">
                                <div className="absolute inset-0 bg-[#f0f4ff] flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        {/* Map Illustration Placeholder */}
                                        <img
                                            src="https://media.istockphoto.com/id/1364023819/vector/africa-map-with-polygonal-glowing-shapes.jpg?s=612x612&w=0&k=20&c=xo_R85TYnK4LJyw4Ot1N3KMhzL3HgSov31KtEel2OB0="
                                            alt="Africa Map"
                                            className="w-full h-full object-contain opacity-20 grayscale"
                                        />
                                        {/* Pin Effect */}
                                        <div className="absolute top-[45%] left-[32%] flex flex-col items-center">
                                            <div className="relative flex items-center justify-center">
                                                <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
                                                <div className="absolute w-6 h-6 bg-primary/40 rounded-full"></div>
                                                <MapPin className="text-primary z-10" size={32} />
                                            </div>
                                            <div className="mt-2 bg-white px-3 py-1 rounded shadow-lg border border-primary/20">
                                                <p className="text-xs font-bold text-primary">Monrovia Hub</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
                                <div>
                                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Current Hub</h4>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Globe className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold">Monrovia, Liberia</p>
                                            <p className="text-sm text-gray-500">Established Q3 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-gray-100" />
                                <div>
                                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Target Regions</h4>
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex items-center gap-2 text-sm">
                                            <ChevronRight className="text-primary" size={16} />
                                            <span>West Africa (Ghana, Nigeria)</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <ChevronRight className="text-primary" size={16} />
                                            <span>East Africa (Kenya, Rwanda)</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <ChevronRight className="text-primary" size={16} />
                                            <span>Southern Africa (South Africa)</span>
                                        </li>
                                    </ul>
                                </div>
                                <button className="mt-auto w-full py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors">
                                    Expansion Details
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* SectionHeader */}
                    <div className="text-center">
                        <h2 className="text-[#111218] text-3xl font-bold leading-tight tracking-[-0.015em]">The Strategic Roadmap</h2>
                        <p className="text-gray-500 mt-2">A 5-phase approach to revolutionizing African B2B trade.</p>
                    </div>

                    {/* Timeline Container */}
                    <div className="flex flex-col gap-0 max-w-3xl mx-auto w-full relative">
                        {/* Vertical Progress Line */}
                        <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-gray-200"></div>

                        {/* Phase 1: Completed */}
                        <div className="grid grid-cols-[40px_1fr] gap-x-6 pb-12 relative group">
                            <div className="flex flex-col items-center pt-2 z-10">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white ring-8 ring-white">
                                    <Check size={20} />
                                </div>
                            </div>
                            <div className="flex flex-col bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-all group-hover:shadow-md">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <Rocket className="text-primary" size={20} />
                                        <h3 className="text-lg font-bold">Phase 1: Platform Launch</h3>
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">Completed</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Development of core B2B ecommerce infrastructure
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Successful pilot program in Monrovia hub
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Integration of local mobile payment gateways
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2: Active */}
                        <div className="grid grid-cols-[40px_1fr] gap-x-6 pb-12 relative group">
                            <div className="flex flex-col items-center pt-2 z-10">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-white">
                                    <Users size={20} />
                                </div>
                            </div>
                            <div className="flex flex-col bg-white p-6 rounded-3xl shadow-sm border-2 border-primary/30 shadow-primary/10 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <Store className="text-primary" size={20} />
                                        <h3 className="text-lg font-bold">Phase 2: Seller Onboarding</h3>
                                    </div>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider animate-pulse">Active</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-gray-600 text-sm font-semibold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Vetting and verification of 500+ local wholesale vendors
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Launch of the Seller Dashboard and Inventory Management
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Bulk listing tools and digital storefront templates
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3: Upcoming */}
                        <div className="grid grid-cols-[40px_1fr] gap-x-6 pb-12 relative group">
                            <div className="flex flex-col items-center pt-2 z-10">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 ring-8 ring-white">
                                    <TrendingUp size={20} />
                                </div>
                            </div>
                            <div className="flex flex-col bg-white/60 p-6 rounded-3xl border border-gray-100 opacity-80 group-hover:opacity-100 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <RotateCcw className="text-gray-500" size={20} />
                                        <h3 className="text-lg font-bold">Phase 3: Buyer Growth</h3>
                                    </div>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Upcoming</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Aggressive digital marketing across ECOWAS region
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Implementation of buyer credit and BNPL options
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Mobile app launch for retailers and small businesses
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 4: Upcoming */}
                        <div className="grid grid-cols-[40px_1fr] gap-x-6 pb-12 relative group">
                            <div className="flex flex-col items-center pt-2 z-10">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 ring-8 ring-white">
                                    <Truck size={20} />
                                </div>
                            </div>
                            <div className="flex flex-col bg-white/60 p-6 rounded-3xl border border-gray-100 opacity-80 group-hover:opacity-100 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <Truck className="text-gray-500" size={20} />
                                        <h3 className="text-lg font-bold">Phase 4: Logistics Integration</h3>
                                    </div>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Upcoming</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Last-mile delivery partnership network expansion
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Smart warehousing solutions in strategic ports
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Real-time cross-border tracking system
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 5: Expansion */}
                        <div className="grid grid-cols-[40px_1fr] gap-x-6 relative group">
                            <div className="flex flex-col items-center pt-2 z-10">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 ring-8 ring-white">
                                    <Globe size={20} />
                                </div>
                            </div>
                            <div className="flex flex-col bg-white/60 p-6 rounded-3xl border border-gray-100 opacity-80 group-hover:opacity-100 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <Globe className="text-gray-500" size={20} />
                                        <h3 className="text-lg font-bold">Phase 5: Pan-African Expansion</h3>
                                    </div>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Upcoming</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Full AfCFTA compliance and trade facilitation
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Scaling to 15+ African nations
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                        Global export gateway for African manufacturers
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* HeadlineText for Newsletter/Action */}
                    <div className="bg-primary/5 rounded-3xl p-10 text-center flex flex-col items-center gap-4">
                        <h2 className="text-[#111218] text-[28px] font-bold leading-tight">Join the Trade Revolution</h2>
                        <p className="text-gray-600 max-w-lg">Stay updated with our progress as we unlock the potential of African commerce. Subscribe to our monthly roadmap digest.</p>
                        <div className="flex w-full max-w-md gap-3 mt-4 flex-col sm:flex-row">
                            <input
                                className="flex-1 rounded-xl border-gray-200 focus:ring-primary focus:border-primary px-4 py-3 outline-none border"
                                placeholder="Enter your business email"
                                type="email"
                            />
                            <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-800 transition-colors">Subscribe</button>
                        </div>
                    </div>

                </div>
            </main>

            <footer className="hidden lg:block pt-16 bg-[#0026C0] text-white">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
                    <div className="md:col-span-4 space-y-8">
                        <div className="flex items-center space-x-2">
                            <Store className="w-8 h-8 text-white" />
                            <span className="text-2xl font-bold tracking-tight text-white uppercase">AfricaMart</span>
                        </div>
                        <p className="text-white/70 max-w-sm leading-relaxed text-lg text-left">
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
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
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
        </div>
    );
};

export default Roadmap;
