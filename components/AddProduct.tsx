
import React, { useState } from 'react';
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
  onBack: () => void;
  onSave: () => void;
}

type Step = 'basic' | 'specification';

const AddProduct: React.FC<Props> = ({ onBack, onSave }) => {
  const [step, setStep] = useState<Step>('basic');
  const [expandedSpec, setExpandedSpec] = useState<number | null>(0);

  const handleBack = () => {
    if (step === 'specification') {
      setStep('basic');
    } else {
      onBack();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC] text-slate-900 antialiased overflow-hidden min-h-screen">
      {/* Mobile Header (Only visible on mobile, since App.tsx Header is used for layout) */}
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
        <div className="hidden lg:block w-full bg-white border-b border-slate-200 sticky top-0 z-40">
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
          {step === 'basic' ? (
            <div className="space-y-10 lg:space-y-16">
              {/* Listing Strength Indicator */}
              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 group">
                <div className="relative flex-shrink-0 w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-100" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-width="5"></circle>
                    <circle className="text-primary transition-all duration-500" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="175.9" stroke-dashoffset="175.9" stroke-width="5"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sm font-bold text-slate-900">0%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-slate-900 text-lg lg:text-xl">Listing Strength: <span className="text-slate-400 font-medium">Incomplete</span></h3>
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
                  <div className="aspect-square border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-white transition-all group bg-slate-100/50">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform border border-slate-100">
                      <Camera className="text-primary" size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">Cover Photo</span>
                  </div>
                  <div className="aspect-square border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-all bg-slate-50/50 group">
                    <PlusCircle className="text-slate-400 mb-2 group-hover:text-primary transition-colors" size={28} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Additional</span>
                  </div>
                  <div className="aspect-square border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-all bg-slate-50/50 group">
                    <Video className="text-slate-400 mb-2 group-hover:text-primary transition-colors" size={28} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Video</span>
                  </div>
                </div>
              </section>

              <div className="border-t border-slate-200"></div>

              {/* Basic Info Section */}
              <section>
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900">Basic Information</h2>
                  <p className="text-sm text-slate-500 mt-1">Provide core identification details for your product listing.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Product/Service Name <span className="text-red-500">*</span></label>
                    <input className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-base lg:text-lg" placeholder="e.g. Premium White Parboiled Rice - 50kg Bag" type="text" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Product Category <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                      <input className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none" placeholder="Search or select category..." type="text" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Price (Currency)</label>
                    <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none">
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                      <option>GBP - British Pound</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Unit of Measurement</label>
                    <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none">
                      <option>Kilogram (kg)</option>
                      <option>Tonne (t)</option>
                      <option>Piece (pc)</option>
                      <option>Box (bx)</option>
                    </select>
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
                  <textarea className="w-full p-6 border-none focus:ring-0 resize-none text-base leading-relaxed h-64 md:h-80" placeholder="Tell buyers about your product. Include technical specifications, benefits, and usage instructions..." />
                  <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs text-slate-400">At least 100 characters recommended</span>
                    <span className="text-xs font-medium text-slate-500">0 / 2,000</span>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            /* Specification Step - Adapting to the new style */
            <div className="space-y-10">
              <section>
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900">Technical Specifications</h2>
                  <p className="text-sm text-slate-500 mt-1">Add specific details to help buyers filter and find your product.</p>
                </div>

                <div className="flex items-center flex-wrap gap-2 mb-6">
                  <span className="font-semibold text-sm text-slate-900">Current Category:</span>
                  <div className="bg-slate-100 text-slate-800 text-sm px-4 py-1.5 rounded-lg border border-slate-200 font-medium">
                    Default Selected Cat
                  </div>
                  <button className="text-primary p-2 rounded-full hover:bg-blue-50 transition-colors">
                    <Edit2 size={18} />
                  </button>
                </div>

                <div className="relative mb-8 max-w-2xl">
                  <input
                    className="w-full pl-4 pr-10 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                    placeholder="Filter specifications..."
                    type="text"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                </div>

                <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl mb-8">
                  <Lightbulb className="text-emerald-600 shrink-0" size={20} />
                  <p className="text-sm text-emerald-700 font-medium">
                    Pro Tip: Filling out highlighted specifications increases your product's visibility by up to 50% in search results.
                  </p>
                </div>

                <div className="space-y-4">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
                      <div
                        className={`p-5 flex justify-between items-center cursor-pointer transition-colors ${expandedSpec === index ? 'bg-primary/5' : 'hover:bg-slate-50'}`}
                        onClick={() => setExpandedSpec(expandedSpec === index ? null : index)}
                      >
                        <div>
                          <h3 className={`font-bold text-base mb-0.5 ${expandedSpec === index ? 'text-primary' : 'text-slate-900'}`}>Specification Name {index + 1}</h3>
                          <p className="text-xs text-slate-500 font-medium">Please select the most accurate value</p>
                        </div>
                        <div className={`p-1 rounded-full transition-transform ${expandedSpec === index ? 'rotate-180 bg-primary/10 text-primary' : 'text-slate-400'}`}>
                          <ChevronDown size={20} />
                        </div>
                      </div>
                      {expandedSpec === index && (
                        <div className="p-6 bg-white border-t border-slate-100">
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((type) => (
                              <div key={type} className="border border-slate-200 rounded-xl p-4 flex items-center gap-3 hover:border-primary hover:bg-primary/5 cursor-pointer transition-all group">
                                <div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-primary flex items-center justify-center transition-colors">
                                  <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">Attribute Value</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
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
            <span className="whitespace-nowrap">Draft autosaved at 20:12 PM</span>
          </div>
          <div className="flex items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <button
              onClick={handleBack}
              className="flex-1 sm:flex-none px-6 py-2.5 lg:py-3 text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-all border border-transparent"
            >
              {step === 'specification' ? 'Back' : 'Cancel'}
            </button>
            <button
              onClick={() => step === 'basic' ? setStep('specification') : onSave()}
              className="flex-1 sm:flex-none px-8 py-2.5 lg:py-3 bg-primary text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              {step === 'basic' ? (
                <>
                  Next Step
                  <ArrowRight size={20} />
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Publish Product
                </>
              )}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AddProduct;
