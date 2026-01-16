
import React from 'react';
import { MOCK_USER } from '../constants';

interface Props {
  onBack: () => void;
  onEdit: () => void;
}

const Profile: React.FC<Props> = ({ onBack, onEdit }) => {
  return (
    <div className="bg-gray-100 text-gray-900 h-full font-body overflow-hidden flex flex-col">

      {/* Mobile Layout */}
      <div className="lg:hidden h-full flex flex-col bg-gray-100 overflow-hidden">
        {/* Mobile Header from Snippet */}
        <header className="bg-primary text-white p-4 sticky top-0 z-50 flex items-center h-16 shrink-0">
          <div className="flex-none w-12 flex items-center justify-start">
            <button onClick={onBack} className="material-icons cursor-pointer text-[32px] focus:outline-none">menu</button>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-semibold tracking-tight">Seller Profile</h1>
          </div>
          <div className="flex-none w-12 flex items-center justify-end">
            <button onClick={onEdit} className="material-icons cursor-pointer text-[32px] focus:outline-none">edit_note</button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar bg-white">
          <section className="p-4 flex gap-4 items-start">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
              <img
                alt="Seller Business Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi46GtpiM2PCOQBHANxFI9RbtsMJaAKLO_wmlPAAI9F3P8WF4Ol7CjQYs4bVfLnxrSMCfSNXNeQZNlSe5fCq1nvg6iZK9cONpUeEMCCP0YutzWEoXUtRyuz5USsT-FRNDsMLjixVN0_9RsTDgd2TXFi9OZ8lX0X5GwJX3Zb-AjabzDVPsA4t09tANJ6-oBYYqtF1RK_ZE0PH2XuqcFnS0mHoUyU1lr8hykoYW9ig6b4rqQOWYvQFo666LkAWEMXSTWA60ibVTejNI"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <h2 className="text-xl font-bold truncate">{MOCK_USER.businessName}</h2>
                <span className="material-icons text-blue-500 text-base">verified</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                <span className="material-icons text-sm">location_on</span>
                <span>{MOCK_USER.location}</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <span className="border border-green-600 text-green-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Trust Seller
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-bold">{MOCK_USER.rating}</span>
                  <span className="material-icons text-orange-400 text-sm">star</span>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-3 px-4 py-2">
            <div className="border border-gray-100 p-3 rounded-lg bg-gray-50">
              <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-tight">GST Number</p>
              <p className="text-sm font-medium mt-1 text-gray-700">245316853FBAT1</p>
            </div>
            <div className="border border-gray-100 p-3 rounded-lg bg-gray-50">
              <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-tight">Member Since</p>
              <p className="text-sm font-medium mt-1 text-gray-700">2018 (5 YEARS)</p>
            </div>
          </section>

          <div className="h-2 bg-gray-100 border-y border-gray-200 mt-4"></div>

          <section id="company-overview-section">
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">business</span>
                <h3 className="font-bold text-xs uppercase tracking-wider">Business Overview</h3>
              </div>
              <div className="flex items-center">
                <button
                  onClick={onEdit}
                  className="text-primary text-[10px] font-bold uppercase border border-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Update
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-4 space-y-2">
                <label className="block text-[10px] uppercase text-gray-400 font-semibold tracking-tight">Nature of Business</label>
                <input
                  className="w-full bg-white border border-gray-300 rounded-md text-sm py-1.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-gray-900 outline-none"
                  type="text"
                  defaultValue="Electronics, Appliances, Gadgets etc..."
                />
              </div>
              <div className="p-4 space-y-2">
                <label className="block text-[10px] uppercase text-gray-400 font-semibold tracking-tight">Mobile No. (Official)</label>
                <input
                  className="w-full bg-white border border-gray-300 rounded-md text-sm py-1.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-gray-900 outline-none"
                  type="tel"
                  defaultValue="+23177349915"
                />
              </div>
              <div className="p-4 space-y-2">
                <label className="block text-[10px] uppercase text-gray-400 font-semibold tracking-tight">Location/Address </label>
                <input
                  className="w-full bg-white border border-gray-300 rounded-md text-sm py-1.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-gray-900 outline-none"
                  type="text"
                  defaultValue="Paynesville City"
                />
              </div>
              <div className="p-4 space-y-2">
                <label className="block text-[10px] uppercase text-gray-400 font-semibold tracking-tight">Capital & Country</label>
                <input
                  className="w-full bg-white border border-gray-300 rounded-md text-sm py-1.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-gray-900 outline-none"
                  type="text"
                  defaultValue="Monrovia, Liberia"
                />
              </div>
            </div>
          </section>

          <div className="h-2 bg-gray-100 border-y border-gray-200"></div>

          <section>
            <div className="flex items-center justify-between p-4 bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">business_center</span>
                <h3 className="font-bold text-xs uppercase tracking-wider">Product & Services</h3>
              </div>
              <a className="text-primary text-xs font-bold uppercase tracking-wide" href="#">Manage</a>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm">Consumer Electronics</p>
                    <p className="text-xs text-gray-400">12 Products Listed</p>
                  </div>
                </div>
                <span className="material-icons text-gray-400">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm">Home Appliances</p>
                    <p className="text-xs text-gray-400">45 Products Listed</p>
                  </div>
                </div>
                <span className="material-icons text-gray-400">chevron_right</span>
              </div>
            </div>
            <div className="px-4 py-6">
              <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="material-icons text-gray-700">add_circle</span>
                <span className="font-medium text-gray-700">Add New Category</span>
              </button>
            </div>
          </section>

          <div className="h-2 bg-gray-100 border-y border-gray-200"></div>

          <section className="pb-10">
            <div className="flex items-center justify-between p-4 bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">groups</span>
                <h3 className="font-bold text-xs uppercase tracking-wider">Team Members</h3>
              </div>
              <a className="text-primary text-xs font-bold uppercase tracking-wide" href="#">View All</a>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex items-center justify-between p-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-blue-100 text-primary flex items-center justify-center rounded-full shrink-0 font-bold">JD</div>
                  <div>
                    <p className="font-medium text-sm">John Doe</p>
                    <p className="text-xs text-gray-400">Operations Manager</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-green-600 border border-green-600 px-3 py-1 rounded-full bg-green-50 uppercase">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-gray-100 text-gray-400 flex items-center justify-center rounded-full shrink-0 font-bold">AS</div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Alice Smith</p>
                    <p className="text-xs text-gray-400">Sales Lead</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-gray-500 border border-gray-400 px-3 py-1 rounded-full bg-gray-50 uppercase">
                  Inactive
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col h-full bg-[#F5F7FA] overflow-hidden">
        <main className="flex-1 overflow-y-auto no-scrollbar p-4 lg:px-10 lg:pt-10 lg:pb-10">
          <div className="max-w-[1536px] mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-md overflow-hidden text-center">
                    <img
                      alt="Business Logo"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvaLhmctPWKJhlK_MXdy_SIrtBngba8Y10QZ0DHMdN-qgihX1beyMHji9q1Ede6smdiP0vGLWjfETOnR2SvddgZMUOeCHMulFApwtoncfJWtPY6TxTPQ2WK-9uZGj-c4AmMGnWu-0bA7G7K-CPAbN2GYRKyY7tZwLMDa_uf1a0LOs14aEsSNxT-cXmZJDBtmMhN57qQpy6DcsABJ1tGzTTM7TUEU9LTAHIrubYK2D11Fp_EOdF6Jtic6b6u390Fthikys17BeOHsU"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Hi, {MOCK_USER.name}</h2>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">
                      <span className="material-symbols-outlined text-base font-bold">verified</span>
                      Verified Seller
                    </span>
                    <div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                      <div className="flex items-center">
                        <span className="material-symbols-outlined !fill-1 text-yellow-500 text-lg">star</span>
                        <span className="material-symbols-outlined !fill-1 text-yellow-500 text-lg">star</span>
                        <span className="material-symbols-outlined !fill-1 text-yellow-500 text-lg">star</span>
                        <span className="material-symbols-outlined !fill-1 text-yellow-500 text-lg">star</span>
                        <span className="material-symbols-outlined text-yellow-500 text-lg">star_half</span>
                      </div>
                      <span className="text-sm font-bold text-slate-700 ml-1">4.5</span>
                      <span className="text-xs text-slate-500 ml-1">(128 reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-slate-500 items-center">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">location_on</span> {MOCK_USER.location}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">business_center</span> {MOCK_USER.category}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  </a>
                  <a aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
                  </a>
                  <a aria-label="Website" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600" href="#">
                    <span className="material-symbols-outlined">public</span>
                  </a>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Nature of Business</h3>
                <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
                  {MOCK_USER.businessName} is a leading provider of {MOCK_USER.category.toLowerCase()} solutions, specializing in high-quality products and consumer goods across global markets. Established with a focus on supply chain efficiency, we bridge the gap between manufacturers and retailers with reliable service and competitive pricing.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Business Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Business Category</label>
                      <p className="font-medium text-slate-900">{MOCK_USER.category}</p>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location/Address</label>
                      <p className="font-medium text-slate-900">{MOCK_USER.location}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Country</label>
                        <p className="font-medium text-slate-900">Liberia</p>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Capital</label>
                        <p className="font-medium text-slate-900">Monrovia</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Year of Establishment</label>
                      <p className="font-medium text-slate-900">2018</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Contact & Verification</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</label>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-slate-900">{MOCK_USER.email}</p>
                        <span className="material-symbols-outlined text-emerald-500 text-base">check_circle</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Contact Number</label>
                      <p className="font-medium text-slate-900">+231 773 499 15</p>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">GST & Tax Number</label>
                      <p className="font-medium text-slate-900">245316853FBAT1</p>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Verification Status</label>
                      <div className="mt-2 p-3 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                          <span className="material-symbols-outlined text-sm">verified_user</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-emerald-700">Identity Verified</p>
                          <p className="text-[10px] text-emerald-600">Last checked on January 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Secure Public Profile View</span>
              </div>
              <button
                onClick={onEdit}
                className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-2 group uppercase text-sm tracking-wide"
              >
                Edit Profile Information
                <span className="material-symbols-outlined text-lg">edit</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
