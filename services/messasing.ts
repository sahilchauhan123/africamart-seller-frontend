/**
 * Service to handle messaging using custom Go backend
 */
const GATEWAY_URL = "http://localhost:4000/api/v1/messaging";
const MESSAGING_URL = `${GATEWAY_URL}/protected`;
const MESSAGING_WS_URL = "ws://localhost:4000/api/v1/messaging/ws";

class MessasingService {
    /**
     * Fetch all conversations for the authenticated seller
     */
    async fetchConversations() {
        const res = await fetch(`${MESSAGING_URL}/conversations`, {
            credentials: 'include'
        });
        return res;
    }

    /**
     * Fetch message history for a specific conversation
     */
    async fetchMessages(convID: string) {
        const res = await fetch(`${MESSAGING_URL}/conversations/${convID}/messages`, {
            credentials: 'include'
        });
        return res;
    }

    /**
     * Send a message to a buyer
     */
    async sendMessage(buyerID: number, content: string) {
        const res = await fetch(`${MESSAGING_URL}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ buyer_id: buyerID, content }),
            credentials: 'include'
        });
        return res;
    }

    /**
     * Create a WebSocket connection
     */
    createWebSocket() {
        return new WebSocket(MESSAGING_WS_URL);
    }
}

export const messagingService = new MessasingService();