
import React from 'react';
import { MOCK_INQUIRIES } from '../constants';

interface Props {
  onBack: () => void;
  onSelectLead: () => void;
}

const InquiryList: React.FC<Props> = ({ onBack, onSelectLead }) => {
  return (
    <div className="flex flex-col bg-[#F8FAFC] h-full overflow-hidden">
      {/* Mobile View - Existing Layout */}
      <div className="lg:hidden flex flex-col h-full bg-gray-100">
        <div className="bg-white shadow-sm border-b border-gray-100 shrink-0">
          <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar">
            <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium shadow-sm">All</button>
            <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">New Leads</button>
            <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">Viewed</button>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-4 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-3 pb-20">
            {MOCK_INQUIRIES.map(inq => (
              <div key={inq.id} onClick={onSelectLead} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition active:scale-[0.99] cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-orange-200 bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">{inq.initials}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm">{inq.companyName}</h3>
                      <span className="text-xs text-gray-500">{inq.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">{inq.message}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full border border-green-500/30 text-[10px] font-semibold text-green-700 bg-green-50">
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
        </main>
      </div>

      <div className="hidden lg:flex flex-col h-full bg-slate-50 dark:bg-slate-900">
        <section className="p-8 flex-1 overflow-y-auto no-scrollbar">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-900/50 rounded-lg w-fit">
                <button className="px-5 py-2 text-sm font-medium rounded-md bg-white dark:bg-slate-700 shadow-sm text-primary">All</button>
                <button className="px-5 py-2 text-sm font-medium rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">New Leads</button>
                <button className="px-5 py-2 text-sm font-medium rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">Viewed</button>
                <button className="px-5 py-2 text-sm font-medium rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">Replied</button>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 md:w-64">
                  <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                  <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm dark:text-white" placeholder="Search inquiries..." type="text" />
                </div>
                <button className="p-2 bg-slate-50 dark:bg-slate-900/50 text-slate-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                  <span className="material-icons-outlined">tune</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {MOCK_INQUIRIES.map((inq) => (
                <div
                  key={inq.id}
                  onClick={onSelectLead}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold flex-shrink-0">
                      {inq.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white truncate">{inq.companyName}</h3>
                        <span className="text-sm text-slate-400 whitespace-nowrap">{inq.time}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-1">{inq.message}</p>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${inq.status === 'New Lead'
                            ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-800/50'
                            : inq.status === 'Urgent'
                              ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-800/50'
                              : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800/50'
                          }`}>
                          {inq.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <span className="material-icons-outlined text-base">location_on</span>
                          {inq.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 py-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>
                <span className="material-icons-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">
                <span className="material-icons-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InquiryList;
