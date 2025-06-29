import api from '@/service/api'

export const signUpUser = async (user) => {
  try {
    const response = await api.post('/api/auth/register', user)
    return {
      success: true,
      data: response.data,
      userId: response?.data?.userId,
      message: response?.data?.message || 'Login realizado com sucesso',
    }
  } catch (error) {
    throw error?.response?.data?.errors || error?.error?.errors || error?.message || ['An unexpected error occurred'];
  }
}