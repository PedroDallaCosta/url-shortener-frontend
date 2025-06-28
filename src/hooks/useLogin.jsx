import { z } from "zod";
import { loginUser } from "@/service/loginUser";
import { useState } from "react";
import { useSchema } from "./useSchema";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/userContext";
import { useShowErrors } from "@/hooks/useShowErrors";
import { useForm } from 'react-hook-form'

const credentialSchema = z.object({
  email: z.string().email({ message: "Invalid e-mail" }),
  password: z.string()
});

export const useLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ loading, setLoading ] = useState(false)
  const { updateUser } = useUserContext()
  const navigate = useNavigate();

  const onSubmit = async (infos) => {
    const { success, data = {} } = useSchema(credentialSchema, infos)
    if (!success) return
    
    setLoading(true)

    try {
      const { userId } = await loginUser(data)
      updateUser({ userId })
      navigate("/")
    } catch (errors) {
      useShowErrors(errors);
    }

    setLoading(false)
  }

  return {
    handleSubmit: handleSubmit(onSubmit), 
    register,
    loading
  }
}
