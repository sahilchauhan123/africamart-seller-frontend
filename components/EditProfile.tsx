
import React from 'react';
import { MOCK_USER } from '../constants';

interface Props {
  onBack: () => void;
  onSave: () => void;
}

const EditProfile: React.FC<Props> = ({ onBack, onSave }) => {
  return (
    <div className="bg-white font-sans text-slate-900 antialiased h-full flex flex-col overflow-hidden">
      {/* Mobile View */}
      <div className="lg:hidden h-full flex flex-col overflow-hidden">
        {/* Mobile Custom Header */}
        <header className="bg-primary text-white p-4 shrink-0 z-10 shadow-lg h-16 flex items-center">
          <div className="flex items-center justify-between w-full max-w-md mx-auto">
            <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
              <span className="material-icons-round leading-none text-xl">arrow_back_ios_new</span>
            </button>
            <h1 className="text-lg font-semibold tracking-tight">Edit Profile</h1>
            <div className="w-10"></div>
          </div>
        </header>

        <main className="flex-1 w-full max-w-md mx-auto px-6 py-8 overflow-y-auto no-scrollbar">
          {/* Profile Completion Card */}
          <div className="mb-10 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-end mb-3">
              <span className="text-sm font-bold text-emerald-600">Profile Completion</span>
              <span className="text-xs font-black text-emerald-600">100%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className="bg-emerald-500 h-2.5 rounded-full w-full shadow-inner transition-all duration-1000"></div>
            </div>
          </div>

          {/* Profile Identity */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-4xl font-black text-primary border-4 border-white shadow-2xl overflow-hidden">
                {MOCK_USER.businessName.charAt(0)}
              </div>
              <button className="absolute bottom-1 right-1 bg-primary text-white p-2.5 rounded-full border-4 border-white shadow-md active:scale-90 transition-transform">
                <span className="material-icons-round text-lg leading-none">photo_camera</span>
              </button>
            </div>
            <h2 className="mt-5 text-2xl font-black text-slate-900 tracking-tight">Hi, {MOCK_USER.name.split(' ')[0]}</h2>
            <p className="text-sm font-medium text-slate-400 mt-1">Manage your business identity</p>
          </div>

          {/* Form Sections */}
          <form className="space-y-6 pb-24" onSubmit={(e) => { e.preventDefault(); onSave(); }}>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nature of Business</label>
              <div className="relative group">
                <input
                  className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:border-primary focus:ring-0 transition-all duration-200"
                  placeholder="e.g. Acme Solutions"
                  type="text"
                  defaultValue={MOCK_USER.businessName}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Name</label>
              <div className="relative group">
                <input
                  className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:border-primary focus:ring-0 transition-all duration-200"
                  placeholder="e.g. Acme Solutions"
                  type="text"
                  defaultValue={MOCK_USER.businessName}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Category</label>
              <input
                className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:border-primary focus:ring-0 transition-all"
                placeholder="e.g. Wholesale Electronics"
                type="text"
                defaultValue={MOCK_USER.category}
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Location/Address</label>
              <input
                className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:border-primary focus:ring-0 transition-all"
                placeholder="e.g. 123 Commerce St"
                type="text"
                defaultValue={MOCK_USER.location}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Established</label>
                <input
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
                  placeholder="Year"
                  type="text"
                  defaultValue="2018"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">GST/Tax ID</label>
                <input
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
                  placeholder="Tax ID"
                  type="text"
                  defaultValue="245316853FBAT1"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
                placeholder="contact@business.com"
                type="email"
                defaultValue="alex@eliteliberia.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Capital & Country</label>
              <input
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
                placeholder="Monrovia, Liberia"
                type="text"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Social Links</label>
              <input
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
                placeholder="LinkedIn, Website..."
                type="text"
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-800 text-white font-black py-5 rounded-[20px] shadow-xl shadow-blue-100 transition-all active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-50 tracking-wide text-sm uppercase"
              >
                Update Profile
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Desktop View */}
      <main className="hidden lg:block flex-1 overflow-y-auto no-scrollbar p-4 lg:px-10 lg:pt-10 lg:pb-10 h-full">
        <div className="max-w-[1536px] mx-auto">
          {/* Profile Completion */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Profile Completion</span>
              <span className="text-sm font-bold text-emerald-600">7/7 Complete</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-full rounded-full transition-all duration-1000"></div>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-16">
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden">
                <span className="text-3xl font-bold text-slate-400">{MOCK_USER.businessName.charAt(0)}</span>
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-background-light hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-sm">add_a_photo</span>
              </button>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Hi, {MOCK_USER.name}</h2>
              <p className="text-slate-500 mt-1 text-lg">Manage your business identity and verification details.</p>
            </div>
          </div>

          <form className="space-y-16 pb-20" onSubmit={(e) => { e.preventDefault(); onSave(); }}>
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-slate-900">General Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Business Name</label>
                  <input
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="e.g. Acme Solutions"
                    type="text"
                    defaultValue={MOCK_USER.businessName}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Business Category</label>
                  <select className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none appearance-none cursor-pointer">
                    <option value="">{MOCK_USER.category}</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="services">Services</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Location/Address</label>
                  <input
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="123 Commerce St, New York, NY 10001"
                    type="text"
                    defaultValue={MOCK_USER.location}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Country</label>
                  <input
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="e.g. Liberia"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Capital</label>
                  <input
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="e.g. Monrovia"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Established Year</label>
                  <input
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="YYYY"
                    type="text"
                    defaultValue="2018"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="contact@business.com"
                    type="email"
                    defaultValue={MOCK_USER.email}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Nature of Business</label>
                  <textarea
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none resize-none"
                    placeholder="Describe your business activities, products, or services..."
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-200 w-full"></div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-slate-900">Tax & Verification</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">GST & Tax Number</label>
                  <input
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="Enter Tax ID"
                    type="text"
                    defaultValue="245316853FBAT1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Social Links</label>
                  <input
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-medium placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="LinkedIn, Twitter, Website"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Your data is secured with enterprise-grade encryption</span>
              </div>
              <button
                className="bg-primary text-white font-semibold py-4 px-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all flex items-center gap-3 group"
                type="submit"
              >
                Save and Continue
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;
