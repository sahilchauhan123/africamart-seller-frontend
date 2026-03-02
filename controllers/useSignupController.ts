
import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';

export const useSignupController = (onNext: () => void) => {
    const [formData, setFormData] = useState({
        owner_name: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await AuthService.sendOtp(formData.email, formData.password, formData.owner_name);
            // Store email and password in localStorage for automatic login after OTP
            localStorage.setItem('registration_email', formData.email);
            localStorage.setItem('registration_password', formData.password);
            onNext();
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
        handleSubmit
    };
};
