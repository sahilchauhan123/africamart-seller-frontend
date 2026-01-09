
import React from 'react';
import { MOCK_USER } from '../constants';

interface Props {
  onBack: () => void;
  onSave: () => void;
}

const EditProfile: React.FC<Props> = ({ onBack, onSave }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-primary pt-12 pb-4 px-4 text-white text-center relative shrink-0">
        <button onClick={onBack} className="absolute left-4 p-1">
          <span className="material-icons text-3xl">arrow_back</span>
        </button>
        <h1 className="text-xl font-medium">Edit Profile</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-5">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1 text-sm text-green-600 font-bold">
            <span>Profile Completion</span>
            <span>7/7</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-full rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-sm font-bold text-3xl">N</div>
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
              <span className="material-icons text-primary text-xl">add_circle_outline</span>
            </button>
          </div>
          <h2 className="mt-4 text-xl font-bold">Hi, {MOCK_USER.name}</h2>
        </div>

        <div className="space-y-4">
          <input className="w-full h-12 px-4 rounded-lg border-2 border-blue-400 bg-blue-50 text-primary font-bold focus:ring-2 focus:ring-primary outline-none" defaultValue={MOCK_USER.businessName} />
          <input className="w-full h-12 px-4 rounded-lg border-2 border-blue-400 bg-blue-50 text-primary font-bold focus:ring-2 focus:ring-primary outline-none" defaultValue={MOCK_USER.category} />
          <input className="w-full h-12 px-4 rounded-lg border-2 border-blue-400 bg-blue-50 text-primary font-bold focus:ring-2 focus:ring-primary outline-none" defaultValue={MOCK_USER.location} />
          <input className="w-full h-12 px-4 rounded-lg border-2 border-blue-400 focus:ring-2 focus:ring-primary outline-none" placeholder="GST & Tax Number" />
          <input className="w-full h-12 px-4 rounded-lg border-2 border-blue-400 focus:ring-2 focus:ring-primary outline-none" placeholder="Email Address" />
        </div>
      </main>

      <footer className="p-5 pb-10">
        <button onClick={onSave} className="w-full bg-blue-500 text-white font-bold py-4 rounded-full shadow-lg">
          Save and Continue
        </button>
      </footer>
    </div>
  );
};

export default EditProfile;
