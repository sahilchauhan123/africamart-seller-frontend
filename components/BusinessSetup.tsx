
import React, { useState } from 'react';
import { Building2, MapPin, Globe, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
    onBack: () => void;
    onNext: () => void;
}

const BusinessSetup: React.FC<Props> = ({ onBack, onNext }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Success Overlay Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-md transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-12 w-full max-w-sm lg:max-w-md shadow-2xl border border-white/50 transform transition-all duration-500 scale-100 animate-in fade-in zoom-in">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <CheckCircle2 className="text-green-500 w-12 h-12" />
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight">Success!</h2>
                            <p className="text-slate-500 leading-relaxed mb-10 text-sm lg:text-base px-2">
                                Your basic profile is set. Please complete the <span className="font-bold text-primary">remaining business details</span> on your onboarding task list to go live.
                            </p>
                            <button
                                onClick={onNext}
                                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 lg:py-5 rounded-full shadow-lg shadow-primary/30 transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 text-sm lg:text-base tracking-wide"
                            >
                                GO TO DASHBOARD
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile View */}
            <div className="lg:hidden min-h-screen bg-background-light text-gray-900 px-4 py-6 flex flex-col transition-colors duration-200">
                <main className="flex-1 flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <h1 className="text-2xl font-extrabold text-primary text-center mb-5">Business Profile</h1>

                    <div className="w-full bg-[#F0F4FF] rounded-2xl p-5 space-y-4 mb-6 shadow-sm">
                        <p className="text-center text-sm text-gray-600 leading-relaxed mb-4">
                            Complete your profile to start selling across the continent.
                        </p>

                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Business Name</label>
                            <input
                                type="text"
                                placeholder="e.g. AfriTrade Solutions"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Location / Address</label>
                            <input
                                type="text"
                                placeholder="e.g. 123 Sinkor, Monrovia"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Country</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm">
                                    <option>Liberia</option>
                                    <option>Nigeria</option>
                                    <option>Ghana</option>
                                    <option>Kenya</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Contact</label>
                                <input
                                    type="tel"
                                    placeholder="+231..."
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center mb-6">
                        Help buyers find your business faster
                    </p>

                    <button
                        onClick={() => setShowModal(true)}
                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-full shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-200"
                    >
                        Finish Setup
                    </button>
                </main>
            </div>

            {/* Desktop View */}
            <div className={`hidden lg:flex h-screen overflow-hidden bg-white font-sans transition-all duration-500 ${showModal ? 'blur-sm grayscale-[0.2]' : ''}`}>
                <div className="w-1/2 flex items-center justify-center p-12 xl:p-24 bg-white">
                    <div className="w-full max-w-md space-y-10">
                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-primary mb-4">
                                Business Profile
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Tell us more about your business to get tailored opportunities and verified status.
                            </p>
                        </div>

                        <div className="bg-[#F0F4FF] p-10 rounded-[2.5rem] shadow-sm border border-primary/5 space-y-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0033C4]/40 uppercase mb-3">
                                        <Building2 size={14} /> Registered Business Name
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-medium"
                                        placeholder="Enter your company name"
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0033C4]/40 uppercase mb-3">
                                        <MapPin size={14} /> Head Office Address
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-medium"
                                        placeholder="Physical location"
                                        type="text"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0033C4]/40 uppercase mb-3">
                                            <Globe size={14} /> Country
                                        </label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none text-gray-900 shadow-sm font-medium appearance-none cursor-pointer">
                                                <option>Liberia</option>
                                                <option>Nigeria</option>
                                                <option>Ghana</option>
                                                <option>South Africa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0033C4]/40 uppercase mb-3">
                                            <Phone size={14} /> Business Contact
                                        </label>
                                        <input
                                            className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-medium"
                                            placeholder="+231..."
                                            type="tel"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            className="w-full py-5 bg-primary hover:bg-blue-700 text-white font-bold rounded-full transition-all transform active:scale-[0.98] shadow-2xl shadow-primary/40 text-lg flex items-center justify-center gap-3 tracking-wide"
                        >
                            COMPLETE SETUP
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-1/2 relative overflow-hidden bg-slate-900">
                    <img
                        alt="Business Professional"
                        className="absolute inset-0 h-full w-full object-cover opacity-60"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuChD_Kq3K0REIDV58c6S5pY8rG0M7B2H7_rMB3t8pQ7I9S_3U9V5l9V6vH=s1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-20 left-20 right-20 text-white">
                        <div className="w-16 h-1 bg-white mb-6 rounded-full"></div>
                        <h2 className="text-4xl font-black mb-4 leading-tight">Ready to Scale?</h2>
                        <p className="text-xl text-white/70 leading-relaxed">
                            AfricaMart helps over 10,000 sellers reach verified buyers across the continent. Your success starts with a professional profile.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessSetup;
