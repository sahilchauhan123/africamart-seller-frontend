import api from './api';

export const AuthService = {
    async login(email: string, password: string) {
        try {
            const response = await api.post('/auth/seller/login', { email, password });
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Login failed.');
        }
    },

    async sendOtp(email: string, password: string, ownerName: string) {
        try {
            const response = await api.post('/auth/seller/registration/sendotp', {
                email,
                password,
                business_owner_name: ownerName
            });
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Registration failed.');
        }
    },

    async submitOtp(email: string, otp: number) {
        try {
            const response = await api.post('/auth/seller/registration/submitotp', {
                email: email,
                otp: otp
            });
            return response.data;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Invalid OTP. Please try again.');
        }
    },

    async checkAuth() {
        try {
            // Using a simple listing endpoint to check if the token is valid
            // Since listing routes are protected at the gateway level
            await api.get('/listing/seller/products?page=1');
            return true;
        } catch (error) {
            return false;
        }
    },

    async logout() {
        try {
            await api.get('/auth/seller/logout');
            return true;
        } catch (error) {
            return false;
        }
    }
};
