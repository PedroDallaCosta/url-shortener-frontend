import api from '@/service/api'

export const createShortUrl = async (data) => {
  try {
    const response = await api.post('/api/urls/shorten', data)
    const { urlDetails, short } = response?.data

    return { success: true, urlDetails, short }
  } catch (error) {
    throw error?.response?.data?.errors || error?.error?.errors || error?.message || ['An unexpected error occurred'];
  }
}