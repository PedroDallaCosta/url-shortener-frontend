import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { useCallback } from "react";

const UserContext = createContext(null);
const USER_STORAGE_KEY = "shortenIt_user";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const fetchedUser = useUser();

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    } else {
      setUser(null)
    }
  }, [fetchedUser]);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    } catch (error) {
      console.error("Failed to save user to localStorage", error);
    }
  }, [user]);

  const updateUser = useCallback((newUserData) => {
    setUser(newUserData);
  }, []);

  const clearUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);