import React from 'react';
import { useBusinessController } from '../../controllers/useBusinessController';
import { Building2, MapPin, Globe, Phone, ArrowRight, CheckCircle2, Trophy, PartyPopper } from 'lucide-react';

interface Props {
    onBack: () => void;
    onNext: () => void;
}

const BusinessSetupView: React.FC<Props> = ({ onBack, onNext }) => {
    const { state, actions } = useBusinessController();
    const { showModal, formData, isLoading, error } = state;
    const { setShowModal, handleInputChange, submitBusiness } = actions;

    return (
        <>
            {/* Congratulation Overlay Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
                    <style>{`
                        @keyframes fadeInUp {
                            from { opacity: 0; transform: translateY(20px) scale(0.95); }
                            to { opacity: 1; transform: translateY(0) scale(1); }
                        }
                        .animate-fade-up {
                            animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                        }
                    `}</style>
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-opacity duration-500"></div>

                    {/* Animated Background Elements */}
                    <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

                    <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-10 w-full max-w-[400px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/20 transform transition-all animate-fade-up">
                        {/* Decorative Confetti Shapes */}
                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-yellow-400 rounded-lg rotate-12 animate-bounce shadow-lg flex items-center justify-center">
                            <PartyPopper className="text-white w-5 h-5" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-primary rounded-full animate-bounce delay-300 shadow-lg flex items-center justify-center">
                            <Trophy className="text-white w-4 h-4" />
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-green-200/50 rotate-3">
                                <CheckCircle2 className="text-white w-10 h-10" />
                            </div>

                            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                                Congratulations!
                            </h2>

                            <p className="text-slate-500 leading-relaxed mb-8 text-sm lg:text-base font-medium px-2">
                                Your Account has been <span className="text-green-600 font-bold">successfully created</span>
                            </p>

                            <div className="w-full space-y-4">
                                <button
                                    onClick={onNext}
                                    className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-primary/30 transform active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-base tracking-wide group"
                                >
                                    GET STARTED
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-xs text-slate-400 font-semibold uppercase tracking-[0.2em]">
                                    Welcome to AfricaMart
                                </p>
                            </div>
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
                                name="business_name"
                                value={formData.business_name}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="e.g. AfriTrade Solutions"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Location / Address</label>
                            <input
                                name="business_address"
                                value={formData.business_address}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="e.g. 123 Sinkor, Monrovia"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Business Type</label>
                                <select
                                    name="business_type"
                                    value={formData.business_type}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm">
                                    <option value="">Select Type</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Wholesale">Wholesale</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Services">Services</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Business Category</label>
                                <input
                                    name="business_category"
                                    value={formData.business_category}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="e.g. Electronics"
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center mb-6">
                        Help buyers find your business faster
                    </p>

                    {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
                    <button
                        onClick={submitBusiness}
                        disabled={isLoading}
                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-full shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-200 disabled:opacity-50"
                    >
                        {isLoading ? 'Setting up...' : 'Finish Setup'}
                    </button>
                </main>
            </div>

            {/* Desktop View */}
            <div className={`hidden lg:flex h-screen overflow-hidden bg-white font-sans transition-all duration-500 ${showModal ? 'blur-sm grayscale-[0.2]' : ''}`}>
                <div className="w-1/2 flex items-center justify-center bg-white overflow-hidden">
                    <div className="w-full max-w-md space-y-4 py-4">
                        <div>
                            <div className="text-center">
                                <h1 className="text-3xl font-black tracking-tight text-primary mb-1">
                                    Business Profile
                                </h1>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                    Complete your profile to get tailored opportunities and verified status.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#F0F4FF] p-6 lg:p-8 rounded-[2rem] shadow-sm border border-primary/5 space-y-4">
                            <div className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0033C4]/40 uppercase pl-1">
                                        <Building2 size={14} /> Registered Business Name
                                    </label>
                                    <input
                                        name="business_name"
                                        value={formData.business_name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-semibold"
                                        placeholder="Enter your company name"
                                        type="text"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0033C4]/40 uppercase pl-1">
                                        <MapPin size={14} /> Head Office Address
                                    </label>
                                    <input
                                        name="business_address"
                                        value={formData.business_address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-semibold"
                                        placeholder="Physical location"
                                        type="text"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0033C4]/40 uppercase pl-1">
                                            <Globe size={14} /> Business Type
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="business_type"
                                                value={formData.business_type}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 shadow-sm font-semibold appearance-none cursor-pointer">
                                                <option value="">Select</option>
                                                <option value="Retail">Retail</option>
                                                <option value="Wholesale">Wholesale</option>
                                                <option value="Manufacturing">Manufacturing</option>
                                                <option value="Services">Services</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#0033C4]/40 uppercase pl-1">
                                            <Building2 size={14} /> Business Category
                                        </label>
                                        <input
                                            name="business_category"
                                            value={formData.business_category}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-semibold"
                                            placeholder="e.g. Electronics"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {error && <div className="text-red-500 flex justify-center text-sm font-semibold p-2 bg-red-50 rounded-lg">{error}</div>}
                        <button
                            onClick={submitBusiness}
                            disabled={isLoading}
                            className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-bold rounded-full transition-all transform active:scale-[0.98] shadow-xl shadow-primary/40 text-lg flex items-center justify-center gap-3 tracking-wide disabled:opacity-50"
                        >
                            {isLoading ? 'WAIT...' : 'COMPLETE SETUP'}
                            {!isLoading && <ArrowRight size={20} />}
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

export default BusinessSetupView;
