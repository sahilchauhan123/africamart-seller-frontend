
import React from 'react';
import { useBusinessController } from '../../controllers/useBusinessController';
import {
    CheckCircle2,
    Upload,
    Search,
    FolderOpen,
    ShieldCheck,
    IdCard,
    List,
    LayoutGrid,
    MoreVertical,
    FileText,
    Image as ImageIcon,
    Clock,
    Gavel,
    AlertCircle,
    Plus,
    Info
} from 'lucide-react';

interface BusinessInfoProps {
    onOpenDrawer: () => void;
    onViewAll: () => void;
}

const BusinessInfoView: React.FC<BusinessInfoProps> = ({ onOpenDrawer, onViewAll }) => {
    const { state } = useBusinessController();
    const { viewMode } = state;

    return (
        <div className="bg-[#f9fafb] font-display text-[#131516] min-h-screen flex flex-col pb-10">


            <main className="max-w-lg lg:max-w-7xl mx-auto flex-1 w-full p-4 lg:p-10 lg:pt-6 space-y-6 lg:space-y-0">




                {/* Desktop Grid Layout / Mobile List Layout Container */}
                <div className="w-full">


                    {/* Desktop Content Section */}
                    <div className="hidden lg:block">
                        {viewMode === 'grid' ? (
                            /* DESKTOP GRID VIEW */
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {/* Doc Card 1 */}
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative">
                                    <button className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
                                        <MoreVertical size={20} />
                                    </button>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-24 bg-blue-50 rounded-lg flex items-center justify-center mb-6 border border-blue-100">
                                            <FileText className="text-[#0033C4]" size={48} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 truncate w-full px-2">Tax Certificate 2023</h3>
                                        <p className="text-sm text-slate-500 mt-1">Oct 24, 2023 • 2.4 MB</p>
                                        <div className="mt-6 flex gap-2 w-full">
                                            <span className="inline-flex flex-1 justify-center items-center gap-1.5 bg-green-100 text-green-700 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                                <CheckCircle2 size={14} />
                                                Approved
                                            </span>
                                            <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-lg transition-colors" title="Update Document">
                                                <Upload size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Doc Card 2 */}
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative">
                                    <button className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
                                        <MoreVertical size={20} />
                                    </button>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-24 bg-orange-50 rounded-lg flex items-center justify-center mb-6 border border-orange-100">
                                            <ImageIcon className="text-orange-600" size={48} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 truncate w-full px-2">Business License</h3>
                                        <p className="text-sm text-slate-500 mt-1">Oct 26, 2023 • 1.1 MB</p>
                                        <div className="mt-6 flex gap-2 w-full">
                                            <span className="inline-flex flex-1 justify-center items-center gap-1.5 bg-amber-100 text-amber-700 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                                <Clock size={14} />
                                                Pending
                                            </span>
                                            <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-lg transition-colors" title="Re-upload Document">
                                                <Upload size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Doc Card 3 */}
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative">
                                    <button className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
                                        <MoreVertical size={20} />
                                    </button>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-24 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 border border-indigo-100">
                                            <FileText className="text-indigo-600" size={48} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 truncate w-full px-2">Article of Inc.</h3>
                                        <p className="text-sm text-slate-500 mt-1">Oct 22, 2023 • 4.8 MB</p>
                                        <div className="mt-6 flex gap-2 w-full">
                                            <span className="inline-flex flex-1 justify-center items-center gap-1.5 bg-green-100 text-green-700 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                                <CheckCircle2 size={14} />
                                                Approved
                                            </span>
                                            <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-lg transition-colors" title="Update Document">
                                                <Upload size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Doc Card 4 */}
                                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative">
                                    <button className="absolute top-4 right-4 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
                                        <MoreVertical size={20} />
                                    </button>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-24 bg-red-50 rounded-lg flex items-center justify-center mb-6 border border-red-100">
                                            <Gavel className="text-red-600" size={48} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 truncate w-full px-2">Terms of Service</h3>
                                        <p className="text-sm text-slate-500 mt-1">Sep 15, 2023 • 0.8 MB</p>
                                        <div className="mt-6 flex gap-2 w-full">
                                            <span className="inline-flex flex-1 justify-center items-center gap-1.5 bg-red-100 text-red-700 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                                <AlertCircle size={14} />
                                                Rejected
                                            </span>
                                            <button className="p-2 bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 rounded-lg transition-colors shadow-sm" title="Upload New Version">
                                                <Upload size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Add Card */}
                                <div className="border-2 border-dashed border-slate-100 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group min-h-[290px]">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Plus className="text-3xl" size={32} />
                                    </div>
                                    <h3 className="font-bold text-slate-900">Add Document</h3>
                                    <p className="text-xs text-slate-500 mt-1">PDF, JPG, or PNG</p>
                                </div>
                            </div>
                        ) : (
                            /* DESKTOP LIST VIEW */
                            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                                <div className="divide-y divide-slate-100">
                                    {/* List Item 1 */}
                                    <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                                <FileText className="text-[#0033C4]" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900">Tax Certificate 2023</h4>
                                                <p className="text-sm text-slate-500">PDF • Oct 24, 2023</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="inline-flex items-center gap-1.5 text-green-600 text-xs font-bold uppercase tracking-wider">
                                                <CheckCircle2 size={16} />
                                                Approved
                                            </span>
                                            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg border border-slate-200 transition-all text-[11px] font-bold uppercase">
                                                <Upload size={14} />
                                                Update
                                            </button>
                                            <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </div>
                                    {/* List Item 2 */}
                                    <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                                                <ImageIcon className="text-orange-600" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900">Business License</h4>
                                                <p className="text-sm text-slate-500">JPG • Oct 26, 2023</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                                <Clock size={16} />
                                                Pending
                                            </span>
                                            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg border border-slate-200 transition-all text-[11px] font-bold uppercase">
                                                <Upload size={14} />
                                                Update
                                            </button>
                                            <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                                                <MoreVertical size={18} />
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
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Tax Certificate 2023</p>
                                    <p className="text-xs text-gray-400">PDF • Oct 24, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-green-600">
                                    <CheckCircle2 size={16} />
                                    <span className="text-[10px] font-bold uppercase">Approved</span>
                                </div>
                                <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-lg transition-colors" title="Update Document">
                                    <Upload size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                                    <ImageIcon size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Business License</p>
                                    <p className="text-xs text-gray-400">JPG • Oct 26, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-gray-400">
                                    <Clock size={16} />
                                    <span className="text-[10px] font-bold uppercase">Pending</span>
                                </div>
                                <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-lg transition-colors" title="Re-upload Document">
                                    <Upload size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0033C4]">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Article of Inc.</p>
                                    <p className="text-xs text-gray-400">PDF • Oct 22, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-green-600">
                                    <CheckCircle2 size={14} />
                                    <span className="text-[10px] font-bold uppercase">Approved</span>
                                </div>
                                <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-lg transition-colors" title="Update Document">
                                    <Upload size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0033C4]">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Identity Proof</p>
                                    <p className="text-xs text-gray-400">PDF • Oct 20, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-green-600">
                                    <CheckCircle2 size={14} />
                                    <span className="text-[10px] font-bold uppercase">Approved</span>
                                </div>
                                <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-lg transition-colors" title="Update Document">
                                    <Upload size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0033C4]">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Financial Statement</p>
                                    <p className="text-xs text-gray-400">PDF • Oct 15, 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-gray-400">
                                    <Clock size={16} />
                                    <span className="text-[10px] font-bold uppercase">Pending</span>
                                </div>
                                <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 border border-slate-100 rounded-lg transition-colors" title="Re-upload Document">
                                    <Upload size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Verification Tip Section (Both Views) */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4 mt-8">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[#0033C4]">
                        <Info size={24} />
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

export default BusinessInfoView;
