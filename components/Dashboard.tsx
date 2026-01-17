
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { MOCK_USER, MOCK_INQUIRIES } from '../constants';
import Drawer from './common/Drawer';
import {
    Plus,
    Eye,
    Package,
    FileText,
    TrendingUp,
    Users,
    MapPin,
    PlusCircle,
    MousePointerClick,
    FilePlus,
    UserPlus,
    Rocket,
    ArrowLeftRight
} from 'lucide-react';

interface Props {
    onNavigate: (view: View) => void;
    onOpenDrawer: () => void;
}

const Dashboard: React.FC<Props> = ({ onNavigate, onOpenDrawer }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [activeMonthIndex, setActiveMonthIndex] = useState(3);
    const months = [
        { name: 'AUG', full: 'AUGUST', leads: 95, height: '65%' },
        { name: 'SEP', full: 'SEPTEMBER', leads: 110, height: '85%' },
        { name: 'OCT', full: 'OCTOBER', leads: 85, height: '55%' },
        { name: 'NOV', full: 'NOVEMBER', leads: 142, height: '100%' },
        { name: 'DEC', full: 'DECEMBER', leads: 120, height: '90%' },
        { name: 'JAN', full: 'JANUARY', leads: 125, height: '75%' },
    ];

    return (
        <div className="flex flex-col h-full bg-background-light overflow-hidden relative">

            {/* Mobile Dashboard */}
            <div className="lg:hidden flex flex-col h-full">
                <main className="pb-8 flex-1 overflow-y-auto no-scrollbar max-w-7xl mx-auto w-full">
                    <section className="px-4 py-6">
                        <div className="grid grid-cols-4 gap-4">
                            <button onClick={() => onNavigate(View.ADD_PRODUCT)} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Plus className="text-blue-600" size={24} />
                                    </div>
                                </div>
                                <span className="text-[11px] font-medium text-center leading-tight">Add<br />Product</span>
                            </button>
                            <button onClick={() => onNavigate(View.INQUIRY_LIST)} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                        <Eye className="text-purple-600" size={18} />
                                    </div>
                                </div>
                                <span className="text-[11px] font-medium text-center leading-tight">Check<br />Leads</span>
                            </button>
                            <button onClick={() => onNavigate(View.PRODUCT_LIST)} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <Package className="text-green-600" size={18} />
                                    </div>
                                </div>
                                <span className="text-[11px] font-medium text-center leading-tight">Manage<br />Products</span>
                            </button>
                            <button onClick={() => setIsOverlayOpen(true)} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                        <FileText className="text-orange-600" size={18} />
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
                                    <TrendingUp className="text-blue-500" size={20} />
                                    <span className="text-xs font-semibold text-green-500 bg-green-100 px-1.5 py-0.5 rounded">+12%</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Total Views</p>
                                    <p className="text-xl font-bold">1,245</p>
                                </div>
                            </div>
                            <div className="min-w-[140px] h-[100px] bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <Users className="text-purple-500" size={20} />
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
                                                    <MapPin size={14} className="mr-1" />
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

            {/* Desktop Dashboard */}
            <div className="hidden lg:flex flex-col h-full">
                <main className="flex-1 overflow-y-auto no-scrollbar p-10">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <section>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <button onClick={() => onNavigate(View.ADD_PRODUCT)} className="action-card bg-white p-8 rounded-[24px] shadow-sm border border-slate-50 transition-all flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
                                        <PlusCircle size={24} />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Add Product</span>
                                    <span className="text-[11px] text-slate-400 mt-1">Update inventory</span>
                                </button>
                                <button onClick={() => onNavigate(View.INQUIRY_LIST)} className="action-card bg-white p-8 rounded-[24px] shadow-sm border border-slate-50 transition-all flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-5">
                                        <MousePointerClick size={24} />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Check Leads</span>
                                    <span className="text-[11px] text-slate-400 mt-1">12 new today</span>
                                </button>
                                <button onClick={() => setIsOverlayOpen(true)} className="action-card bg-white p-8 rounded-[24px] shadow-sm border border-slate-50 transition-all flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                                        <FilePlus size={24} />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Requirement</span>
                                    <span className="text-[11px] text-slate-400 mt-1">Post new request</span>
                                </button>
                                <button className="action-card bg-white p-8 rounded-[24px] shadow-sm border border-slate-50 transition-all flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-5">
                                        <Package className="text-[#f97316]" size={24} />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Orders</span>
                                    <span className="text-[11px] text-slate-400 mt-1">Manage shipping</span>
                                </button>
                            </div>
                        </section>
                        <div className="grid lg:grid-cols-3 gap-10">
                            <div className="lg:col-span-2 space-y-8">
                                <section>
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-lg font-bold tracking-tight text-slate-800">Business Overview</h2>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm gap-2">
                                                <UserPlus className="text-brand" size={18} />
                                                <span className="text-[11px] font-bold text-slate-600">NEW LEADS: <span className="text-brand">12</span></span>
                                            </div>
                                            <div className="flex items-center bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm gap-2">
                                                <Eye className="text-brand" size={18} />
                                                <span className="text-[11px] font-bold text-slate-600">PRODUCT VIEWS: <span className="text-brand">1.2K</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-white border border-slate-100 rounded-[24px] p-6 relative overflow-hidden flex flex-col h-[220px] shadow-sm">
                                            <div className="flex justify-between items-start mb-2 relative z-10">
                                                <div>
                                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">{months[activeMonthIndex].full} LEADS</p>
                                                    <h3 className="text-3xl font-bold tracking-tight text-slate-800">{months[activeMonthIndex].leads}</h3>
                                                </div>
                                                <button
                                                    onClick={() => onNavigate(View.PREMIUM_SERVICES)}
                                                    className="bg-brand text-white text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide hover:bg-brand/90 transition-colors flex items-center gap-1"
                                                >
                                                    <Rocket size={12} />
                                                    Boost
                                                </button>
                                            </div>
                                            <div className="flex-1 flex items-end gap-2.5 pb-0">
                                                {months.map((m, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => setActiveMonthIndex(idx)}
                                                        className={`${idx === activeMonthIndex ? 'bg-brand shadow-lg shadow-brand/20' : 'bg-slate-100 hover:bg-slate-200'} w-full rounded-lg cursor-pointer transition-all`}
                                                        style={{ height: m.height }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-white border border-slate-100 rounded-[24px] p-6 flex flex-col h-[220px] shadow-sm">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">RESPONSE RATE</p>
                                                    </div>
                                                    <div className="flex items-baseline gap-2">
                                                        <h3 className="text-3xl font-bold tracking-tight text-slate-800">92%</h3>
                                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Avg Score</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-3 flex-1">
                                                <div className="space-y-1">
                                                    <div className="flex justify-between items-center text-[10px] font-bold">
                                                        <span className="text-brand flex items-center gap-1">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                                                            Within 24hrs
                                                        </span>
                                                        <span className="text-slate-800">115 leads</span>
                                                    </div>
                                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                        <div className="bg-brand h-full w-[92%] rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                                                        <span className="flex items-center gap-1">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                                            After 24hrs
                                                        </span>
                                                        <span>10 leads</span>
                                                    </div>
                                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                        <div className="bg-slate-300 h-full w-[8%] rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="pt-2 border-t border-slate-100 mt-auto">
                                                    <p className="text-[9px] text-slate-400 italic">Goal: Respond to 100% within 24 hours.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 glass-card p-8 flex items-center justify-between border-l-4 border-brand">
                                        <div className="flex items-center gap-8 flex-1">
                                            <div className="relative w-16 h-16 flex items-center justify-center">
                                                <svg className="w-full h-full -rotate-90">
                                                    <circle className="text-slate-100" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                                                    <circle className="text-brand" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="26.38" strokeWidth="4"></circle>
                                                </svg>
                                                <span className="absolute text-xs font-bold text-slate-800">85%</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-sm font-bold text-slate-800">Profile Completeness Score</h4>
                                                    <a className="text-brand text-xs font-bold hover:underline cursor-pointer" onClick={() => onNavigate(View.EDIT_PROFILE)}>Complete now →</a>
                                                </div>
                                                <p className="text-[11px] text-slate-400">Increase your profile completeness to gain 40% more visibility in search results.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 bg-white/50 border border-slate-100 rounded-[24px] p-4 grid grid-cols-3">
                                        <div className="text-center py-6 px-2 transition-all cursor-pointer relative">
                                            <p className="text-[10px] text-brand font-bold uppercase tracking-widest mb-1">NEW</p>
                                            <p className="text-2xl font-bold text-brand">2,450</p>
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand rounded-full"></div>
                                        </div>
                                        <div className="text-center py-6 px-2 hover:bg-slate-50/50 rounded-2xl transition-all cursor-pointer">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">CONTACTED</p>
                                            <p className="text-2xl font-bold text-slate-800">1,820</p>
                                        </div>
                                        <div className="text-center py-6 px-2 hover:bg-slate-50/50 rounded-2xl transition-all cursor-pointer">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">PENDING RESPONSE</p>
                                            <p className="text-2xl font-bold text-slate-800">640</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-lg font-bold tracking-tight text-slate-800">Recent Inquiries</h2>
                                    <a className="text-brand font-bold text-xs uppercase tracking-widest hover:underline cursor-pointer" onClick={() => onNavigate(View.INQUIRY_LIST)}>VIEW MORE</a>
                                </div>
                                <div className="space-y-2 relative">
                                    <div className="bg-white p-3 rounded-[14px] shadow-sm border border-slate-50 hover:border-brand/20 transition-all cursor-pointer group" onClick={() => onNavigate(View.LEAD_DETAILS)}>
                                        <div className="flex items-start gap-2.5 mb-1.5">
                                            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[12px] font-bold text-orange-500 border border-orange-100 flex-shrink-0">CH</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-1.5">
                                                    <h4 className="font-bold text-slate-800 text-xs group-hover:text-brand transition-colors truncate">Century Holdings</h4>
                                                    <span className="bg-brand/5 text-brand text-[7px] px-1 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0">NEW</span>
                                                </div>
                                                <p className="text-[9px] text-slate-400 font-medium">12 mins ago</p>
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-tight line-clamp-1 mb-1.5">Request for quotation on bulk rice imports for Q2 cycle.</p>
                                        <div className="flex items-center text-slate-400 text-[8px] font-bold tracking-wider">
                                            <MapPin size={10} className="mr-1 text-slate-300" />
                                            MONROVIA, LIBERIA
                                        </div>
                                    </div>
                                    <div className="bg-white p-3 rounded-[14px] shadow-sm border border-slate-50 hover:border-brand/20 transition-all cursor-pointer group" onClick={() => onNavigate(View.LEAD_DETAILS)}>
                                        <div className="flex items-start gap-2.5 mb-1.5">
                                            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-[12px] font-bold text-indigo-500 border border-indigo-100 flex-shrink-0">AG</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-1.5">
                                                    <h4 className="font-bold text-slate-800 text-xs group-hover:text-brand transition-colors truncate">AgroGlobal Ltd</h4>
                                                    <span className="bg-slate-100 text-slate-500 text-[7px] px-1 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0">CONTACTED</span>
                                                </div>
                                                <p className="text-[9px] text-slate-400 font-medium">45 mins ago</p>
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-tight line-clamp-1 mb-1.5">Pricing update requested for organic fertilizer samples.</p>
                                        <div className="flex items-center text-slate-400 text-[8px] font-bold tracking-wider">
                                            <MapPin size={10} className="mr-1 text-slate-300" />
                                            PAYNESVILLE, LIB
                                        </div>
                                    </div>
                                    <div className="bg-white p-3 rounded-[14px] shadow-sm border border-slate-50 hover:border-brand/20 transition-all cursor-pointer group" onClick={() => onNavigate(View.LEAD_DETAILS)}>
                                        <div className="flex items-start gap-2.5 mb-1.5">
                                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[12px] font-bold text-emerald-500 border border-emerald-100 flex-shrink-0">SD</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-1.5">
                                                    <h4 className="font-bold text-slate-800 text-xs group-hover:text-brand transition-colors truncate">Skyline Distro</h4>
                                                    <span className="bg-brand/5 text-brand text-[7px] px-1 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0">NEW</span>
                                                </div>
                                                <p className="text-[9px] text-slate-400 font-medium">2 hours ago</p>
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-tight line-clamp-1 mb-1.5">Inquiry regarding solar-powered irrigation pumps.</p>
                                        <div className="flex items-center text-slate-400 text-[8px] font-bold tracking-wider">
                                            <MapPin size={10} className="mr-1 text-slate-300" />
                                            GBARNGA, LIBERIA
                                        </div>
                                    </div>
                                    <div className="bg-white p-3 rounded-[14px] shadow-sm border border-slate-50 hover:border-brand/20 transition-all cursor-pointer group" onClick={() => onNavigate(View.LEAD_DETAILS)}>
                                        <div className="flex items-start gap-2.5 mb-1.5">
                                            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-[12px] font-bold text-purple-500 border border-purple-100 flex-shrink-0">ME</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-1.5">
                                                    <h4 className="font-bold text-slate-800 text-xs group-hover:text-brand transition-colors truncate">Maritime Export</h4>
                                                    <span className="bg-amber-100 text-amber-600 text-[7px] px-1 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0">PENDING</span>
                                                </div>
                                                <p className="text-[9px] text-slate-400 font-medium">5 hours ago</p>
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-tight line-clamp-1 mb-1.5">Documentation check for international shipping compliance.</p>
                                        <div className="flex items-center text-slate-400 text-[8px] font-bold tracking-wider">
                                            <MapPin size={10} className="mr-1 text-slate-300" />
                                            FREEPORT, MONROVIA
                                        </div>
                                    </div>
                                    <div className="bg-white p-3 rounded-[14px] shadow-sm border border-slate-50 hover:border-brand/20 transition-all cursor-pointer group fade-bottom" onClick={() => onNavigate(View.LEAD_DETAILS)}>
                                        <div className="flex items-start gap-2.5 mb-1.5">
                                            <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-[12px] font-bold text-rose-500 border border-rose-100 flex-shrink-0">VH</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-1.5">
                                                    <h4 className="font-bold text-slate-800 text-xs group-hover:text-brand transition-colors truncate">Vista Hotels</h4>
                                                    <span className="bg-slate-100 text-slate-500 text-[7px] px-1 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0">CONTACTED</span>
                                                </div>
                                                <p className="text-[9px] text-slate-400 font-medium">8 hours ago</p>
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-tight line-clamp-1 mb-1.5">Volume discount request for high-grade linens.</p>
                                        <div className="flex items-center text-slate-400 text-[8px] font-bold tracking-wider">
                                            <MapPin size={10} className="mr-1 text-slate-300" />
                                            BUCHANAN, LIB
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {/* Switch Mode Overlay */}
            {isOverlayOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setIsOverlayOpen(false)}
                    ></div>
                    <div className="relative bg-white w-full max-w-md rounded-[28px] p-8 lg:p-10 shadow-2xl flex flex-col items-center text-center transform animate-in zoom-in fade-in duration-300">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0026C0] mb-6">
                            <ArrowLeftRight size={40} />
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 tracking-tight">Switch to Buyer Mode</h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 px-2">
                            Posting a requirement is a buyer-specific feature. Please switch to your buyer profile to continue.
                        </p>
                        <div className="w-full flex flex-col gap-3">
                            <button className="w-full bg-[#0026C0] text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-800 transition-colors shadow-lg shadow-[#0026C0]/20 active:scale-95">
                                Switch to Buyer
                            </button>
                            <button
                                onClick={() => setIsOverlayOpen(false)}
                                className="w-full bg-transparent text-slate-400 py-3 rounded-xl font-bold text-sm hover:text-slate-600 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;