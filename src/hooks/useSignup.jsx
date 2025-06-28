import { z } from "zod";
import { signUpUser } from "@/service/signUpUser";
import { useState } from "react";
import { useSchema } from "./useSchema";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/userContext";
import { useShowErrors } from "./useShowErrors";
import { useForm } from 'react-hook-form'

const credentialSchema = z.object({
  email: z.string().email({ message: "Invalid e-mail" }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
    .refine((val) => /[a-z]/.test(val), { message: 'Password must contain at least one lowercase letter' })
    .refine((val) => /[A-Z]/.test(val), { message: 'Password must contain at least one uppercase letter' })
    .refine((val) => /[0-9]/.test(val), { message: 'Password must contain at least one number' })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), { message: 'Password must contain at least one special character' })
});

export const useSignup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)
  const { updateUser } = useUserContext()
  const navigate = useNavigate();

  const onSubmit = async (infos) => {
    const { success, data = {} } = useSchema(credentialSchema, infos)
    if (!success) return
    setLoading(true)

    try {
      const { userId } = await signUpUser(data)
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
    loading,
  }
}
