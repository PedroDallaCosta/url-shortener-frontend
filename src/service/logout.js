import api from '@/service/api'

export const logout = async () => {
  try {
    const response = await api.post('/api/auth/logout')
    return { success: true, message: response?.data?.message }
  } catch (error) {
    throw error?.response?.data?.errors || error?.message || ['An unexpected error occurred'];
  }
}