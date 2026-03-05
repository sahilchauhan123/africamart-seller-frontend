import React from 'react';
import { useProductController } from '../../controllers/useProductController';
import {
  Edit2,
  MousePointerClick,
  Plus,
  Package,
  CheckCircle2,
  AlertTriangle,
  Trash2,
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

const ProductListView: React.FC<Props> = ({ onBack, onAdd, onEdit, onReachBuyers }) => {
  const { products, isLoading, page, total, setPageNumber } = useProductController();

  return (
    <div className="flex flex-col bg-[#F8FAFC] h-full overflow-hidden">
      {/* Unified Responsive Product List */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-4 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">

          {/* Header & Stats Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-slate-800 tracking-tight">Product Inventory</h1>
                <p className="text-[11px] lg:text-xs text-slate-500 font-medium">Manage and track your business listings</p>
              </div>
              <button
                onClick={onAdd}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl lg:rounded-lg hover:bg-blue-800 font-bold text-xs shadow-lg shadow-primary/20 transition-all active:scale-95 w-full sm:w-auto"
              >
                <Plus size={16} />
                ADD NEW PRODUCT
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
              <div className="bg-white p-3 lg:p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 shadow-sm group hover:border-primary/20 transition-all">
                <div className="w-8 h-8 lg:w-11 lg:h-11 bg-blue-50 text-blue-600 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Package size={18} className="lg:hidden" />
                  <Package size={20} className="hidden lg:block" />
                </div>
                <div>
                  <p className="text-[9px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Total Items</p>
                  <h2 className="text-sm lg:text-xl font-bold text-slate-800">{total || 0} Products</h2>
                </div>
              </div>
              <div className="bg-white p-3 lg:p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 shadow-sm group hover:border-emerald-200 transition-all">
                <div className="w-8 h-8 lg:w-11 lg:h-11 bg-emerald-50 text-emerald-600 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <CheckCircle2 size={18} className="lg:hidden" />
                  <CheckCircle2 size={20} className="hidden lg:block" />
                </div>
                <div>
                  <p className="text-[9px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Active Now</p>
                  <h2 className="text-sm lg:text-xl font-bold text-slate-800">{total || 0} Listings</h2>
                </div>
              </div>
              <div className="hidden lg:flex bg-white p-5 rounded-xl border border-slate-200 items-center gap-4 shadow-sm group hover:border-amber-200 transition-all">
                <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Status Alerts</p>
                  <h2 className="text-xl font-bold text-slate-800">0 Active</h2>
                </div>
              </div>
            </div>
          </div>

          {/* List/Table Container */}
          <div className="bg-white rounded-2xl lg:rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            {/* Controls Bar */}
            <div className="p-3 lg:p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl lg:rounded-lg text-[13px] focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all placeholder:text-slate-400 font-medium"
                  placeholder="Search products, SKUs..."
                  type="text"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl lg:rounded-lg border border-slate-200 text-slate-600 font-bold text-[11px] hover:bg-slate-50 active:scale-95 transition-all uppercase tracking-wider">
                  <Filter size={14} />
                  Filter
                </button>
                <div className="hidden lg:flex h-6 w-px bg-slate-200 mx-1"></div>
                <button className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold text-red-500 hover:bg-red-50 rounded-lg border border-red-50 transition-colors uppercase tracking-wider">
                  <Trash2 size={14} />
                  Actions
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px] flex flex-col">
              {isLoading ? (
                <div className="flex-1 flex flex-col items-center justify-center py-20">
                  <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-[11px] font-bold text-slate-400 mt-4 animate-pulse uppercase tracking-widest">Updating Inventory...</p>
                </div>
              ) : products.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <Package className="w-8 h-8 text-slate-200" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Inventory Empty</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6 font-medium">You haven't listed any products yet. Grow your reach by posting items today.</p>
                  <button onClick={onAdd} className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-blue-800 transition-all active:scale-95 uppercase tracking-wider text-[11px]">
                    Create First Listing
                  </button>
                </div>
              ) : (
                <>
                  {/* Mobile Card Layout */}
                  <div className="lg:hidden divide-y divide-slate-100">
                    {products.map((product) => (
                      <div key={product.id} className="p-4 active:bg-slate-50 transition-colors" onClick={() => { }}>
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 shrink-0">
                            <img
                              src={product.images && product.images.length > 0 ? product.images[0].img_url : 'https://placehold.co/200?text=No+Img'}
                              className="w-full h-full object-cover"
                              alt={product.title}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-0.5">
                              <h3 className="font-bold text-slate-800 text-[13px] truncate pr-2">{product.title}</h3>
                              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold uppercase tracking-wider shrink-0">Active</span>
                            </div>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-2">{product.category_name || 'Electronics'}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-900 tracking-tight">${parseFloat(product.min_price || '0').toFixed(2)}</span>
                              <div className="flex items-center gap-1">
                                <div className="relative group">
                                  <button onClick={(e) => { e.stopPropagation(); onEdit(); }} className="p-2 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-all active:scale-90">
                                    <Edit2 size={14} />
                                  </button>
                                  <span className="tooltip">Edit Product</span>
                                </div>
                                <div className="relative group">
                                  <button onClick={(e) => { e.stopPropagation(); onReachBuyers(); }} className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all active:scale-90">
                                    <MousePointerClick size={14} />
                                  </button>
                                  <span className="tooltip">Reach Buyers</span>
                                </div>
                                <div className="relative group">
                                  <button onClick={(e) => { e.stopPropagation(); }} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all active:scale-90">
                                    <Trash2 size={14} />
                                  </button>
                                  <span className="tooltip">Delete Product</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Table Layout */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 text-[10px] uppercase tracking-widest text-slate-400 font-bold border-b border-slate-100">
                          <th className="w-12 px-6 py-4">
                            <input className="rounded border-slate-300 text-primary w-3.5 h-3.5 cursor-pointer" type="checkbox" />
                          </th>
                          <th className="px-4 py-4">Product Info</th>
                          <th className="px-4 py-4 w-40">Category</th>
                          <th className="px-4 py-4 w-32">Price (USD)</th>
                          <th className="px-4 py-4 w-32 text-center">Status</th>
                          <th className="px-4 py-4 w-32 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {products.map((product) => (
                          <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group cursor-default">
                            <td className="px-6 py-4">
                              <input className="rounded border-slate-300 text-primary w-3.5 h-3.5 cursor-pointer" type="checkbox" />
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded border border-slate-200 bg-slate-50 overflow-hidden shadow-sm shrink-0 transition-transform group-hover:scale-105">
                                  <img
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                    src={product.images && product.images.length > 0 ? product.images[0].img_url : 'https://placehold.co/100?text=No+Img'}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-bold text-[13px] text-slate-800 truncate max-w-[240px]">{product.title}</div>
                                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">ID: {product.id.split('-')[0]}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 font-bold uppercase tracking-wider">
                                {product.category_name}
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <div className="text-[13px] font-bold text-slate-700">${parseFloat(product.min_price || '0').toFixed(0)} - ${parseFloat(product.max_price || '0').toFixed(0)}</div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center justify-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Active</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <div className="relative group">
                                  <button onClick={onEdit} className="p-1.5 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-all active:scale-90">
                                    <Edit2 size={16} />
                                  </button>
                                  <span className="tooltip">Edit Listing</span>
                                </div>
                                <div className="relative group">
                                  <button onClick={onReachBuyers} className="p-1.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all active:scale-90">
                                    <MousePointerClick size={16} />
                                  </button>
                                  <span className="tooltip">Reach Buyers</span>
                                </div>
                                <div className="relative group">
                                  <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all active:scale-90">
                                    <Trash2 size={16} />
                                  </button>
                                  <span className="tooltip">Delete Listing</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Showing {products.length} of {total} products
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-30 transition-all"
                  disabled={page === 1}
                  onClick={() => setPageNumber(Math.max(1, page - 1))}
                >
                  <ChevronLeft size={16} />
                </button>
                <button className="w-7 h-7 rounded-lg bg-primary text-white text-[11px] font-bold shadow-md shadow-primary/20">{page}</button>
                <button
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-30 transition-all"
                  disabled={page * 10 >= total}
                  onClick={() => setPageNumber(page + 1)}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button (Mobile Only) */}
      <button
        onClick={onAdd}
        className="lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-xl shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50 animate-in zoom-in duration-500 border-2 border-white/10"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default ProductListView;
