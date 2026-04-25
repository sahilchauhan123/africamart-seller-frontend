
import React from 'react';
import { View } from '../types';
import { Save, ShieldCheck, Monitor, Smartphone, ArrowRight, AlertTriangle, ChevronDown } from 'lucide-react';

interface Props {
    onNavigate: (view: View) => void;
}

const Settings: React.FC<Props> = ({ onNavigate }) => {
    return (
        <main className="flex-1 overflow-y-auto bg-[#fafafa] dark:bg-slate-900 no-scrollbar">
            <div className="min-h-full flex flex-col px-4 py-8 lg:px-10 lg:py-10">
                <div className="mx-auto max-w-7xl w-full space-y-12 flex-1">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-6 gap-4">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Seller's Settings</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base">Manage your professional seller profile, notifications and security settings.</p>
                        </div>
                        <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] active:scale-95 whitespace-nowrap">
                            <Save size={18} />
                            Save All Changes
                        </button>
                    </div>

                    {/* Notifications Matrix */}
                    <section className="space-y-6 text-slate-900 dark:text-white">
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">Notification Preferences</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Decide how you'd like to stay informed about your business activity.</p>
                        </div>
                        <div className="overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50/50 dark:bg-slate-900/50">
                                        <tr className="border-b border-slate-100 dark:border-slate-700">
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Category</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 text-center">Email</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 text-center">Push Mobile</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                                        {[
                                            { title: "New Leads", desc: "Alerts for buyer inquiries and RFQs", email: true, push: true },
                                            { title: "Order Updates", desc: "New orders, payments, and shipping updates", email: true, push: true },
                                            { title: "Messages", desc: "Direct messages from customers and partners", email: true, push: false },
                                            { title: "Platform News", desc: "Announcements, policy updates and tips", email: false, push: false },
                                        ].map((row, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50/30 dark:hover:bg-slate-700/30">
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold">{row.title}</span>
                                                        <span className="text-xs text-slate-500 dark:text-slate-400">{row.desc}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <label className="relative inline-flex cursor-pointer items-center">
                                                        <input defaultChecked={row.email} className="sr-only peer" type="checkbox" />
                                                        <div className="peer h-6 w-11 rounded-full bg-slate-200 dark:bg-slate-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full"></div>
                                                    </label>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <label className="relative inline-flex cursor-pointer items-center">
                                                        <input defaultChecked={row.push} className="sr-only peer" type="checkbox" />
                                                        <div className="peer h-6 w-11 rounded-full bg-slate-200 dark:bg-slate-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Account Security Section */}
                    <section className="space-y-6 text-slate-900 dark:text-white">
                        <h3 className="text-xl font-bold">Account Security</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm font-bold">Two-Factor Authentication</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Add an extra layer of security to your account.</p>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-700 px-2.5 py-1 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                                            DISABLED
                                        </div>
                                    </div>
                                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                                        <ShieldCheck size={18} />
                                        Enable 2FA
                                    </button>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-700">
                                    <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                                        Change Password
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                                <p className="text-sm font-bold mb-4">Active Sessions</p>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-400">
                                                <Monitor size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold">Windows Chrome</p>
                                                <p className="text-[10px] text-slate-400 font-medium">Lagos, Nigeria • Current</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold text-emerald-500 uppercase">This Device</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                                                <Smartphone size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold">iPhone 14 Pro</p>
                                                <p className="text-[10px] text-slate-400 font-medium">Lagos, Nigeria • 2h ago</p>
                                            </div>
                                        </div>
                                        <button className="text-[10px] font-bold text-red-500 hover:underline uppercase">Log out</button>
                                    </div>
                                    <button className="w-full text-center text-xs font-bold text-slate-400 mt-2 hover:text-slate-600 dark:hover:text-slate-300">Log out of all other sessions</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Localization Section */}
                    <section className="space-y-6 text-slate-900 dark:text-white">
                        <h3 className="text-xl font-bold">Localization</h3>
                        <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Preferred Language</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-2.5 text-sm font-medium focus:border-primary focus:ring-1 focus:ring-primary outline-none text-slate-700 dark:text-slate-200">
                                            <option value="en">English (US)</option>
                                            <option value="fr">French (Français)</option>
                                            <option value="pt">Portuguese (Português)</option>
                                            <option value="sw">Swahili (Kiswahili)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Default Currency</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-2.5 text-sm font-medium focus:border-primary focus:ring-1 focus:ring-primary outline-none text-slate-700 dark:text-slate-200">
                                            <option value="usd">USD - US Dollar</option>
                                            <option value="ngn">NGN - Nigerian Naira</option>
                                            <option value="lrd">LRD - Liberian Dollar</option>
                                            <option value="kes">KES - Kenyan Shilling</option>
                                            <option value="ghs">GHS - Ghanaian Cedi</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Danger Zone */}
                    <section className="rounded-xl border border-red-100 dark:border-red-900 bg-red-50/50 dark:bg-red-900/10 p-6 space-y-4">
                        <div className="flex items-center gap-3 text-red-700 dark:text-red-400">
                            <AlertTriangle size={20} />
                            <h3 className="font-bold">Danger Zone</h3>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-bold text-red-900 dark:text-red-200">Deactivate Seller Account</p>
                                <p className="text-xs text-red-600/80 dark:text-red-400/80">Temporarily hide your products and pause all current trade activities.</p>
                            </div>
                            <button className="shrink-0 rounded-lg border border-red-200 dark:border-red-800 bg-white dark:bg-slate-800 px-4 py-2 text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-slate-700 transition">
                                Deactivate Account
                            </button>
                        </div>
                    </section>

                </div>

                <footer className="mt-12 pt-8 pb-4 text-center text-slate-400 border-t border-slate-100 dark:border-slate-800 max-w-7xl mx-auto w-full">
                    <p className="text-xs font-medium">© 2026 Lasomaa Marketplace. All rights reserved. <a className="underline cursor-pointer">Terms of Service</a> • <a className="underline cursor-pointer">Privacy Policy</a></p>
                </footer>
            </div>
        </main>
    );
};

export default Settings;
