
import React, { useState } from 'react';
import { View } from '../types';
import { MOCK_USER, MOCK_INQUIRIES } from '../constants';
import Drawer from './common/Drawer';

interface Props {
  onNavigate: (view: View) => void;
}

const Dashboard: React.FC<Props> = ({ onNavigate }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative">
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} onNavigate={onNavigate} />

      <header className="bg-primary sticky top-0 z-50 px-4 py-3 shadow-md">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsDrawerOpen(true)} className="text-white p-1 rounded-md hover:bg-white/10 transition">
              <span className="material-icons-round text-3xl">menu</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white/30 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => onNavigate(View.PROFILE)}>
              <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi46GtpiM2PCOQBHANxFI9RbtsMJaAKLO_wmlPAAI9F3P8WF4Ol7CjQYs4bVfLnxrSMCfSNXNeQZNlSe5fCq1nvg6iZK9cONpUeEMCCP0YutzWEoXUtRyuz5USsT-FRNDsMLjixVN0_9RsTDgd2TXFi9OZ8lX0X5GwJX3Zb-AjabzDVPsA4t09tANJ6-oBYYqtF1RK_ZE0PH2XuqcFnS0mHoUyU1lr8hykoYW9ig6b4rqQOWYvQFo666LkAWEMXSTWA60ibVTejNI" />
            </div>
          </div>
          <div className="flex-grow">
            <div className="relative">
              <input className="w-full pl-4 pr-10 py-2 rounded-full text-sm border-none focus:ring-2 focus:ring-blue-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm" placeholder="Search Service / Prod.." type="text" />
              <span className="material-icons-round absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
            </div>
          </div>
          <div className="relative">
            <button className="text-white p-1 rounded-md hover:bg-white/10 transition">
              <span className="material-icons-round text-2xl">notifications</span>
            </button>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary"></span>
          </div>
        </div>
      </header>

      <main className="pb-8 bg-background-light min-h-screen">
        <section className="px-4 py-6">
          <div className="grid grid-cols-4 gap-4">
            <button onClick={() => onNavigate(View.ADD_PRODUCT)} className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="material-icons-round text-blue-600">add</span>
                </div>
              </div>
              <span className="text-[11px] font-medium text-center leading-tight">Add<br />Product</span>
            </button>
            <button onClick={() => onNavigate(View.INQUIRY_LIST)} className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="material-icons-round text-purple-600 text-lg">visibility</span>
                </div>
              </div>
              <span className="text-[11px] font-medium text-center leading-tight">Check<br />Leads</span>
            </button>
            <button onClick={() => onNavigate(View.PRODUCT_LIST)} className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="material-icons-round text-green-600 text-lg">inventory_2</span>
                </div>
              </div>
              <span className="text-[11px] font-medium text-center leading-tight">Manage<br />Products</span>
            </button>
            <button className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="material-icons-round text-orange-600 text-lg">description</span>
                </div>
              </div>
              <span className="text-[11px] font-medium text-center leading-tight">Post<br />Req</span>
            </button>
          </div>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-lg font-bold">Business Overview</h2>
            <button className="text-sm font-medium text-primary hover:underline">View Report</button>
          </div>
          <div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar">
            <div className="min-w-[140px] h-[100px] bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="material-icons-round text-blue-500 text-xl">analytics</span>
                <span className="text-xs font-semibold text-green-500 bg-green-100 px-1.5 py-0.5 rounded">+12%</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Views</p>
                <p className="text-xl font-bold">1,245</p>
              </div>
            </div>
            <div className="min-w-[140px] h-[100px] bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="material-icons-round text-purple-500 text-xl">group</span>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">0%</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">New Leads</p>
                <p className="text-xl font-bold">85</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Recent Inquiries</h2>
            <button onClick={() => onNavigate(View.INQUIRY_LIST)} className="text-sm font-medium text-primary hover:underline">View all</button>
          </div>
          <div className="flex flex-col gap-3">
            {MOCK_INQUIRIES.map(inq => (
              <div key={inq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition active:scale-[0.99]" onClick={() => onNavigate(View.LEAD_DETAILS)}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-orange-200 bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 font-bold text-sm">{inq.initials}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm">{inq.companyName}</h3>
                      <span className="text-xs text-gray-500">{inq.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-1">{inq.message}</p>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded-full border border-green-500 text-[10px] font-medium text-green-600 bg-green-50">
                        {inq.status}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <span className="material-icons-round text-[14px] mr-1">location_on</span>
                        <span className="text-[10px]">{inq.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
