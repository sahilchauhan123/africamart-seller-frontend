
import React from 'react';
import {
    ArrowLeft,
    Rocket,
    ArrowRight,
    Verified,
    TrendingUp,
    ShieldCheck,
    TrendingUp as QueryStats,
    Headset,
    LineChart,
    CheckCircle2,
    X,
    Minus,
    Lock
} from 'lucide-react';

interface Props {
    onBack: () => void;
}

const PremiumServices: React.FC<Props> = ({ onBack }) => {
    return (
        <div className="font-sans bg-[#F8FAFC] text-slate-900 overflow-x-hidden min-h-screen flex flex-col">
            <style>{`
        :root {
            --primary: #0033C4;
            --primary-dark: #001A63;
            --teal: #0D9488;
            --gold: #D4AF37;
            --background: #F8FAFC;
        }
        .hero-gradient {
            background: radial-gradient(circle at top right, #0042FF 0%, #0033C4 100%);
        }
      `}</style>

            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <button onClick={onBack} className="mr-2 p-1 hover:bg-slate-100 rounded-full transition-colors">
                            <ArrowLeft className="text-slate-600" size={24} />
                        </button>
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <Rocket size={20} />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900">B2B<span className="text-[#0033C4]">Connect</span></span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="bg-[#0033C4] text-white text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-full shadow-lg shadow-primary/20 hover:bg-[#001A63] transition-all">
                            Upgrade
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-1">
                <header className="relative overflow-hidden bg-slate-950 text-center">
                    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                        <div className="z-10">
                            <div className="inline-flex items-center space-x-2 bg-white/5 text-slate-400 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10">
                                <span>Empowering 50,000+ Enterprises</span>
                            </div>
                            <h1 className="text-4xl font-extrabold text-white leading-tight mb-6">
                                Sell More. <br /><span className="text-blue-500">Waste Less Time.</span>
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
                                Stop chasing cold leads. Our premium B2B seller tools give you priority visibility and verified inquiries to close deals 3x faster.
                            </p>
                            <div className="flex flex-col space-y-4 mb-12">
                                <button className="w-full px-8 py-4 bg-[#0033C4] text-white font-bold rounded-xl shadow-xl shadow-primary/30 hover:bg-blue-600 transition-all flex items-center justify-center">
                                    View Premium Plans
                                    <ArrowRight className="ml-2" size={20} />
                                </button>
                                <button className="w-full px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
                                    Talk to an Expert
                                </button>
                            </div>
                        </div>
                        <div className="relative w-full max-w-[280px] mx-auto">
                            <div className="bg-gradient-to-br from-primary/30 to-teal-500/20 aspect-square rounded-[3rem] p-4 shadow-2xl">
                                <div className="bg-slate-900/80 backdrop-blur-sm h-full w-full rounded-[2.8rem] overflow-hidden flex flex-col items-center justify-center relative p-6 border border-white/10">
                                    <div className="grid grid-cols-2 gap-3 w-full">
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                                            <div className="h-1.5 w-8 bg-teal-400/50 rounded-full mb-2"></div>
                                            <div className="h-6 w-full bg-white/5 rounded-md"></div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/10 translate-y-4">
                                            <div className="h-1.5 w-8 bg-blue-400/50 rounded-full mb-2"></div>
                                            <div className="h-6 w-full bg-white/5 rounded-md"></div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                                            <div className="h-1.5 w-8 bg-gold/50 rounded-full mb-2"></div>
                                            <div className="h-6 w-full bg-white/5 rounded-md"></div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/10 translate-y-4">
                                            <div className="h-1.5 w-8 bg-purple-400/50 rounded-full mb-2"></div>
                                            <div className="h-6 w-full bg-white/5 rounded-md"></div>
                                        </div>
                                    </div>
                                    <Verified className="text-[#D4AF37] absolute top-6 right-6 opacity-40" size={40} />
                                    <TrendingUp className="text-teal-400 absolute bottom-6 left-6 opacity-40 animate-pulse" size={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </header>

                <section className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What You Get with Premium</h2>
                        <p className="text-slate-500 text-sm max-w-xs mx-auto">Advanced tools designed to position your brand as a market leader and streamline your entire sales funnel.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 text-[#0033C4] rounded-xl flex items-center justify-center mb-4">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Verified Trust Badge</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Instantly build credibility with a gold verification mark that signals reliability to global buyers.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                                <QueryStats size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Priority Ranking</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Appear at the top of search results and category pages when buyers look for your products.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                                <Headset size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Dedicated Manager</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">A specialized B2B expert to help you optimize your profile and source high-quality inquiries.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                <LineChart size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Buyer Insights</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">See who's viewing your catalog and get detailed analytics on buyer behavior and competition.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-slate-950 mb-4">Choose Your Growth Path</h2>
                            <p className="text-slate-500 text-sm">Flexible plans tailored for businesses of all scales.</p>
                        </div>
                        <div className="flex flex-col space-y-8">
                            <div className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col">
                                <h3 className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-2">Starter</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-slate-900">$49</span>
                                    <span className="text-slate-500 font-medium text-sm">/month</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-6">Perfect for small businesses starting their digital journey.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-sm font-medium text-slate-700">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        10 Verified Leads / month
                                    </li>
                                    <li className="flex items-center text-sm font-medium text-slate-700">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        Standard Visibility
                                    </li>
                                    <li className="flex items-center text-sm font-medium text-slate-400">
                                        <X className="mr-3" size={18} />
                                        Personal Relationship Manager
                                    </li>
                                </ul>
                                <button className="w-full py-4 px-6 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-all">Get Started</button>
                            </div>
                            <div className="bg-white border-[3px] border-[#D4AF37] p-8 rounded-3xl flex flex-col relative shadow-2xl">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white text-[10px] font-black uppercase py-1 px-4 rounded-full tracking-widest">
                                    Most Popular
                                </div>
                                <h3 className="text-[#0033C4] font-bold text-[10px] uppercase tracking-widest mb-2">Growth</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-slate-900">$149</span>
                                    <span className="text-slate-500 font-medium text-sm">/month</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-6">Strategic tools for established companies scaling up operations.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-sm font-bold text-slate-900">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        50 Verified Leads / month
                                    </li>
                                    <li className="flex items-center text-sm font-bold text-slate-900">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        Priority Visibility
                                    </li>
                                    <li className="flex items-center text-sm font-bold text-slate-900">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        Dedicated Relationship Mgr.
                                    </li>
                                    <li className="flex items-center text-sm font-bold text-slate-900">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        Advanced Lead Analytics
                                    </li>
                                </ul>
                                <button className="w-full py-4 px-6 rounded-xl bg-[#0033C4] text-white font-bold shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all">Upgrade to Growth</button>
                            </div>
                            <div className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col">
                                <h3 className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-2">Enterprise</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-slate-900">Custom</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-6">Full-scale solutions with unlimited potential for large enterprises.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-sm font-medium text-slate-700">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        Unlimited Monthly Leads
                                    </li>
                                    <li className="flex items-center text-sm font-medium text-slate-700">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        Top-Tier Global Visibility
                                    </li>
                                    <li className="flex items-center text-sm font-medium text-slate-700">
                                        <CheckCircle2 className="text-teal-600 mr-3" size={18} />
                                        API &amp; Team Integrations
                                    </li>
                                </ul>
                                <button className="w-full py-4 px-6 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-all">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Detailed Comparison</h2>
                        <p className="text-slate-500 text-sm">Why choose premium over the standard experience?</p>
                    </div>
                    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
                        <div className="bg-slate-50 px-6 py-4 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                            <span>Features &amp; Benefits</span>
                            <span className="text-right">Free Plan</span>
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-bold text-slate-800 text-sm">Direct Buyer Inquiries</div>
                                    <Minus className="text-slate-200" size={14} />
                                </div>
                                <div className="text-[11px] text-slate-500">Receive contact info of buyers directly.</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-bold text-slate-800 text-sm">Search Visibility Score</div>
                                    <span className="text-xs text-slate-400 font-medium">Standard</span>
                                </div>
                                <div className="text-[11px] text-slate-500">How often you appear in relevant searches.</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-bold text-slate-800 text-sm">Verified Marketplace Badge</div>
                                    <Minus className="text-slate-200" size={14} />
                                </div>
                                <div className="text-[11px] text-slate-500">Increase conversion by 45% on average.</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-bold text-slate-800 text-sm">Competitor Insights</div>
                                    <Lock className="text-slate-200" size={14} />
                                </div>
                                <div className="text-[11px] text-slate-500">Data on similar sellers' performance.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-20">
                    <div className="bg-[#0033C4] rounded-[2.5rem] p-10 text-white flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-extrabold mb-6 leading-tight">Ready to transform your sales engine?</h2>
                            <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                                Leave your contact details and one of our dedicated account specialists will call you within 24 hours.
                            </p>
                            <div className="flex flex-col space-y-3 items-center text-[13px]">
                                <div className="flex items-center space-x-2 text-blue-100">
                                    <CheckCircle2 className="text-teal-400" size={14} />
                                    <span>Personalized consultation</span>
                                </div>
                                <div className="flex items-center space-x-2 text-blue-100">
                                    <CheckCircle2 className="text-teal-400" size={14} />
                                    <span>Customized platform demo</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white p-6 rounded-3xl shadow-2xl text-left">
                            <h3 className="text-slate-900 text-lg font-bold mb-6">Request a Callback</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1.5">Full Name</label>
                                    <input className="w-full px-4 py-3 rounded-xl bg-slate-50 border-slate-100 focus:border-primary focus:ring-primary text-slate-900 text-sm" placeholder="John Doe" type="text" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1.5">Work Email</label>
                                    <input className="w-full px-4 py-3 rounded-xl bg-slate-50 border-slate-100 focus:border-primary focus:ring-primary text-slate-900 text-sm" placeholder="john@company.com" type="email" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1.5">Company Website</label>
                                    <input className="w-full px-4 py-3 rounded-xl bg-slate-50 border-slate-100 focus:border-primary focus:ring-primary text-slate-900 text-sm" placeholder="www.company.com" type="text" />
                                </div>
                                <button className="w-full bg-[#0033C4] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-dark transition-all mt-2" type="submit">
                                    Speak to an Expert
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                <footer className="bg-slate-950 text-slate-500 py-12 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
                        <div className="flex items-center space-x-2">
                            <span className="text-white font-bold text-lg">B2B Connect</span>
                            <span className="text-[11px]">© 2024. All rights reserved.</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-[11px] font-medium uppercase tracking-widest">
                            <a className="hover:text-white" href="#">Privacy Policy</a>
                            <a className="hover:text-white" href="#">Terms of Service</a>
                            <a className="hover:text-white" href="#">Contact Us</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default PremiumServices;
