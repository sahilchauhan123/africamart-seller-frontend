
import React from 'react';

const TeamSection: React.FC = () => {
    return (
        <section className="pt-10 pb-24 lg:py-24 max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Our Team</h2>
                <p className="mt-4 text-gray-500">The visionary team behind the revolution.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Leader 1 */}
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 shadow-md">
                        <img alt="CEO" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcDJ-PduLoFavtLrZ69WYSAYws6XkiN49mXGaWcdicTVRNgSn3ygUmz4eNBF9C_TR-49s5KRkMurxmqbQZ0oLNfWTEaglhKyhcoGNvg0Tr8mfNE3Sv-scFvYGdfnWnRyUmKwu_wQ88H2nlJgbUeIKoGXcWRJtLxN37fYVLokgUZRiWkSuLWBSYl86OAUvimbamgUF206UyKDLEEEwkmm1aKbEZRuRFFdmJel-6sG2ZsTKk6zyOpBF_e-RKZuUQ0sWhHXEASaYERQg" />
                    </div>
                    <h5 className="text-lg font-bold">Kofi Mensah</h5>
                    <p className="text-primary text-sm font-medium mb-4">Founder & CEO</p>
                    <a className="inline-flex items-center text-primary hover:opacity-80" href="#">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                </div>
                {/* Leader 2 */}
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 shadow-md">
                        <img alt="COO" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWYGocYTtWxxM4_Nc-msCZlqVZD6D0Pcy9fQVSTJ9vHmzUDpNLU9OXc4Snhgj4haH0RkW7CQMMHffI986m7PI2HaEW9vg2hI-oXGM0oBhQavNo9EW7AdSHRkgJ-kRDyRYyjL4XEsvYoIcFsQbNnZU3EvEWeiZ6fBroLoLZgNcYfKM3AU5ULS5FoAeyj66CZj3QS0m-NUOMD0ftb6LXCH-6z6Ycj0pcshmKzVsufqBsc4ZMFXl1TWScDFKgffyqDL5J52dU_BwSf4Y" />
                    </div>
                    <h5 className="text-lg font-bold">Fatima Bello</h5>
                    <p className="text-primary text-sm font-medium mb-4">Chief Operating Officer</p>
                    <a className="inline-flex items-center text-primary hover:opacity-80" href="#">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                </div>
                {/* Leader 3 */}
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 shadow-md">
                        <img alt="CTO" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP4RjFJ1xypl1NhI38OB8RpvUnGFbz12xvpmVqhkn4GYg8v0OOslxuz85PxDAy2S8ANh3olOzWKXym9_6pGNv3P_NuBnc6J1M447BG7Z-r6n34pRjTulZNFmO6NWPEGqFxgYWcCpWP7ked0Ypz4rlZ-tVNyiZcpsaED8LDp3UTFbZQUqW7irKwsTXdgXGBV1VDJV1p56waMuMCh_Y-dlfo3goYRerXuxZe7knGGHyeSLkc381TBAsiPGY9KJ1Vz3PaToBz_c-NHAA" />
                    </div>
                    <h5 className="text-lg font-bold">David Okoro</h5>
                    <p className="text-primary text-sm font-medium mb-4">Chief Technology Officer</p>
                    <a className="inline-flex items-center text-primary hover:opacity-80" href="#">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                </div>
                {/* Leader 4 */}
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 shadow-md">
                        <img alt="Strategy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9VP3IHeVGhdgTEnQaEs63aC1KnQkyzkQb-iziYff4hfG7lDUYDZQVS7gfeXlNVpKKSH0vW6-yJ8-ljauhKS12FNiwXy_hGsJsNbbLf-Lz4e33Wac_b3Wi8PimDBwejDIkDtahHtBgglMgjAcrXOabEnrYP343rRi0Sc1Ih4aInJc6kKBJqoU8HjANTcbleAMxB4GUQzv9-fmg0hJ71NLRZiNKuu7M9LFHE_oq1sq_yrehf14ChHoibxoIgi6lgHKy7LkkQJtHrrM" />
                    </div>
                    <h5 className="text-lg font-bold">Zainab Hassan</h5>
                    <p className="text-primary text-sm font-medium mb-4">Head of Strategy</p>
                    <a className="inline-flex items-center text-primary hover:opacity-80" href="#">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
