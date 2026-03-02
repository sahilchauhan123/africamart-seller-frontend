import React, { useState } from 'react';
import api from '../services/api';

export const useBusinessController = () => {
    const [showModal, setShowModal] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const [formData, setFormData] = useState({
        business_name: '',
        business_type: '',
        business_address: '',
        business_category: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const submitBusiness = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await api.post('/auth/seller/register/business', formData);
            setShowModal(true);
        } catch (err: any) {
            setError(err.response?.data?.error || err.response?.data?.message || 'Failed to register business');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        state: {
            showModal,
            viewMode,
            formData,
            isLoading,
            error
        },
        actions: {
            setShowModal,
            setViewMode,
            handleInputChange,
            submitBusiness
        }
    };
};
