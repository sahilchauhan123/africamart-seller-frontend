import React from 'react';
import { MOCK_USER } from '../constants';

interface Props {
  onBack: () => void;
  onEdit: () => void;
}

const Profile: React.FC<Props> = ({ onBack, onEdit }) => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen font-body">

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <main className="max-w-md mx-auto bg-white min-h-screen shadow-sm">
          <section className="p-4 flex gap-4 items-start">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
              <img
                alt="Seller Business Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC89tAsspZvlIO24kAPXvVmKMowhgkjG9uJKupBPA6wUF6wLdVu4fVeHJRpCshc36_P7QIlFH79xnUdppt4uqrdC9EDIAXvXHW0iGtKqtQmRw5Lt808J-hWjSq-65OrfBuT3GcZLVxGacItRS-fQVgJ7fXAdMq2Kb6fQ8cVbWADKopN6YFhquR9YANOGkSfuUiMXXuikA0GPHkfTySRVI_A-ZZ4RbITbf2AmNEFXFlJ3zcR24qrevB8zmkBXRKhej52vOVbRVeT4w"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <h2 className="text-xl font-bold">{MOCK_USER.businessName}</h2>
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
                  <span className="font-bold">4.5</span>
                  <span className="material-icons text-orange-400 text-sm">star</span>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-3 px-4 py-2">
            <div className="border p-3 rounded-lg bg-gray-50">
              <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-tight">GST Number</p>
              <p className="text-sm font-medium mt-1 text-gray-700">245316853FBAT1</p>
            </div>
            <div className="border p-3 rounded-lg bg-gray-50">
              <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-tight">Member Since</p>
              <p className="text-sm font-medium mt-1 text-gray-700">2018 (5 YEARS)</p>
            </div>
          </section>

          <div className="h-2 bg-gray-100 border-y border-gray-200 mt-4"></div>

          <section>
            <div className="flex items-center justify-between p-4 bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="material-icons text-[#0033CC]">business</span>
                <h3 className="font-bold text-xs uppercase tracking-wider">Business Overview</h3>
              </div>
              <button onClick={onEdit}>
                <span className="material-icons text-[#0033CC] text-lg cursor-pointer">edit</span>
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-4 grid grid-cols-12 gap-2 text-sm">
                <span className="col-span-5 text-gray-400">Nature of Business</span>
                <span className="col-span-7 font-medium">{MOCK_USER.category}</span>
              </div>
              <div className="p-4 grid grid-cols-12 gap-2 text-sm">
                <span className="col-span-5 text-gray-400">Mobile No. (Official)</span>
                <span className="col-span-7 font-medium">+23177349915</span>
              </div>
              <div className="p-4 grid grid-cols-12 gap-2 text-sm">
                <span className="col-span-5 text-gray-400">Location/Address</span>
                <span className="col-span-7 font-medium">{MOCK_USER.location}</span>
              </div>
              <div className="p-4 grid grid-cols-12 gap-2 text-sm">
                <span className="col-span-5 text-gray-400">Country & Capital</span>
                <span className="col-span-7 font-medium">Monrovia, Liberia</span>
              </div>
            </div>
          </section>

          <div className="h-2 bg-gray-100 border-y border-gray-200"></div>

          <section>
            <div className="flex items-center justify-between p-4 bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="material-icons text-[#0033CC]">business_center</span>
                <h3 className="font-bold text-xs uppercase tracking-wider">Product & Services</h3>
              </div>
              <a className="text-[#0033CC] text-xs font-bold uppercase tracking-wide" href="#">Manage</a>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div>
                    <p className="font-medium">Hybrid Corn Seeds</p>
                    <p className="text-xs text-gray-400">Seeds</p>
                  </div>
                </div>
                <span className="material-icons text-gray-400">chevron_right</span>
              </div>
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div>
                    <p className="font-medium">NPK Fertilizer</p>
                    <p className="text-xs text-gray-400">Fertilizers</p>
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
                <span className="material-icons text-[#0033CC]">groups</span>
                <h3 className="font-bold text-xs uppercase tracking-wider">Team Members</h3>
              </div>
              <a className="text-[#0033CC] text-xs font-bold uppercase tracking-wide" href="#">View All</a>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex items-center justify-between p-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 text-xl">
                    {MOCK_USER.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{MOCK_USER.name}</p>
                    <p className="text-xs text-gray-400">Manager</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-green-600 border border-green-600 px-3 py-1 rounded-full bg-green-50">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 text-xl">
                    S
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Sarah Jones</p>
                    <p className="text-xs text-gray-400">Sales</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-gray-500 border border-gray-400 px-3 py-1 rounded-full bg-gray-50">
                  Inactive
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col flex-1 min-w-0 bg-[#F5F7FA]">
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Business Profile</h1>
              <p className="text-sm text-slate-500">Manage your company information and verified status</p>
            </div>
            <button onClick={onEdit} className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded shadow-sm hover:bg-blue-800 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">edit</span>
              Edit Profile
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="relative">
                  <img alt="Business Logo" className="w-28 h-28 rounded-lg object-cover border-4 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvaLhmctPWKJhlK_MXdy_SIrtBngba8Y10QZ0DHMdN-qgihX1beyMHji9q1Ede6smdiP0vGLWjfETOnR2SvddgZMUOeCHMulFApwtoncfJWtPY6TxTPQ2WK-9uZGj-c4AmMGnWu-0bA7G7K-CPAbN2GYRKyY7tZwLMDa_uf1a0LOs14aEsSNxT-cXmZJDBtmMhN57qQpy6DcsABJ1tGzTTM7TUEU9LTAHIrubYK2D11Fp_EOdF6Jtic6b6u390Fthikys17BeOHsU" />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-1 border-2 border-white">
                    <span className="material-symbols-outlined text-sm block">verified</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-slate-900 leading-tight">Elite Electronics Liberia</h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-100 tracking-wider">
                      TRUSTED SELLER
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">location_on</span>
                      <span className="text-sm">Red Light, Paynesville City</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center text-yellow-500">
                        <span className="material-symbols-outlined text-lg fill-1">star</span>
                        <span class="text-sm font-bold text-slate-900 ml-1">4.5</span>
                      </div>
                      <span className="text-sm text-slate-400">(248 Verified Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">GST / Tax Identification</p>
                  <p className="text-lg font-mono font-bold text-slate-800">245316853FBAT1</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Member Since</p>
                  <p className="text-lg font-semibold text-slate-800">Aug 2018 (5 Years)</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Orders</p>
                  <p className="text-lg font-semibold text-slate-800">1,240+</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Response Rate</p>
                  <p className="text-lg font-semibold text-slate-800">98%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">info</span>
                    <h3 className="font-bold text-slate-800 uppercase tracking-tight text-xs">Company Overview</h3>
                  </div>
                  <button onClick={onEdit} className="text-primary hover:underline text-xs font-semibold">Update Details</button>
                </div>
                <div className="p-6">
                  <dl className="grid grid-cols-1 gap-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 py-2">
                      <dt className="text-sm font-medium text-slate-500 w-48">Nature of Business</dt>
                      <dd className="text-sm text-slate-900 font-medium">Wholesale &amp; Retail of Smart Home Appliances</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 py-2">
                      <dt className="text-sm font-medium text-slate-500 w-48">Registered Mobile No.</dt>
                      <dd className="text-sm text-slate-900 font-medium">+231 773 49915</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 py-2">
                      <dt className="text-sm font-medium text-slate-500 w-48">Principal Office</dt>
                      <dd className="text-sm text-slate-900 font-medium">ELWA Junction, Monrovia, Liberia</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 py-2">
                      <dt className="text-sm font-medium text-slate-500 w-48">Business Type</dt>
                      <dd className="text-sm text-slate-900 font-medium">Sole Proprietorship</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">inventory</span>
                    <h3 className="font-bold text-slate-800 uppercase tracking-tight text-xs">Product &amp; Services</h3>
                  </div>
                  <button className="text-primary hover:underline text-xs font-semibold">View Catalog</button>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center p-3 border border-slate-100 rounded-lg hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group">
                    <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center mr-4 group-hover:bg-white transition-colors">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">devices</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-slate-900">Smart Home</h4>
                      <p className="text-[10px] text-slate-500">12 Products</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
                  </div>
                  <div className="flex items-center p-3 border border-slate-100 rounded-lg hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group">
                    <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center mr-4 group-hover:bg-white transition-colors">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">smartphone</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-slate-900">Accessories</h4>
                      <p className="text-[10px] text-slate-500">45 Products</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
                  </div>
                  <button className="sm:col-span-2 py-3 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center gap-2 text-slate-400 hover:border-primary hover:text-primary transition-all bg-slate-50/50">
                    <span className="material-symbols-outlined text-lg">add_circle</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Add New Category</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    <h3 className="font-bold text-slate-800 uppercase tracking-tight text-xs">Team Members</h3>
                  </div>
                  <button className="text-primary hover:underline text-[10px] font-bold">MANAGE ALL</button>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-xs border border-blue-100">JD</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">John Doe</p>
                        <p className="text-[10px] text-slate-500">Operations Manager</p>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-green-50 text-[10px] font-bold text-green-700 border border-green-100 uppercase tracking-tighter">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs border border-slate-200">AS</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Alice Smith</p>
                        <p className="text-[10px] text-slate-500">Sales Lead</p>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-slate-50 text-[10px] font-bold text-slate-400 border border-slate-100 uppercase tracking-tighter">Inactive</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-xs border border-blue-100">MK</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Mark Kamara</p>
                        <p className="text-[10px] text-slate-500">Logistics Admin</p>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-green-50 text-[10px] font-bold text-green-700 border border-green-100 uppercase tracking-tighter">Active</span>
                  </div>
                  <div className="pt-4">
                    <button className="w-full py-2.5 flex items-center justify-center gap-2 text-primary bg-blue-50 hover:bg-blue-100 rounded text-xs font-bold transition-colors">
                      <span className="material-symbols-outlined text-sm">person_add</span>
                      INVITE TEAM MEMBER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
