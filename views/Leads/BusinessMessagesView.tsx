import React from 'react';
import { Search, Menu, MoreVertical, User } from 'lucide-react';
import { useMessagingController } from '../../controllers/useMessagingController';
import ChatSessionView from './ChatSessionView';
import { View } from '../../types';

interface Props {
    onNavigate: (view: View) => void;
    onOpenDrawer: () => void;
    selectedChatId: string | null;
    setSelectedChatId: (id: string | null) => void;
}

const BusinessMessagesView: React.FC<Props> = ({ onNavigate, onOpenDrawer, selectedChatId, setSelectedChatId }) => {
    const { state, actions } = useMessagingController();
    const { activeTab, conversations, selectedChat } = state;
    const { setActiveTab, setSelectedChatId: setLocalSelectedId } = actions;

    const handleChatClick = (chatId: string) => {
        setSelectedChatId(chatId);
        setLocalSelectedId(chatId);
        // On mobile, still navigate to the full screen chat
        if (window.innerWidth < 1024) {
            onNavigate(View.CHAT);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-full bg-[#F8FAFC] font-display antialiased overflow-hidden">
            {/* Sidebar / Left Column (Chat List) */}
            <div className="flex flex-col w-full lg:w-[400px] xl:w-[450px] border-r border-slate-200 bg-white h-full relative z-10 shadow-sm lg:shadow-none">

                {/* Desktop Sidebar Header */}
                <header className="hidden lg:flex flex-col bg-white border-b border-slate-100 flex-none px-6 py-4">
                    <h1 className="text-xl font-black text-slate-800 tracking-tight mb-4">Messages</h1>
                    <div className="relative w-full mb-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                            onClick={() => onNavigate(View.MESSAGE_SEARCH)}
                            readOnly
                        />
                    </div>
                </header>

                {/* Mobile Header */}
                <header className="bg-primary shadow-md z-40 flex-none lg:hidden shrink-0">
                    <div className="flex items-center justify-between px-4 sm:px-6 h-16">
                        <button
                            onClick={onOpenDrawer}
                            className="text-white p-1 rounded-md hover:bg-white/10 transition flex items-center justify-center"
                        >
                            <Menu size={28} />
                        </button>
                        <h1 className="text-white text-lg font-semibold tracking-wide">Business Messages</h1>
                        <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white/20">
                            <MoreVertical size={24} />
                        </button>
                    </div>
                    <div className="px-4 sm:px-6 pb-3">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="text-gray-400" size={20} />
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 sm:text-sm shadow-sm cursor-pointer"
                                placeholder="Search chats..."
                                type="text"
                                readOnly
                                onClick={() => onNavigate(View.MESSAGE_SEARCH)}
                            />
                        </div>
                    </div>
                </header>

                {/* Tabs (Unified) */}
                <div className="flex px-4 sm:px-6 lg:px-6 border-b border-slate-100 bg-white lg:bg-transparent overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`py-3 lg:py-4 border-b-2 text-xs lg:text-sm font-bold transition-all whitespace-nowrap mr-6 ${activeTab === 'all' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        All Chats
                    </button>
                    <button
                        onClick={() => setActiveTab('unread')}
                        className={`py-3 lg:py-4 border-b-2 text-xs lg:text-sm font-bold transition-all whitespace-nowrap relative ${activeTab === 'unread' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        Unread
                    </button>
                </div>

                {/* Chat List */}
                <main className="flex-1 overflow-y-auto no-scrollbar relative bg-[#F8FAFC] pb-20 lg:pb-0">
                    <div className="divide-y divide-slate-100">
                        {conversations.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => handleChatClick(chat.id)}
                                className={`group transition-colors cursor-pointer active:bg-slate-100 ${selectedChatId === chat.id ? 'bg-blue-50/70 border-l-4 border-primary' : 'bg-white hover:bg-slate-50'}`}
                            >
                                <div className="flex items-center px-4 py-4 sm:px-6 lg:px-6">
                                    <div className="relative flex-shrink-0">
                                        <div className={`h-11 w-11 lg:h-12 lg:w-12 rounded-full flex items-center justify-center border-2 border-slate-200 bg-slate-50 font-bold text-base lg:text-lg text-primary`}>
                                            {(chat.buyer_name || 'B')[0].toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="ml-3 lg:ml-4 flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-0.5">
                                            <h2 className={`text-sm tracking-tight truncate pr-2 font-bold text-slate-900`}>
                                                {chat.buyer_name || chat.buyer_phone || `Buyer #${chat.buyer_id}`}
                                            </h2>
                                            <span className={`text-[10px] whitespace-nowrap uppercase tracking-tighter text-slate-400 font-medium`}>
                                                {new Date(chat.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className={`text-[12px] lg:text-sm truncate pr-4 text-slate-500 font-medium`}>
                                                Open conversation
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Unknown User Placeholder */}
                        {!conversations.length && (
                            <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-200">
                                    <User size={32} />
                                </div>
                                <h3 className="text-slate-800 font-bold">No messages yet</h3>
                                <p className="text-xs text-slate-500 mt-2">When buyers contact you about your products, their messages will appear here.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {/* Chat Content / Right Column (Desktop Only) */}
            <div className="hidden lg:flex flex-1 h-full bg-white relative">
                <ChatSessionView
                    onBack={() => setSelectedChatId(null)}
                    chat={selectedChat}
                    isEmbedded={true}
                />

                {/* Decorative shadow between columns */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-slate-200/20 to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
};

export default BusinessMessagesView;
