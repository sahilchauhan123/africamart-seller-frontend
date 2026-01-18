
import React, { useState, useEffect } from 'react';
import Drawer from './common/Drawer';
import { View } from '../types';
import {
  Menu,
  LayoutGrid,
  BarChart3,
  UserSearch,
  CheckCircle,
  Store,
  LayoutDashboard,
  TrendingUp,
  Eye
} from 'lucide-react';

interface Props {
  onNext: () => void;
}

const SLIDER_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6B5PXSiqMIxombYqKwb0oBoBceB8nx7f8j_QEe5N7_bM5o15b-aj1gvdnyg4umgpaygMcYRsJ2k235-1qyDqsjOhdlertlrjhk2DTOWhEHsUB46YkaSYQtB6X8vQgjLBKmUDVIXkxfxs4RZCkr5p5gVezyzPcxIjIwlR8CGdL2Mfqff40QPioUWcyuWK6aSF7ASgymBgtNV0DQO4HvgK0Leqrm5iSM77OQ8vk_TY2frMtd3MSlRjcbBi7CqqMrbYS9WF8mu3Q94I',
    title: 'Connect with Buyers',
    subtitle: 'Grow your business across Africa'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADdoKDGdjfygl9pvaEPApxI4fr4h0cEAbPKME3eJGKTqtbbgfwSlFHEphHmXvTsl_1hOLdCvDwAa-VwzHwQ0FWZ6KE5SGvYCTqqCIrYqOppU-KJlzz63WIIJBBaod42KLAPmiKXLAnyJbSe7tfHeAvJp5mNc43G_12f9dX4PlrOxB6C7w8NOa6FKjXoyrXig9TKdFCs72NFX6v-uoOWYW69Rx9Vd9pN-r9NbQZafFcwTI1U-swutbM67_r-6p4mDWTTTG5vbBX1x0',
    title: 'Digital Innovation',
    subtitle: 'Reshaping Africa\'s economy'
  },
  {
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    title: 'Quality Products',
    subtitle: 'Showcase your best to the world'
  }
];

