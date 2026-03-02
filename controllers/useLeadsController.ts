import { useState, useMemo } from 'react';
import { MOCK_INQUIRIES } from '../constants';

export const useLeadsController = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<'Newest' | 'Oldest'>('Newest');

    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const filteredInquiries = useMemo(() => {
        let result = MOCK_INQUIRIES.filter(inq => {
            // Search matching
            const matchesSearch = inq.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                inq.message.toLowerCase().includes(searchQuery.toLowerCase());

            if (!matchesSearch) return false;

            // Filter matching
            if (activeFilter === 'All') return true;
            if (activeFilter === 'New Leads') return inq.status === 'New Lead' || inq.status === 'Urgent';
            if (activeFilter === 'Viewed') return inq.status === 'Viewed';
            if (activeFilter === 'Replied') return inq.status === 'Replied';

            return true;
        });

        return sortOrder === 'Newest' ? result : [...result].reverse();
    }, [searchQuery, activeFilter, sortOrder]);

    return {
        state: {
            activeFilter,
            searchQuery,
            sortOrder,
            filteredInquiries,
            selectedCurrency
        },
        actions: {
            setActiveFilter,
            setSearchQuery,
            setSortOrder,
            setSelectedCurrency
        }
    };
};
