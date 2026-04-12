import { useMessaging } from './MessagingContext';

export const useMessagingController = () => {
    const {
        conversations,
        messages,
        selectedChatId,
        loading,
        activeTab,
        searchQuery,
        setActiveTab,
        setSearchQuery,
        setSelectedChatId,
        handleSendMessage
    } = useMessaging();

    const selectedChat = conversations.find(c => c.id === selectedChatId) || null;

    // Filter logic for UI
    const filteredConversations = conversations.filter(c => {
        if (activeTab === 'unread') {
            return true;
        }
        return true;
    }).filter(c => {
        if (!searchQuery) return true;
        return c.id.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return {
        state: {
            activeTab,
            searchQuery,
            conversations: filteredConversations,
            messages,
            loading,
            selectedChat,
            selectedChatId,
            showMenu: false
        },
        actions: {
            setActiveTab,
            setSearchQuery,
            handleSendMessage,
            setSelectedChatId
        }
    };
};
