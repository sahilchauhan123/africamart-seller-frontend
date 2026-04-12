import React from 'react';
import { useAddProductController } from '../../controllers/useAddProductController';
import {
  Camera,
  ChevronDown,
  Edit2,
  Search,
  Lightbulb,
  ChevronUp,
  Circle,
  PlusCircle,
  Video,
  LayoutGrid,
  Bold,
  Italic,
  List,
  Link,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Plus,
  HelpCircle
} from 'lucide-react';

interface Props {
  productId?: string;
  onBack: () => void;
  onSave: () => void;
}

const AddProductView: React.FC<Props> = ({ productId, onBack, onSave }) => {
  const { state, actions } = useAddProductController(productId);
  const {
    step,
    showSuccessModal,
    isLoading,
    isPublishing,
    error,
    productData,
    mediaFiles,
    categorySearch,
    categories,
    selectedCategory,
    isSearching,
    showCategoryResults,
    categoryFilters,
    attributeValues,
    availableUnits,
    progress
  } = state;

  const {
    setStep,
    setShowSuccessModal,
    setShowCategoryResults,
    handleInputChange,
    handleCategorySearch,
    handleCategorySelect,
    handleAttributeChange,
    handleFileChange,
    handleRemoveMedia,
    handleSubmit,
    resetForm
  } = actions;

  const handleBack = () => {
    if (step === 'specification') {
      setStep('basic');
    } else {
      onBack();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC] text-slate-900 antialiased overflow-hidden min-h-screen">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <style>{`
            @keyframes celebrate {
              0% { transform: scale(0.9) translateY(20px); opacity: 0; }
              100% { transform: scale(1) translateY(0); opacity: 1; }
            }
            .animate-celebrate {
              animation: celebrate 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"></div>

          <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-12 w-full max-w-md shadow-2xl border border-white/20 animate-celebrate text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-100 rotate-3">
              <CheckCircle2 className="text-white w-10 h-10" />
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{productId ? 'Product Updated!' : 'Product Published!'}</h2>

            <p className="text-slate-500 leading-relaxed mb-10 text-base font-medium">
              Thank you for contributing to AfricaMart's ecosystem! Your product has been <span className="text-emerald-600 font-bold">{productId ? 'successfully updated' : 'successfully listed'}</span> and is now visible to buyers across the continent.
            </p>

            <div className="space-y-4">
              <button
                onClick={onSave}
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
              >
                BACK TO PRODUCTS
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  setStep('basic');
                  // Reset form?
                }}
                className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors"
              >
                Add Another Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-slate-200 shrink-0">
        <div className="max-w-7xl mx-auto flex w-full">
          <button
            onClick={() => setStep('basic')}
            className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${step === 'basic' ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Basic Details
          </button>
          <button
            onClick={() => setStep('specification')}
            className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${step === 'specification' ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Specification
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto relative pb-32 no-scrollbar">
        {/* Progress Stepper - Desktop Only */}
        <div className="hidden lg:block bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="max-w-xl mx-auto px-10 py-6">
            <nav aria-label="Progress" className="flex items-center justify-center relative">
              <div className="flex-1 flex items-center group relative">
                <div className="flex flex-col items-center flex-1 z-10 cursor-pointer" onClick={() => setStep('basic')}>
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-all ${step === 'basic' ? 'bg-primary text-white shadow-primary/20 ring-4 ring-primary/10' : 'bg-green-500 text-white'}`}>
                    {step === 'specification' ? <CheckCircle2 size={24} /> : '1'}
                  </span>
                  <span className={`text-sm mt-2 transition-colors ${step === 'basic' ? 'font-bold text-primary' : 'font-medium text-green-600'}`}>Basic Details</span>
                </div>
                <div className={`absolute left-1/2 top-5 w-full h-[2px] -z-0 transition-colors ${step === 'specification' ? 'bg-green-500' : 'bg-slate-200'}`}></div>
              </div>
              <div className="flex-1 flex items-center group relative">
                <div className="flex flex-col items-center flex-1 z-10 cursor-pointer" onClick={() => setStep('specification')}>
                  <span className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all ${step === 'specification' ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 ring-4 ring-primary/10' : 'bg-white text-slate-400 border-slate-200'}`}>
                    2
                  </span>
                  <span className={`text-sm mt-2 transition-colors ${step === 'specification' ? 'font-bold text-primary' : 'font-medium text-slate-500'}`}>Specifications</span>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto py-6 lg:py-10 px-4 lg:px-10">
          {isLoading && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/60 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Loading Product Data...</p>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 mb-8 flex items-center gap-3">
              <HelpCircle size={20} />
              <span className="font-semibold text-sm">{error}</span>
            </div>
          )}

          {step === 'basic' ? (
            <div className="space-y-10 lg:space-y-16">
              {/* Listing Strength Indicator */}
              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 group">
                <div className="relative flex-shrink-0 w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-100" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="5"></circle>
                    <circle
                      className="text-primary transition-all duration-500"
                      cx="32" cy="32" fill="transparent" r="28"
                      stroke="currentColor"
                      strokeDasharray="175.9"
                      strokeDashoffset={175.9 - (175.9 * progress / 100)}
                      strokeWidth="5"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sm font-bold text-slate-900">{progress}%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-slate-900 text-lg lg:text-xl">Listing Strength: <span className={progress > 70 ? "text-emerald-500" : "text-slate-400"}>{progress > 70 ? 'Strong' : 'Incomplete'}</span></h3>
                    <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Draft</span>
                  </div>
                  <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">Complete the required fields and add high-quality media to improve your product visibility. Well-documented listings perform 3x better.</p>
                </div>
              </div>

              {/* Images & Video Section */}
              <section>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Product Images & Video</h2>
                  <p className="text-sm text-slate-500 mt-1">Upload at least 3 images for best results. First image will be your cover.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {mediaFiles.map((media, idx) => (
                    <div key={idx} className="aspect-square rounded-2xl relative overflow-hidden group border border-slate-200">
                      <img src={media.preview} alt="Preview" className="w-full h-full object-cover" />
                      <button
                        onClick={() => handleRemoveMedia(idx)}
                        className="absolute top-2 right-2 bg-slate-900/50 text-white p-1.5 rounded-full hover:bg-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Plus size={16} className="rotate-45" />
                      </button>
                    </div>
                  ))}

                  <label className="aspect-square border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-white transition-all group bg-slate-100/50">
                    <input type="file" multiple accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'image')} />
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform border border-slate-100">
                      <Camera className="text-primary" size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">Add Photos</span>
                  </label>

                  <label className="aspect-square border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-all bg-slate-50/50 group">
                    <input type="file" accept="video/*" className="hidden" onChange={(e) => handleFileChange(e, 'video')} />
                    <Video className="text-slate-400 mb-2 group-hover:text-primary transition-colors" size={28} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Add Video</span>
                  </label>
                </div>
              </section>

              <div className="border-t border-slate-200"></div>

              {/* Basic Info Section */}
              <section>
                <div className="mb-8">
                  <h2 className="text-xl lg:text-3xl font-black text-slate-900 tracking-tight">{productId ? 'Edit Product' : 'Add New Product'}</h2>
                  <p className="text-slate-500 text-xs lg:text-sm font-medium mt-1">
                    {productId ? 'Update your product details and specifications' : 'Provide accurate details to reach more buyers across Africa'}
                  </p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Product/Service Name <span className="text-red-500">*</span></label>
                    <input
                      name="title"
                      value={productData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-base lg:text-lg"
                      placeholder="e.g. Premium White Parboiled Rice - 50kg Bag"
                      type="text"
                    />
                  </div>
                  <div className="md:col-span-2 relative">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Product Category <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                      <input
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                        placeholder="Search or select category..."
                        type="text"
                        value={categorySearch}
                        onChange={(e) => handleCategorySearch(e.target.value)}
                        onFocus={() => categorySearch.length >= 2 && setShowCategoryResults(true)}
                      />
                      {isSearching && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </div>

                    {showCategoryResults && categories.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 z-[70] overflow-hidden">
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleCategorySelect(cat)}
                            disabled={!cat.is_leaf}
                            className={`w-full text-left px-5 py-3 hover:bg-slate-50 transition-colors flex items-center justify-between border-b border-slate-100 last:border-none ${!cat.is_leaf ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            <div>
                              <span className="font-bold text-slate-900 block">{cat.name}</span>
                              <span className="text-xs text-slate-400 text-uppercase tracking-wider font-bold">
                                {cat.is_leaf ? "LEAF CATEGORY" : "SUB-CATEGORY"}
                              </span>
                            </div>
                            {cat.is_leaf && <Plus size={18} className="text-primary" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Starting Price</label>
                    <div className="relative">
                      <input
                        name="minPrice"
                        value={productData.minPrice}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                        placeholder="0.00"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Max Price</label>
                    <div className="relative">
                      <input
                        name="maxPrice"
                        value={productData.maxPrice}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                        placeholder="0.00"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Product Unit <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <select
                        name="unit"
                        value={productData.unit}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none"
                      >
                        <option value="" disabled>Select unit...</option>
                        {availableUnits.map((u: any) => (
                          <option key={u.id} value={u.symbol}>{u.name} ({u.symbol})</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                    {availableUnits.length === 0 && selectedCategory && (
                      <p className="mt-2 text-xs text-amber-600 flex items-center gap-1.5">
                        <HelpCircle size={14} />
                        No specific units defined for this category.
                      </p>
                    )}
                  </div>
                </div>
              </section>

              <div className="border-t border-slate-200"></div>

              {/* Description Section */}
              <section>
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900">Product Description</h2>
                  <p className="text-sm text-slate-500 mt-1">Detailed information helps buyers make informed decisions.</p>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="flex items-center gap-1 p-2 bg-slate-50 border-b border-slate-200">
                    <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-600" title="Bold"><Bold size={18} /></button>
                    <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-600" title="Italic"><Italic size={18} /></button>
                    <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-600" title="List"><List size={18} /></button>
                    <div className="w-px h-6 bg-slate-200 mx-2"></div>
                    <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-600" title="Link"><Link size={18} /></button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 text-primary border border-primary/20 rounded-lg ml-auto text-sm font-semibold hover:bg-primary/10 transition-colors">
                      <Sparkles size={16} />
                      AI Optimize
                    </button>
                  </div>
                  <textarea
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    className="w-full p-6 border-none focus:ring-0 resize-none text-base leading-relaxed h-64 md:h-80 outline-none"
                    placeholder="Tell buyers about your product. Include technical specifications, benefits, and usage instructions..."
                  />
                  <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs text-slate-400">At least 100 characters recommended</span>
                    <span className={`text-xs font-medium ${productData.description.length < 100 ? 'text-slate-500' : 'text-emerald-600'}`}>
                      {productData.description.length} / 2,000
                    </span>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div className="space-y-10">
              <section>
                {/* Product Summary Header */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                      <LayoutGrid size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{productData.title || 'Untitled Product'}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Selected Category:</span>
                        <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">{selectedCategory?.name}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep('basic')}
                    className="text-xs font-bold text-slate-500 hover:text-primary flex items-center gap-1.5 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all border border-slate-100"
                  >
                    Switch Category
                    <ChevronDown size={14} className="rotate-90" />
                  </button>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900">Technical Specifications</h2>
                  <p className="text-sm text-slate-500 mt-1">Add specific details to help buyers filter and find your product.</p>
                </div>

                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-500 font-bold animate-pulse">Fetching dynamic specifications...</p>
                  </div>
                ) : categoryFilters.length === 0 ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center">
                    <LayoutGrid className="mx-auto text-slate-300 mb-4" size={48} />
                    <h3 className="text-slate-900 font-bold text-lg">No Specifications Found</h3>
                    <p className="text-slate-500 max-w-sm mx-auto mt-2">This category doesn't have custom specifications. You can proceed to publish.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {categoryFilters.map((filter) => (
                      <div key={filter.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-all flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <label className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                              {filter.name}
                              {filter.is_required && <span className="text-red-500">*</span>}
                            </label>
                            {filter.unit && <span className="text-[10px] text-primary font-bold uppercase tracking-wider">{filter.unit}</span>}
                          </div>
                          {attributeValues[filter.id] && (attributeValues[filter.id].length > 0 || attributeValues[filter.id] === true || attributeValues[filter.id] === false || attributeValues[filter.id] !== '') && (
                            <CheckCircle2 size={16} className="text-emerald-500" />
                          )}
                        </div>

                        <div className="flex-1">
                          {filter.type === 'boolean' && (
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleAttributeChange(filter.id, true, false)}
                                className={`flex-1 py-2.5 rounded-xl border font-bold transition-all text-sm ${attributeValues[filter.id] === true ? 'border-primary bg-primary text-white' : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50'}`}
                              >
                                Yes
                              </button>
                              <button
                                onClick={() => handleAttributeChange(filter.id, false, false)}
                                className={`flex-1 py-2.5 rounded-xl border font-bold transition-all text-sm ${attributeValues[filter.id] === false ? 'border-red-500 bg-red-500 text-white' : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50'}`}
                              >
                                No
                              </button>
                            </div>
                          )}

                          {['select', 'checkbox', 'tag'].includes(filter.type) && (
                            filter.options && filter.options.length > 6 ? (
                              <div className="relative">
                                <select
                                  multiple={filter.is_multi}
                                  value={attributeValues[filter.id] || (filter.is_multi ? [] : '')}
                                  onChange={(e) => {
                                    if (filter.is_multi) {
                                      const options = Array.from(e.target.selectedOptions, (option: HTMLOptionElement) => option.value);
                                      handleAttributeChange(filter.id, options, false);
                                    } else {
                                      handleAttributeChange(filter.id, e.target.value, false);
                                    }
                                  }}
                                  className={`w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-sm transition-all ${!filter.is_multi ? 'appearance-none pr-10' : 'h-32'}`}
                                >
                                  {!filter.is_multi && <option value="" disabled>Select {filter.name}...</option>}
                                  {filter.options.map((option: string) => (
                                    <option key={option} value={option}>{option}</option>
                                  ))}
                                </select>
                                {!filter.is_multi && (
                                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                )}
                                {filter.is_multi && <p className="mt-1.5 text-[10px] text-slate-400 font-medium">Hold Ctrl/Cmd to select multiple options</p>}
                              </div>
                            ) : (
                              <div className="flex flex-wrap gap-2">
                                {filter.options?.map((option: string) => {
                                  const isSelected = filter.is_multi
                                    ? attributeValues[filter.id]?.includes(option)
                                    : attributeValues[filter.id] === option;
                                  return (
                                    <button
                                      key={option}
                                      onClick={() => handleAttributeChange(filter.id, option, filter.is_multi)}
                                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${isSelected ? 'border-primary bg-primary/10 text-primary shadow-sm' : 'border-slate-200 text-slate-500 hover:border-primary/30 hover:bg-white bg-slate-50'}`}
                                    >
                                      {option}
                                    </button>
                                  );
                                })}
                              </div>
                            )
                          )}

                          {filter.type === 'number' && (
                            <div className="relative">
                              <input
                                type="number"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-sm transition-all"
                                value={attributeValues[filter.id] || ''}
                                onChange={(e) => handleAttributeChange(filter.id, e.target.value, false)}
                                placeholder={`Enter ${filter.name.toLowerCase()}...`}
                              />
                            </div>
                          )}

                          {filter.type === 'text' && (
                            <input
                              type="text"
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-sm transition-all"
                              value={attributeValues[filter.id] || ''}
                              onChange={(e) => handleAttributeChange(filter.id, e.target.value, false)}
                              placeholder={`Specify ${filter.name.toLowerCase()}...`}
                            />
                          )}

                          {filter.type === 'date' && (
                            <input
                              type="date"
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-sm transition-all"
                              value={attributeValues[filter.id] || ''}
                              onChange={(e) => handleAttributeChange(filter.id, e.target.value, false)}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      </main>

      {/* Sticky Bottom Footer */}
      <footer className="fixed bottom-0 left-0 lg:left-72 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 py-4 lg:py-5 px-4 lg:px-10 z-[60]">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-3 text-sm text-slate-500 font-medium">
            <CheckCircle2 size={20} className="text-green-500" />
            <span className="whitespace-nowrap">Draft autosaved locally</span>
          </div>
          <div className="flex items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <button
              onClick={handleBack}
              disabled={isPublishing}
              className="flex-1 sm:flex-none px-6 py-2.5 lg:py-3 text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-all border border-transparent disabled:opacity-50"
            >
              {step === 'specification' ? 'Back' : 'Cancel'}
            </button>
            {step === 'basic' ? (
              <button
                onClick={() => setStep('specification')}
                disabled={isPublishing || !selectedCategory}
                className="flex-1 sm:flex-none px-8 py-2.5 lg:py-3 bg-primary text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isPublishing}
                className="px-10 py-4 bg-primary hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center gap-3 group active:scale-95"
              >
                {isPublishing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{productId ? 'UPDATING...' : 'PUBLISHING...'}</span>
                  </>
                ) : (
                  <>
                    <span>{productId ? 'SAVE CHANGES' : 'PUBLISH LISTING'}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AddProductView;
