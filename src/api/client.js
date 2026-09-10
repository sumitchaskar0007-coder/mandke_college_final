import axios from "axios";
const base = import.meta.env.VITE_API_BASE_URL || "/api";
export const api = axios.create({
    baseURL: base,
    timeout: 5000,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});
