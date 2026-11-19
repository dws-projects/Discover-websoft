import axios from "axios";
import { API_BASE_URL } from "./config";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Attaches the logged-in customer's token to every request automatically,
// so individual API calls never need to handle this themselves.
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("dw_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
