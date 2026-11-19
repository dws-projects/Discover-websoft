// Set VITE_API_URL to the deployed backend API base URL, including /api.
// If the frontend and backend share a domain through a reverse proxy, /api works.
export const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";
