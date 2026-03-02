
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
import { MOCK_USER } from '../../constants';

import { useProfileController } from '../../controllers/useProfileController';

interface Props {
  onBack: () => void;
  onEdit: () => void;
}

const ProfileView: React.FC<Props> = ({ onBack, onEdit }) => {
  const { state } = useProfileController();
  const { profileData, accountData, isLoading, error } = state;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full bg-background-light">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !profileData) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-background-light p-6 text-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4">
          <ShieldCheck size={40} />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Profile Incomplete</h2>
        <p className="text-slate-500 mb-8 max-w-xs">{error || "Please complete your business registration to view your profile."}</p>
        <button onClick={onEdit} className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20">
          Complete Registration
        </button>
      </div>
    );
  }

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
            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
              {profileData.logo_url ? (
                <img src={profileData.logo_url} alt="Business Logo" className="w-full h-full object-cover" />
              ) : (
                <User className="text-slate-400" size={48} />
              )}
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">{profileData.business_name}</h1>
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
              <span className="text-slate-900">4.5</span>
              <span className="text-slate-400">(0 reviews)</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <MapPin size={18} />
                <span>{profileData.city}, {profileData.country}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase size={18} />
                <span>{profileData.business_category}</span>
              </div>
            </div>
          </div>

          {/* Nature of Business */}
          <div className="space-y-4 pt-2 border-t border-slate-200/60">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Nature of Business</h3>
            <div className="px-1 leading-relaxed text-slate-600 text-sm">
              {profileData.business_name} is a leading {profileData.business_type} in the {profileData.business_category} sector.
            </div>
          </div>

          {/* Account Details */}
          <div className="space-y-6 pt-2 border-t border-slate-200/60">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Account Details</h3>
            <div className="space-y-6 px-1">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Business Owner Name</p>
                <p className="text-sm font-medium text-slate-800">{accountData?.business_owner_name || 'N/A'}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Registered Email</p>
                <p className="text-sm font-medium text-slate-800 flex items-center gap-1.5">
                  {accountData?.email || profileData.email || 'N/A'}
                  <CheckCircle2 className="text-emerald-500" size={16} />
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Account Created</p>
                <p className="text-sm font-medium text-slate-800">{accountData?.created_at ? new Date(accountData.created_at).toLocaleDateString() : 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-6 pt-2 border-t border-slate-200/60">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Business Details</h3>
            <div className="space-y-6 px-1">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Business Category</p>
                <p className="text-sm font-medium text-slate-800">{profileData.business_category}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Location/Address</p>
                <p className="text-sm font-medium text-slate-800 leading-snug">{profileData.business_address}</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Country</p>
                  <p className="text-sm font-medium text-slate-800">{profileData.country}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">City</p>
                  <p className="text-sm font-medium text-slate-800">{profileData.city}</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Year of Establishment</p>
                <p className="text-sm font-medium text-slate-800">{profileData.year_of_establishment}</p>
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
                  {profileData.email}
                  <CheckCircle2 className="text-green-500" size={18} />
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Contact Number</p>
                <p className="text-sm font-medium text-slate-800">{profileData.phone_number}</p>
              </div>
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
                    {profileData.logo_url ? (
                      <img src={profileData.logo_url} alt="Business Logo" className="w-full h-full object-cover" />
                    ) : (
                      <User size={64} />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{profileData.business_name}</h2>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">
                      <Verified className="text-base font-bold" size={16} />
                      Verified Seller
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-slate-500 items-center">
                    <span className="flex items-center gap-1.5"><MapPin size={18} /> {profileData.city}, {profileData.country}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="flex items-center gap-1.5"><Briefcase size={18} /> {profileData.business_category}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  {/* Social Media placeholders */}
                </div>
              </div>
              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Nature of Business</h3>
                <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
                  {profileData.business_name} is a leading {profileData.business_type} specializing in {profileData.business_category.toLowerCase()} solutions. Established in {profileData.year_of_establishment}, we bridge the gap between manufacturers and retailers with reliable service and competitive pricing.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Account Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Business Owner Name</label>
                    <p className="font-medium text-slate-900">{accountData?.business_owner_name || 'N/A'}</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Registered Email</label>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-slate-900">{accountData?.email || profileData.email || 'N/A'}</p>
                      <CheckCircle2 className="text-emerald-500" size={16} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Created</label>
                    <p className="font-medium text-slate-900">{accountData?.created_at ? new Date(accountData.created_at).toLocaleDateString() : 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Business Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Business Category</label>
                      <p className="font-medium text-slate-900">{profileData.business_category}</p>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location/Address</label>
                      <p className="font-medium text-slate-900">{profileData.business_address}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Country</label>
                        <p className="font-medium text-slate-900">{profileData.country}</p>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">City</label>
                        <p className="font-medium text-slate-900">{profileData.city}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Year of Establishment</label>
                      <p className="font-medium text-slate-900">{profileData.year_of_establishment}</p>
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
                        <p className="font-medium text-slate-900">{profileData.email}</p>
                        <CheckCircle2 className="text-emerald-500" size={16} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Contact Number</label>
                      <p className="font-medium text-slate-900">{profileData.phone_number}</p>
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

export default ProfileView;
