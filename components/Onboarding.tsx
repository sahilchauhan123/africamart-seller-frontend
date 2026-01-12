
import React, { useState, useEffect } from 'react';

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
        {/* Shared Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white z-50 border-b border-gray-100">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition">
            <span className="material-icons text-3xl text-gray-800">menu</span>
          </button>
          <button
            onClick={onNext}
            className="bg-primary text-white font-medium px-6 py-2 rounded-full text-sm shadow-md hover:opacity-90 transition"
          >
            Sign up
          </button>
        </nav>

        {/* Old Onboarding Section */}
        <div className="flex flex-col items-center justify-start pt-12 pb-16 p-6 text-center">
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
                  <span className="material-icons text-3xl text-gray-900">grid_view</span>
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
                  <span className="material-icons text-3xl text-gray-900">bar_chart</span>
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
                  <span className="material-icons text-3xl text-gray-900">person_search</span>
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
                  <span className="material-icons text-2xl text-gray-900">check_circle_outline</span>
                </div>
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  Sign up on AfricaMart and verify your <strong>mobile number + email</strong> through OTP.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="material-icons text-2xl text-gray-900">check_circle_outline</span>
                </div>
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  Submit <strong>PAN, GST/Business Proof</strong> for basic business verification.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="material-icons text-2xl text-gray-900">check_circle_outline</span>
                </div>
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  We checks your <strong>documents, business name, address and contact</strong> validity (within 24–48 hours).
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="material-icons text-2xl text-gray-900">check_circle_outline</span>
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
        <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="max-w-[1536px] mx-auto px-6 xl:px-16 h-20 flex items-center justify-between">
            <div className="flex items-center">
              <a className="text-2xl font-extrabold text-primary flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
                AfricaMart
              </a>
            </div>
            <nav className="flex items-center gap-8">
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#how-it-works">How it Works</a>
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
          <section className="pt-10 lg:pt-16 pb-10 lg:pb-12 bg-white">
            <div className="max-w-[1536px] mx-auto px-6 xl:px-16">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="flex flex-col">
                  <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-[720px]">
                      Create an account to sell on AfricaMart
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mt-8 font-medium leading-relaxed max-w-lg">
                      Give it a chance and join Africa's first B2B platform.
                    </p>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div>
                      <button
                        onClick={onNext}
                        className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl transition-all transform hover:translate-y-[-2px] shadow-xl text-lg w-full sm:w-auto"
                      >
                        Start Selling Now
                      </button>
                    </div>
                    <div className="flex items-center gap-4 pl-1">
                      <div className="flex -space-x-3">
                        <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-200"></div>
                        <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-300"></div>
                        <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-400"></div>
                      </div>
                      <p className="text-sm text-slate-500 font-semibold tracking-wide">
                        Joined by 10,000+ businesses
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10 bg-slate-50 p-4 rounded-[3rem] border border-slate-100 transition-transform duration-500">
                    <div className="rounded-[2.5rem] overflow-hidden">
                      <img alt="Professional business collaboration" className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpg1b4uiSKHpOoityZ4Aw4Yn0SxAo81vA-edM-8zifC6IvRlQ2yet2PelcaeYkqbFQecf6s2RWmQLsq7xEzBINw9Day7wJSeUOynFOqwJu30kAGsJU27_djqDt6fjrX2moZ4dtTlo3DznkRfYaV5iQNQdK1KyzzQBUrWjbvhW7p2ronfmyu9EFm_0VcIaIbE0cix67Isg10ypriRbZo98qMdVZ_FOzykYufCQMvIl6umIHyQtiXemZWuWrmmu8SJ43Xzzf9uzG97Y" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="pt-10 lg:pt-12 pb-12 lg:pb-16 bg-white" id="benefits">
            <div className="max-w-[1536px] mx-auto px-6 xl:px-16">
              <div className="text-center md:text-left mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Sell with AfricaMart</h2>
                <p className="text-xl text-slate-600 max-w-2xl">
                  Here are just a few of the many reasons selling with AfricaMart is a smart choice.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] flex flex-col items-start text-left border border-slate-100">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-3xl">dashboard_customize</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 leading-tight">Easy setup and tools that help you succeed</h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    It takes a lot to run a business. That's why we provide every Professional seller with a full toolkit for listing, pricing, and promoting products.
                  </p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] flex flex-col items-start text-left border border-slate-100">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-3xl">trending_up</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 leading-tight">Reach Million Buyers</h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    AfricaMart connects you with a vast network of B2B and B2C buyers across your country and the continent, helping you expand your customer base instantly.
                  </p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] flex flex-col items-start text-left border border-slate-100">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 leading-tight">Strong Brand Visibility</h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    Listing on AfricaMart boosts your brand presence and allows your products to be discovered easily by customers searching online.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Section */}
          <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-sky-50/50">
            <div className="max-w-[1536px] mx-auto px-6 xl:px-16">
              <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full md:w-1/2">
                  <h2 className="text-4xl font-extrabold mb-8 text-slate-900">Why AfricaMart exist?</h2>
                  <p className="text-xl text-slate-700 leading-relaxed mb-10">
                    We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa's economy through digital and cross boarder connectivity.
                  </p>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-100"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-30"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video border-8 border-white">
                      <img alt="Person using tablet for business data" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvsjKV7J9b0kTxGS9SPU75dxZeNzn4YZNJ5uXCvug2gKvuqFlOwSzOpYTIx6w8z0ULDIeIFyXaQ4GK_RTeMtRzBtfYmNVBcF_QKH7wm_94efEKFHPDl4cuFBxgBRXIQCI2auhmdSkdWYrgnov7LtAaTPJs_u8QT5U1WMsS8i5S_958iBvZNQO5Lt8ohwbJuJr1GAFBlWkHPSIX8_wGhGQnvkHRTxpTD0qtzb1NtfmlhWl4HtrJMkQ_kApFsJvJgmg24kkYB04ONVY" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Procedures Section */}
          <section className="py-24 lg:py-32 bg-white" id="how-it-works">
            <div className="max-w-[1536px] mx-auto px-6 xl:px-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Seller's Procedures</h2>
                <p className="text-xl text-slate-600">
                  Complete guide to AfricaMart Seller Authentication Process
                </p>
              </div>
              <div className="bg-[#FFF1F1] rounded-[3rem] p-10 md:p-16 lg:p-24 border border-rose-100/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-16">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-slate-900 border-2 border-slate-900 rounded-full p-1.5 text-xl font-bold">check</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-3 block">Step 01</span>
                      <p className="text-lg text-slate-800">
                        <span className="font-bold">Sign up on AfricaMart</span> and verify your mobile number + email through OTP.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-slate-900 border-2 border-slate-900 rounded-full p-1.5 text-xl font-bold">check</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-3 block">Step 02</span>
                      <p className="text-lg text-slate-800">
                        <span className="font-bold">Submit PAN, GST/Business Proof</span> for basic business verification.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-slate-900 border-2 border-slate-900 rounded-full p-1.5 text-xl font-bold">check</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-3 block">Step 03</span>
                      <p className="text-lg text-slate-800">
                        We check your <span className="font-bold">documents, business name, address and contact validity</span> (within 24–48 hours).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-slate-900 border-2 border-slate-900 rounded-full p-1.5 text-xl font-bold">check</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-3 block">Step 04</span>
                      <p className="text-lg text-slate-800">
                        A third-party agency verifies your authenticity, providing a <span className="font-bold text-primary">TrustSEAL badge</span> for higher visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex justify-center">
                <button
                  onClick={onNext}
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-20 rounded-xl transition-all w-full md:w-auto shadow-xl text-lg uppercase tracking-wide"
                >
                  Create Seller Account
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1536px] mx-auto px-6 xl:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <a className="text-xl font-extrabold text-primary flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-primary text-2xl">storefront</span>
                  AfricaMart
                </a>
              </div>
              <p className="text-sm text-slate-500">© 2024 AfricaMart. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Onboarding;
