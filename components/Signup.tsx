
import React from 'react';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const Signup: React.FC<Props> = ({ onBack, onNext }) => {
  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden min-h-screen bg-background-light text-gray-900 p-6 flex flex-col transition-colors duration-200">
        <header className="mb-12">
          <button onClick={onBack} className="p-2 -ml-2 text-primary hover:bg-gray-100 rounded-full transition">
            <span className="material-icons-round text-3xl">arrow_back</span>
          </button>
        </header>

        <main className="flex-1 flex flex-col items-center w-full max-w-md mx-auto">
          <h1 className="text-3xl font-extrabold text-primary text-center mb-8">Create Seller Account</h1>

          <div className="w-full bg-[#F0F4FF] rounded-3xl p-8 space-y-6 mb-8 shadow-sm">
            <p className="text-center text-sm text-gray-600 leading-relaxed mb-4">
              Enter your details below to get started with Africa's first cross-border marketplace.
            </p>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Business Owner Name</label>
              <input
                type="text"
                placeholder="Individual name here"
                className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Mobile</label>
              <input
                type="tel"
                placeholder="+231 555 367 471"
                className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mb-8">
            Click continue to verify your contact details
          </p>

          <button
            onClick={onNext}
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-full shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-200"
          >
            Continue
          </button>
        </main>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex h-screen overflow-hidden bg-white dark:bg-slate-950 font-sans">
        {/* Left Side: Form */}
        <div className="w-1/2 flex items-center justify-center p-12 xl:p-24 bg-white dark:bg-slate-950">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-primary">
                Create Seller Account
              </h1>
            </div>

            <div className="bg-[#F0F4FF] dark:bg-slate-900 p-8 rounded-[1.5rem] shadow-sm">
              <p className="text-left text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Enter your details below to set up your seller account.
              </p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2" htmlFor="business_name">
                    Business Owner Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-primary/20 dark:border-primary/40 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    id="business_name"
                    name="business_name"
                    placeholder="Typing...."
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2" htmlFor="mobile">
                    Mobile
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-primary/20 dark:border-primary/40 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                      id="mobile"
                      name="mobile"
                      type="tel"
                      defaultValue="+231 555 367 471"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Click continue to verify your contact details
              </p>
              <button
                onClick={onNext}
                className="w-full py-4 bg-primary hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Continue
              </button>
            </div>

          </div>
        </div>

        {/* Right Side: Image/Branding */}
        <div className="w-1/2 relative overflow-hidden bg-gray-100">
          <img
            alt="Professional modern office space with clean lines and natural light"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZrEUMmNkxUAsyyh3xBPw8fgR1p7wjW8IqmvESxSVXpAvZSMf_QnQdBkf7MEIxud2f-Te6luY754Qv2scXd_itc13_n30nUlgtsYGKLP21ycdh9sAAlJyGj-NSSTrPeXcpQWsF3s4KLShNKGLzaktCrvJJlmJKDxMVfcaXcIVakErzp63jyQ9TQZw3K-u2vSENwmGiXvMQKb0mhRHWfOLa4CYoEmDuM_ndMLxZCVlWeYgIgE_NkiEL-RW8RSv96Ejfyh2tt6vm9M"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white p-8 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold mb-2">Join Our Global Network</h2>
            <p className="text-white/80">Scale your business with our professional B2B platform tools and dedicated support.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
