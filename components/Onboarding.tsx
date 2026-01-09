
import React from 'react';

interface Props {
  onNext: () => void;
}

const Onboarding: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="bg-background-light text-gray-900 antialiased transition-colors duration-200">
      {/* Shared Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 sticky top-0 bg-background-light z-50 border-b border-gray-100">
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
          <div className="bg-card-blue-light rounded-3xl p-6 space-y-8">
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
        <div className="bg-section-blue-light py-10 px-6 -mx-0 sm:-mx-0 w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Why AfricaMart <br /> exist?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa’s economy through digital and cross boarder connectivity.
          </p>
          <div className="relative w-full h-64 rounded-3xl overflow-hidden mb-4 shadow-sm">
            <img alt="African business person using a tablet" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADdoKDGdjfygl9pvaEPApxI4fr4h0cEAbPKME3eJGKTqtbbgfwSlFHEphHmXvTsl_1hOLdCvDwAa-VwzHwQ0FWZ6KE5SGvYCTqqCIrYqOppU-KJlzz63WIIJBBaod42KLAPmiKXLAnyJbSe7tfHeAvJp5mNc43G_12f9dX4PlrOxB6C7w8NOa6FKjXoyrXig9TKdFCs72NFX6v-uoOWYW69Rx9Vd9pN-r9NbQZafFcwTI1U-swutbM67_r-6p4mDWTTTG5vbBX1x0" />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="px-6 py-10">
          <h2 className="text-4xl font-extrabold mb-2 text-gray-900">
            Seller’s <br /> Procedures
          </h2>
          <p className="text-gray-600 mb-6 text-base">
            Complete guide to AfricaMart Seller Authentication Process
          </p>
          <div className="bg-card-pink-light rounded-3xl p-6 space-y-6">
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
  );
};

export default Onboarding;
