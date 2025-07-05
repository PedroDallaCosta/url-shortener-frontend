import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

const erros_status = {
  401: 'Não autorizado. Por favor, faça login novamente.',
  403: 'Acesso negado.',
  404: 'Recurso não encontrado.',
  422: 'Dados inválidos.',
  500: 'Erro interno do servidor.'
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status || 500;
    const data = error?.response?.data || {};

    const errorResponse = {
      success: false,
      error: {
        status,
        message: data.message || undefined,
        errors: data.errors || [],
        timestamp: new Date().toISOString()
      }
    };

    if (errorResponse?.error?.message.includes("Não autorizado: The token has expired at")) {
      const originalRequest = error.config;
      try {
        const response = await api.post("/api/auth/refreshToken")
        return api(originalRequest);
      } catch (err) {
        errorResponse.error.message = err
      }
    }

    if (!errorResponse.error.message) {
      erros_status[status] || 'Erro inesperado.';
    }

    return Promise.reject(errorResponse);
  }
);

export default api;