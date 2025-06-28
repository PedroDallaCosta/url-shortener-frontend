import { useEffect, useState } from 'react'
import api from '@/service/api'

export const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/api/auth/me')
        setUser(response?.data?.user)
      } catch (error) {
        setUser(null)
      }
    }

    fetchUser()
  }, [])

  return user
}