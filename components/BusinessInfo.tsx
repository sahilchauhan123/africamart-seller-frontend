
import React, { useState } from 'react';

interface BusinessInfoProps {
    onOpenDrawer: () => void;
    onViewAll: () => void;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ onOpenDrawer, onViewAll }) => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

            <main className="max-w-lg lg:max-w-7xl mx-auto flex-1 w-full p-4 lg:p-8 space-y-6 lg:space-y-8">

                {/* Desktop Header Stats Section - Hidden on Mobile */}
                <div className="hidden lg:flex flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-8">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 leading-tight">Document Management</h1>
                        </div>
                        <div className="flex items-center gap-6 border-l border-slate-200 pl-8 h-8">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Verification:</span>
                                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">
                                    <span className="material-symbols-outlined text-xs">check_circle</span> Approved
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Completion:</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 bg-slate-200 rounded-full h-1.5">
                                        <div className="bg-[#2D6A74] h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-900">85%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#2D6A74] hover:bg-teal-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-[#2D6A74]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 scale-95 origin-right">
                        <span className="material-symbols-outlined">upload_file</span>
                        Upload Business Documents
                    </button>
                </div>

                {/* Mobile Welcome Header - Hidden on Desktop */}
                <div className="lg:hidden flex flex-col gap-1 pt-2">
                    <h1 className="text-2xl font-bold text-gray-900 leading-tight">Welcome back, Seller</h1>
                    <p className="text-gray-500 text-sm">Manage your business documents and verification status.</p>
                </div>

                {/* Mobile Search - Hidden on Desktop */}
                <div className="lg:hidden mt-2">
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

                {/* Mobile Upload Button - Hidden on Desktop */}
                <div className="lg:hidden">
                    <button className="w-full h-14 bg-[rgb(153,153,153)] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-black/10 active:scale-95 transition-transform">
                        <span className="material-symbols-outlined">upload_file</span>
                        Upload Business Documents
                    </button>
                </div>

                {/* Desktop Filters & View Switcher - Hidden on Mobile */}
                <div className="hidden lg:flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex gap-4">
                        <button className="px-4 py-2 text-sm font-semibold bg-white border border-slate-200 rounded-lg shadow-sm">All Files</button>
                        <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:bg-white rounded-lg transition-colors">Pending</button>
                        <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:bg-white rounded-lg transition-colors">Approved</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'text-primary bg-blue-50' : 'text-slate-400 hover:text-primary'}`}
                        >
                            <span className="material-symbols-outlined">view_list</span>
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'text-primary bg-blue-50' : 'text-slate-400 hover:text-primary'}`}
                        >
                            <span className="material-symbols-outlined">grid_view</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Summary Cards - Hidden on Desktop */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3 text-slate-500 mb-4">
                            <span className="material-symbols-outlined text-blue-500">folder_open</span>
                            <span className="font-medium text-sm lg:text-base">Total Documents</span>
                        </div>
                        <div className="text-2xl lg:text-4xl font-bold text-slate-900">24</div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3 text-slate-500 mb-4">
                            <span className="material-symbols-outlined text-green-500">verified_user</span>
                            <span className="font-medium text-sm lg:text-base">Verification Status</span>
                        </div>
                        <div>
                            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wider">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                Approved
                            </span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm col-span-1">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3 text-slate-500">
                                <span className="material-symbols-outlined text-[#2D6A74]">badge</span>
                                <span className="font-medium text-sm lg:text-base">Profile Completion</span>
                            </div>
                            <span className="text-slate-900 font-bold">85%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 lg:h-2.5 mb-4 overflow-hidden">
                            <div className="bg-[#2D6A74] h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-xs lg:text-sm text-slate-500">
                            Add your VAT certificate to reach 100%! <a className="text-[#0033C4] font-semibold hover:underline" href="#">Complete now</a>
                        </p>
                    </div>
                </div>

                {/* Desktop Grid Layout / Mobile List Layout Container */}
                <div className="w-full">
                    {/* Native Mobile Header for List View */}
                    <div className="lg:hidden flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-slate-900">Recent Uploads</h2>
                        <button onClick={onViewAll} className="text-[#0033C4] text-sm font-semibold hover:underline">View All</button>
                    </div>

                    {/* Desktop Content Section */}
                    <div className="hidden lg:block">
                        {viewMode === 'grid' ? (
                            /* DESKTOP GRID VIEW */
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {/* Doc Card 1 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative">
                                    <button className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-24 bg-blue-50 rounded-lg flex items-center justify-center mb-6 border border-blue-100">
                                            <span className="material-symbols-outlined text-5xl text-[#0033C4]">description</span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 truncate w-full px-2">Tax Certificate 2023</h3>
                                        <p className="text-sm text-slate-500 mt-1">Oct 24, 2023 • 2.4 MB</p>
                                        <div className="mt-6 w-full">
                                            <span className="inline-flex w-full justify-center items-center gap-1.5 bg-green-100 text-green-700 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                                Approved
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Doc Card 2 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative">
                                    <button className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-24 bg-orange-50 rounded-lg flex items-center justify-center mb-6 border border-orange-100">
                                            <span className="material-symbols-outlined text-5xl text-orange-600">image</span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 truncate w-full px-2">Business License</h3>
                                        <p className="text-sm text-slate-500 mt-1">Oct 26, 2023 • 1.1 MB</p>
                                        <div className="mt-6 w-full">
                                            <span className="inline-flex w-full justify-center items-center gap-1.5 bg-amber-100 text-amber-700 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-sm">schedule</span>
                                                Pending
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Doc Card 3 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative">
                                    <button className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-24 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 border border-indigo-100">
                                            <span className="material-symbols-outlined text-5xl text-indigo-600">article</span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 truncate w-full px-2">Article of Inc.</h3>
                                        <p className="text-sm text-slate-500 mt-1">Oct 22, 2023 • 4.8 MB</p>
                                        <div className="mt-6 w-full">
                                            <span className="inline-flex w-full justify-center items-center gap-1.5 bg-green-100 text-green-700 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                                Approved
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Doc Card 4 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative">
                                    <button className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-24 bg-red-50 rounded-lg flex items-center justify-center mb-6 border border-red-100">
                                            <span className="material-symbols-outlined text-5xl text-red-600">gavel</span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 truncate w-full px-2">Terms of Service</h3>
                                        <p className="text-sm text-slate-500 mt-1">Sep 15, 2023 • 0.8 MB</p>
                                        <div className="mt-6 w-full">
                                            <span className="inline-flex w-full justify-center items-center gap-1.5 bg-red-100 text-red-700 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-sm">error</span>
                                                Rejected
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Add Card */}
                                <div className="border-2 border-dashed border-slate-200 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group min-h-[290px]">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-3xl">add</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Add Document</h3>
                                    <p className="text-xs text-slate-500 mt-1">PDF, JPG, or PNG</p>
                                </div>
                            </div>
                        ) : (
                            /* DESKTOP LIST VIEW */
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                <div className="divide-y divide-slate-100">
                                    {/* List Item 1 */}
                                    <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[#0033C4]">description</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900">Tax Certificate 2023</h4>
                                                <p className="text-sm text-slate-500">PDF • Oct 24, 2023</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <span className="inline-flex items-center gap-1.5 text-green-600 text-sm font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-lg">check_circle</span>
                                                Approved
                                            </span>
                                            <button className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                                                <span className="material-symbols-outlined text-slate-400">more_vert</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* List Item 2 */}
                                    <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                                                <span className="material-symbols-outlined text-orange-600">image</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900">Business License</h4>
                                                <p className="text-sm text-slate-500">JPG • Oct 26, 2023</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <span className="inline-flex items-center gap-1.5 text-slate-400 text-sm font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-lg">schedule</span>
                                                Pending
                                            </span>
                                            <button className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                                                <span className="material-symbols-outlined text-slate-400">more_vert</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* MOBILE LIST VIEW (Refined Look) */}
                    <div className="lg:hidden flex flex-col gap-3">
                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0033C4]">
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
                                <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0033C4]">
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

                {/* Verification Tip Section (Both Views) */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[#0033C4]">
                        <span className="material-symbols-outlined">info</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-900">Verification Tip</h4>
                        <p className="text-blue-700 text-sm mt-1">
                            Upload high-resolution scans for faster automated verification of your business credentials. Clear documents are processed 40% faster.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BusinessInfo;
