import api from '@/service/api'

export const createShortUrl = async (data) => {
  try {
    const response = await api.post('/api/urls/shorten', data)
    const { urlShort, short } = response?.data

    return { success: true, urlShort, short }
  } catch (error) {
    throw error?.response?.data?.errors || error?.message || ['An unexpected error occurred'];
  }
}