/// <reference types="vite/client" />
import axios from 'axios';

// Set global default just in case
axios.defaults.withCredentials = true;


// config.js or constants.js
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const WS_BASE_URL = import.meta.env.VITE_WS_BASE_URL;

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
