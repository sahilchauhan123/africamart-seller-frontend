
import React from 'react';

interface Props {
    onBack: () => void;
    onAccept: () => void;
}

const LeadDetails: React.FC<Props> = ({ onBack, onAccept }) => {
    return (
        <div className="flex flex-col bg-slate-50 h-full overflow-hidden">
            {/* Fixed Page Header */}
            <div className="bg-white border-b border-slate-200 px-4 lg:px-10 py-4 shrink-0">
                <div className="max-w-4xl mx-auto flex gap-4 items-center">
                    <button onClick={onBack} className="p-2 bg-slate-50 rounded-full border border-slate-200 text-slate-500 hover:text-primary transition-all">
                        <span className="material-icons-round leading-none">arrow_back</span>
                    </button>
                    <h1 className="text-xl font-bold text-slate-800">Lead Details</h1>
                </div>
            </div>

            <main className="flex-1 overflow-y-auto p-4 lg:p-10 no-scrollbar">
                <div className="max-w-4xl mx-auto space-y-6 pb-20">
                    <div className="flex gap-4">
                        <button className="flex-1 py-4 px-6 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-white transition-all">Decline</button>
                        <button onClick={onAccept} className="flex-[2] py-4 px-6 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all">Accept & Contact</button>
                    </div>

                    <div className="relative w-full h-80 bg-white rounded-[24px] shadow-sm overflow-hidden flex items-center justify-center border border-slate-100">
                        <img alt="Product" className="object-contain p-8 w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCylpTUWvaYk5a3_Aww9d8GB7EsHJLIrRsri7x77ny18gO5rnTJ2dYRRxwa6kn4KopohCF_XiSHuV_FgPo08PJm3ZiGPxlMr4uIxehZZth8RO-FjJCVf9ghvsVS47G11L3GHQgPZgmmVDHYNnZIs55OOI1-nQxNDANPZaTAgC2p1l_DlNfGL37ujTZ3E7es8NyF0MDp0Lt87LBoVA-v6Vz5faZijVIDixeABS7Oeyrn2BjRoYfn2XguJyht7XZyL8m4bEOJrd6DuJ4" />
                        <div className="absolute top-4 left-4 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-2 border border-green-100 tracking-wider">
                            <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span> ACTIVE LEAD
                        </div>
                    </div>

                    <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Industrial Red Bucket (50L)</h2>
                        <div className="flex items-center text-sm text-slate-400 font-medium">
                            <span className="material-icons-round text-base mr-2">schedule</span>
                            <span>Posted Yesterday, 5 hrs ago</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-3">
                                <span className="material-icons-round text-2xl">inventory_2</span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Quantity</span>
                            <span className="text-xl font-bold text-slate-800 mt-1">50+ Units</span>
                        </div>
                        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3">
                                <span className="material-icons-round text-2xl">payments</span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Est. Value</span>
                            <span className="text-xl font-bold text-slate-800 mt-1">LD 150 - 300</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Buyer Specifications</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                <span className="text-sm text-slate-500">Material</span>
                                <span className="text-sm font-bold text-slate-800">Industrial Plastic</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                <span className="text-sm text-slate-500">Color</span>
                                <span className="text-sm font-bold text-slate-800">Crimson Red</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                <span className="text-sm text-slate-500">Usage</span>
                                <span className="text-sm font-bold text-slate-800">Heavy Duty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LeadDetails;
