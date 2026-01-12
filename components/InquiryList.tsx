
import React from 'react';
import { MOCK_INQUIRIES } from '../constants';

interface Props {
  onBack: () => void;
  onSelectLead: () => void;
}

const InquiryList: React.FC<Props> = ({ onBack, onSelectLead }) => {
  return (
    <div className="flex flex-col bg-gray-100 h-full overflow-hidden">
      <div className="bg-white shadow-sm border-b border-gray-100 shrink-0">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium shadow-sm">All</button>
          <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">New Leads</button>
          <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">Viewed</button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto p-4 lg:p-10 no-scrollbar">
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
  );
};

export default InquiryList;
