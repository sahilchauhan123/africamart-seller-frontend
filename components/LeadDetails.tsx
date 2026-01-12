
import React from 'react';

interface Props {
    onBack: () => void;
    onAccept: () => void;
}

const LeadDetails: React.FC<Props> = ({ onBack, onAccept }) => {
    return (
        <div className="bg-slate-50 font-body text-slate-900 antialiased min-h-screen flex flex-col h-full overflow-hidden">
            {/* Premium Header */}
            <header className="sticky top-0 z-50 bg-primary shadow-md shrink-0 h-16 lg:h-[72px] flex items-center">
                <div className="flex items-center justify-between px-4 text-white w-full">
                    <button
                        onClick={onBack}
                        aria-label="Go back"
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <span className="material-icons-round text-2xl">arrow_back</span>
                    </button>
                    <h1 className="text-lg font-semibold tracking-wide">Lead Request Details</h1>
                    <button aria-label="More options" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <span className="material-icons-round text-2xl">share</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 pb-8 overflow-y-auto no-scrollbar space-y-4">
                {/* Actions */}
                <div className="flex gap-3 w-full">
                    <button
                        onClick={onBack}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border-2 border-primary bg-white text-primary font-semibold hover:bg-blue-50 transition-all active:scale-95 text-sm md:text-base shadow-sm"
                    >
                        <span className="material-icons-round text-lg">close</span>
                        Decline
                    </button>
                    <button
                        onClick={onAccept}
                        className="flex-[2] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-95 text-sm md:text-base"
                    >
                        <span className="material-icons-round text-lg">check</span>
                        Accept & Contact
                    </button>
                </div>

                {/* Product Image */}
                <div className="relative w-full h-64 bg-white rounded-xl shadow-sm overflow-hidden flex items-center justify-center group border border-slate-100">
                    <img
                        alt="Red industrial plastic bucket"
                        className="object-contain w-full h-full p-4 transform transition-transform duration-500 group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCylpTUWvaYk5a3_Aww9d8GB7EsHJLIrRsri7x77ny18gO5rnTJ2dYRRxwa6kn4KopohCF_XiSHuV_FgPo08PJm3ZiGPxlMr4uIxehZZth8RO-FjJCVf9ghvsVS47G11L3GHQgPZgmmVDHYNnZIs55OOI1-nQxNDANPZaTAgC2p1l_DlNfGL37ujTZ3E7es8NyF0MDp0Lt87LBoVA-v6Vz5faZijVIDixeABS7Oeyrn2BjRoYfn2XguJyht7XZyL8m4bEOJrd6DuJ4"
                    />
                    <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        1/3 Photos
                    </div>
                    <div className="absolute top-3 left-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-green-200">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Active Lead
                    </div>
                </div>

                {/* Title and Date */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 leading-tight mb-2">Industrial Red Bucket (50L)</h2>
                            <div className="flex items-center text-sm text-slate-500">
                                <span className="material-icons-round text-base mr-1">schedule</span>
                                <span>Posted Yesterday, 5 hrs ago</span>
                            </div>
                        </div>
                        <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                            <span className="material-icons-round">bookmark_border</span>
                        </button>
                    </div>
                </div>

                {/* Key Info Cards */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 text-primary">
                            <span className="material-icons-round">inventory_2</span>
                        </div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Quantity</span>
                        <span className="text-lg font-bold mt-1">50+ Units</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-2 text-green-600">
                            <span className="material-icons-round">payments</span>
                        </div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Est. Value</span>
                        <span className="text-lg font-bold mt-1">LD 150 - 300</span>
                    </div>
                </div>

                {/* Specifications */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Lead Specifications</h3>
                    </div>
                    <div className="divide-y divide-slate-50">
                        <div className="p-4 flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <span className="material-icons-round">location_on</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-tight">Delivery Location</p>
                                <p className="font-medium text-slate-900">Paynesville, Monrovia</p>
                                <p className="text-xs text-slate-400 mt-1">Within 5km radius of city center</p>
                            </div>
                        </div>
                        <div className="p-4 flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <span className="material-icons-round">category</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-tight">Product Category</p>
                                <p className="font-medium text-slate-900">Household & Industrial Plastic</p>
                            </div>
                        </div>
                        <div className="p-4 flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <span className="material-icons-round">hourglass_top</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-tight">Requirement Urgency</p>
                                <div className="inline-flex items-center px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs font-bold">
                                    Immediate
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <span className="material-icons-round">description</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-tight">Buyer Note</p>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Looking for high-quality, durable red plastic buckets suitable for construction use. Must be able to deliver by next Monday. Please provide quote including delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buyer Profile */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 italic">
                            JD
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 leading-tight">John Doe Construction</p>
                            <div className="flex items-center text-xs text-yellow-500 mt-0.5">
                                <span className="material-icons-round text-sm">star</span>
                                <span className="font-bold ml-1">4.8</span>
                                <span className="text-slate-400 ml-1 font-medium">(12 Orders)</span>
                            </div>
                        </div>
                    </div>
                    <button className="text-primary text-xs font-bold uppercase hover:underline">View Profile</button>
                </div>
            </main>
        </div>
    );
};

export default LeadDetails;
