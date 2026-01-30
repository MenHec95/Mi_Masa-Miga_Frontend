// 📁 src/services/api.js
import axios from "axios";

// URL base de tu backend
const API_URL = process.env.REACT_APP_API_URL || "https://mi-masa-miga-backend.onrender.com";

// Crear instancia de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token a cada request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido o expirado
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Servicios de autenticación
export const authService = {
  // Register
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  // Login
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  },
};

// Servicios de posts (para después)
export const postsService = {
  getAll: async () => {
    const response = await api.get("/posts");
    return response.data;
  },

  getBySlug: async (slug) => {
    const response = await api.get(`/posts/${slug}`);
    return response.data;
  },
};

export default api;
