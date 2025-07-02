import api from "./api";

export const getLinksData = async () => {

  try {
    const response = await api.get('/api/urls/users')
    return response?.data?.links
  } catch (error) {
    throw error?.response?.data?.errors || error?.error?.errors || error?.message || ['An unexpected error occurred'];
  }
}