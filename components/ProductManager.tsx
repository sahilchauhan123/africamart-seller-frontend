
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import {
  Edit2,
  MousePointerClick,
  Plus,
  Package,
  LayoutGrid,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Folder,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Props {
  onBack: () => void;
  onAdd: () => void;
  onEdit: () => void;
  onReachBuyers: () => void;
}

const ProductManager: React.FC<Props> = ({ onBack, onAdd, onEdit, onReachBuyers }) => {
  return (
    <div className="flex flex-col bg-[#F8FAFC] h-full overflow-hidden">
      {/* Mobile View - Existing Card Layout */}
      <div className="lg:hidden flex flex-col h-full bg-[#F5F7FA]">
        <main className="flex-1 overflow-y-auto p-4 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-4 auto-rows-fr">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Package size={16} className="text-blue-600" />
                  </div>
                  <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Inventory</h2>
                </div>
                <span className="text-2xl font-extrabold text-slate-900">250 Products</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                  </div>
                  <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active</h2>
                </div>
                <span className="text-2xl font-extrabold text-slate-900">242</span>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                    <AlertTriangle size={16} className="text-amber-600" />
                  </div>
                  <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Warnings</h2>
                </div>
                <span className="text-2xl font-extrabold text-slate-900">8</span>
              </div>
            </div>

            <div className="space-y-4 pb-28">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-lg font-extrabold text-slate-800">Your Inventory</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm text-slate-400"><Search size={18} /></button>
                  <button className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm text-slate-400"><Filter size={18} /></button>
                </div>
              </div>

              {MOCK_PRODUCTS.map(product => (
                <div key={product.id} className="group bg-white p-4 rounded-[1.75rem] shadow-sm border border-slate-100 transition-all active:scale-[0.98] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[4rem] -z-10 transition-transform group-active:scale-95"></div>

                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md shrink-0 border-4 border-white">
                      <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                    </div>

                    <div className="flex-1 flex flex-col min-w-0 pt-1">
                      <div className="flex justify-between items-start mb-1">
                        <div className="min-w-0">
                          <h3 className="font-extrabold text-slate-900 text-sm truncate pr-6">{product.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-50 text-slate-400 font-bold uppercase tracking-wider">{product.category}</span>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                              <span className="text-[9px] text-emerald-600 font-bold uppercase">Stock</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={onEdit}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 active:bg-slate-50"
                        >
                          <Edit2 size={14} />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-base font-extrabold text-slate-900 tracking-tight">{product.price}</span>
                        <button
                          onClick={onReachBuyers}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-[10px] font-bold shadow-lg shadow-primary/20 active:translate-y-0.5 transition-all"
                        >
                          <MousePointerClick size={12} />
                          REACH BUYERS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <button
          onClick={onAdd}
          className="fixed bottom-8 right-8 bg-primary text-white rounded-2xl px-6 py-4 shadow-[0_15px_30px_rgba(0,38,192,0.3)] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all z-50 animate-in slide-in-from-bottom-10 duration-500"
        >
          <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
            <Plus size={18} />
          </div>
          <span className="font-bold text-sm uppercase tracking-wider">New Product</span>
        </button>
      </div>

      {/* Desktop View - New Compact Table Layout */}
      <div className="hidden lg:flex flex-col h-full bg-[#F8FAFC]">
        <main className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats Bar */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total Products</p>
                  <h2 className="text-xl font-bold">250</h2>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                  <LayoutGrid size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Categories</p>
                  <h2 className="text-xl font-bold">3</h2>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Active Listings</p>
                  <h2 className="text-xl font-bold">242</h2>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Low Stock</p>
                  <h2 className="text-xl font-bold">8</h2>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm flex flex-col">
              {/* Table Controls */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4 cursor-pointer" type="checkbox" />
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">Select All</span>
                  </div>
                  <div className="h-4 w-px bg-slate-200 mx-1"></div>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-100 transition-colors">
                    <Trash2 size={18} />
                    DELETE
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-100 transition-colors">
                    <Folder size={18} />
                    CATEGORY
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      className="pl-10 pr-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-xs focus:ring-primary focus:border-primary w-64 focus:outline-none transition-all"
                      placeholder="Search SKU, name..."
                      type="text"
                    />
                  </div>
                  <button className="p-1.5 rounded-lg border border-slate-100 text-slate-600 hover:bg-slate-50">
                    <Filter size={20} />
                  </button>
                  <button
                    onClick={onAdd}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 font-bold text-xs shadow-sm transition-all"
                  >
                    <Plus size={14} />
                    ADD PRODUCT
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 text-[11px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100 uppercase tracking-widest">
                      <th className="w-12 px-6 py-4"></th>
                      <th className="w-20 px-4 py-4">Image</th>
                      <th className="px-4 py-4 min-w-[200px]">Product Name</th>
                      <th className="px-4 py-4 w-40">Category</th>
                      <th className="px-4 py-4 w-32">Price</th>
                      <th className="px-4 py-4 w-32">Status</th>
                      <th className="px-4 py-4 w-32 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {MOCK_PRODUCTS.map((product) => (
                      <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group cursor-default">
                        <td className="px-6 py-4">
                          <input className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4 cursor-pointer" type="checkbox" />
                        </td>
                        <td className="px-4 py-4">
                          <div className="w-12 h-12 rounded border border-slate-100 bg-slate-100 overflow-hidden shadow-sm">
                            <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-bold text-sm text-slate-900 truncate">{product.name}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">ID: {product.id.padStart(5, '0')}</div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 font-bold uppercase tracking-wider">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm font-bold text-slate-800">{product.price}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]"></span>
                            <span className="text-[11px] text-emerald-600 font-bold uppercase">In Stock</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={onEdit}
                              className="p-1.5 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-md transition-all"
                              title="Edit"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all" title="Delete">
                              <Trash2 size={18} />
                            </button>
                            <button className="p-1.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-md transition-all" title="Promote">
                              <MousePointerClick size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-slate-100 flex items-center justify-between">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">
                  Showing 1-{MOCK_PRODUCTS.length} of 250 entries
                </p>
                <div className="flex items-center gap-1.5">
                  <button className="p-1.5 rounded border border-slate-100 text-slate-400 hover:bg-slate-50 disabled:opacity-30" disabled>
                    <ChevronLeft size={20} />
                  </button>
                  <button className="w-8 h-8 rounded bg-primary text-white text-[11px] font-bold">1</button>
                  <button className="w-8 h-8 rounded text-[11px] font-bold text-slate-500 hover:bg-slate-50 transition-colors">2</button>
                  <button className="p-1.5 rounded border border-slate-100 text-slate-400 hover:bg-slate-50">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductManager;
