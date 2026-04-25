
import React from 'react';
import {
    Shield,
    FileText,
    Store as StoreIcon,
    Handshake,
    ArrowRight,
    Download,
    Printer,
    Store,
    X
} from 'lucide-react';
import { View } from '../../types';

interface Props {
    onBack?: () => void;
    onNavigate?: (view: View) => void;
    isDashboardMode?: boolean;
    onSignup?: () => void;
}

const PoliciesView: React.FC<Props> = ({ onBack, onNavigate, isDashboardMode = false, onSignup }) => {
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
                                        <StoreIcon size={24} />
                                    </div>
                                    <div>
                                        <span className="text-xl font-bold tracking-tight text-slate-900">Lasomaa</span>
                                        <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">Policies & Legal</p>
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
                            <div className="flex items-center gap-4">
                                <button onClick={onBack} className="text-2xl font-extrabold text-primary flex items-center gap-1">
                                    <Store className="w-8 h-8 text-primary" />
                                    Lasomaa
                                </button>
                                <div className="h-8 w-px bg-slate-200 mx-2"></div>
                                <span className="text-lg font-bold text-slate-800">Policies & Legal</span>
                            </div>
                            <nav className="flex items-center gap-10">
                                <button onClick={onBack} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors uppercase">THE PLATFORM</button>
                                <button className="text-sm font-bold text-primary uppercase border-b-2 border-primary pb-1">POLICIES</button>
                            </nav>
                            <div className="flex items-center gap-6">
                                <button onClick={() => onNavigate?.(View.LOGIN)} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer">Login</button>
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
                <div className={`flex flex-col ${isDashboardMode ? 'min-h-[calc(100vh-72px)]' : 'min-h-screen'}`}>
                    <div className={`max-w-7xl w-full mx-auto px-6 lg:px-12 ${isDashboardMode ? 'pt-10' : 'pt-10 lg:pt-32'} pb-20`}>
                        <section className="max-w-4xl mx-auto text-center mb-16">
                            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Policies & Legal</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                                At Lasomaa, transparency and security are at the core of our business.
                                Explore our legal framework and marketplace standards to understand how we protect our community.
                            </p>
                        </section>

                        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Shield size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Privacy Policy</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                    Learn how we collect, use, and safeguard your personal information and data across our B2B ecosystem.
                                </p>
                                <a className="inline-flex items-center text-primary font-semibold text-sm hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                                    View Full Policy <ArrowRight className="ml-2" size={16} />
                                </a>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FileText size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Terms of Service</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                    The legal agreement between you and Lasomaa regarding the use of our platform and services.
                                </p>
                                <a className="inline-flex items-center text-primary font-semibold text-sm hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                                    View Full Policy <ArrowRight className="ml-2" size={16} />
                                </a>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <StoreIcon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Seller Policy</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                    Guidelines and standards for merchants selling goods and services to businesses on Lasomaa.
                                </p>
                                <a className="inline-flex items-center text-primary font-semibold text-sm hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                                    View Full Policy <ArrowRight className="ml-2" size={16} />
                                </a>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Handshake size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Buyer Protection</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                    How we guarantee safe transactions, dispute resolution, and quality assurance for our business buyers.
                                </p>
                                <a className="inline-flex items-center text-primary font-semibold text-sm hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                                    View Full Policy <ArrowRight className="ml-2" size={16} />
                                </a>
                            </div>
                        </section>

                        <section className="max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-16">
                            <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
                                <FileText size={16} />
                                Currently Viewing: Terms of Service
                            </div>
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    By accessing or using the Lasomaa platform (the "Service"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of a company or legal entity, you represent and warrant that you have the authority to bind that entity to these terms.
                                </p>

                                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">2. Eligibility and Account Registration</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    To access certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to keep your account information up to date.
                                </p>

                                <ul className="space-y-4 text-slate-600 dark:text-slate-400 mb-8 list-none pl-0">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-primary shrink-0">2.1</span>
                                        <span>You must be at least 18 years old or the legal age of majority in your jurisdiction.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-primary shrink-0">2.2</span>
                                        <span>Accounts are for business use only; personal consumer use is strictly prohibited.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-primary shrink-0">2.3</span>
                                        <span>You are responsible for maintaining the confidentiality of your account credentials.</span>
                                    </li>
                                </ul>

                                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">3. Platform Fees and Payments</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Lasomaa provides a marketplace infrastructure. Fees associated with transactions are clearly outlined in our merchant fee schedule.
                                </p>
                                <ol className="space-y-4 text-slate-600 dark:text-slate-400 mb-8 list-none pl-0">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-primary shrink-0">3.1</span>
                                        <span>All payments must be processed through Lasomaa's approved payment gateways.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-primary shrink-0">3.2</span>
                                        <span>Local taxes and customs duties are the sole responsibility of the buyer and seller.</span>
                                    </li>
                                </ol>
                            </div>

                            <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 uppercase tracking-widest gap-4">
                                <span>Last Updated: October 24, 2023</span>
                                <div className="flex gap-6">
                                    <a className="hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
                                        <Download size={14} /> Download PDF
                                    </a>
                                    <a className="hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
                                        <Printer size={14} /> Print Version
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-auto max-w-7xl w-full mx-auto px-6 lg:px-10">
                        <div className="mt-8 lg:mt-10 border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-8 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 dark:text-slate-400 shadow-inner">
                                    <Shield size={24} className="text-slate-400" />
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

export default PoliciesView;
