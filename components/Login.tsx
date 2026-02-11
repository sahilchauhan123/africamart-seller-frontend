
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
    onBack: () => void;
    onSignup: () => void;
    onLoginSuccess: () => void;
}

const Login: React.FC<Props> = ({ onBack, onSignup, onLoginSuccess }) => {
    return (
        <>
            {/* Mobile View */}
            <div className="lg:hidden min-h-screen bg-background-light text-gray-900 px-4 py-6 flex flex-col transition-colors duration-200">
                <main className="flex-1 flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="w-full mb-6">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm mb-4"
                        >
                            <ArrowLeft size={20} />
                            Back
                        </button>
                    </div>
                    <h1 className="text-2xl font-extrabold text-primary text-center mb-5">Login to AfricaMart</h1>

                    <div className="w-full bg-[#F0F4FF] rounded-2xl p-5 space-y-4 mb-6 shadow-sm">
                        <p className="text-center text-sm text-gray-600 leading-relaxed mb-4">
                            Enter your credentials to access your seller dashboard.
                        </p>

                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700 font-display">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700 font-display">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <button
                            onClick={onLoginSuccess}
                            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-full shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-200"
                        >
                            Login
                        </button>
                        <p className="text-sm text-center text-slate-500">
                            Don't have an account? {' '}
                            <button
                                onClick={onSignup}
                                className="text-primary font-bold hover:underline"
                            >
                                Sign up
                            </button>
                        </p>
                    </div>
                </main>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex h-screen overflow-hidden bg-white font-sans">
                {/* Left Side: Form */}
                <div className="w-1/2 flex items-center justify-center bg-white overflow-hidden relative">
                    <div className="absolute top-12 left-12">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary transition-colors focus:ring-4 focus:ring-primary/10">
                                <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                            </div>
                        </button>
                    </div>

                    <div className="w-full max-w-md space-y-4 py-4">
                        <div className="text-center">
                            <h1 className="text-3xl font-black tracking-tight text-primary mb-1">
                                Welcome Back
                            </h1>
                            <p className="text-sm text-slate-500 font-medium">
                                Log in to manage your continental business.
                            </p>
                        </div>

                        <div className="bg-[#F0F4FF] p-6 lg:p-8 rounded-[2rem] shadow-sm border border-primary/5">
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLoginSuccess(); }}>
                                <div className="space-y-1.5">
                                    <label className="block text-[10px] font-bold text-[#0033C4]/40 uppercase tracking-widest pl-1" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-semibold"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="name@company.com"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="block text-[10px] font-bold text-[#0033C4]/40 uppercase tracking-widest" htmlFor="password">
                                            Password
                                        </label>
                                        <button type="button" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">
                                            Forgot Password?
                                        </button>
                                    </div>
                                    <input
                                        className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-semibold"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full mt-4 py-3.5 bg-primary hover:bg-blue-700 text-white font-bold rounded-full transition-all transform active:scale-[0.98] shadow-xl shadow-primary/20 text-lg flex items-center justify-center gap-2"
                                >
                                    Login <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-slate-500">
                                Don't have an account? {' '}
                                <button
                                    onClick={onSignup}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Create one now
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image/Branding */}
                <div className="w-1/2 relative overflow-hidden bg-gray-100">
                    <img
                        alt="Seamless trade and connectivity across the African continent"
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzIH3sxPFU0dPJZDUZlE5K6r_mTP5pJKjFzpPtnSYpVhxAweCtBP3E27_WQeKcPBRqbTYiuiC0LI11aVQxcprXRCahTN3VAk5xqsES2cVlDwHk3fwAwFrUcu8lepLHhkpjS5QGBEyBw4YKSjFdIHE3aVzQ8dHTrJzr4e_V0tpYz-4tBMqgV618Yd2XfLLzBEpzAyLb2INc1n2A2P81leIHS9LKUG2QnYzfl7cfV3-Uezy0XMjXG-g72-L0qKcl7FdHAef8eIU61AA"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-white p-8 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
                        <h2 className="text-2xl font-bold mb-2">Access the Continental Market</h2>
                        <p className="text-white/80">Connect with thousands of verified partners and grow your business beyond borders.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
