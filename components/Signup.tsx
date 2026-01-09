
import React from 'react';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const Signup: React.FC<Props> = ({ onBack, onNext }) => {
  return (
    <div className="min-h-screen bg-background-light text-gray-900 p-6 flex flex-col transition-colors duration-200">
      <header className="mb-12">
        <button onClick={onBack} className="p-2 -ml-2 text-primary hover:bg-gray-100 rounded-full transition">
          <span className="material-icons-round text-3xl">arrow_back</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center w-full max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-primary text-center mb-8">Create Seller Account</h1>

        <div className="w-full bg-card-blue-light rounded-3xl p-8 space-y-6 mb-8 shadow-sm">
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
  );
};

export default Signup;
