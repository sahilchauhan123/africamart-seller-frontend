
import React from 'react';
import { MOCK_USER, MOCK_PRODUCTS } from '../constants';

interface Props {
  onBack: () => void;
  onEdit: () => void;
}

const Profile: React.FC<Props> = ({ onBack, onEdit }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-white p-4 flex items-center justify-between sticky top-0 z-50">
        <button onClick={onBack} className="p-1 lg:hidden">
          <span className="material-icons-round">menu</span>
        </button>
        <h1 className="font-bold text-lg">Seller Profile</h1>
        <button onClick={onEdit} className="p-1">
          <span className="material-icons-round">edit</span>
        </button>
      </header>

      <main className="pb-10">
        <div className="relative">
          <div className="h-32 bg-primary w-full absolute top-0"></div>
          <div className="relative z-10 px-4 pt-16">
            <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white p-1 -mt-16 mb-3 shadow-sm">
                <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi46GtpiM2PCOQBHANxFI9RbtsMJaAKLO_wmlPAAI9F3P8WF4Ol7CjQYs4bVfLnxrSMCfSNXNeQZNlSe5fCq1nvg6iZK9cONpUeEMCCP0YutzWEoXUtRyuz5USsT-FRNDsMLjixVN0_9RsTDgd2TXFi9OZ8lX0X5GwJX3Zb-AjabzDVPsA4t09tANJ6-oBYYqtF1RK_ZE0PH2XuqcFnS0mHoUyU1lr8hykoYW9ig6b4rqQOWYvQFo666LkAWEMXSTWA60ibVTejNI" alt="User" />
              </div>
              <h1 className="text-xl font-bold">{MOCK_USER.businessName}</h1>
              <div className="flex gap-2 my-3">
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">Verified</span>
                <span className="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold">4.8 (124)</span>
              </div>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">Leading supplier of premium agricultural inputs in West Africa.</p>
              <div className="grid grid-cols-2 gap-3 w-full">
                <button className="py-2.5 rounded-xl border border-primary text-primary font-bold text-sm">Trust Seller</button>
                <button className="py-2.5 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-blue-500/30">Contact Seller</button>
              </div>
            </div>
          </div>
        </div>

        <section className="px-4 mt-6">
          <h2 className="text-lg font-bold mb-3">Products & Services</h2>
          <div className="flex overflow-x-auto gap-4 no-scrollbar">
            {MOCK_PRODUCTS.map(p => (
              <div key={p.id} className="min-w-[160px] bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-28 bg-gray-200 relative">
                  <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                  <div className="absolute top-2 right-2 bg-white/90 px-1.5 py-0.5 rounded text-[10px] font-bold shadow-sm">{p.price}</div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold truncate">{p.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{p.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
