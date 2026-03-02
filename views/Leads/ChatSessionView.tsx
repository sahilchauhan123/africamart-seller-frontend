
import React, { useEffect, useRef } from 'react';
import { useMessagingController } from '../../controllers/useMessagingController';
import {
  ArrowLeft,
  MapPin,
  ShieldCheck,
  Phone,
  MoreVertical,
  CheckCheck,
  Paperclip,
  Camera,
  Send,
  Star,
  Flag,
  Ban
} from 'lucide-react';

interface Props {
  onBack: () => void;
  chat?: {
    id: number;
    name: string;
    initials: string;
    message: string;
    time: string;
    online: boolean;
    color: string;
  } | null;
  isEmbedded?: boolean;
}

const ChatSessionView: React.FC<Props> = ({ onBack, chat, isEmbedded = false }) => {
  const { state, actions } = useMessagingController();
  const { showMenu } = state;
  const { setShowMenu } = actions;
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat]); // Scroll on chat change

  if (isEmbedded && !chat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-10 text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <Send size={32} className="opacity-20 translate-x-1 -translate-y-1" />
        </div>
        <h3 className="text-lg font-bold text-slate-600">Select a conversation</h3>
        <p className="text-sm max-w-xs mt-2">Pick a chat from the left to start messaging your potential buyers and partners.</p>
      </div>
    );
  }

  return (
    <div className={`bg-[#f3f4f6] font-display antialiased flex flex-col overflow-hidden text-gray-900 ${isEmbedded ? 'absolute inset-0' : 'fixed inset-0 z-50 h-full'}`}>
      {/* Immersive Header */}
      <header className={`bg-white shadow-sm z-30 flex-none ${isEmbedded ? '' : 'fixed top-0 left-0 lg:left-72 right-0'}`}>
        <div className={`flex items-center justify-between px-4 sm:px-6 ${isEmbedded ? 'lg:px-6' : 'lg:px-10'} py-3 border-b border-gray-200`}>
          <div className="flex items-center flex-1 min-w-0 mr-2">
            {!isEmbedded && (
              <button
                onClick={onBack}
                className="mr-2 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            {isEmbedded && (
              <button
                onClick={onBack}
                className="mr-2 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-600 lg:hidden"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            <div className="flex-1 min-w-0">
              <h1 className="text-base font-bold text-gray-900 truncate leading-tight">
                {chat?.name || 'Individual/Company Name'}
              </h1>
              <div className="flex items-center text-xs text-gray-500 mt-0.5 space-x-2">
                <span className="flex items-center">
                  <MapPin size={14} className="mr-0.5" />
                  Paynesville, Monrovia
                </span>
                <span className="flex items-center text-yellow-500 space-x-0.5">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" className="mr-1" />
                  <span className="font-medium text-gray-500">4.8</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button className="hidden sm:flex items-center gap-2 px-3 lg:px-4 py-2 bg-primary/10 text-primary rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors mr-2">
              <Phone size={18} className="lg:size-5" />
              <span className="hidden lg:inline">Call Buyer</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-primary sm:hidden">
              <Phone size={24} />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
              >
                <MoreVertical size={24} />
              </button>
              {showMenu && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowMenu(false)}
                  ></div>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors text-left">
                      <Flag size={16} className="text-orange-500" />
                      Report User
                    </button>
                    <button className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left">
                      <Ban size={16} />
                      Block User
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`bg-blue-50 px-4 sm:px-6 ${isEmbedded ? 'lg:px-6' : 'lg:px-10'} py-2 flex items-center justify-between text-[10px] lg:text-xs border-b border-blue-100`}>
          <span className="text-gray-600 truncate mr-2 font-medium">Regarding: <span className="font-bold text-slate-800">Industrial Red Bucket (50L)</span></span>
          <span className="text-primary font-bold cursor-pointer whitespace-nowrap uppercase tracking-wider">View Item</span>
        </div>
      </header>

      {/* Chat Messages */}
      <main
        ref={chatContainerRef}
        className={`flex-1 min-h-0 overflow-y-auto bg-[#f3f4f6] px-4 sm:px-6 ${isEmbedded ? 'lg:px-6 py-4' : 'lg:px-10 pt-32 pb-40'} space-y-4 no-scrollbar relative`}
      >
        <div className="flex justify-center my-4">
          <span className="bg-gray-200 text-gray-600 text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
            Yesterday
          </span>
        </div>

        <div className="flex flex-col space-y-1 items-start">
          <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] lg:max-w-[80%] border border-white">
            <p className="text-sm leading-relaxed font-medium">Hello, is this item still available?</p>
          </div>
          <span className="text-[10px] text-gray-400 pl-1 font-bold">10:30 AM</span>
        </div>

        <div className="flex flex-col space-y-1 items-end">
          <div className="bg-[#e0f2fe] text-gray-800 px-4 py-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] lg:max-w-[80%]">
            <p className="text-sm leading-relaxed font-medium">Yes sir, we have 5 units in stock ready for dispatch.</p>
          </div>
          <span className="text-[10px] text-gray-400 pr-1 font-bold">10:32 AM</span>
        </div>

        <div className="flex flex-col space-y-1 items-start">
          <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] lg:max-w-[80%] border border-white">
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
          <div className="bg-[#e0f2fe] text-gray-800 px-4 py-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] lg:max-w-[80%]">
            <p className="text-sm leading-relaxed font-medium">Please send your business details for the proforma invoice.</p>
          </div>
          <div className="flex items-center space-x-1 pr-1">
            <span className="text-[10px] text-gray-400 font-bold">09:15 AM</span>
            <CheckCheck size={14} className="text-primary" />
          </div>
        </div>
      </main>

      {/* Chat Input Footer */}
      <footer className={`bg-white border-t border-gray-200 flex-none z-30 ${isEmbedded ? '' : 'fixed bottom-0 left-0 lg:left-72 right-0 pb-2'}`}>
        <div className={`flex overflow-x-auto space-x-3 px-4 sm:px-6 ${isEmbedded ? 'lg:px-6 px-4' : 'lg:px-10'} py-2 border-b border-gray-100 no-scrollbar`}>
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
        <div className={`px-4 sm:px-6 ${isEmbedded ? 'lg:px-6 px-4' : 'lg:px-10'} py-3 flex items-end space-x-2`}>
          <button className="p-2 lg:p-2.5 text-slate-400 hover:text-primary transition-colors">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 bg-slate-100 rounded-[2rem] flex items-center border border-slate-200 focus-within:border-primary focus-within:bg-white transition-all shadow-inner">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-gray-900 pr-2 pl-4 py-3 text-sm max-h-32 resize-none rounded-3xl placeholder-gray-400"
              placeholder="Type a message..."
              rows={1}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            />
            <button className="p-2 mr-1 text-slate-400 hover:text-primary transition-colors">
              <Camera size={20} />
            </button>
          </div>
          <button className="w-10 h-10 lg:w-12 lg:h-12 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-all active:scale-90 flex items-center justify-center">
            <Send size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatSessionView;
