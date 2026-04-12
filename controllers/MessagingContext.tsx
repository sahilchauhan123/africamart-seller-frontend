import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { messagingService } from '../services/messasing';
import { Message, Conversation } from '../types';

interface MessagingContextType {
    conversations: Conversation[];
    messages: Message[];
    selectedChatId: string | null;
    loading: boolean;
    activeTab: string;
    searchQuery: string;
    setActiveTab: (tab: string) => void;
    setSearchQuery: (query: string) => void;
    setSelectedChatId: (id: string | null) => void;
    handleSendMessage: (content: string) => Promise<void>;
}

const MessagingContext = createContext<MessagingContextType | undefined>(undefined);

export const MessagingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const ws = useRef<WebSocket | null>(null);
    const selectedChatIdRef = useRef<string | null>(null);

    // Sync ref with state for WS closure
    useEffect(() => {
        selectedChatIdRef.current = selectedChatId;
    }, [selectedChatId]);

    // Initial Load
    useEffect(() => {
        const load = async () => {
            try {
                const res = await messagingService.fetchConversations();
                const d = await res.json();
                if (d.status === 200) setConversations(d.data || []);
            } catch (err) {
                console.error("Failed to fetch conversations:", err);
            }
        };
        load();
    }, []);

    // Persistent WebSocket
    useEffect(() => {
        let socket: WebSocket | null = null;
        let retryTimeout: NodeJS.Timeout;

        const connect = () => {
            socket = messagingService.createWebSocket();
            socket.onopen = () => console.log("Global Seller Messaging WebSocket Connected");
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === 'message') {
                    const newMsg: Message = data.message;
                    setMessages(prev => {
                        if (prev.some(m => m.id === newMsg.id)) return prev;
                        if (newMsg.conversation_id === selectedChatIdRef.current) {
                            return [...prev, newMsg];
                        }
                        return prev;
                    });
                    setConversations(prev => {
                        const exists = prev.some(c => c.id === newMsg.conversation_id);
                        if (!exists) {
                            messagingService.fetchConversations().then(res => res.json()).then(d => {
                                if (d.status === 200) setConversations(d.data || []);
                            });
                            return prev;
                        }
                        const updated = prev.map(c =>
                            c.id === newMsg.conversation_id ? { ...c, updated_at: newMsg.created_at } : c
                        );
                        return updated.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
                    });
                }
            };
            socket.onclose = () => {
                console.log("Global Seller WebSocket Disconnected. Retrying...");
                retryTimeout = setTimeout(connect, 3000);
            };
            ws.current = socket;
        };

        connect();
        return () => {
            if (socket) socket.close();
            clearTimeout(retryTimeout);
        };
    }, []);

    // Load messages when ID changes
    useEffect(() => {
        if (!selectedChatId) return;
        const loadMessages = async () => {
            setLoading(true);
            try {
                const res = await messagingService.fetchMessages(selectedChatId);
                const data = await res.json();
                if (data.status === 200) setMessages(data.data || []);
            } catch (err) {
                console.error("Failed to fetch messages:", err);
            } finally {
                setLoading(false);
            }
        };
        loadMessages();
    }, [selectedChatId]);

    const handleSendMessage = async (content: string) => {
        if (!selectedChatId) return;
        const conv = conversations.find(c => c.id === selectedChatId);
        if (!conv) return;
        try {
            await messagingService.sendMessage(conv.buyer_id, content);
        } catch (err) {
            console.error("Failed to send message:", err);
        }
    };

    return (
        <MessagingContext.Provider value={{
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
        }}>
            {children}
        </MessagingContext.Provider>
    );
};

export const useMessaging = () => {
    const context = useContext(MessagingContext);
    if (context === undefined) {
        throw new Error('useMessaging must be used within a MessagingProvider');
    }
    return context;
};
