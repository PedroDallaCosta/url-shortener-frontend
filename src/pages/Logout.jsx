import { useUserContext } from "@/context/userContext";
import { useShowErrors } from "@/hooks/useShowErrors";
import { logout } from "@/service/logout"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const { clearUser } = useUserContext()

  useEffect(() => {
    const doLogout = async () => {
      try {
        const { success } = await logout();
        if (success) {
          clearUser()
          navigate("/")
        }
      } catch (errors) {
        useShowErrors(errors)
      }
    };

    doLogout();
  }, []);

  return null
}