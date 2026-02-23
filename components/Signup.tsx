
import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';


interface Props {
  onBack: () => void;
  onNext: () => void;
  onLogin: () => void;
}

const Signup: React.FC<Props> = ({ onBack, onNext, onLogin }) => {
  const [formData, setFormData] = React.useState({
    owner_name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4000/api/v1/auth/seller/registration/sendotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          business_owner_name: formData.owner_name
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store email and password in localStorage for automatic login after OTP
        localStorage.setItem('registration_email', formData.email);
        localStorage.setItem('registration_password', formData.password);
        onNext();
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden min-h-screen bg-background-light text-gray-900 px-4 py-6 flex flex-col transition-colors duration-200">


        <main className="flex-1 flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <h1 className="text-2xl font-extrabold text-primary text-center mb-5">Create Seller Account</h1>

          <div className="w-full bg-[#F0F4FF] rounded-2xl p-5 space-y-4 mb-6 shadow-sm">
            <p className="text-center text-sm text-gray-600 leading-relaxed mb-4">
              Enter your details below to get started with Africa's first B2B marketplace.
            </p>

            {error && (
              <div className="bg-red-50 text-red-500 text-xs p-3 rounded-lg border border-red-100 mb-4">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 font-display">Business Owner Name</label>
              <input
                type="text"
                name="owner_name"
                value={formData.owner_name}
                onChange={handleChange}
                placeholder="Individual name here"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 font-display">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 font-display">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mb-6">
            Click continue to verify your account details
          </p>

          <button
            onClick={() => handleSubmit()}
            disabled={isLoading}
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-full shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending OTP...' : 'Continue'}
          </button>
          <p className="text-sm text-center text-slate-500 mt-6">
            Already have an account? {' '}
            <button
              onClick={onLogin}
              className="text-primary font-bold hover:underline"
            >
              Login
            </button>
          </p>
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
                Create Seller Account
              </h1>
              <p className="text-sm text-slate-500 font-medium">
                Set up your profile to start selling across Africa.
              </p>
            </div>

            <div className="bg-[#F0F4FF] p-6 lg:p-8 rounded-[2rem] shadow-sm border border-primary/5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 text-red-500 text-xs p-3 rounded-lg border border-red-100">
                    {error}
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-[#0033C4]/40 uppercase tracking-widest pl-1" htmlFor="owner_name">
                    Business Owner Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-semibold"
                    id="owner_name"
                    name="owner_name"
                    value={formData.owner_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-[#0033C4]/40 uppercase tracking-widest pl-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-semibold"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-[#0033C4]/40 uppercase tracking-widest pl-1" htmlFor="password">
                    Account Password
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-[1rem] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-gray-900 placeholder-gray-300 shadow-sm font-semibold"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="pt-4">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] pl-1 mb-4">
                    Verify account on next step
                  </p>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-bold rounded-full transition-all transform active:scale-[0.98] shadow-xl shadow-primary/20 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending OTP...' : <>{'Continue'} <ArrowRight size={20} /></>}
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-4 text-left">
              <p className="text-sm text-center text-slate-500 mt-4">
                Already have an account? {' '}
                <button
                  onClick={onLogin}
                  className="text-primary font-bold hover:underline"
                >
                  Login here
                </button>
              </p>
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
