/// <reference types="vite/client" />
import axios from 'axios';

// Set global default just in case
axios.defaults.withCredentials = true;


// export const BASE_URL = 'http://localhost:4000/api/v1'
// export const WS_BASE_URL = 'ws://localhost:4000/api/v1/messaging/ws'

export const BASE_URL = "https://api.lasomaa.com/api/v1"
export const WS_BASE_URL = "wss://api.lasomaa.com/api/v1/messaging/ws"


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
