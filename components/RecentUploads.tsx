
import React from 'react';

interface RecentUploadsProps {
    onBack: () => void;
}

const RecentUploads: React.FC<RecentUploadsProps> = ({ onBack }) => {
    return (
        <div className="bg-[#f9fafb] font-display text-[#131516] min-h-screen flex flex-col pb-28">
            <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .fill-1 {
            font-variation-settings: 'FILL' 1;
        }
      `}</style>

            <main className="max-w-lg mx-auto w-full">
                {/* Search and Filter bar */}
                <div className="px-4 py-4 sticky top-0 z-30 bg-[#f9fafb]/95 backdrop-blur-sm">
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="flex flex-col w-full group">
                                <div className="flex w-full items-stretch rounded-xl h-11 transition-all ring-1 ring-gray-200 focus-within:ring-[#0033C4] bg-white shadow-sm">
                                    <div className="flex items-center justify-center pl-4 rounded-l-xl">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-[#0033C4] text-xl">search</span>
                                    </div>
                                    <input
                                        className="flex w-full border-none bg-transparent focus:ring-0 h-full placeholder:text-gray-400 px-4 pl-2 text-sm font-normal outline-none"
                                        placeholder="Search history..."
                                    />
                                </div>
                            </label>
                        </div>
                        <button className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm text-gray-600">
                            <span className="material-symbols-outlined">tune</span>
                        </button>
                    </div>
                </div>

                <div className="px-4 flex flex-col gap-3">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1 mt-2">Today</p>

                    {/* Doc Item 1 */}
                    <div className="flex flex-col p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
                                </div>
                                <div>
                                    <p className="font-bold text-base text-gray-900 leading-tight">Tax Certificate 2023</p>
                                    <p className="text-xs text-gray-400 mt-0.5">2.4 MB • Oct 24, 2023, 10:45 AM</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">Approved</span>
                            </div>
                        </div>
                    </div>

                    {/* Doc Item 2 */}
                    <div className="flex flex-col p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                                    <span className="material-symbols-outlined text-2xl">image</span>
                                </div>
                                <div>
                                    <p className="font-bold text-base text-gray-900 leading-tight">Business License</p>
                                    <p className="text-xs text-gray-400 mt-0.5">1.1 MB • Oct 24, 2023, 09:12 AM</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider">Pending</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1 mt-6">Yesterday</p>

                    {/* Doc Item 3 - Rejected */}
                    <div className="flex flex-col p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                                    <span className="material-symbols-outlined text-2xl">description</span>
                                </div>
                                <div>
                                    <p className="font-bold text-base text-gray-900 leading-tight">VAT Declaration Q3</p>
                                    <p className="text-xs text-gray-400 mt-0.5">450 KB • Oct 23, 2023, 4:20 PM</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider">Rejected</span>
                            </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-50">
                            <p className="text-xs text-red-600 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm">error</span>
                                Scan is too blurry. Please re-upload.
                            </p>
                        </div>
                    </div>

                    {/* Doc Item 4 */}
                    <div className="flex flex-col p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined text-2xl">article</span>
                                </div>
                                <div>
                                    <p className="font-bold text-base text-gray-900 leading-tight">Article of Inc.</p>
                                    <p className="text-xs text-gray-400 mt-0.5">3.8 MB • Oct 23, 2023, 11:15 AM</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">Approved</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1 mt-6">Earlier this Month</p>

                    {/* Doc Item 5 */}
                    <div className="flex flex-col p-4 bg-white rounded-2xl border border-gray-100 shadow-sm opacity-90">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
                                </div>
                                <div>
                                    <p className="font-bold text-base text-gray-900 leading-tight">Bank Statement Sept</p>
                                    <p className="text-xs text-gray-400 mt-0.5">1.5 MB • Oct 15, 2023</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">Approved</span>
                            </div>
                        </div>
                    </div>

                    {/* Doc Item 6 */}
                    <div className="flex flex-col p-4 bg-white rounded-2xl border border-gray-100 shadow-sm opacity-90">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined text-2xl">description</span>
                                </div>
                                <div>
                                    <p className="font-bold text-base text-gray-900 leading-tight">Identity Proof</p>
                                    <p className="text-xs text-gray-400 mt-0.5">890 KB • Oct 08, 2023</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">Approved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Floating Action Button */}
            <button className="fixed right-4 bottom-6 size-14 bg-[#0033C4] text-white rounded-full shadow-xl shadow-[#0033C4]/30 flex items-center justify-center z-40 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-3xl">add</span>
            </button>
        </div>
    );
};

export default RecentUploads;
