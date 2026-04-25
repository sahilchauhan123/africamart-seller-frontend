import React, { useState } from 'react';
import { View } from '../types';
import { User, ChevronDown, HelpCircle, Info, MessageCircle } from 'lucide-react';

interface Props {
  onNext: () => void;
  onNavigate: (view: View) => void;
}

const Onboarding: React.FC<Props> = ({ onNext, onNavigate }) => {
  const [showAssistanceDropdown, setShowAssistanceDropdown] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);
  const [showSignInDropdown, setShowSignInDropdown] = useState(false);
  const [showMobileHelp, setShowMobileHelp] = useState(false);
  return (
    <div className="font-sans text-gray-900 bg-white h-full overflow-y-auto no-scrollbar">
      {/* Header */}
      <header className="bg-primary/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <span className="text-white text-xl md:text-2xl font-black tracking-tight">Lasomaa</span>
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button
                onMouseEnter={() => setShowAssistanceDropdown(true)}
                onMouseLeave={() => setShowAssistanceDropdown(false)}
                className="flex items-center gap-1.5 text-white hover:text-blue-100 font-medium transition-colors py-2"
              >
                Assistance
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAssistanceDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showAssistanceDropdown && (
                <div
                  onMouseEnter={() => setShowAssistanceDropdown(true)}
                  onMouseLeave={() => setShowAssistanceDropdown(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-2xl py-3 mt-1 border border-gray-100 z-[60] animate-in fade-in zoom-in-95 duration-200"
                >
                  <a href="#how-it-works" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-all font-semibold rounded-lg mx-2">
                    <svg className="w-4 h-4 mr-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    How it Works
                  </a>
                  <a href="#what-to-sell" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-all font-semibold rounded-lg mx-2">
                    <svg className="w-4 h-4 mr-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    What You Can Sell
                  </a>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onMouseEnter={() => setShowHelpDropdown(true)}
                onMouseLeave={() => setShowHelpDropdown(false)}
                className="flex items-center gap-1.5 text-white hover:text-blue-100 font-medium transition-colors py-2"
              >
                Help
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showHelpDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showHelpDropdown && (
                <div
                  onMouseEnter={() => setShowHelpDropdown(true)}
                  onMouseLeave={() => setShowHelpDropdown(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-2xl py-3 mt-1 border border-gray-100 z-[60] animate-in fade-in zoom-in-95 duration-200"
                >
                  <button
                    onClick={() => onNavigate(View.FAQS)}
                    className="w-[calc(100%-1rem)] text-left flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-all font-semibold rounded-lg mx-2"
                  >
                    <svg className="w-4 h-4 mr-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    FAQs & Help Center
                  </button>
                  <button
                    onClick={() => onNavigate(View.ABOUT_US)}
                    className="w-[calc(100%-1rem)] text-left flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-all font-semibold rounded-lg mx-2"
                  >
                    <svg className="w-4 h-4 mr-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    About Lasomaa
                  </button>
                </div>
              )}
            </div>

            <div className="h-8 w-px bg-white/20"></div>

            <button className="bg-white/10 hover:bg-white text-white hover:text-primary px-5 py-2 rounded-lg font-bold text-sm transition-all border border-white/20">
              Buyer Portal
            </button>

            <div className="relative">
              <button
                onMouseEnter={() => setShowSignInDropdown(true)}
                onMouseLeave={() => setShowSignInDropdown(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
              >
                Seller Sign In
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSignInDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showSignInDropdown && (
                <div
                  onMouseEnter={() => setShowSignInDropdown(true)}
                  onMouseLeave={() => setShowSignInDropdown(false)}
                  className="absolute top-full right-0 w-52 bg-white rounded-xl shadow-2xl py-3 mt-1 border border-gray-100 z-[60] animate-in fade-in zoom-in-95 duration-200"
                >
                  <button
                    onClick={() => onNavigate(View.LOGIN)}
                    className="w-[calc(100%-1rem)] text-left flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-all font-semibold rounded-lg mx-2"
                  >
                    <User className="w-4 h-4 mr-2.5 opacity-60" />
                    Sign In
                  </button>
                  <button
                    onClick={onNext}
                    className="w-[calc(100%-1rem)] text-left flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-all font-semibold rounded-lg mx-2"
                  >
                    <svg className="w-4 h-4 mr-2.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Join as Seller
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Actions (Visible on Mobile Only) */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Help Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setShowMobileHelp(!showMobileHelp); setShowSignInDropdown(false); }}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white active:scale-90 transition-transform"
              >
                <HelpCircle size={20} />
              </button>

              {showMobileHelp && (
                <>
                  <div className="fixed inset-0 z-50" onClick={() => setShowMobileHelp(false)}></div>
                  <div className="absolute top-full right-0 w-56 bg-white rounded-2xl shadow-2xl py-2 mt-2 border border-gray-100 z-[60] animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-2 border-b border-slate-50 mb-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Support & Info</p>
                    </div>
                    <a
                      href="#how-it-works"
                      onClick={() => setShowMobileHelp(false)}
                      className="w-full text-left flex items-center px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Info className="w-4 h-4 mr-3 text-blue-500" />
                      How it Works
                    </a>
                    <button
                      onClick={() => { onNavigate(View.FAQS); setShowMobileHelp(false); }}
                      className="w-full text-left flex items-center px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-3 text-purple-500" />
                      FAQs & Support
                    </button>
                    <button
                      onClick={() => { onNavigate(View.ABOUT_US); setShowMobileHelp(false); }}
                      className="w-full text-left flex items-center px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      About Lasomaa
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => { setShowSignInDropdown(!showSignInDropdown); setShowMobileHelp(false); }}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white active:scale-90 transition-transform"
              >
                <User size={20} />
              </button>

              {showSignInDropdown && (
                <>
                  <div className="fixed inset-0 z-50" onClick={() => setShowSignInDropdown(false)}></div>
                  <div className="absolute top-full right-0 w-48 bg-white rounded-2xl shadow-2xl py-2 mt-2 border border-gray-100 z-[60] animate-in slide-in-from-top-2 duration-200">
                    <button
                      onClick={() => { onNavigate(View.LOGIN); setShowSignInDropdown(false); }}
                      className="w-full text-left flex items-center px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <User className="w-4 h-4 mr-3 text-primary" />
                      Sign In
                    </button>
                    <div className="h-px bg-slate-100 mx-2"></div>
                    <button
                      onClick={() => { onNext(); setShowSignInDropdown(false); }}
                      className="w-full text-left flex items-center px-4 py-3 text-sm font-bold text-primary hover:bg-blue-50 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Get Started
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-16 lg:pt-20">
        {/* Mobile Hero (Immersive & Premium) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-24 pb-8 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-8 order-2 lg:order-1">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.2] md:leading-tight">
                Africa's First <span className="text-primary">B2B Marketplace</span>
              </h1>
              <p className="text-sm md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Connect with verified buyers across 54 countries and grow your business digitally today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={onNext}
                  className="bg-[#FF6B00] hover:bg-orange-600 text-white text-base font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1 active:scale-95"
                >
                  Start Selling Now
                </button>
                <div className="flex items-center gap-2.5 text-gray-500 py-1">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <span className="text-sm font-bold">Free registration for businesses</span>
                </div>
              </div>

              {/* Desktop Trust Signals */}
              <div className="hidden lg:flex pt-8 flex-wrap items-center gap-8 border-t border-gray-100">
                <div className="flex items-center gap-2.5 text-gray-500 group cursor-default">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Direct Inquiries</span>
                </div>
                <div className="flex items-center gap-2.5 text-gray-500 group cursor-default">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 14.535a11.996 11.996 0 008.178 7.447L12 22l.822-.018a11.996 11.996 0 008.178-7.447l-.991-8.551z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Verified Identity</span>
                </div>
              </div>
            </div>

            <div className="relative h-[250px] md:h-[450px] lg:h-full order-1 lg:order-2">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF6B00] opacity-10 rounded-full blur-2xl"></div>
              <img
                alt="African Business Owner"
                className="rounded-2xl shadow-xl relative z-10 object-cover w-full h-full"
                src="https://media.istockphoto.com/id/1385118964/photo/shot-of-a-young-woman-using-a-digital-tablet-while-working-in-an-organic-store.jpg?s=612x612&w=0&k=20&c=mFc1p5N1FBnIRKSb6P106J2X98jXqV_IXH4eLFrsbO0="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-2xl lg:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Sell on Lasomaa</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Mobile Benefits (2x2 Grid) */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 text-white shadow-lg shadow-primary/20">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xs font-bold mb-1 text-slate-800 uppercase tracking-tight leading-tight">{benefit.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop Benefits */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-2xl shadow-md hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group bg-white relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-300 ring-4 ring-primary/5 group-hover:ring-primary/20">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-16 text-center tracking-tight">Simple 3-Step Process</h2>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden flex flex-col gap-12 relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-blue-100 -z-0"></div>
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl flex-shrink-0 ring-4 ring-white">
                  {index + 1}
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-black text-slate-800 mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Steps */}
          <div className="hidden lg:flex flex-row justify-between items-start gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex-1 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg">{index + 1}</div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50k+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider font-semibold">Registered Businesses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider font-semibold">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider font-semibold">Monthly Leads</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider font-semibold">Product Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Sell Section */}
      <section id="what-to-sell" className="py-24 bg-gray-50 overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-200px * 8 - 1rem * 8)); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Sell on Lasomaa?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the wide range of categories where African businesses are already thriving and finding buyers.</p>
          </div>

          <div className="flex gap-4 animate-marquee">
            {[...sellCategories, ...sellCategories].map((cat, index) => (
              <div key={index} className="flex-shrink-0 w-[200px] bg-white rounded-xl shadow-sm border border-gray-100 transition-all group overflow-hidden cursor-pointer">
                <div className="h-28 w-full relative overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-4 text-center">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-2 mx-auto -mt-8 relative z-10 shadow-md transition-colors">
                    {React.cloneElement(cat.icon as React.ReactElement, { className: "w-5 h-5 text-primary" })}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 transition-colors line-clamp-2">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 relative z-10">Start Your Selling Journey Today</h2>
            <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Join Africa's first B2B marketplace and grow your revenue with tools designed for enterprise success.
            </p>
            <button
              onClick={onNext}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl font-bold px-10 md:px-12 py-4 md:py-5 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 relative z-10"
            >
              Become a Seller
            </button>
            <p className="mt-8 text-xs text-slate-400 font-medium relative z-10 tracking-wide uppercase">No hidden fees • Dedicated support</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="text-gray-900 text-xl font-black tracking-tight">Lasomaa</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest">
              <button onClick={() => onNavigate(View.ABOUT_US)} className="hover:text-primary transition-colors">About Us</button>
              <a className="hover:text-primary transition-colors" href="#">Terms</a>
              <a className="hover:text-primary transition-colors" href="#">Privacy</a>
              <a className="hover:text-primary transition-colors" href="#">Help</a>
            </div>
            <p className="text-[10px] md:text-xs text-slate-400 font-medium">© 2024 Lasomaa Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const benefits = [
  {
    title: "Connect Sellers to Buyers",
    description: "Reach verified buyers across your region and the entire continent.",
    icon: (
      <svg className="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
    )
  },
  {
    title: "Zero Trading Fees",
    description: "Join Lasomaa for free. No transaction or commission fees on your sales.",
    icon: (
      <svg className="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 14.535a11.996 11.996 0 008.178 7.447L12 22l.822-.018a11.996 11.996 0 008.178-7.447l-.991-8.551z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
    )
  },
  {
    title: "Get Direct Inquiries",
    description: "Receive high-intent business leads and close deals effortlessly.",
    icon: (
      <svg className="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
    )
  },
  {
    title: "Cross-Border Trade",
    description: "Break geographical barriers and trade across all 54 African countries.",
    icon: (
      <svg className="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
    )
  }

];

const steps = [
  { title: "Register", description: "Create your free account and verify your business details." },
  { title: "List Products", description: "Upload your catalog with high-quality images and descriptions." },
  { title: "Start Selling", description: "Receive inquiries from buyers and close deals directly." }
];

const partners = []; // Removed previous partners

const sellCategories = [
  {
    name: "Industrial Machinery",
    image: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=400&h=300&fit=crop",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  },
  {
    name: "Agriculture & Food",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  },
  {
    name: "Textiles & Apparel",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  },
  {
    name: "Medical & Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4b16c?w=400&h=300&fit=crop",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400&h=300&fit=crop",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  },
  {
    name: "Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=400&h=300&fit=crop",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  },
  {
    name: "Chemicals & Materials",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=300&fit=crop",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-3.464 0L3.34 6.643a2 2 0 013.464 0l12.624 22.122" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  },
  {
    name: "Home & Decor",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=300&fit=crop",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
  }
];

export default Onboarding;