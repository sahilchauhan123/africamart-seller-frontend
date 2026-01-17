
import React, { useState } from 'react';
import { View } from '../types';
import { Search, Menu, MoreVertical, User } from 'lucide-react';

interface Props {
    onNavigate: (view: View) => void;
    onOpenDrawer: () => void;
}

const BusinessMessages: React.FC<Props> = ({ onNavigate, onOpenDrawer }) => {
    const [activeTab, setActiveTab] = useState('all');

    const chats = [
        {
            id: 1,
            name: 'Individual Name',
            initials: 'IN',
            message: 'Can we reschedule our meeting for tomorrow?',
            time: '22:30 AM',
            unread: 3,
            online: true,
            color: 'bg-blue-100 text-primary border-blue-200'
        },
        {
            id: 2,
            name: 'Michael Johnson',
            initials: 'MJ',
            message: 'The project files have been updated. Please check.',
            time: '21:15 PM',
            unread: 1,
            online: false,
            color: 'bg-purple-100 text-purple-700 border-purple-200'
        },
        {
            id: 3,
            name: 'Sarah Williams',
            initials: 'SW',
            message: 'Thanks for the update!',
            time: 'Yesterday',
            unread: 0,
            online: false,
            color: 'bg-emerald-100 text-emerald-700 border-emerald-200'
        },
        {
            id: 4,
            name: 'Robert Brown',
            initials: 'RB',
            message: 'See you at the conference next week.',
            time: 'Yesterday',
            unread: 0,
            online: false,
            color: 'bg-orange-100 text-orange-700 border-orange-200'
        },
        {
            id: 5,
            name: 'Lisa King',
            initials: 'LK',
            message: 'Invoice #4022 has been paid.',
            time: 'Mon',
            unread: 0,
            online: false,
            color: 'bg-pink-100 text-pink-700 border-pink-200'
        },
        {
            id: 6,
            name: 'David Miller',
            initials: 'DM',
            message: 'Can you send me the contract details?',
            time: 'Mon',
            unread: 0,
            online: false,
            color: 'bg-teal-100 text-teal-700 border-teal-200'
        },
        {
            id: 7,
            name: 'Alex Jones',
            initials: 'AJ',
            message: 'Looking forward to the demo.',
            time: 'Sun',
            unread: 2,
            online: false,
            color: 'bg-indigo-100 text-indigo-700 border-indigo-200'
        },
    ];

    const filteredChats = activeTab === 'all' ? chats : chats.filter(c => c.unread > 0);

    return (
        <div className="flex flex-col h-full bg-[#F8FAFC] font-display antialiased overflow-hidden transition-colors duration-300">
            {/* Desktop Header */}
            <header className="hidden lg:flex flex-col bg-white border-b border-slate-200 flex-none px-10">
                <div className="flex items-center justify-start h-[72px]">
                    <div className="flex items-center gap-4 w-full max-w-xl">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                onClick={() => onNavigate(View.MESSAGE_SEARCH)}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-8 text-sm font-bold pb-0">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`py-4 border-b-2 transition-all ${activeTab === 'all' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        All Messages
                    </button>
                    <button
                        onClick={() => setActiveTab('unread')}
                        className={`py-4 border-b-2 transition-all ${activeTab === 'unread' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        Unread
                        {chats.filter(c => c.unread > 0).length > 0 && (
                            <span className="ml-2 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">
                                {chats.filter(c => c.unread > 0).length}
                            </span>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Header (Original) */}
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
                <div className="flex px-4 sm:px-6 pb-0 space-x-6 text-sm font-medium text-blue-100 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`pb-3 border-b-2 transition-all ${activeTab === 'all' ? 'border-white text-white' : 'border-transparent text-blue-100/70 hover:text-white'}`}
                    >
                        All Chats
                    </button>
                    <button
                        onClick={() => setActiveTab('unread')}
                        className={`pb-3 border-b-2 transition-all ${activeTab === 'unread' ? 'border-white text-white' : 'border-transparent text-blue-100/70 hover:text-white'}`}
                    >
                        Unread
                    </button>
                </div>
            </header>

            {/* Main Chat List */}
            <main className="flex-1 overflow-y-auto no-scrollbar relative bg-[#F8FAFC] pb-20">
                <div className="divide-y divide-slate-200">
                    {filteredChats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => onNavigate(View.CHAT)}
                            className="group bg-white hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100"
                        >
                            <div className="flex items-center px-4 py-4 sm:px-6 lg:px-10">
                                <div className="relative flex-shrink-0">
                                    <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 ${chat.color} font-bold text-lg`}>
                                        {chat.initials}
                                    </div>
                                    {chat.online && (
                                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
                                    )}
                                </div>
                                <div className="ml-4 flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h2 className="text-sm font-semibold text-[#1E293B] truncate pr-2">
                                            {chat.name}
                                        </h2>
                                        <span className={`text-xs whitespace-nowrap ${chat.unread > 0 ? 'text-primary font-medium' : 'text-[#64748B]'}`}>
                                            {chat.time}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'text-[#1E293B] font-medium' : 'text-[#64748B]'}`}>
                                            {chat.message}
                                        </p>
                                        {chat.unread > 0 && (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {chat.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Unknown User Placeholder */}
                    <div className="group bg-white hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100">
                        <div className="flex items-center px-4 py-4 sm:px-6 lg:px-10">
                            <div className="relative flex-shrink-0">
                                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200 text-gray-600 font-bold text-lg">
                                    <User size={20} />
                                </div>
                            </div>
                            <div className="ml-4 flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h2 className="text-sm font-semibold text-[#1E293B] truncate pr-2">
                                        Unknown User
                                    </h2>
                                    <span className="text-xs text-[#64748B] whitespace-nowrap">
                                        Sun
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-[#64748B] truncate pr-4">
                                        New inquiry from website form.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default BusinessMessages;
