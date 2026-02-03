
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
    ArrowLeftRight,
    Store
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
                <main className="flex-1 overflow-y-auto no-scrollbar max-w-7xl mx-auto w-full">
                    <section className="px-4 py-6">
                        <div className="grid grid-cols-4 gap-4">
                            <button onClick={() => onNavigate(View.ADD_PRODUCT)} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Plus className="text-blue-600" size={24} />
                                    </div>
                                </div>
                                <span className="text-[11px] font-medium text-center leading-tight">Add<br />Product</span>
                            </button>
                            <button onClick={() => onNavigate(View.INQUIRY_LIST)} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                        <Eye className="text-purple-600" size={18} />
                                    </div>
                                </div>
                                <span className="text-[11px] font-medium text-center leading-tight">Check<br />Leads</span>
                            </button>
                            <button onClick={() => onNavigate(View.PRODUCT_LIST)} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <Package className="text-green-600" size={18} />
                                    </div>
                                </div>
                                <span className="text-[11px] font-medium text-center leading-tight">Manage<br />Products</span>
                            </button>
                            <button onClick={() => setIsOverlayOpen(true)} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform">
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
                            <button onClick={() => onNavigate(View.BUSINESS_REPORT)} className="text-sm font-medium text-primary hover:underline">View Report</button>
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
                        <div className="flex flex-col gap-3 relative">
                            {MOCK_INQUIRIES.slice(0, 5).map((inq, index) => (
                                <div key={inq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition active:scale-[0.99] relative" onClick={() => onNavigate(View.LEAD_DETAILS)}>
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
                                    {/* Shade Overlay on the last visible item */}
                                    {index === 4 && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/40 to-transparent rounded-xl pointer-events-none"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Mobile Brand Footer */}
                    <footer className="bg-[#0026C0] text-white pt-12 pb-6 px-8 mt-12 rounded-t-[3rem]">
                        <div className="max-w-md mx-auto flex flex-col items-center">
                            <div className="flex items-center gap-6 mb-10">
                                <a className="hover:opacity-80 transition-opacity" href="#">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                                </a>
                                <a className="hover:opacity-80 transition-opacity" href="#">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                                </a>
                                <a className="hover:opacity-80 transition-opacity" href="#">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.397 2.965 7.397 6.93 0 4.135-2.607 7.462-6.225 7.462-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.034-1.002 2.331-1.492 3.131C10.287 23.818 11.127 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"></path></svg>
                                </a>
                                <a className="hover:opacity-80 transition-opacity" href="#">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923(trimmed path)"></path></svg>
                                </a>
                                <a className="hover:opacity-80 transition-opacity" href="#">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                                </a>
                            </div>
                            <p className="text-center text-sm font-medium leading-relaxed mb-8 opacity-90">
                                You're receiving this because you signed up for <span className="font-bold">AFRICAMART</span>
                            </p>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-center text-xs font-semibold mb-12 w-full max-w-[280px]">
                                <a className="hover:underline transition-all" href="#">FAQ</a>
                                <a className="hover:underline transition-all" href="#">Careers</a>
                                <a className="hover:underline transition-all" href="#">Contact Us</a>
                                <a className="hover:underline transition-all" href="#">Newsroom</a>
                                <a className="hover:underline transition-all" href="#">Buying Guides</a>
                                <a className="hover:underline transition-all" href="#">Gift Cards</a>
                                <a className="hover:underline transition-all" href="#">Support</a>
                                <a className="hover:underline transition-all" href="#">Return Policy</a>
                            </div>
                            <div className="flex flex-col items-center mb-8">
                                <div className="flex items-center gap-2">
                                    <Store className="w-8 h-8" />
                                    <div className="flex flex-col leading-none">
                                        <span className="text-xl font-extrabold tracking-tight uppercase">Africa</span>
                                        <span className="text-xl font-light tracking-widest uppercase text-white/80">Mart</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[10px] font-bold tracking-wide uppercase opacity-70 text-center space-x-2">
                                <a className="hover:underline" href="#">Privacy</a>
                                <span>|</span>
                                <a className="hover:underline" href="#">Contact</a>
                                <span>|</span>
                                <a className="hover:underline" href="#">Unsubscribe</a>
                            </div>
                            <p className="mt-8 text-[9px] opacity-50 text-center uppercase tracking-widest">
                                © 2026 AfricaMart Inc. All rights reserved.
                            </p>
                        </div>
                    </footer>
                </main>
            </div>

            {/* Desktop Dashboard */}
            <div className="hidden lg:flex flex-col h-full">
                <main className="flex-1 overflow-y-auto no-scrollbar p-10">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <section>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <button onClick={() => onNavigate(View.ADD_PRODUCT)} className="action-card bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
                                        <PlusCircle size={24} />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Add Product</span>
                                    <span className="text-[11px] text-slate-400 mt-1">Update inventory</span>
                                </button>
                                <button onClick={() => onNavigate(View.INQUIRY_LIST)} className="action-card bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-5">
                                        <MousePointerClick size={24} />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Check Leads</span>
                                    <span className="text-[11px] text-slate-400 mt-1">12 new today</span>
                                </button>
                                <button onClick={() => setIsOverlayOpen(true)} className="action-card bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                                        <FilePlus size={24} />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Requirement</span>
                                    <span className="text-[11px] text-slate-400 mt-1">Post new request</span>
                                </button>
                                <button className="action-card bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all flex flex-col items-center text-center group">
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
                                        <div className="bg-white border border-slate-100 rounded-xl p-6 relative overflow-hidden flex flex-col h-[220px] shadow-sm">
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
                                        <div className="bg-white border border-slate-100 rounded-xl p-6 flex flex-col h-[220px] shadow-sm">
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
                                    <div className="mt-8 bg-white/50 border border-slate-100 rounded-xl p-4 grid grid-cols-3">
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
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-brand/20 transition-all cursor-pointer group" onClick={() => onNavigate(View.LEAD_DETAILS)}>
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
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-brand/20 transition-all cursor-pointer group" onClick={() => onNavigate(View.LEAD_DETAILS)}>
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
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-brand/20 transition-all cursor-pointer group" onClick={() => onNavigate(View.LEAD_DETAILS)}>
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
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-brand/20 transition-all cursor-pointer group" onClick={() => onNavigate(View.LEAD_DETAILS)}>
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
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-brand/20 transition-all cursor-pointer group fade-bottom" onClick={() => onNavigate(View.LEAD_DETAILS)}>
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