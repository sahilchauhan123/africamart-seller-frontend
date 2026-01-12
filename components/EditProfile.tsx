
import React from 'react';
import { MOCK_USER } from '../constants';

interface Props {
  onBack: () => void;
  onSave: () => void;
}

const EditProfile: React.FC<Props> = ({ onBack, onSave }) => {
  return (
    <div className="bg-white font-body text-slate-900 antialiased h-full flex flex-col overflow-hidden">
      {/* Mobile Custom Header */}
      <header className="bg-primary pt-12 pb-6 px-6 text-white shrink-0 z-10 shadow-lg lg:hidden">
        <div className="flex items-center justify-between max-w-md mx-auto">
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
            <button className="absolute bottom-1 right-1 bg-primary text-white p-2.5 rounded-full border-4 border-white shadow-xl active:scale-90 transition-transform">
              <span className="material-icons-round text-lg leading-none">photo_camera</span>
            </button>
          </div>
          <h2 className="mt-5 text-2xl font-black text-slate-900 tracking-tight">Hi, {MOCK_USER.name.split(' ')[0]}</h2>
          <p className="text-sm font-medium text-slate-400 mt-1">Manage your business identity</p>
        </div>

        {/* Form Sections */}
        <form className="space-y-6 pb-24" onSubmit={(e) => { e.preventDefault(); onSave(); }}>
          <div className="space-y-1.5">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Name</label>
            <div className="relative group">
              <input
                className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-50 text-slate-900 font-bold placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all duration-200"
                placeholder="e.g. Acme Solutions"
                type="text"
                defaultValue={MOCK_USER.businessName}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Category</label>
            <input
              className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-50 text-slate-900 font-bold placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all"
              placeholder="e.g. Wholesale Electronics"
              type="text"
              defaultValue={MOCK_USER.category}
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Location/Address</label>
            <input
              className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-slate-50 text-slate-900 font-bold placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-0 transition-all"
              placeholder="e.g. 123 Commerce St"
              type="text"
              defaultValue={MOCK_USER.location}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Established</label>
              <input
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
                placeholder="Year"
                type="text"
                defaultValue="2018"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">GST/Tax ID</label>
              <input
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
                placeholder="Tax ID"
                type="text"
                defaultValue="245316853FBAT1"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <input
              className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
              placeholder="contact@business.com"
              type="email"
              defaultValue="alex@eliteliberia.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Social Links</label>
            <input
              className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 font-bold placeholder-slate-400 focus:border-primary focus:ring-0 transition-all"
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
  );
};

export default EditProfile;
