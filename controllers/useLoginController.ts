
import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';

export const useLoginController = (onLoginSuccess: () => void) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await AuthService.login(formData.email, formData.password);
            onLoginSuccess();
        } catch (err: any) {
            setError(err.message || 'Network error. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        error,
        handleChange,
        handleLogin
    };
};
