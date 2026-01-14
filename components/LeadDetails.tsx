
import React from 'react';

interface Props {
    onBack: () => void;
    onAccept: () => void;
}

const LeadDetails: React.FC<Props> = ({ onBack, onAccept }) => {
    return (
        <div className="bg-[#F8FAFC] font-sans text-slate-900 antialiased min-h-full flex flex-col focus:outline-none">
            {/* --- MOBILE VIEW (Snippet Implementation) --- */}
            <div className="lg:hidden flex flex-col bg-[#F3F4F6] min-h-screen">
                <main className="flex-grow p-4 pb-8 space-y-4">
                    {/* Action Buttons */}
                    <div className="flex gap-3 w-full">
                        <button
                            onClick={onBack}
                            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border-2 border-primary bg-white text-primary font-semibold hover:bg-blue-50 transition-all active:scale-95 text-sm shadow-sm"
                        >
                            <span className="material-icons-round text-lg">close</span>
                            Decline
                        </button>
                        <button
                            onClick={onAccept}
                            className="flex-[2] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-95 text-sm"
                        >
                            <span className="material-icons-round text-lg">check</span>
                            Accept & Contact
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full h-64 bg-white rounded-xl shadow-sm overflow-hidden flex items-center justify-center group">
                        <img
                            alt="Industrial Red Bucket"
                            className="object-contain w-full h-full p-4 transform transition-transform duration-500 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqJIM01Xhojz2_r23jPbhVsuYwjT9DhFkoycHE2aK8ehGmADx7PG7yeehxk5kR60IIyS_2voyVYGDRnHuRa_B7sXrVp0lLWtAC32gjRkXylGxas-t1NdcBNcb4yPUKEGO8t19ZhrRQ6tJPm3oKBZTr9VZeDMi1OepJ4TgbTUvBABAl7odUoAAKAPW-6-HiY_ovL4D_ZynfK3m3IKhO-Y5sKWgWQmaeAA-lq1tHzXD3aZSxZqQ6hrddNiM78J3_xCXfXh8lnvRbJD4"
                        />
                        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                            1/3 Photos
                        </div>
                        <div className="absolute top-3 left-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-green-200">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Active Lead
                        </div>
                    </div>

                    {/* Title & Info Card */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 leading-tight mb-2">Industrial Red Bucket (50L)</h2>
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

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 text-primary">
                                <span className="material-icons-round">inventory_2</span>
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Quantity</span>
                            <span className="text-lg font-bold mt-1">50+ Units</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-2 text-green-600">
                                <span className="material-icons-round">payments</span>
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Est. Value</span>
                            <span className="text-lg font-bold mt-1">LD 150 - 300</span>
                        </div>
                    </div>

                    {/* Specifications Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 bg-slate-50">
                            <h3 className="font-semibold text-gray-900">Lead Specifications</h3>
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="p-4 flex items-start gap-4">
                                <div className="mt-1 text-primary">
                                    <span className="material-icons-round">location_on</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Delivery Location</p>
                                    <p className="font-medium text-gray-900">Paynesville, Monrovia</p>
                                    <p className="text-xs text-slate-500 mt-1">Within 5km radius of city center</p>
                                </div>
                            </div>
                            <div className="p-4 flex items-start gap-4">
                                <div className="mt-1 text-primary">
                                    <span className="material-icons-round">category</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Product Category</p>
                                    <p className="font-medium text-gray-900">Household & Industrial Plastic</p>
                                </div>
                            </div>
                            <div className="p-4 flex items-start gap-4">
                                <div className="mt-1 text-primary">
                                    <span className="material-icons-round">hourglass_top</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Requirement Urgency</p>
                                    <div className="inline-flex items-center px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs font-medium">
                                        Immediate
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 flex items-start gap-4">
                                <div className="mt-1 text-primary">
                                    <span className="material-icons-round">description</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Buyer Note</p>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        Looking for high-quality, durable red plastic buckets suitable for construction use. Must be able to deliver by next Monday. Please provide quote including delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buyer Profile Card */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-lg font-bold text-slate-500 text-center">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">John Doe Construction</p>
                                <div className="flex items-center text-xs text-yellow-500">
                                    <span className="material-icons-round text-sm">star</span>
                                    <span className="font-medium ml-1">4.8</span>
                                    <span className="text-slate-400 ml-1">(12 Orders)</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-primary text-sm font-medium hover:underline">View Profile</button>
                    </div>
                </main>
            </div>

            {/* --- DESKTOP VIEW (Preserved) --- */}
            <div className="hidden lg:flex flex-col h-full bg-[#F8FAFC]">
                {/* Desktop Action Sub-header */}
                <div className="hidden lg:block bg-white border-b border-slate-200 z-30 shadow-sm flex-none">
                    <div className="max-w-[1536px] mx-auto px-10 py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-slate-500 text-sm">
                            <div className="flex items-center">
                                <span className="material-symbols-outlined mr-2">visibility</span>
                                <span className="font-medium">14 Views</span>
                            </div>
                            <div className="h-4 w-px bg-slate-200"></div>
                            <div className="flex items-center">
                                <span className="material-symbols-outlined mr-2">send</span>
                                <span className="font-medium">2 Quotes Sent</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={onBack}
                                className="px-6 py-2 text-slate-600 font-bold text-sm rounded-lg hover:bg-slate-50 border border-slate-300 transition-all flex items-center space-x-2"
                            >
                                <span className="material-symbols-outlined">close</span>
                                <span>DECLINE LEAD</span>
                            </button>
                            <button
                                onClick={onAccept}
                                className="px-8 py-2 bg-primary text-white font-bold text-sm rounded-lg hover:bg-blue-800 shadow-md transition-all flex items-center space-x-2"
                            >
                                <span className="material-symbols-outlined">check_circle</span>
                                <span>ACCEPT & CONTACT BUYER</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Content Area */}
                <main className="flex-1 bg-[#F8FAFC]">
                    <div className="max-w-[1536px] mx-auto p-4 lg:px-10 lg:pt-2 lg:pb-10 space-y-6">
                        {/* Stats Section / Key Info */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 lg:p-6 flex items-center shadow-sm">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mr-4 lg:mr-5 shrink-0">
                                    <span className="material-symbols-outlined !text-3xl">shopping_cart</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Product Title</p>
                                    <h2 className="text-lg lg:text-xl font-bold text-slate-900 truncate">Industrial Red Bucket (50L)</h2>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 flex items-center shadow-sm">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                                    <span className="material-symbols-outlined">inventory_2</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Quantity</p>
                                    <p className="text-base lg:text-lg font-bold">50+ Units</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 flex items-center shadow-sm">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Est. Value</p>
                                    <p className="text-base lg:text-lg font-bold">LD 150 - 300</p>
                                </div>
                            </div>
                        </div>

                        {/* Two-Column Layout for Desktop */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column: Image and Details */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Product Image Section */}
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                                    <div className="relative bg-slate-50 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                                        <img
                                            alt="Industrial Red Bucket"
                                            className="max-h-[250px] lg:max-h-[350px] object-contain p-6"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqJIM01Xhojz2_r23jPbhVsuYwjT9DhFkoycHE2aK8ehGmADx7PG7yeehxk5kR60IIyS_2voyVYGDRnHuRa_B7sXrVp0lLWtAC32gjRkXylGxas-t1NdcBNcb4yPUKEGO8t19ZhrRQ6tJPm3oKBZTr9VZeDMi1OepJ4TgbTUvBABAl7odUoAAKAPW-6-HiY_ovL4D_ZynfK3m3IKhO-Y5sKWgWQmaeAA-lq1tHzXD3aZSxZqQ6hrddNiM78J3_xCXfXh8lnvRbJD4"
                                        />
                                        <div className="absolute top-4 lg:top-6 left-4 lg:left-6">
                                            <span className="bg-emerald-100 text-emerald-700 px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-bold flex items-center space-x-2 border border-emerald-200">
                                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                                <span>ACTIVE LEAD</span>
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6 flex space-x-2">
                                            <span className="bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] lg:text-xs font-medium border border-white/20 flex items-center uppercase tracking-wider">
                                                <span className="material-symbols-outlined !text-sm lg:!text-base mr-1 lg:mr-2">photo_library</span> 1/3 Photos
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Specifications Section */}
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                                        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Lead Specifications</h3>
                                        <span className="text-[10px] lg:text-xs text-slate-400 font-medium italic">Posted 5 hours ago</span>
                                    </div>
                                    <div className="p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-10 gap-x-6">
                                        <div className="flex items-start space-x-4">
                                            <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Delivery Location</p>
                                                <p className="text-slate-900 font-semibold text-sm lg:text-base">Paynesville, Monrovia</p>
                                                <p className="text-[10px] text-slate-500 mt-1">Within 5km radius of city center</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <span className="material-symbols-outlined text-primary mt-1">category</span>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Product Category</p>
                                                <p className="text-slate-900 font-semibold text-sm lg:text-base">Industrial Plastic Supplies</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <span className="material-symbols-outlined text-primary mt-1">timer</span>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Requirement Urgency</p>
                                                <span className="mt-1 inline-block bg-orange-100 text-orange-700 px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-orange-200">Immediate</span>
                                            </div>
                                        </div>

                                        <div className="col-span-1 sm:col-span-2 pt-6 border-t border-slate-50">
                                            <div className="flex items-start space-x-4">
                                                <span className="material-symbols-outlined text-primary mt-1">notes</span>
                                                <div className="flex-1">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Buyer Note</p>
                                                    <div className="bg-slate-50 p-4 lg:p-5 rounded-xl border-l-4 border-primary italic text-slate-700 leading-relaxed text-sm">
                                                        "Looking for high-quality, durable red plastic buckets suitable for construction use. Must be able to deliver by next Monday. Please provide quote including delivery."
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Profile Sidebar */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                                        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Buyer Profile</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-lg lg:text-xl font-bold text-slate-400 border border-slate-200 shadow-inner shrink-0">
                                                JD
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm lg:text-base">John Doe Construction</h4>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <div className="flex items-center text-amber-500">
                                                        <span className="material-symbols-outlined !text-sm">star</span>
                                                        <span className="ml-1 text-xs lg:text-sm font-bold text-slate-900">4.8</span>
                                                    </div>
                                                    <span className="text-slate-300">•</span>
                                                    <span className="text-slate-500 text-[10px] lg:text-xs">12 Orders</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-full flex items-center justify-center px-4 py-2.5 bg-slate-50 text-primary font-bold text-[10px] lg:text-xs rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors uppercase tracking-widest">
                                            VIEW PROFILE
                                        </button>
                                        <hr className="my-6 border-slate-100" />
                                        <div className="bg-blue-600 p-5 rounded-xl text-white relative overflow-hidden group">
                                            <div className="relative z-10">
                                                <div className="flex items-center text-[9px] font-bold bg-white/20 w-fit px-2 py-0.5 rounded-full mb-3 tracking-widest">
                                                    <span className="material-symbols-outlined !text-[14px] mr-1">verified</span>
                                                    VERIFIED BUYER
                                                </div>
                                                <h4 className="font-bold text-sm mb-1 leading-tight">Elite Partner Program</h4>
                                                <p className="text-blue-100 text-[10px] lg:text-xs leading-relaxed">This buyer has a 100% completion rate on their last 5 leads.</p>
                                            </div>
                                            <div className="absolute -right-4 -bottom-4 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full blur-xl transition-transform group-hover:scale-150 duration-700"></div>
                                        </div>

                                        {/* Support Card - Fixed Inside Sticky Container */}
                                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6 flex flex-col">
                                            <div className="flex items-center space-x-3 mb-3 text-slate-600">
                                                <span className="material-symbols-outlined">help_outline</span>
                                                <span className="font-bold text-sm">Need Help?</span>
                                            </div>
                                            <p className="text-[10px] lg:text-xs text-slate-500 leading-relaxed mb-4 font-medium">Contact our lead specialists if you have questions about this inquiry.</p>
                                            <button className="text-[10px] lg:text-xs font-bold text-primary hover:underline uppercase tracking-widest text-left">Chat with Support</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LeadDetails;
