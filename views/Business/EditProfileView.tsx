
import React from 'react';
import { Camera, MapPin, Lock, FileText, CheckCircle2, Upload, ChevronLeft, ArrowRight, ImagePlus, Trophy } from 'lucide-react';
import { MOCK_USER } from '../../constants';
import { useEditProfileController } from '../../controllers/useEditProfileController';

interface Props {
  onBack: () => void;
  onSave: () => void;
}

const EditProfileView: React.FC<Props> = ({ onBack, onSave }) => {
  const { state, actions } = useEditProfileController(onSave);
  const { step, showSuccess, totalSteps, formData, isLoading, error, documentRequirements, uploadedDocuments, selectedFiles } = state;
  const { setStep, handleSave, handleCloseSuccess, handleInputChange, handleFileChange } = actions;

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3, 4].map((s) => (
        <div
          key={s}
          className={`h-1.5 rounded-full transition-all duration-300 ${s === step ? 'w-8 bg-primary shadow-sm shadow-primary/30' : 'w-2 bg-slate-200'
            }`}
        />
      ))}
    </div>
  );

  const renderMobileStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Profile Identity */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-[#F0F4FF] flex items-center justify-center text-3xl font-black text-primary border-4 border-white shadow-xl overflow-hidden">
                  {MOCK_USER.businessName.charAt(0)}
                </div>
                <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-4 border-white shadow-md active:scale-90 transition-transform">
                  <Camera size={16} />
                </button>
              </div>
              <h2 className="mt-4 text-xl font-bold text-slate-800">Business Identity</h2>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Step 1 of 3</p>
            </div>

            <div className="bg-[#F0F4FF] rounded-2xl p-5 space-y-4 shadow-sm border border-primary/5">
              <div>
                <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Business Name</label>
                <input
                  type="text"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Nature of Business</label>
                <input
                  type="text"
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleInputChange}
                  placeholder="e.g. Trading & Logistics"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                />
              </div>
              <div className="relative">
                <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Business Category</label>
                <select name="business_category" value={formData.business_category} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 appearance-none shadow-sm cursor-pointer">
                  <option value="">Select Category</option>
                  <option value="Retail">Retail</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-[#F0F4FF] rounded-2xl flex items-center justify-center text-primary mb-4 shadow-sm">
                <MapPin size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Contact & Reach</h2>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Step 2 of 3</p>
            </div>

            <div className="bg-[#F0F4FF] rounded-2xl p-5 space-y-4 shadow-sm border border-primary/5">
              <div>
                <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Business Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Business Address</label>
                <input
                  type="text"
                  name="business_address"
                  value={formData.business_address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Liberia"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Capital</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Monrovia"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-[#F0F4FF] rounded-2xl flex items-center justify-center text-primary mb-4 shadow-sm">
                <Lock size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Verification & Social</h2>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Final Step</p>
            </div>

            <div className="bg-[#F0F4FF] rounded-2xl p-5 space-y-4 shadow-sm border border-primary/5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Est. Year</label>
                  <input
                    type="number"
                    name="year_of_establishment"
                    value={formData.year_of_establishment || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Tax ID</label>
                  <input
                    type="number"
                    name="no_of_employees"
                    placeholder="No. of Employees"
                    value={formData.no_of_employees || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold mb-2 text-slate-500 uppercase tracking-wider">Website / Social</label>
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700 shadow-sm"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 pb-10">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-[#F0F4FF] rounded-2xl flex items-center justify-center text-primary mb-4 shadow-sm">
                <FileText size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Business Documents</h2>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Step 4 of 4</p>
            </div>

            <div className="space-y-4">
              {error && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold animate-in fade-in slide-in-from-top-2">
                  {error}
                </div>
              )}
              {documentRequirements.length === 0 && !error && formData.country && (
                <p className="text-center py-8 text-slate-400 text-sm italic">
                  No documents required for {formData.country}
                </p>
              )}
              {documentRequirements.map((doc) => {
                const file = selectedFiles[doc.id];
                return (
                  <div key={doc.id} className={`rounded-2xl p-5 border flex items-center justify-between group active:scale-[0.98] transition-all ${file ? 'bg-[#F0F4FF] border-primary/5' : 'bg-slate-50 border-dashed border-slate-200'}`}>
                    <div className="flex items-center gap-4 max-w-[70%]">
                      <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm ${file ? 'text-primary' : 'text-slate-300 border border-slate-100'}`}>
                        {file ? <CheckCircle2 size={20} className="text-emerald-500" /> : <FileText size={20} />}
                      </div>
                      <div className="flex-1 truncate">
                        <h4 className="text-sm font-bold text-slate-800 truncate">{doc.document_name}</h4>
                        <p className={`text-[10px] font-bold uppercase tracking-tight ${file ? 'text-emerald-600' : 'text-slate-400 italic'}`}>
                          {file ? file.name : (doc.required ? 'Not uploaded yet *' : 'Optional')}
                        </p>
                      </div>
                    </div>
                    <label className={`p-2 rounded-xl cursor-pointer ${file ? 'text-slate-400 hover:text-primary' : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors'}`}>
                      <Upload size={18} />
                      <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => handleFileChange(doc.id, e.target.files?.[0] || null)} />
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3 mt-4">
              <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 mt-0.5 text-[10px] font-bold">!</div>
              <p className="text-[10px] text-amber-700 leading-relaxed">
                <span className="font-bold">Trust Score:</span> Uploading documents increases your visibility to premium buyers across the continent.
              </p>
            </div>
          </div>
        );
      case 5: // Fallback
        return null;
    }
  };

  return (
    <div className="bg-white font-sans text-slate-900 antialiased h-full flex flex-col overflow-hidden">
      {/* Unified View */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-10 h-full">
        <div className="max-w-[1536px] mx-auto">


          {/* Profile Completion */}
          <div className="mb-10 lg:mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-widest">Profile Completion</span>
              <span className="text-xs lg:text-sm font-bold text-emerald-600">7/7 Complete</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-full rounded-full transition-all duration-1000"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-8 mb-10 lg:mb-16">
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden">
                <span className="text-3xl font-bold text-slate-400">{MOCK_USER.businessName.charAt(0)}</span>
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white hover:scale-110 transition-transform shadow-md">
                <ImagePlus size={14} />
              </button>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Hi, {MOCK_USER.name}</h2>
              <p className="text-slate-500 mt-1 text-sm lg:text-lg">Manage your business identity and verification details.</p>
            </div>
          </div>

          <form className="space-y-12 lg:space-y-16 pb-20" onSubmit={(e) => { e.preventDefault(); onSave(); }}>
            <div>
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900">General Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-8">
                <div className="space-y-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Business Name</label>
                  <input
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="e.g. Acme Solutions"
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Business Category</label>
                  <select name="business_category" value={formData.business_category} onChange={handleInputChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none appearance-none cursor-pointer">
                    <option value="">Select Category</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Services">Services</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Location/Address</label>
                  <input
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="123 Commerce St, New York, NY 10001"
                    type="text"
                    name="business_address"
                    value={formData.business_address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Country</label>
                  <input
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="e.g. Liberia"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Capital</label>
                  <input
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="e.g. Monrovia"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Established Year</label>
                  <input
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="YYYY"
                    type="number"
                    name="year_of_establishment"
                    value={formData.year_of_establishment || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="contact@business.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">Nature of Business</label>
                  <textarea
                    name="business_type"
                    value={formData.business_type}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none resize-none"
                    placeholder="Describe your business activities, products, or services..."
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-200 w-full"></div>

            <div>
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900">Tax & Verification</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-8">
                <div className="space-y-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">GST & Tax Number</label>
                  <input
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="Tax ID Number"
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider">No. of Employees</label>
                  <input
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                    placeholder="e.g. 25"
                    type="number"
                    name="no_of_employees"
                    value={formData.no_of_employees || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-200 w-full"></div>

            <div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900">Business Documents</h3>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-center gap-3">
                  <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 text-[10px] font-bold">!</div>
                  <p className="text-xs text-amber-700 leading-normal font-medium max-w-xs lg:max-w-none">
                    <span className="font-bold">Trust Score:</span> Uploading documents increases your visibility to premium buyers.
                  </p>
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold animate-in fade-in slide-in-from-top-2">
                  {error}
                </div>
              )}
              {documentRequirements.length === 0 && !error && formData.country && (
                <p className="text-center py-12 text-slate-400 text-lg italic border-2 border-dashed border-slate-100 rounded-2xl">
                  No documents required for {formData.country}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 lg:gap-y-6">
                {documentRequirements.map((doc) => {
                  const file = selectedFiles[doc.id];
                  const uploadedDoc = uploadedDocuments?.find(ud => ud.document_name === doc.document_name);
                  const isUploaded = !!uploadedDoc;

                  return (
                    <div key={doc.id} className={`rounded-2xl p-4 lg:p-5 border flex items-center justify-between group active:scale-[0.98] transition-all ${file || isUploaded ? 'bg-[#F0F4FF] border-primary/5' : 'bg-slate-50 border-dashed border-slate-200'}`}>
                      <div className="flex items-center gap-4 max-w-[70%]">
                        <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm ${file || isUploaded ? 'text-primary' : 'text-slate-300 border border-slate-100'}`}>
                          {file || isUploaded ? <CheckCircle2 size={20} className="text-emerald-500" /> : <FileText size={20} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-800 truncate">{doc.document_name}</h4>
                          <p className={`text-[9px] font-bold uppercase tracking-tight ${file || isUploaded ? 'text-emerald-600' : 'text-slate-400 italic'}`}>
                            {file ? file.name : (isUploaded ? (
                              <a href={uploadedDoc.document_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                                View Uploaded Document <ArrowRight size={10} />
                              </a>
                            ) : (doc.required ? 'Not uploaded yet *' : 'Optional'))}
                          </p>
                        </div>
                      </div>
                      {!isUploaded && (
                        <label className={`p-2 rounded-xl cursor-pointer ${file ? 'text-slate-400 hover:text-primary' : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors'}`}>
                          <Upload size={18} />
                          <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => handleFileChange(doc.id, e.target.files?.[0] || null)} />
                        </label>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-400 order-2 lg:order-1">
                <Lock size={16} />
                <span className="text-[9px] uppercase tracking-widest font-bold text-center lg:text-left">Your data is secured with enterprise-grade encryption</span>
              </div>
              <button
                className="w-full lg:w-auto bg-primary text-white font-semibold py-4 px-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-3 group order-1 lg:order-2"
                type="button"
                onClick={handleSave}
              >
                {isLoading ? 'Saving...' : 'Save and Continue'}
                {!isLoading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Success Congratulations Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"></div>
          <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-12 w-full max-w-sm lg:max-w-md shadow-2xl border border-white/50 transform transition-all duration-500 scale-100 animate-in fade-in zoom-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Trophy className="text-emerald-500 w-10 h-10 animate-bounce" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight">Congratulations!</h2>
              <p className="text-slate-500 leading-relaxed mb-4 text-sm lg:text-base px-2">
                Your business profile has been <span className="text-emerald-600 font-bold">successfully updated</span>.
              </p>
              <div className="bg-[#F0F4FF] p-4 rounded-2xl mb-10 w-full">
                <p className="text-[11px] font-bold text-primary uppercase tracking-widest flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                  Verification In Progress
                </p>
              </div>
              <button
                onClick={handleCloseSuccess}
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 lg:py-5 rounded-full shadow-lg shadow-primary/30 transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 text-sm lg:text-base tracking-wide"
              >
                GO TO DASHBOARD
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfileView;
