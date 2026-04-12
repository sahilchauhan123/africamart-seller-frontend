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
            // Check if half details are filled first
            const halfDetailsRes = await api.get('/auth/seller/business/half-details');
            const isProfileFilled = halfDetailsRes.data.data.is_filled;

            try {
                // Then try to get the full profile to check activation status
                const profileRes = await api.get('/auth/seller/business/profile');
                return {
                    isAuthenticated: true,
                    isProfileFilled,
                    isActive: profileRes.data.data.is_active
                };
            } catch (err) {
                // If profile fails (e.g. not verified), but half-details worked, they are authenticated
                return {
                    isAuthenticated: true,
                    isProfileFilled,
                    isActive: false
                };
            }
        } catch (error: any) {
            return {
                isAuthenticated: false,
                isProfileFilled: false,
                isActive: false
            };
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
