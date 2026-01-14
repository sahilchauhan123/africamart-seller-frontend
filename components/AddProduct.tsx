
import React, { useState } from 'react';

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
    <div className="flex-1 flex flex-col bg-white text-gray-900 antialiased overflow-hidden">

      <div className="bg-white border-b border-gray-200 shrink-0">
        <div className="max-w-7xl mx-auto flex w-full">
          <button
            onClick={() => setStep('basic')}
            className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${step === 'basic' ? 'text-gray-900 border-b-2 border-primary' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            Basic Details
          </button>
          <button
            onClick={() => setStep('specification')}
            className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${step === 'specification' ? 'text-gray-900 border-b-2 border-primary' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            Specification
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto p-4 lg:p-10 pb-24 bg-white no-scrollbar">
        <div className="max-w-7xl mx-auto">
          {step === 'basic' ? (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <h2 className="text-primary text-xs font-bold uppercase mb-1">Listing Strength</h2>
                <p className="text-xs text-gray-500 leading-relaxed">Add clear details, images and keywords to improve visibility.</p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2">Product Photos</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-36 flex flex-col items-center justify-center bg-gray-50 cursor-pointer">
                  <span className="material-icons-outlined text-gray-400 text-3xl mb-2">add_a_photo</span>
                  <p className="text-xs font-medium text-gray-500">Tap to add main photo</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-1.5">Product Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none text-sm" placeholder="e.g. White Parboiled Rice" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1.5">Price</label>
                  <div className="flex gap-2">
                    <input type="text" className="w-1/3 p-3 rounded-lg border border-gray-200 outline-none text-sm" defaultValue="LD" />
                    <div className="flex-1 relative">
                      <select className="w-full p-3 rounded-lg border border-gray-200 outline-none text-sm appearance-none">
                        <option>Piece</option>
                        <option>Kg</option>
                        <option>Bag</option>
                      </select>
                      <span className="material-icons absolute right-2 top-3 text-gray-400">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center flex-wrap gap-2 mb-4">
                <span className="font-semibold text-sm text-gray-900">Category:</span>
                <div className="bg-gray-200 text-gray-800 text-sm px-3 py-1.5 rounded-md font-medium">
                  Default Selected Cat
                </div>
                <button className="text-primary p-1 rounded-full hover:bg-blue-50">
                  <span className="material-icons-outlined text-lg">edit</span>
                </button>
              </div>

              <div className="relative mb-4">
                <input
                  className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm text-sm transition-all"
                  placeholder="Search Specifications..."
                  type="text"
                />
                <span className="material-icons-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  search
                </span>
              </div>

              <div className="flex items-start gap-2 mb-6">
                <span className="material-icons-outlined text-green-600 text-lg mt-0.5">lightbulb</span>
                <p className="text-xs sm:text-sm text-green-600 font-medium italic">
                  Highlighted Specification are used by most customers!
                </p>
              </div>

              <div className="space-y-4">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                    <div
                      className="bg-blue-50 p-4 flex justify-between items-start cursor-pointer hover:bg-blue-100 transition-colors"
                      onClick={() => setExpandedSpec(expandedSpec === index ? null : index)}
                    >
                      <div>
                        <h3 className="text-green-600 font-semibold text-base mb-0.5">Speci Name</h3>
                        <p className="text-xs text-gray-500">Support Text</p>
                      </div>
                      <span className="material-icons-outlined text-gray-700">
                        {expandedSpec === index ? 'expand_less' : 'expand_more'}
                      </span>
                    </div>
                    {expandedSpec === index && (
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {[1, 2, 3, 4].map((type) => (
                            <div key={type} className="border border-gray-300 rounded-lg p-3 flex items-center gap-2 hover:border-primary cursor-pointer bg-white">
                              <span className="material-icons-outlined text-gray-400 text-xl">radio_button_unchecked</span>
                              <span className="text-sm font-medium text-gray-700">Type</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="p-4 border-t sticky bottom-0 bg-white flex justify-center">
        <div className="max-w-7xl mx-auto w-full">
          {step === 'basic' ? (
            <button
              onClick={() => setStep('specification')}
              className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg transform active:scale-95 transition-all"
            >
              Save and Continue {'>'}
            </button>
          ) : (
            <button
              onClick={onSave}
              className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 rounded-full shadow-lg transition-all active:scale-[0.99]"
            >
              Save Product
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default AddProduct;
