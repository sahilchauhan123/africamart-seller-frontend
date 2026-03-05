import React from 'react';
import { MapPin, Search, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLeadsController } from '../../controllers/useLeadsController';

interface Props {
  onBack: () => void;
  onSelectLead: () => void;
}

const InquiryListView: React.FC<Props> = ({ onBack, onSelectLead }) => {
  const { state, actions } = useLeadsController();
  const { activeFilter, searchQuery, sortOrder, filteredInquiries } = state;
  const { setActiveFilter, setSearchQuery, setSortOrder } = actions;

  return (
    <div className="flex flex-col bg-[#F8FAFC] h-full overflow-hidden">
      {/* Mobile View - Existing Layout */}
      <div className="lg:hidden flex flex-col h-full bg-gray-100">
        <div className="bg-white shadow-sm border-b border-slate-200 shrink-0">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 overflow-hidden">
            <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1">
              {['All', 'New Leads', 'Viewed', 'Replied'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[10px] font-bold shadow-sm transition-colors uppercase tracking-tight ${activeFilter === filter ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-4 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-3 pb-20">
            {filteredInquiries.length > 0 ? filteredInquiries.map(inq => (
              <div key={inq.id} onClick={onSelectLead} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 transition active:scale-[0.99] cursor-pointer">
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
                        <MapPin size={14} className="mr-1" />
                        <span className="text-[10px]">{inq.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <Search size={48} className="mb-4 opacity-20" />
                <p className="text-sm font-medium">No inquiries found matching your criteria</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <div className="hidden lg:flex flex-col h-full bg-slate-50">
        <section className="p-8 flex-1 overflow-y-auto no-scrollbar">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-200">
              <div className="flex items-center p-1 bg-slate-100 rounded-lg w-fit">
                {['All', 'New Leads', 'Viewed', 'Replied'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${activeFilter === filter ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm"
                    placeholder="Search inquiries..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-lg border border-slate-200">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="bg-transparent text-sm font-medium text-slate-600 outline-none px-2 cursor-pointer"
                  >
                    <option value="Newest">Newest First</option>
                    <option value="Oldest">Oldest First</option>
                  </select>
                  <div className="w-px h-6 bg-slate-200"></div>
                  <div className="relative group">
                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                      <SlidersHorizontal size={18} />
                    </button>
                    <span className="tooltip">Sort & Filter</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {filteredInquiries.length > 0 ? filteredInquiries.map((inq) => (
                <div
                  key={inq.id}
                  onClick={onSelectLead}
                  className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold flex-shrink-0 text-xs">
                      {inq.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h3 className="font-bold text-base text-slate-900 truncate">{inq.companyName}</h3>
                        <span className="text-sm text-slate-400 whitespace-nowrap">{inq.time}</span>
                      </div>
                      <p className="text-slate-600 mb-2 line-clamp-1 text-sm">{inq.message}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${inq.status === 'New Lead'
                          ? 'bg-green-50 text-green-600 border-green-100'
                          : inq.status === 'Urgent'
                            ? 'bg-red-50 text-red-600 border-red-100'
                            : 'bg-blue-50 text-blue-600 border-blue-100'
                          }`}>
                          {inq.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <MapPin size={16} />
                          {inq.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between h-full pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectLead();
                        }}
                        className="px-4 py-2 bg-primary/5 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all border border-primary/20"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="flex flex-col items-center justify-center py-32 bg-white rounded-xl border border-dashed border-slate-300 text-slate-400">
                  <Search size={64} className="mb-4 opacity-10" />
                  <p className="text-lg font-medium">No results found for "{searchQuery}"</p>
                  <button onClick={() => { setSearchQuery(''); setActiveFilter('All'); }} className="mt-4 text-primary font-bold hover:underline">Clear all filters</button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 py-4">
              <div className="relative group">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
                  <ChevronLeft size={20} />
                </button>
                <span className="tooltip">Previous Page</span>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50">3</button>
              <div className="relative group">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-300 text-slate-400 hover:bg-slate-50">
                  <ChevronRight size={20} />
                </button>
                <span className="tooltip">Next Page</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InquiryListView;
