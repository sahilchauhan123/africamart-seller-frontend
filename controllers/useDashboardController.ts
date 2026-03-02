import { useState, useEffect } from 'react';
import { View } from '../types';
import api from '../services/api';

export const useDashboardController = (onNavigate: (view: View) => void) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [showWelcomeModal, setShowWelcomeModal] = useState(true);
    const [activeMonthIndex, setActiveMonthIndex] = useState(3);
    const [isProfileComplete, setIsProfileComplete] = useState(false);

    useEffect(() => {
        api.get('/auth/seller/business/profile')
            .then(res => {
                const payload = res.data?.data?.business_details ? res.data.data : res.data;
                if (payload && payload.is_active) {
                    setIsProfileComplete(true);
                }
            })
            .catch(err => {
                console.error("Failed to fetch profile status:", err);
                setIsProfileComplete(false);
            });
    }, []);

    const months = [
        { name: 'AUG', full: 'AUGUST', leads: 95, height: '65%' },
        { name: 'SEP', full: 'SEPTEMBER', leads: 110, height: '85%' },
        { name: 'OCT', full: 'OCTOBER', leads: 85, height: '55%' },
        { name: 'NOV', full: 'NOVEMBER', leads: 142, height: '100%' },
        { name: 'DEC', full: 'DECEMBER', leads: 120, height: '90%' },
        { name: 'JAN', full: 'JANUARY', leads: 125, height: '75%' },
    ];

    const navigateTo = (view: View) => {
        onNavigate(view);
    };

    return {
        state: {
            isOverlayOpen,
            showWelcomeModal,
            activeMonthIndex,
            isProfileComplete,
            months
        },
        actions: {
            setIsOverlayOpen,
            setShowWelcomeModal,
            setActiveMonthIndex,
            navigateTo
        }
    };
};
