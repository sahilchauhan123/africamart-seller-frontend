import { useState } from 'react';

// Hardcoded for now as it was in the view
const CHATS = [
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

const SEARCH_RESULTS = [
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

export const useMessagingController = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('meet');
    const [showMenu, setShowMenu] = useState(false);
    const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

    const filteredChats = activeTab === 'all' ? CHATS : CHATS.filter(c => c.unread > 0);
    const selectedChat = CHATS.find(c => c.id === selectedChatId) || null;

    return {
        state: {
            activeTab,
            searchQuery,
            chats: CHATS,
            filteredChats,
            searchResults: SEARCH_RESULTS,
            showMenu,
            selectedChat,
            selectedChatId
        },
        actions: {
            setActiveTab,
            setSearchQuery,
            setShowMenu,
            setSelectedChatId
        }
    };
};
