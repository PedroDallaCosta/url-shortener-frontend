import api from "@/service/api";

export const getUrlDetails = async (shortId) => {
  try {
    const response = await api.get(`/api/urls/details/${shortId}`)
    return response?.data?.urlData
  } catch (error) {
   throw error?.response?.data?.errors || error?.message || ['An unexpected error occurred'];
  }
};
