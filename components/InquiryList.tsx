
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

      <div className="hidden lg:flex flex-col h-full bg-[#F8FAFC]">
        <section className="p-10 flex-1 overflow-y-auto no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              {/* Table Controls */}
              <div className="p-4 flex items-center justify-between gap-4 border-b border-slate-100">
                <div className="flex items-center p-1 bg-slate-100 rounded-lg w-fit">
                  <button className="px-4 py-1.5 text-xs font-semibold rounded-md bg-white shadow-sm text-primary">All</button>
                  <button className="px-4 py-1.5 text-xs font-semibold rounded-md text-slate-500 hover:text-slate-700">New Leads</button>
                  <button className="px-4 py-1.5 text-xs font-semibold rounded-md text-slate-500 hover:text-slate-700">Viewed</button>
                  <button className="px-4 py-1.5 text-xs font-semibold rounded-md text-slate-500 hover:text-slate-700">Replied</button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-72">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                    <input
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 text-sm focus:outline-none transition-all"
                      placeholder="Search by company or keyword..."
                      type="text"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 text-sm transition-colors">
                    <span className="material-symbols-outlined text-lg">filter_list</span>
                    Filter
                  </button>
                </div>
              </div>

              {/* Selection Bar */}
              <div className="bg-slate-50 px-6 py-2 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">3 items selected</span>
                  <div className="h-4 w-[1px] bg-slate-200"></div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-white rounded-md transition-all">
                      <span className="material-symbols-outlined text-sm">mark_email_read</span> Mark Read
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-white rounded-md transition-all">
                      <span className="material-symbols-outlined text-sm">archive</span> Archive
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-md transition-all">
                      <span className="material-symbols-outlined text-sm">delete</span> Delete
                    </button>
                  </div>
                </div>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
                  <span className="material-symbols-outlined text-lg">more_horiz</span>
                </button>
              </div>

              {/* Table Body */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="py-3 px-6 w-10">
                        <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                      </th>
                      <th className="py-3 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Company</th>
                      <th className="py-3 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Message Snippet</th>
                      <th className="py-3 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="py-3 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Date/Time</th>
                      <th className="py-3 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</th>
                      <th className="py-3 px-6 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {MOCK_INQUIRIES.map((inq) => (
                      <tr
                        key={inq.id}
                        onClick={onSelectLead}
                        className="hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <td className="py-3 px-6">
                          <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" onClick={(e) => e.stopPropagation()} />
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${inq.status === 'New Lead' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'} flex items-center justify-center text-xs font-bold shrink-0`}>
                              {inq.initials}
                            </div>
                            <span className="text-sm font-semibold text-slate-900 truncate max-w-[150px]">{inq.companyName}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 max-w-xs">
                          <p className="text-xs text-slate-600 truncate">{inq.message}</p>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${inq.status === 'New Lead'
                            ? 'bg-green-100 text-green-700 border-green-200'
                            : 'bg-blue-100 text-blue-700 border-blue-200'
                            } border shadow-sm uppercase`}>
                            {inq.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="text-xs text-slate-500 font-medium">{inq.time}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            {inq.location.split(',')[0]}
                          </div>
                        </td>
                        <td className="py-3 px-6 text-right">
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white rounded-md shadow-sm border border-transparent hover:border-slate-200">
                            <span className="material-symbols-outlined text-xl text-slate-400">chevron_right</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs text-slate-500">Showing 1-{MOCK_INQUIRIES.length} of {MOCK_INQUIRIES.length} inquiries</p>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-30" disabled>
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InquiryList;
