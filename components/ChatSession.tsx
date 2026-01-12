
import React, { useEffect, useRef } from 'react';

interface Props {
  onBack: () => void;
}

const ChatSession: React.FC<Props> = ({ onBack }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="bg-[#f3f4f6] font-display antialiased h-full flex flex-col overflow-hidden text-gray-900 relative">
      {/* Immersive Header - Fixed at Top */}
      <header className="bg-white shadow-sm z-30 flex-none fixed top-0 left-0 right-0">
        <div className="flex items-center justify-between px-3 py-3 border-b border-gray-200">
          <div className="flex items-center flex-1 min-w-0 mr-2">
            <button
              onClick={onBack}
              className="mr-2 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
            >
              <span className="material-icons text-2xl leading-none">arrow_back</span>
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-base font-bold text-gray-900 truncate leading-tight">
                Individual/Company Name
              </h1>
              <div className="flex items-center text-xs text-gray-500 mt-0.5 space-x-2">
                <span className="flex items-center">
                  <span className="material-icons text-[14px] mr-0.5">location_on</span>
                  Paynesville, Monrovia
                </span>
                <span className="flex items-center">
                  <span className="text-yellow-500 text-[14px]">★</span>
                  <span className="text-yellow-500 text-[14px]">★</span>
                  <span className="text-yellow-500 text-[14px]">★</span>
                  <span className="text-yellow-500 text-[14px]">★</span>
                  <span className="text-yellow-500 text-[14px] mr-1">★</span>
                  <span className="font-medium">4.8</span>
                </span>
              </div>
              <div className="flex items-center text-xs mt-0.5">
                <span className="material-icons text-primary text-[14px] mr-1">verified</span>
                <span className="text-gray-600 font-medium font-bold uppercase tracking-tighter">Business Verified</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-primary">
              <span className="material-icons text-2xl leading-none">call</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
              <span className="material-icons text-2xl leading-none">more_vert</span>
            </button>
          </div>
        </div>
        <div className="bg-blue-50 px-4 py-2 flex items-center justify-between text-xs border-b border-blue-100">
          <span className="text-gray-600 truncate mr-2 font-medium">Regarding: <span className="font-bold text-slate-800">Industrial Red Bucket (50L)</span></span>
          <span className="text-primary font-bold cursor-pointer whitespace-nowrap uppercase tracking-wider">View Item</span>
        </div>
      </header>

      {/* Chat Messages - Scrollable Area with P-Top to account for fixed header */}
      <main
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto bg-[#f3f4f6] p-4 pt-32 pb-40 space-y-4 no-scrollbar relative"
      >
        <div className="flex justify-center my-4">
          <span className="bg-gray-200 text-gray-600 text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
            Yesterday
          </span>
        </div>

        <div className="flex flex-col space-y-1 items-start">
          <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] border border-white">
            <p className="text-sm leading-relaxed font-medium">Hello, is this item still available?</p>
          </div>
          <span className="text-[10px] text-gray-400 pl-1 font-bold">10:30 AM</span>
        </div>

        <div className="flex flex-col space-y-1 items-end">
          <div className="bg-[#e0f2fe] text-gray-800 px-4 py-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
            <p className="text-sm leading-relaxed font-medium">Yes sir, we have 5 units in stock ready for dispatch.</p>
          </div>
          <span className="text-[10px] text-gray-400 pr-1 font-bold">10:32 AM</span>
        </div>

        <div className="flex flex-col space-y-1 items-start">
          <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] border border-white">
            <p className="text-sm leading-relaxed font-medium">What is the best price for bulk order?</p>
          </div>
          <span className="text-[10px] text-gray-400 pl-1 font-bold">10:33 AM</span>
        </div>

        <div className="flex flex-col space-y-1 items-end">
          <div className="bg-[#e0f2fe] text-gray-800 p-1 rounded-2xl rounded-tr-none shadow-sm max-w-[70%]">
            <div className="rounded-xl overflow-hidden mb-1 relative border border-blue-100">
              <img
                alt="Product Catalog"
                className="w-full h-auto object-cover"
                src="https://media.gettyimages.com/id/1477545090/photo/rice-in-a-sack-at-mani-sithu-market-nyaung-u-myanmar.jpg?s=612x612&w=gi&k=20&c=MUI5GhAkr9BpXReHcGl-GcOdbjnnMWFwTzudHfXSUuc="
              />
            </div>
            <p className="text-sm px-3 pb-2 pt-1 font-medium">Here is the catalogue image.</p>
          </div>
          <span className="text-[10px] text-gray-400 pr-1 font-bold">10:35 AM</span>
        </div>

        <div className="flex justify-center my-4">
          <span className="bg-gray-200 text-gray-600 text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
            Today
          </span>
        </div>

        <div className="flex flex-col space-y-1 items-end">
          <div className="bg-[#e0f2fe] text-gray-800 px-4 py-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
            <p className="text-sm leading-relaxed font-medium">Please send your business details for the proforma invoice.</p>
          </div>
          <div className="flex items-center space-x-1 pr-1">
            <span className="text-[10px] text-gray-400 font-bold">09:15 AM</span>
            <span className="material-icons text-[14px] text-primary">done_all</span>
          </div>
        </div>
      </main>

      {/* Chat Input Footer - Fixed at Bottom */}
      <footer className="bg-white border-t border-gray-200 flex-none fixed bottom-0 left-0 right-0 z-30 pb-2">
        <div className="flex overflow-x-auto space-x-3 px-4 py-2 border-b border-gray-100 no-scrollbar">
          <button className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition shadow-sm">
            Send Catalog
          </button>
          <button className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition shadow-sm">
            Request Quote
          </button>
          <button className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition shadow-sm">
            Attach Link
          </button>
        </div>
        <div className="p-3 flex items-end space-x-2">
          <button className="p-2.5 text-slate-400 hover:text-primary transition-colors">
            <span className="material-icons-round transform rotate-45 text-2xl">attach_file</span>
          </button>
          <div className="flex-1 bg-slate-100 rounded-[2rem] flex items-center border border-slate-200 focus-within:border-primary focus-within:bg-white transition-all shadow-inner">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-gray-900 px-4 py-3 text-sm max-h-32 resize-none rounded-3xl placeholder-gray-400"
              placeholder="Type a message..."
              rows={1}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            />
            <button className="p-2 mr-1 text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons-outlined text-2xl leading-none">camera_alt</span>
            </button>
          </div>
          <button className="w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-all active:scale-90 flex items-center justify-center">
            <span className="material-icons text-[24px] ml-0.5 leading-none">send</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatSession;
