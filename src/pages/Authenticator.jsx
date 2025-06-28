import { useUserContext } from '@/context/userContext';
import { useNavigate } from "react-router-dom";

export default function Authenticator({ children }) {
  const navigate = useNavigate();
  const { user } = useUserContext()

  if (user) navigate("/")

  return children
}