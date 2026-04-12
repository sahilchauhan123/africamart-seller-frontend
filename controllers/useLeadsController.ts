import { useState, useMemo, useEffect } from 'react';
import api from '../services/api';

export const useLeadsController = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<'Newest' | 'Oldest'>('Newest');
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [leads, setLeads] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchLeads = async () => {
            setIsLoading(true);
            try {
                // Get the seller profile first to get the seller ID
                const profileRes = await api.get('/auth/seller/business/profile');
                const sellerId = profileRes.data.data.id;

                const response = await api.get("/leads/seller/leads");
                if (response.data && response.data.data) {
                    setLeads(response.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch leads:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeads();
    }, []);

    const filteredInquiries = useMemo(() => {
        let result = leads.map(l => ({
            id: l.id,
            companyName: l.buyer_name || 'Anonymous Buyer',
            initials: (l.buyer_name || 'A').charAt(0).toUpperCase(),
            time: new Date(l.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            message: `Inquiry for ${l.product_name || 'Product'} - Quantity: ${l.quantity}`,
            status: l.status === 'pending' ? 'New Lead' : l.status,
            location: 'Not Specified', // Location not currently in lead data
            product_name: l.product_name,
            product_image: l.product_image,
            quantity: l.quantity,
            buyer_phone: l.buyer_phone,
            created_at: l.created_at
        })).filter(inq => {
            const matchesSearch = inq.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                inq.message.toLowerCase().includes(searchQuery.toLowerCase());

            if (!matchesSearch) return false;

            if (activeFilter === 'All') return true;
            if (activeFilter === 'New Leads') return inq.status === 'New Lead';
            if (activeFilter === 'Viewed') return inq.status === 'Viewed';
            if (activeFilter === 'Replied') return inq.status === 'Replied';

            return true;
        });

        return sortOrder === 'Newest' ? result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()) : result.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    }, [leads, searchQuery, activeFilter, sortOrder]);

    return {
        state: {
            activeFilter,
            searchQuery,
            sortOrder,
            filteredInquiries,
            selectedCurrency,
            isLoading
        },
        actions: {
            setActiveFilter,
            setSearchQuery,
            setSortOrder,
            setSelectedCurrency
        }
    };
};
