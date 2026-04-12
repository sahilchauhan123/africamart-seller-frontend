import axios from 'axios';

// Set global default just in case
axios.defaults.withCredentials = true;

const storedBaseUrl = localStorage.getItem('apiBaseUrl');
export const BASE_URL = storedBaseUrl || 'http://165.232.47.156:4000/api/v1';

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

// Ensure withCredentials is set for every request
api.interceptors.request.use((config) => {
    config.withCredentials = true;
    return config;
});

export default api;
