import { useState, useEffect } from 'react';
import api from '../services/api';

export const useProfileController = () => {
    const [profileData, setProfileData] = useState<any>(null);
    const [accountData, setAccountData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProfile = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await api.get('/auth/seller/business/profile');
            console.log("this is the res", res.data);
            const payload = res.data?.data?.business_details ? res.data.data : res.data;
            if (payload && payload.is_active) {
                setProfileData(payload.business_details);
                setAccountData(payload);
            } else {
                setError("Profile is not complete yet.");
            }
        } catch (err: any) {
            console.error("Failed to fetch profile:", err);
            setError(err.response?.data?.error || err.message || "Failed to fetch profile");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return {
        state: {
            profileData,
            accountData,
            isLoading,
            error
        },
        actions: {
            refreshProfile: fetchProfile
        }
    };
};
