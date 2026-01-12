
import React from 'react';
import { View } from '../types';

interface Props {
    onNavigate: (view: View) => void;
    onOpenDrawer: () => void;
}

const BusinessMessages: React.FC<Props> = ({ onNavigate, onOpenDrawer }) => {
    const chats = [
        { id: 1, name: 'Individual Name', initials: 'IN', message: 'Can we reschedule our meeting for tomorrow?', time: '22:30 AM', unread: 3, online: true, color: 'bg-blue-100 text-primary border-blue-200' },
        { id: 2, name: 'Michael Johnson', initials: 'MJ', message: 'The project files have been updated. Please check.', time: '21:15 PM', unread: 1, online: false, color: 'bg-purple-100 text-purple-700 border-purple-200' },
        { id: 3, name: 'Sarah Williams', initials: 'SW', message: 'Thanks for the update!', time: 'Yesterday', unread: 0, online: false, color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
        { id: 4, name: 'Robert Brown', initials: 'RB', message: 'See you at the conference next week.', time: 'Yesterday', unread: 0, online: false, color: 'bg-orange-100 text-orange-700 border-orange-200' },
        { id: 5, name: 'Lisa King', initials: 'LK', message: 'Invoice #4022 has been paid.', time: 'Mon', unread: 0, online: false, color: 'bg-pink-100 text-pink-700 border-pink-200' },
        { id: 6, name: 'David Miller', initials: 'DM', message: 'Can you send me the contract details?', time: 'Mon', unread: 0, online: false, color: 'bg-teal-100 text-teal-700 border-teal-200' },
        { id: 7, name: 'Alex Jones', initials: 'AJ', message: 'Looking forward to the demo.', time: 'Sun', unread: 2, online: false, color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    ];

    return (
        <div className="flex flex-col h-full bg-white overflow-hidden">
            <main className="flex-1 overflow-y-auto no-scrollbar">
                <div className="divide-y divide-slate-100">
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => onNavigate(View.CHAT)}
                            className="group bg-white hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100 border-l-4 border-transparent hover:border-primary"
                        >
                            <div className="flex items-center px-4 py-5 lg:px-10">
                                <div className="relative flex-shrink-0">
                                    <div className={`h-14 w-14 rounded-full flex items-center justify-center border-2 ${chat.color} font-bold text-lg shadow-sm`}>
                                        {chat.initials}
                                    </div>
                                    {chat.online && (
                                        <span className="absolute bottom-0.5 right-0.5 block h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-white"></span>
                                    )}
                                </div>
                                <div className="ml-5 flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h2 className="text-base font-bold text-slate-900 truncate pr-2">
                                            {chat.name}
                                        </h2>
                                        <span className={`text-xs whitespace-nowrap ${chat.unread > 0 ? 'text-primary font-bold' : 'text-slate-400 font-medium'}`}>
                                            {chat.time}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'text-slate-900 font-semibold' : 'text-slate-500 font-normal'}`}>
                                            {chat.message}
                                        </p>
                                        {chat.unread > 0 && (
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary text-white shadow-sm shadow-primary/20">
                                                {chat.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="group bg-white hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100 pb-32">
                        <div className="flex items-center px-4 py-5 lg:px-10">
                            <div className="relative flex-shrink-0">
                                <div className="h-14 w-14 rounded-full bg-slate-50 flex items-center justify-center border-2 border-slate-100 text-slate-300 font-bold text-lg">
                                    <span className="material-icons text-2xl">person</span>
                                </div>
                            </div>
                            <div className="ml-5 flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h2 className="text-base font-bold text-slate-900 truncate pr-2">
                                        Unknown User
                                    </h2>
                                    <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                                        Sun
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-slate-500 truncate pr-4">
                                        New inquiry from website form.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-8 right-8 z-50">
                <button className="bg-primary hover:bg-blue-700 text-white rounded-full px-6 py-4 shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-primary/30">
                    <span className="material-icons text-2xl leading-none">post_add</span>
                    <span className="font-bold text-sm tracking-wide uppercase">New Message</span>
                </button>
            </div>
        </div>
    );
};

export default BusinessMessages;
