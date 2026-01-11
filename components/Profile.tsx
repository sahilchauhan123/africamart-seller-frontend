import React from 'react';
import { MOCK_USER } from '../constants';

interface Props {
  onBack: () => void;
  onEdit: () => void;
}

const Profile: React.FC<Props> = ({ onBack, onEdit }) => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-[#0033CC] text-white p-4 sticky top-0 z-50 flex items-center h-16 shadow-md">
        <div className="flex-none w-12 flex items-center justify-start">
          <button onClick={onBack} className="flex items-center">
            <span className="material-icons cursor-pointer text-[28px]">menu</span>
          </button>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold tracking-tight">Seller Profile</h1>
        </div>
        <div className="flex-none w-12 flex items-center justify-end">
          <button onClick={onEdit} className="flex items-center">
            <span className="material-icons cursor-pointer text-[28px]">edit_note</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto bg-white min-h-[calc(100vh-64px)] shadow-sm">
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
  );
};

export default Profile;
