
import React from 'react';

interface BusinessInfoProps {
    onOpenDrawer: () => void;
    onViewAll: () => void;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ onOpenDrawer, onViewAll }) => {
    return (
        <div className="bg-[#f9fafb] font-display text-[#131516] min-h-screen flex flex-col pb-10">
            <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .fill-1 {
            font-variation-settings: 'FILL' 1;
        }
      `}</style>

            <main className="max-w-lg mx-auto flex-1 w-full">
                {/* Welcome & Search */}
                <div className="px-4 pt-6">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back, Seller</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your business documents and verification status.</p>
                </div>
                <div className="px-4 py-4">
                    <label className="flex flex-col w-full group">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-12 transition-all ring-1 ring-gray-200 focus-within:ring-[#0033C4]">
                            <div className="flex items-center justify-center pl-4 rounded-l-xl">
                                <span className="material-symbols-outlined text-gray-400 group-focus-within:text-[#0033C4]">search</span>
                            </div>
                            <input
                                className="flex w-full border-none bg-transparent focus:ring-0 h-full placeholder:text-gray-400 px-4 pl-2 text-base font-normal leading-normal outline-none"
                                placeholder="Search documents..."
                            />
                        </div>
                    </label>
                </div>

                {/* Quick Upload Button */}
                <div className="px-4 mb-6">
                    <button className="w-full h-14 bg-[rgb(153,153,153)] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[rgb(153,153,153)]/20 active:scale-95 transition-transform">
                        <span className="material-symbols-outlined">upload_file</span>
                        Upload Business Documents
                    </button>
                </div>

                {/* Summary Cards */}
                <div className="px-4 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 rounded-xl p-4 bg-white shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 text-[#0033C4]">
                            <span className="material-symbols-outlined text-xl">folder_open</span>
                            <p className="text-sm font-medium">Documents</p>
                        </div>
                        <p className="text-2xl font-bold leading-tight text-slate-900">24</p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-4 bg-white shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 text-green-600">
                            <span className="material-symbols-outlined text-xl">verified</span>
                            <p className="text-sm font-medium">Status</p>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">Approved</span>
                        </div>
                    </div>

                    {/* Profile Completion */}
                    <div className="col-span-2 flex flex-col gap-3 rounded-xl p-5 bg-white shadow-sm border border-gray-100">
                        <div className="flex gap-6 justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#0033C4]">account_box</span>
                                <p className="text-base font-semibold">Profile Completion</p>
                            </div>
                            <p className="text-[#0033C4] text-sm font-bold">85%</p>
                        </div>
                        <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                            <div className="h-full rounded-full bg-[#0033C4]" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-gray-500 text-xs font-normal">Add your VAT certificate to reach 100%!</p>
                    </div>
                </div>

                {/* Recent Uploads */}
                <div className="mt-8 px-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">Recent Uploads</h3>
                        <button
                            onClick={onViewAll}
                            className="text-[#0033C4] text-sm font-semibold"
                        >
                            View All
                        </button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined">description</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Tax Certificate 2023</p>
                                    <p className="text-xs text-gray-400">PDF • Oct 24, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-green-600">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                <span className="text-[10px] font-bold uppercase">Approved</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                                    <span className="material-symbols-outlined">image</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Business License</p>
                                    <p className="text-xs text-gray-400">JPG • Oct 26, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-gray-400">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                <span className="text-[10px] font-bold uppercase">Pending</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined">article</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Article of Inc.</p>
                                    <p className="text-xs text-gray-400">PDF • Oct 22, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-green-600">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                <span className="text-[10px] font-bold uppercase">Approved</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Verification Banner */}
                <div className="m-4 mt-8 p-4 bg-[#0033C4]/5 rounded-xl border border-[#0033C4]/10 flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#0033C4] mt-0.5">info</span>
                    <div>
                        <p className="text-sm font-bold text-[#0033C4]">Verification Tip</p>
                        <p className="text-xs text-gray-600 mt-1">Upload high-resolution scans for faster automated verification of your business credentials.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BusinessInfo;
