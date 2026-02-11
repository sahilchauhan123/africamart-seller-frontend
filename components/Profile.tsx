
import React from 'react';
import {
  Menu,
  FilePenLine,
  Verified,
  MapPin,
  Star,
  Building,
  Briefcase,
  ChevronRight,
  PlusCircle,
  Users,
  User,
  Globe,
  Edit,
  CheckCircle2,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { MOCK_USER } from '../constants';

interface Props {
  onBack: () => void;
  onEdit: () => void;
}

const Profile: React.FC<Props> = ({ onBack, onEdit }) => {
  return (
    <div className="bg-gray-100 text-gray-900 h-full font-body overflow-hidden flex flex-col">

      {/* Mobile Layout */}
      <div className="lg:hidden h-full flex flex-col bg-background-light">
        {/* Mobile Header */}
        <header className="bg-primary text-white p-4 fixed top-0 left-0 right-0 z-50 flex items-center h-16 shrink-0">
          <div className="flex-none w-12 flex items-center justify-start">
            <button onClick={onBack} className="cursor-pointer focus:outline-none">
              <Menu size={32} />
            </button>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-semibold tracking-tight">Seller Profile</h1>
          </div>
          <div className="flex-none w-12 flex items-center justify-end">
            <button onClick={onEdit} className="cursor-pointer focus:outline-none">
              <FilePenLine size={24} />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 space-y-10 pt-20">
          {/* Profile Header - Centered */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden text-slate-400">
              <User size={48} />
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Hi, {MOCK_USER.name}</h1>
              <div className="flex items-center justify-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800 tracking-wider">
                  <Verified className="mr-1" size={14} fill="currentColor" /> VERIFIED SELLER
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="flex text-yellow-500">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" className="opacity-50" />
              </div>
              <span className="text-slate-900">{MOCK_USER.rating}</span>
              <span className="text-slate-400">({MOCK_USER.reviews} reviews)</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <MapPin size={18} />
                <span>{MOCK_USER.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase size={18} />
                <span>{MOCK_USER.category}</span>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-600 shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-600 shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-600 shadow-sm">
                <Globe size={20} />
              </button>
            </div>
          </div>

          {/* Nature of Business */}
          <div className="space-y-4 pt-2 border-t border-slate-200/60">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Nature of Business</h3>
            <div className="px-1 leading-relaxed text-slate-600 text-sm">
              {MOCK_USER.about}
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-6 pt-2 border-t border-slate-200/60">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Business Details</h3>
            <div className="space-y-6 px-1">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Business Category</p>
                <p className="text-sm font-medium text-slate-800">{MOCK_USER.category}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Location/Address</p>
                <p className="text-sm font-medium text-slate-800 leading-snug">{MOCK_USER.location}</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Country</p>
                  <p className="text-sm font-medium text-slate-800">Liberia</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Capital</p>
                  <p className="text-sm font-medium text-slate-800">Monrovia</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Year of Establishment</p>
                <p className="text-sm font-medium text-slate-800">2018</p>
              </div>
            </div>
          </div>

          {/* Contact & Verification */}
          <div className="space-y-6 pt-2 border-t border-slate-200/60">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Contact & Verification</h3>
            <div className="space-y-6 px-1">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Email Address</p>
                <p className="text-sm font-medium text-slate-800 flex items-center gap-1.5">
                  {MOCK_USER.email}
                  <CheckCircle2 className="text-green-500" size={18} />
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Contact Number</p>
                <p className="text-sm font-medium text-slate-800">+231 555 367 471</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">GST & Tax Number</p>
                <p className="text-sm font-medium text-slate-800">TX-98234-5501-A</p>
              </div>
              <div className="mt-2">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Verification Status</p>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Identity Verified</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Last checked on June 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="pt-6 border-t border-slate-200/60">
            <div className="bg-white/40 border border-slate-200 p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Support</p>
                  <p className="text-sm font-semibold">Help Center</p>
                </div>
              </div>
              <ChevronRight className="text-slate-400" size={20} />
            </div>
          </div>

          {/* Security Footer */}
          <div className="flex flex-col items-center justify-center gap-2 py-4">
            <div className="flex items-center gap-1.5 opacity-60">
              <Lock size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Secure Public Profile View</span>
            </div>
          </div>
        </main>
      </div>


      {/* Desktop Layout */}
      < div className="hidden lg:flex flex-col h-full bg-[#F5F7FA] overflow-hidden" >
        <main className="flex-1 overflow-y-auto no-scrollbar p-4 lg:px-10 lg:pt-10 lg:pb-10">
          <div className="max-w-[1536px] mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center border-4 border-white shadow-md overflow-hidden text-slate-300">
                    <User size={64} />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Hi, {MOCK_USER.name}</h2>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">
                      <Verified className="text-base font-bold" size={16} />
                      Verified Seller
                    </span>
                    <div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                      <div className="flex items-center gap-0.5">
                        <Star className="text-yellow-500 fill-current" size={18} />
                        <Star className="text-yellow-500 fill-current" size={18} />
                        <Star className="text-yellow-500 fill-current" size={18} />
                        <Star className="text-yellow-500 fill-current" size={18} />
                        <Star className="text-yellow-500" size={18} />
                      </div>
                      <span className="text-sm font-bold text-slate-700 ml-1">4.5</span>
                      <span className="text-xs text-slate-500 ml-1">(128 reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-slate-500 items-center">
                    <span className="flex items-center gap-1.5"><MapPin size={18} /> {MOCK_USER.location}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="flex items-center gap-1.5"><Briefcase size={18} /> {MOCK_USER.category}</span>
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
                    <Globe size={20} />
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
                        <CheckCircle2 className="text-emerald-500" size={16} />
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
                          <ShieldCheck size={14} />
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
                <Lock size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Secure Public Profile View</span>
              </div>
              <button
                onClick={onEdit}
                className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-2 group uppercase text-sm tracking-wide"
              >
                Edit Profile Information
                <Edit size={18} />
              </button>
            </div>
          </div>
        </main>
      </div >
    </div >
  );
};

export default Profile;