const Onboarding: React.FC<Props> = ({ onNext }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-gray-900 antialiased h-full overflow-y-auto no-scrollbar">
      {/* Mobile Layout (Existing) */}
      <div className="lg:hidden flex flex-col">
        {/* Slide Menu Overlay */}
        <Drawer
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          isOnboarding={true}
          onNavigate={() => { }}
          currentView={View.ONBOARDING}
        />

        {/* Shared Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm h-16">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition"
          >
            <Menu className="text-gray-800" size={32} />
          </button>
          <button
            onClick={onNext}
            className="bg-primary text-white font-medium px-6 py-2 rounded-full text-sm shadow-md hover:opacity-90 transition"
          >
            Sign up
          </button>
        </nav>

        {/* Old Onboarding Section */}
        <div className="flex flex-col items-center justify-start pt-24 pb-16 p-6 text-center">
          <h1 className="text-[2.5rem] leading-[1.1] font-extrabold text-black mb-8 tracking-tight">
            Create an<br />account to sell<br />on AfricaMart
          </h1>
          <button
            onClick={onNext}
            className="bg-primary hover:bg-blue-600 transition-colors text-white font-semibold text-lg py-3 px-12 rounded-full shadow-md hover:shadow-lg transform active:scale-95 duration-200 mb-10"
          >
            Sign up
          </button>
          <p className="text-sm text-gray-800 mb-5 px-4 font-medium">
            Give it a chance and join Africa’s first B2B platform.
          </p>
          <div className="w-full mb-6 relative max-w-lg">
            <img alt="Two African business men" className="w-full h-64 object-cover rounded-2xl shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6B5PXSiqMIxombYqKwb0oBoBceB8nx7f8j_QEe5N7_bM5o15b-aj1gvdnyg4umgpaygMcYRsJ2k235-1qyDqsjOhdlertlrjhk2DTOWhEHsUB46YkaSYQtB6X8vQgjLBKmUDVIXkxfxs4RZCkr5p5gVezyzPcxIjIwlR8CGdL2Mfqff40QPioUWcyuWK6aSF7ASgymBgtNV0DQO4HvgK0Leqrm5iSM77OQ8vk_TY2frMtd3MSlRjcbBi7CqqMrbYS9WF8mu3Q94I" />
          </div>
        </div>

        {/* New Onboarding Section */}
        <main className="w-full mx-auto max-w-lg">
          <div className="px-6 pb-8 pt-8">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight mb-4">
              Sell with <br /> AfricaMart
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Here are just a few of the many reasons selling with AfricaMart is a smart choice.
            </p>
            <div className="bg-[#F5F7FF] rounded-3xl p-6 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <LayoutGrid className="text-gray-900" size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Easy setup and tools that help you succeed</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    It takes a lot to run a business. That's why we provide every Professional seller with a full toolkit for listing, pricing, and promoting products. We also offer fulfillment options, advertising solutions, specialty programs, and much more.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <BarChart3 className="text-gray-900" size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Reach Million Buyers</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    AfricaMart connects you with a vast network of B2B and B2C buyers across your country and the continent, helping you expand your customer base instantly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <UserSearch className="text-gray-900" size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Strong Brand Visibility</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Listing on AfricaMart boosts your brand presence and allows your products to be discovered easily by customers searching online.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-sky-50 py-10 px-6 w-full">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
              Why AfricaMart <br /> exist?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa’s economy through digital and cross boarder connectivity.
            </p>
            <div className="relative w-full h-64 rounded-3xl overflow-hidden mb-4 shadow-sm">
              {SLIDER_IMAGES.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {SLIDER_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${index === currentSlide ? 'bg-gray-600 w-4' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="px-6 py-10">
            <h2 className="text-4xl font-extrabold mb-2 text-gray-900">
              Seller’s <br /> Procedures
            </h2>
            <p className="text-gray-600 mb-6 text-base">
              Complete guide to AfricaMart Seller Authentication Process
            </p>
            <div className="bg-[#FFF1F1] rounded-3xl p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-gray-900" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  Sign up on AfricaMart and verify your <strong>mobile number + email</strong> through OTP.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-gray-900" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  Submit <strong>PAN, GST/Business Proof</strong> for basic business verification.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-gray-900" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  We checks your <strong>documents, business name, address and contact</strong> validity (within 24–48 hours).
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-gray-900" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  A third-party agency verifies your <strong>office, documents and business authenticity</strong>, providing a <strong>TrustSEAL badge</strong> for higher trust and visibility.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 pb-12 pt-4">
            <button
              onClick={onNext}
              className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-4 rounded-full text-lg shadow-lg transition transform active:scale-95"
            >
              Create Seller Account
            </button>
          </div>
        </main>
      </div>

      {/* Desktop Layout (New) */}
      <div className="hidden lg:block bg-white">
        {/* Desktop Header */}
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-200">
          <div className="max-w-[1536px] mx-auto px-6 xl:px-16 h-20 flex items-center justify-between">
            <div className="flex items-center">
              <a className="text-2xl font-extrabold text-primary flex items-center gap-2" href="#">
                <Store className="text-primary" size={32} />
                AfricaMart
              </a>
            </div>
            <nav className="flex items-center gap-8">
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#how-it-works">Why AfricaMart</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#benefits">Benefits</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#faqs">FAQs</a>
            </nav>
            <div className="flex items-center gap-4">
              <a className="text-sm font-bold text-slate-700 hover:text-primary px-4 py-2 transition-colors" href="#">Login</a>
              <button
                onClick={onNext}
                className="bg-primary hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all shadow-md"
              >
                Sign up
              </button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-white overflow-hidden py-24 md:py-32 lg:pt-36">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="flex flex-col items-start text-left order-2 lg:order-1">
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                    Create an account to sell on AfricaMart
                  </h1>
                  <p className="text-xl text-slate-500 mb-10 font-medium max-w-lg">
                    Give it a chance and join Africa's first B2B platform.
                  </p>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <button
                      onClick={onNext}
                      className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-500/20 text-lg"
                    >
                      Start Selling Now
                    </button>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
                      </div>
                      <p className="text-sm font-semibold text-slate-600">
                        Joined by 10,000+ businesses
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="rounded-3xl overflow-hidden w-full max-w-lg">
                    <img alt="Two business professionals collaborating with a laptop" className="w-full h-[320px] lg:h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpg1b4uiSKHpOoityZ4Aw4Yn0SxAo81vA-edM-8zifC6IvRlQ2yet2PelcaeYkqbFQecf6s2RWmQLsq7xEzBINw9Day7wJSeUOynFOqwJu30kAGsJU27_djqDt6fjrX2moZ4dtTlo3DznkRfYaV5iQNQdK1KyzzQBUrWjbvhW7p2ronfmyu9EFm_0VcIaIbE0cix67Isg10ypriRbZo98qMdVZ_FOzykYufCQMvIl6umIHyQtiXemZWuWrmmu8SJ43Xzzf9uzG97Y" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 md:py-40 px-4 bg-[#F8FAFC]" id="benefits">
            <div className="max-w-6xl mx-auto">
              <div className="mb-20">
                <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Sell with AfricaMart</h2>
                <p className="text-xl text-slate-500 max-w-2xl">
                  Here are just a few of the many reasons selling with AfricaMart is a smart choice.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 text-primary flex items-center justify-center mb-8 border border-slate-200 rounded-2xl bg-white">
                    <LayoutDashboard size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-slate-900 leading-tight">Easy setup and tools that help you succeed</h3>
                  <p className="text-slate-600 leading-relaxed">
                    It takes a lot to run a business. That's why we provide every Professional seller with a full toolkit for listing, pricing, and promoting products.
                  </p>
                </div>
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 text-primary flex items-center justify-center mb-8 border border-slate-200 rounded-2xl bg-white">
                    <TrendingUp size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-slate-900 leading-tight">Reach Million Buyers</h3>
                  <p className="text-slate-600 leading-relaxed">
                    AfricaMart connects you with a vast network of B2B and B2C buyers across your country and the continent, helping you expand your customer base instantly.
                  </p>
                </div>
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 text-primary flex items-center justify-center mb-8 border border-slate-200 rounded-2xl bg-white">
                    <Eye size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-slate-900 leading-tight">Strong Brand Visibility</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Listing on AfricaMart boosts your brand presence and allows your products to be discovered easily by customers searching online.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Section */}
          <section className="py-24 md:py-40 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-20">
                <div className="w-full md:w-1/2">
                  <h2 className="text-5xl font-extrabold mb-8 text-slate-900 leading-tight">Why AfricaMart exist?</h2>
                  <p className="text-xl text-slate-600 leading-relaxed mb-10">
                    We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa's economy through digital and cross boarder connectivity.
                  </p>
                  <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="rounded-3xl overflow-hidden aspect-video border border-slate-100">
                      <img alt="Person using tablet for business data" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvsjKV7J9b0kTxGS9SPU75dxZeNzn4YZNJ5uXCvug2gKvuqFlOwSzOpYTIx6w8z0ULDIeIFyXaQ4GK_RTeMtRzBtfYmNVBcF_QKH7wm_94efEKFHPDl4cuFBxgBRXIQCI2auhmdSkdWYrgnov7LtAaTPJs_u8QT5U1WMsS8i5S_958iBvZNQO5Lt8ohwbJuJr1GAFBlWkHPSIX8_wGhGQnvkHRTxpTD0qtzb1NtfmlhWl4HtrJMkQ_kApFsJvJgmg24kkYB04ONVY" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Procedures Section */}
          <section className="py-24 md:py-40 px-4 bg-[#F8FAFC]" id="how-it-works">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Seller's Procedures</h2>
                <p className="text-xl text-slate-500">
                  Complete guide to AfricaMart Seller Authentication Process
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-lg bg-white">
                      1
                    </div>
                    <div className="w-px h-full bg-slate-200 mt-4 min-h-[40px]"></div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Orientation</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Sign up on AfricaMart</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Verify your mobile number and email through OTP to secure your account and initiate the onboarding process.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-lg bg-white">
                      2
                    </div>
                    <div className="w-px h-full bg-slate-200 mt-4 min-h-[40px]"></div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Documentation</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Submit Business Proof</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Provide your PAN, GST, or other official Business Proof for essential identity and tax verification.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-lg bg-white">
                      3
                    </div>
                    <div className="w-px h-full bg-slate-200 mt-4 min-h-[40px]"></div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Validation</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Verification Review</h4>
                    <p className="text-slate-600 leading-relaxed">
                      We check your documents, business name, address and contact validity within a standard 24–48 hour window.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary bg-primary text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Approval</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">TrustSEAL Badge</h4>
                    <p className="text-slate-600 leading-relaxed">
                      A third-party agency verifies your authenticity, providing a <span className="font-bold text-primary">TrustSEAL badge</span> for premium platform visibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-24 flex justify-center">
                <button
                  onClick={onNext}
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-16 rounded-xl transition-all w-full md:w-auto text-lg uppercase tracking-wide shadow-xl shadow-blue-500/20"
                >
                  Create Seller Account
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <span className="text-xl font-extrabold text-slate-400 flex items-center gap-1">
                <Store size={24} />
                AfricaMart
              </span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 AfricaMart. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Onboarding;
