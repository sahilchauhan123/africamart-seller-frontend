
import React, { useState } from 'react';
import { View } from '../types';

interface Props {
    onBack: () => void;
    onNavigate: (view: View) => void;
}

const MessageSearch: React.FC<Props> = ({ onBack, onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('meet');

    const results = [
        {
            id: 1,
            initials: 'IN',
            name: 'Individual Name',
            time: '22:30 AM',
            message: 'Can we reschedule our meeting for tomorrow? I have a conflict.',
            color: 'bg-blue-100 text-primary border-blue-200'
        },
        {
            id: 2,
            initials: 'AJ',
            name: 'Alex Jones',
            time: 'Sun',
            message: "Looking forward to the meeting next week. Don't forget the slides.",
            color: 'bg-indigo-100 text-indigo-700 border-indigo-200'
        },
        {
            id: 3,
            initials: 'SW',
            name: 'Sarah Williams',
            time: 'Oct 24',
            message: "Sure, let's meet at the usual place.",
            color: 'bg-emerald-100 text-emerald-700 border-emerald-200'
        },
        {
            id: 4,
            initials: 'RB',
            name: 'Robert Brown',
            time: 'Oct 20',
            message: 'Did you get the meetup invite link?',
            color: 'bg-orange-100 text-orange-700 border-orange-200'
        }
    ];

    const highlightMatch = (text: string, query: string) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return (
            <>
                {parts.map((part, i) =>
                    part.toLowerCase() === query.toLowerCase() ? (
                        <span key={i} className="bg-yellow-200 text-slate-900 font-semibold px-0.5 rounded">
                            {part}
                        </span>
                    ) : part
                )}
            </>
        );
    };

    return (
        <div className="bg-[#F8FAFC] font-display antialiased h-full overflow-hidden flex flex-col transition-colors duration-300">
            <header className="bg-white shadow-sm z-10 relative border-b border-slate-200 flex-none">
                <div className="flex items-center gap-2 px-4 sm:px-6 lg:px-10 py-3">
                    <button
                        onClick={onBack}
                        className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    >
                        <span className="material-symbols-outlined text-2xl leading-none">arrow_back</span>
                    </button>
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400 text-xl leading-none">search</span>
                        </div>
                        <input
                            autoFocus
                            className="block w-full pl-10 pr-10 py-2.5 border-none rounded-xl leading-5 bg-slate-100 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm transition-all shadow-inner"
                            placeholder="Search chats..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-2 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer focus:outline-none"
                            >
                                <span className="material-symbols-outlined text-lg p-1 bg-slate-200 rounded-full leading-none">close</span>
                            </button>
                        )}
                    </div>
                    <button
                        onClick={onBack}
                        className="text-primary hover:text-blue-700 font-medium text-sm sm:text-base whitespace-nowrap px-2 focus:outline-none focus:underline rounded"
                    >
                        Cancel
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar relative bg-[#F8FAFC] pb-20">
                <div className="px-4 sm:px-6 lg:px-10 py-5">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recent Searches</h3>
                        <button className="text-xs text-primary font-medium hover:underline focus:outline-none">Clear all</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            { text: 'Invoice #4022', icon: 'history' },
                            { text: 'Project details', icon: 'history' },
                            { text: 'Sarah Williams', icon: 'person' }
                        ].map((item, idx) => (
                            <button key={idx} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 flex items-center gap-1.5 transition-all shadow-sm">
                                <span className="material-symbols-outlined text-base text-slate-400 leading-none">{item.icon}</span>
                                {item.text}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="h-px bg-slate-200 mx-4 sm:px-6 lg:mx-10 mb-4"></div>

                {searchQuery && (
                    <>
                        <div className="px-4 sm:px-6 lg:px-10 mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm leading-none">filter_list</span>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Results for "{searchQuery}"</h3>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {results.map((chat) => (
                                <div
                                    key={chat.id}
                                    onClick={() => onNavigate(View.CHAT)}
                                    className="group bg-white hover:bg-slate-50 transition-colors cursor-pointer active:bg-slate-100"
                                >
                                    <div className="flex items-center px-4 py-3.5 sm:px-6 lg:px-10">
                                        <div className="relative flex-shrink-0">
                                            <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 ${chat.color} font-bold text-lg`}>
                                                {chat.initials}
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-1 min-w-0">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h2 className="text-sm font-semibold text-slate-900 truncate">{chat.name}</h2>
                                                <span className="text-xs text-slate-500 font-medium">{chat.time}</span>
                                            </div>
                                            <p className="text-sm text-slate-500 line-clamp-2">
                                                {highlightMatch(chat.message, searchQuery)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default MessageSearch;
