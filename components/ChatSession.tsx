
import React from 'react';

interface Props {
  onBack: () => void;
}

const ChatSession: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex flex-col bg-slate-50 h-full overflow-hidden">
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 no-scrollbar">
        <div className="w-full space-y-4 pb-20">
          <div className="flex justify-center mb-6">
            <span className="bg-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Yesterday</span>
          </div>

          <div className="flex flex-col items-start px-2 lg:px-6">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] lg:max-w-[70%] border border-slate-100">
              <p className="text-sm text-slate-800 leading-relaxed">Hello, is this item still available?</p>
            </div>
            <span className="text-[10px] text-slate-400 mt-1.5 pl-1 font-medium">10:30 AM</span>
          </div>

          <div className="flex flex-col items-end px-2 lg:px-6">
            <div className="bg-primary p-4 rounded-2xl rounded-tr-none shadow-md max-w-[85%] lg:max-w-[70%] text-white">
              <p className="text-sm leading-relaxed">Yes sir, we have 5 units in stock ready for dispatch.</p>
            </div>
            <span className="text-[10px] text-slate-400 mt-1.5 pr-1 font-medium">10:32 AM</span>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t p-4 lg:p-6 shrink-0">
        <div className="w-full">
          <div className="flex items-center space-x-3">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons transform rotate-45">attach_file</span>
            </button>
            <div className="flex-1 bg-slate-100 rounded-2xl flex items-center px-4 py-2.5 border border-slate-200">
              <input type="text" placeholder="Type a message..." className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400" />
              <button className="p-1 text-slate-400">
                <span className="material-icons-outlined text-xl">camera_alt</span>
              </button>
            </div>
            <button className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 transition-all active:scale-95">
              <span className="material-icons text-[20px]">send</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatSession;
