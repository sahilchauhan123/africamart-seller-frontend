
import React from 'react';
import { MOCK_USER } from '../constants';

interface Props {
  onBack: () => void;
  onSave: () => void;
}

const EditProfile: React.FC<Props> = ({ onBack, onSave }) => {
  return (
    <div className="bg-[#ffffff] font-body text-gray-900 antialiased h-screen flex flex-col overflow-hidden">
      <header className="bg-[#0033cc] pt-12 pb-4 px-4 shadow-md flex items-center relative z-10 shrink-0">
        <button
          onClick={onBack}
          className="text-white p-1 hover:bg-white/10 rounded-full transition-colors absolute left-4"
        >
          <span className="material-icons text-3xl">arrow_back</span>
        </button>
        <h1 className="text-white text-xl font-medium w-full text-center">Edit Profile</h1>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-8">
        <div className="px-5 pt-4">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1 text-sm font-medium">
              <span className="text-[#388e3c]">Profile Completion</span>
              <span className="text-[#388e3c]">7/7</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#388e3c] w-full rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-sm">
                <span className="text-4xl font-bold text-black">
                  {MOCK_USER.name.charAt(0)}
                </span>
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm">
                <span className="material-icons text-[#4d79ff] text-2xl">add_circle_outline</span>
              </button>
            </div>
            <h2 className="mt-4 text-xl font-bold text-center text-black">Hi, {MOCK_USER.name}</h2>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#4d79ff] bg-[#f0f4ff] text-[#4d79ff] font-medium focus:outline-none focus:ring-2 focus:ring-[#4d79ff]/50 placeholder-transparent"
                placeholder="Business Name"
                type="text"
                defaultValue={MOCK_USER.businessName}
              />
            </div>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#4d79ff] bg-[#f0f4ff] text-[#4d79ff] font-medium focus:outline-none focus:ring-2 focus:ring-[#4d79ff]/50 placeholder-transparent"
                placeholder="Business Category"
                type="text"
                defaultValue={MOCK_USER.category}
              />
            </div>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#4d79ff] bg-[#f0f4ff] text-[#4d79ff] font-medium focus:outline-none focus:ring-2 focus:ring-[#4d79ff]/50 placeholder-transparent"
                placeholder="Location/Address"
                type="text"
                defaultValue={MOCK_USER.location}
              />
            </div>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#4d79ff] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4d79ff]/50 placeholder-gray-400"
                placeholder="Established"
                type="text"
              />
            </div>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#4d79ff] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4d79ff]/50 placeholder-gray-400"
                placeholder="GST & Tax Number"
                type="text"
              />
            </div>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#4d79ff] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4d79ff]/50 placeholder-gray-400"
                placeholder="Email address"
                type="email"
              />
            </div>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#4d79ff] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4d79ff]/50 placeholder-gray-400"
                placeholder="Social Links"
                type="text"
              />
            </div>
          </form>
        </div>
      </main>

      <div className="p-5 pb-8 bg-[#ffffff] shrink-0 z-10">
        <button
          onClick={onSave}
          className="w-full bg-[#4d79ff] hover:bg-blue-600 text-white font-medium py-3.5 px-4 rounded-full shadow-lg transition-transform active:scale-[0.98]"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
