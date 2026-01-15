import React, { useState } from 'react';

export enum CategoryView {
    LIST = 'LIST',
    ADD = 'ADD'
}

interface CategoryManagerProps {
    initialView?: CategoryView;
}

const CategoryManager: React.FC<CategoryManagerProps> = ({ initialView }) => {
    const [currentSubView, setCurrentSubView] = useState<CategoryView>(initialView || CategoryView.LIST);

    React.useEffect(() => {
        setCurrentSubView(initialView || CategoryView.LIST);
    }, [initialView]);

    const renderMobileListView = () => (
        <>
            {/* Mobile Search and Filters */}
            <div className="px-4 py-4 space-y-3 bg-white border-b border-slate-200">
                <div className="relative">
                    <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                    <input
                        className="w-full bg-slate-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder-slate-500"
                        placeholder="Search categories..."
                        type="text"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    <button className="flex items-center gap-1 px-4 py-2 bg-slate-100 rounded-full text-xs font-medium whitespace-nowrap border border-transparent active:border-primary/30">
                        Status: All <span className="material-icons-round text-sm">expand_more</span>
                    </button>
                    <button className="flex items-center gap-1 px-4 py-2 bg-slate-100 rounded-full text-xs font-medium whitespace-nowrap border border-transparent active:border-primary/30">
                        Type: All <span className="material-icons-round text-sm">expand_more</span>
                    </button>
                    <button className="flex items-center gap-1 px-4 py-2 bg-slate-100 rounded-full text-xs font-medium whitespace-nowrap">
                        <span className="material-icons-round text-sm">sort</span> Sort
                    </button>
                </div>
            </div>

            {/* Mobile Category List */}
            <div className="mt-2 divide-y divide-slate-100">
                {/* Electronics - Parent */}
                <div className="bg-white px-4 py-4 flex items-center justify-between active:bg-slate-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                            <span className="material-icons-round">folder</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Electronics</h3>
                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Physical</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-600">Active</span>
                        <button className="text-slate-400">
                            <span className="material-icons-round">more_vert</span>
                        </button>
                    </div>
                </div>

                {/* Smartphones - Child */}
                <div className="bg-slate-50/50 px-4 py-3.5 pl-12 flex items-center justify-between border-l-2 border-primary/20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-500">
                            <span className="material-icons-round text-base">smartphone</span>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm">Smartphones</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-600">Active</span>
                        <button className="text-slate-400">
                            <span className="material-icons-round">more_vert</span>
                        </button>
                    </div>
                </div>

                {/* Laptops - Child */}
                <div className="bg-slate-50/50 px-4 py-3.5 pl-12 flex items-center justify-between border-l-2 border-primary/20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-500">
                            <span className="material-icons-round text-base">laptop</span>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm">Laptops</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-600">Active</span>
                        <button className="text-slate-400">
                            <span className="material-icons-round">more_vert</span>
                        </button>
                    </div>
                </div>

                {/* Digital Software - Parent */}
                <div className="bg-white px-4 py-4 flex items-center justify-between active:bg-slate-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                            <span className="material-icons-round">cloud_download</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Digital Software</h3>
                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Digital</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-600">Active</span>
                        <button className="text-slate-400">
                            <span className="material-icons-round">more_vert</span>
                        </button>
                    </div>
                </div>

                {/* Consulting Services - Parent */}
                <div className="bg-white px-4 py-4 flex items-center justify-between active:bg-slate-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                            <span className="material-icons-round">support_agent</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Consulting Services</h3>
                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Service</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-200 text-slate-600">Inactive</span>
                        <button className="text-slate-400">
                            <span className="material-icons-round">more_vert</span>
                        </button>
                    </div>
                </div>

                {/* Office Equipment - Parent */}
                <div className="bg-white px-4 py-4 flex items-center justify-between active:bg-slate-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                            <span className="material-icons-round">print</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Office Equipment</h3>
                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Physical</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-600">Active</span>
                        <button className="text-slate-400">
                            <span className="material-icons-round">more_vert</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

    const renderMobileAddView = () => (
        <div className="bg-background-light min-h-screen flex flex-col">
            <main className="flex-1 overflow-y-auto pb-32">
                <div className="p-4 space-y-6">
                    <div className="bg-white rounded-xl p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] space-y-6">
                        <div className="border-b border-slate-100 pb-4">
                            <h2 className="text-lg font-bold text-slate-900">Category Details</h2>
                            <p className="text-sm text-slate-500">Configure the settings for your new product category.</p>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Category Name</label>
                            <input
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                                placeholder="e.g. Industrial Machinery"
                                type="text"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Parent Category</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 appearance-none rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>None (Root Category)</option>
                                    <option>Electronics</option>
                                    <option>Office Supplies</option>
                                    <option>Safety Gear</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-slate-700">Category Type</label>
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input defaultChecked className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="cat_type" type="radio" />
                                    <span className="text-slate-800">Standard</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="cat_type" type="radio" />
                                    <span className="text-slate-800">Dynamic</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="cat_type" type="radio" />
                                    <span className="text-slate-800">Service</span>
                                </label>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Sort Order</label>
                            <div className="relative flex items-center">
                                <input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="number" defaultValue="0" />
                                <div className="absolute right-2 flex flex-col">
                                    <button className="p-0.5 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-[18px]">keyboard_arrow_up</span></button>
                                    <button className="p-0.5 text-slate-400 hover:text-primary"><span class="material-symbols-outlined text-[18px]">keyboard_arrow_down</span></button>
                                </div>
                            </div>
                            <p className="text-[11px] text-slate-500">Determines placement in navigation menus.</p>
                        </div>
                    </div>
                    <div className="bg-[#EFF6FF] border border-blue-100 rounded-xl p-4 flex items-start gap-4">
                        <div className="mt-0.5">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-slate-900">Active Status</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <p className="text-[13px] text-slate-600 leading-relaxed">If inactive, this category and its products won't be visible to buyers.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-slate-700">Description <span className="text-slate-400 font-normal">(Optional)</span></label>
                            <span className="text-[11px] text-slate-400">Limit: 0/500</span>
                        </div>
                        <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="Briefly describe what kind of products belong in this category..." rows={4}></textarea>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                        <span className="material-symbols-outlined text-primary shrink-0">info</span>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-900">Pro Tip</h4>
                            <p className="text-sm text-slate-600 leading-snug">
                                Use clear, industry-standard names for your categories to improve searchability for buyers. You can always change the sort order later from the main Categories list view.
                            </p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex gap-3">
                        <button
                            className="flex-1 py-3.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold active:bg-slate-50 transition-colors"
                            onClick={() => setCurrentSubView(CategoryView.LIST)}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-[2] py-3.5 px-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 active:opacity-90 shadow-lg shadow-primary/20"
                            onClick={() => setCurrentSubView(CategoryView.LIST)}
                        >
                            <span className="material-symbols-outlined text-[20px]">save</span>
                            Save Category
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );

    const renderListView = () => (
        <div className="max-w-[1200px] mx-auto space-y-6">
            {/* Table Controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                <div className="flex-1 w-full max-w-md relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#5e678d] text-xl">search</span>
                    <input
                        className="w-full pl-10 pr-4 h-11 bg-white dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-[#5e678d] shadow-sm"
                        placeholder="Search categories by name, ID or type..."
                        type="text"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1">
                    <button className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white dark:bg-gray-800 border border-[#dadde7] dark:border-gray-700 px-4 text-sm font-medium text-[#101218] dark:text-gray-200">
                        <span className="material-symbols-outlined text-xl">filter_list</span>
                        Status: All
                        <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                    <button className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white dark:bg-gray-800 border border-[#dadde7] dark:border-gray-700 px-4 text-sm font-medium text-[#101218] dark:text-gray-200">
                        <span className="material-symbols-outlined text-xl">layers</span>
                        Type: All
                        <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                    <button className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white dark:bg-gray-800 border border-[#dadde7] dark:border-gray-700 px-4 text-sm font-medium text-[#101218] dark:text-gray-200">
                        <span className="material-symbols-outlined text-xl">swap_vert</span>
                        Sort
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white dark:bg-[#151a2d] rounded-xl border border-[#dadde7] dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-[#dadde7] dark:border-gray-800">
                                <th className="p-4 w-12 text-center">
                                    <input className="h-4 w-4 rounded border-[#dadde7] text-primary focus:ring-primary/20" type="checkbox" />
                                </th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#5e678d]">Category Name</th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#5e678d]">Parent Category</th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#5e678d]">Type</th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#5e678d]">Status</th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#5e678d] text-center">Sort Order</th>
                                <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#5e678d] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#dadde7] dark:divide-gray-800">
                            {/* Row 1 */}
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="p-4 w-12 text-center">
                                    <input className="h-4 w-4 rounded border-[#dadde7] text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#5e678d] text-xl">folder_open</span>
                                        <span className="text-sm font-semibold">Electronics</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-[#5e678d]">—</td>
                                <td className="p-4 text-sm text-[#5e678d]">Physical</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-center">1</td>
                                <td className="p-4 text-right space-x-1">
                                    <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-[#5e678d] transition-colors" title="Edit">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                    </button>
                                    <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500 transition-colors" title="Delete">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 2 (Sub-category) */}
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="p-4 w-12 text-center">
                                    <input className="h-4 w-4 rounded border-[#dadde7] text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="p-4 pl-12">
                                    <div className="flex items-center gap-2 relative">
                                        <div className="absolute -left-6 top-0 bottom-1/2 w-4 border-l border-b border-[#dadde7] rounded-bl-lg"></div>
                                        <span className="material-symbols-outlined text-[#5e678d] text-xl">smartphone</span>
                                        <span className="text-sm font-medium">Smartphones</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-primary font-medium">Electronics</td>
                                <td className="p-4 text-sm text-[#5e678d]">Physical</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-center">1</td>
                                <td className="p-4 text-right space-x-1">
                                    <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-[#5e678d] transition-colors">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                    </button>
                                    <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 3 (Sub-category) */}
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="p-4 w-12 text-center">
                                    <input className="h-4 w-4 rounded border-[#dadde7] text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="p-4 pl-12">
                                    <div className="flex items-center gap-2 relative">
                                        <div className="absolute -left-6 top-0 bottom-1/2 w-4 border-l border-b border-[#dadde7] rounded-bl-lg"></div>
                                        <span className="material-symbols-outlined text-[#5e678d] text-xl">laptop</span>
                                        <span className="text-sm font-medium">Laptops</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-primary font-medium">Electronics</td>
                                <td className="p-4 text-sm text-[#5e678d]">Physical</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-center">2</td>
                                <td className="p-4 text-right space-x-1">
                                    <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-[#5e678d] transition-colors">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                    </button>
                                    <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="p-4 w-12 text-center">
                                    <input className="h-4 w-4 rounded border-[#dadde7] text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#5e678d] text-xl">cloud_download</span>
                                        <span className="text-sm font-semibold">Digital Software</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-[#5e678d]">——</td>
                                <td className="p-4 text-sm text-[#5e678d]">Digital</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-center">2</td>
                                <td className="p-4 text-right space-x-1">
                                    <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-[#5e678d] transition-colors">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                    </button>
                                    <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 5 */}
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="p-4 w-12 text-center">
                                    <input className="h-4 w-4 rounded border-[#dadde7] text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#5e678d] text-xl">support_agent</span>
                                        <span className="text-sm font-semibold">Consulting Services</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-[#5e678d]">——</td>
                                <td className="p-4 text-sm text-[#5e678d]">Service</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                        Inactive
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-center">3</td>
                                <td className="p-4 text-right space-x-1">
                                    <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-[#5e678d] transition-colors">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                    </button>
                                    <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="p-4 border-t border-[#dadde7] dark:border-gray-800 flex items-center justify-between">
                    <p className="text-xs text-[#5e678d]">Showing <span className="font-semibold text-[#101218] dark:text-white">1 to 5</span> of 24 categories</p>
                    <div className="flex items-center gap-2">
                        <button className="p-1 rounded-lg border border-[#dadde7] dark:border-gray-700 disabled:opacity-50" disabled>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <div className="flex items-center px-2">
                            <span className="text-xs font-bold px-3 py-1 bg-primary text-white rounded-md">1</span>
                            <span className="text-xs font-medium px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer">2</span>
                            <span className="text-xs font-medium px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer">3</span>
                        </div>
                        <button className="p-1 rounded-lg border border-[#dadde7] dark:border-gray-700">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#151a2d] p-5 rounded-xl border border-[#dadde7] dark:border-gray-800 flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        <span className="material-symbols-outlined">account_tree</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#5e678d] uppercase font-bold tracking-widest">Total Groups</p>
                        <p className="text-xl font-bold">12</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#151a2d] p-5 rounded-xl border border-[#dadde7] dark:border-gray-800 flex items-center gap-4">
                    <div className="bg-green-50 text-green-600 p-3 rounded-lg">
                        <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#5e678d] uppercase font-bold tracking-widest">Active Items</p>
                        <p className="text-xl font-bold">104</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#151a2d] p-5 rounded-xl border border-[#dadde7] dark:border-gray-800 flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
                        <span className="material-symbols-outlined">auto_graph</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#5e678d] uppercase font-bold tracking-widest">Top Level</p>
                        <p className="text-xl font-bold">6</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAddView = () => (
        <div className="max-w-4xl mx-auto">
            {/* Form Card */}
            <div className="bg-white dark:bg-[#1a1f35] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-50 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-[#101218] dark:text-white">Category Details</h3>
                    <p className="text-[#5e678d] dark:text-gray-400 text-sm mt-1">Configure the settings for your new product category.</p>
                </div>
                <form className="p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Top Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Category Name */}
                        <div className="col-span-1">
                            <label className="block text-sm font-semibold text-[#101218] dark:text-gray-200 mb-2">Category Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-[#0f1323] focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4 text-sm placeholder:text-gray-400"
                                placeholder="e.g. Industrial Machinery"
                                type="text"
                            />
                        </div>
                        {/* Parent Category */}
                        <div className="col-span-1">
                            <label className="block text-sm font-semibold text-[#101218] dark:text-gray-200 mb-2">Parent Category</label>
                            <select className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-[#0f1323] focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4 text-sm">
                                <option value="none">None (Root Category)</option>
                                <option value="hardware">Hardware & Tools</option>
                                <option value="electronics">Electronics</option>
                                <option value="raw-materials">Raw Materials</option>
                            </select>
                        </div>
                        {/* Category Type (Radio Selection) */}
                        <div className="col-span-1">
                            <label className="block text-sm font-semibold text-[#101218] dark:text-gray-200 mb-2">Category Type</label>
                            <div className="flex gap-4 items-center h-12">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input defaultChecked className="text-primary focus:ring-primary border-gray-300" name="cat_type" type="radio" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Standard</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input className="text-primary focus:ring-primary border-gray-300" name="cat_type" type="radio" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Dynamic</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input className="text-primary focus:ring-primary border-gray-300" name="cat_type" type="radio" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Service</span>
                                </label>
                            </div>
                        </div>
                        {/* Sort Order */}
                        <div className="col-span-1">
                            <label className="block text-sm font-semibold text-[#101218] dark:text-gray-200 mb-2">Sort Order</label>
                            <div className="relative">
                                <input
                                    className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-[#0f1323] focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4 text-sm"
                                    placeholder="0"
                                    type="number"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col text-gray-400">
                                    <span className="material-symbols-outlined text-sm leading-none cursor-pointer hover:text-primary">expand_less</span>
                                    <span className="material-symbols-outlined text-sm leading-none cursor-pointer hover:text-primary">expand_more</span>
                                </div>
                            </div>
                            <p className="text-[11px] text-[#5e678d] mt-1.5">Determines placement in navigation menus.</p>
                        </div>
                    </div>
                    {/* Full Width Status Toggle */}
                    <div className="bg-background-light/50 dark:bg-[#0f1323]/50 p-4 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                            <div>
                                <p className="text-sm font-bold text-[#101218] dark:text-white leading-tight">Active Status</p>
                                <p className="text-xs text-[#5e678d] dark:text-gray-400">If inactive, this category and its products won't be visible to buyers.</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input defaultChecked className="sr-only peer" type="checkbox" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    {/* Description Area */}
                    <div className="col-span-full">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-[#101218] dark:text-gray-200">Description <span className="text-gray-400 font-normal">(Optional)</span></label>
                            <span className="text-[11px] text-gray-400 font-medium">Character Limit: 0/500</span>
                        </div>
                        <textarea
                            className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-[#0f1323] focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4 text-sm placeholder:text-gray-400 resize-none"
                            placeholder="Briefly describe what kind of products belong in this category..."
                            rows={4}
                        ></textarea>
                    </div>
                    {/* Footer Actions */}
                    <div className="pt-6 border-t border-gray-50 dark:border-gray-700 flex items-center justify-end gap-3">
                        <button
                            className="px-6 py-3 rounded-lg text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                            type="button"
                            onClick={() => setCurrentSubView(CategoryView.LIST)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-8 py-3 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                            type="submit"
                            onClick={() => setCurrentSubView(CategoryView.LIST)}
                        >
                            <span className="material-symbols-outlined text-sm">save</span>
                            Save Category
                        </button>
                    </div>
                </form>
            </div>
            {/* Helper Tip */}
            <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-xl flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                <div>
                    <p className="text-sm font-bold text-primary">Pro Tip</p>
                    <p className="text-xs text-[#5e678d] dark:text-gray-400 leading-relaxed mt-1">
                        Use clear, industry-standard names for your categories to improve searchability for buyers. You can always change the sort order later from the main Categories list view.
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-full">
            {/* Mobile View */}
            <div className="lg:hidden flex flex-col h-full bg-slate-50">
                {currentSubView === CategoryView.LIST ? renderMobileListView() : renderMobileAddView()}
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block">
                {/* Custom Sub-Header/Action Bar */}
                <div className="bg-white border-b border-slate-100 px-8 py-4 mb-3 flex items-center justify-between sticky top-[72px] z-10">
                    <div className="flex flex-col">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 mb-1">
                            <a
                                className="text-[#5e678d] dark:text-gray-400 text-xs font-medium hover:text-primary transition-colors cursor-pointer"
                                onClick={() => setCurrentSubView(CategoryView.LIST)}
                            >
                                Categories
                            </a>
                            {currentSubView === CategoryView.ADD && (
                                <>
                                    <span className="text-gray-400 text-xs">/</span>
                                    <span className="text-[#101218] dark:text-white text-xs font-semibold">Add New Category</span>
                                </>
                            )}
                        </nav>
                        <h2 className="text-lg font-bold text-slate-800">
                            {currentSubView === CategoryView.LIST ? 'Category Management' : 'Add New Category'}
                        </h2>
                    </div>
                    {currentSubView === CategoryView.LIST && (
                        <button
                            onClick={() => setCurrentSubView(CategoryView.ADD)}
                            className="px-4 h-9 flex items-center justify-center text-sm font-semibold bg-primary text-white hover:bg-primary/90 rounded-lg transition-colors gap-2"
                        >
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            Add Category
                        </button>
                    )}
                </div>

                <div className="p-4 md:p-8 pt-0">
                    {currentSubView === CategoryView.LIST ? renderListView() : renderAddView()}
                </div>
            </div>
        </div>
    );
};

export default CategoryManager;
