
import React from 'react';

interface Props {
  onBack: () => void;
  onAccept: () => void;
}

const LeadDetails: React.FC<Props> = ({ onBack, onAccept }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-primary p-4 text-white flex items-center justify-between sticky top-0 z-50">
        <button onClick={onBack} className="p-1 hover:bg-white/10 rounded-full transition">
          <span className="material-icons-round text-2xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold">Lead Request Details</h1>
        <span className="material-icons-round">share</span>
      </header>

      <main className="p-4 space-y-4 overflow-y-auto flex-1">
        <div className="flex gap-3">
          <button className="flex-1 py-3 px-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-blue-50 transition">Decline</button>
          <button onClick={onAccept} className="flex-[2] py-3 px-4 rounded-xl bg-primary text-white font-bold shadow-lg">Accept & Contact</button>
        </div>

        <div className="relative w-full h-64 bg-white rounded-xl shadow-sm overflow-hidden flex items-center justify-center">
          <img alt="Product" className="object-contain p-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCylpTUWvaYk5a3_Aww9d8GB7EsHJLIrRsri7x77ny18gO5rnTJ2dYRRxwa6kn4KopohCF_XiSHuV_FgPo08PJm3ZiGPxlMr4uIxehZZth8RO-FjJCVf9ghvsVS47G11L3GHQgPZgmmVDHYNnZIs55OOI1-nQxNDANPZaTAgC2p1l_DlNfGL37ujTZ3E7es8NyF0MDp0Lt87LBoVA-v6Vz5faZijVIDixeABS7Oeyrn2BjRoYfn2XguJyht7XZyL8m4bEOJrd6DuJ4" />
          <div className="absolute top-3 left-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-green-200">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> Active Lead
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-2">Industrial Red Bucket (50L)</h2>
          <div className="flex items-center text-sm text-gray-500">
            <span className="material-icons-round text-base mr-1">schedule</span>
            <span>Posted Yesterday, 5 hrs ago</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-xl border flex flex-col items-center">
            <span className="material-icons-round text-primary">inventory_2</span>
            <span className="text-xs text-gray-500 uppercase mt-2">Quantity</span>
            <span className="text-lg font-bold">50+ Units</span>
          </div>
          <div className="bg-white p-4 rounded-xl border flex flex-col items-center">
            <span className="material-icons-round text-green-600">payments</span>
            <span className="text-xs text-gray-500 uppercase mt-2">Est. Value</span>
            <span className="text-lg font-bold">LD 150 - 300</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeadDetails;
