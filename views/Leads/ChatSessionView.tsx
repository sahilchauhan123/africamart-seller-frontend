
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

import { Conversation } from '../../types';

interface Props {
  onBack: () => void;
  chat?: Conversation | null;
  chatId?: string; // Add support for direct ID passing
  isEmbedded?: boolean;
}

const ChatSessionView: React.FC<Props> = ({ onBack, chat, chatId, isEmbedded = false }) => {
  const { state, actions } = useMessagingController();
  const { messages, loading, selectedChatId, selectedChat } = state;
  const { handleSendMessage, setSelectedChatId } = actions;
  const [inputText, setInputText] = React.useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Synchronize internal hook state with passed chat prop or chatId from parent
  useEffect(() => {
    const targetId = chat?.id || chatId;
    if (targetId && selectedChatId !== targetId) {
      setSelectedChatId(targetId);
    }
  }, [chat?.id, chatId, selectedChatId, setSelectedChatId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // Scroll on new messages

  const onSend = async () => {
    if (!inputText.trim()) return;
    await handleSendMessage(inputText);
    setInputText('');
  };

  const activeChat = chat || selectedChat;

  if (isEmbedded && !activeChat) {
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
      <header className={`bg-white shadow-sm z-30 flex-none ${isEmbedded ? '' : 'pt-2'}`}>
        <div className={`flex items-center justify-between px-4 sm:px-6 ${isEmbedded ? 'lg:px-6' : 'lg:px-10'} py-3 border-b border-gray-200`}>
          <div className="flex items-center flex-1 min-w-0 mr-2">
            <button
              onClick={onBack}
              className="mr-2 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-base font-bold text-gray-900 truncate leading-tight">
                {activeChat?.buyer_name || activeChat?.buyer_phone || (activeChat?.buyer_id ? `Buyer #${activeChat.buyer_id}` : 'Loading Buyer...')}
              </h1>
              <div className="flex items-center text-xs text-gray-500 mt-0.5 space-x-2">
                <span className="flex items-center">
                  <MapPin size={14} className="mr-0.5" />
                  Verified Buyer
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <main
        ref={chatContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-[#f3f4f6] px-4 sm:px-6 lg:px-6 py-4 space-y-4 no-scrollbar relative"
      >
        {loading && <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest my-4">Loading messages...</div>}

        {messages.map((msg, idx) => {
          const isOwn = msg.sender_type === 'seller';
          return (
            <div key={msg.id} className={`flex flex-col space-y-1 ${isOwn ? 'items-end' : 'items-start'}`}>
              <div className={`${isOwn ? 'bg-[#e0f2fe] text-gray-800' : 'bg-white text-gray-800'} px-4 py-3 rounded-2xl ${isOwn ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm max-w-[85%] lg:max-w-[80%] border ${isOwn ? 'border-blue-100' : 'border-white'}`}>
                <p className="text-sm leading-relaxed font-medium">{msg.content}</p>
              </div>
              <span className={`text-[10px] text-gray-400 ${isOwn ? 'pr-1' : 'pl-1'} font-bold`}>
                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          );
        })}
      </main>

      {/* Chat Input Footer */}
      <footer className="bg-white border-t border-gray-200 flex-none z-30">
        <div className={`px-4 sm:px-6 ${isEmbedded ? 'lg:px-6 px-4' : 'lg:px-10'} py-3 flex items-end space-x-2`}>
          <div className="flex-1 bg-slate-100 rounded-[2rem] flex items-center border border-slate-200 focus-within:border-primary focus-within:bg-white transition-all shadow-inner">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-gray-900 pr-2 pl-4 py-3 text-sm max-h-32 resize-none rounded-3xl placeholder-gray-400"
              placeholder="Type a message..."
              rows={1}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  onSend();
                }
              }}
            />
          </div>
          <button
            onClick={onSend}
            disabled={!inputText.trim()}
            className="w-10 h-10 lg:w-12 lg:h-12 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-all active:scale-90 flex items-center justify-center disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatSessionView;
