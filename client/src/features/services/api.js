import axios from "axios";

// Use Vite env var for the backend URL, with a fallback for local dev.
// Ensure the env var is defined as VITE_API_URL.
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
