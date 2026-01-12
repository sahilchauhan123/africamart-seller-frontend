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
        <div className="flex flex-col h-full bg-background-light">

            <main className="flex-1 overflow-y-auto no-scrollbar bg-background-light">
                <div className="divide-y divide-slate-200">
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => onNavigate(View.CHAT)}
                            className="group bg-white hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100"
                        >
                            <div className="flex items-center px-4 py-4 sm:px-6">
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
                                        <h2 className="text-sm font-semibold text-slate-900 truncate pr-2">
                                            {chat.name}
                                        </h2>
                                        <span className={`text-xs whitespace-nowrap ${chat.unread > 0 ? 'text-primary font-medium' : 'text-slate-500'}`}>
                                            {chat.time}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
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

                    <div className="group bg-white hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100 pb-24">
                        <div className="flex items-center px-4 py-4 sm:px-6">
                            <div className="relative flex-shrink-0">
                                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200 text-gray-600 font-bold text-lg">
                                    <span className="material-icons text-xl">person</span>
                                </div>
                            </div>
                            <div className="ml-4 flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h2 className="text-sm font-semibold text-slate-900 truncate pr-2">
                                        Unknown User
                                    </h2>
                                    <span className="text-xs text-slate-500 whitespace-nowrap">
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

            <div className="fixed bottom-6 right-6 z-50">
                <button className="bg-primary hover:bg-blue-700 text-white rounded-full px-5 py-3 shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95">
                    <span className="material-icons text-2xl">post_add</span>
                    <span className="font-medium text-base">Post Requirement</span>
                </button>
            </div>
        </div>
    );
};

export default BusinessMessages;
