import { z } from "zod";
import { toast } from "sonner";
import { loginUser } from "@/service/api";
import { useState } from "react";
import { useSchema } from "./useSchema";

const credentialSchema = z.object({
  email: z.string().email({ message: "Invalid e-mail" }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
    .refine((val) => /[a-z]/.test(val), { message: 'Password must contain at least one lowercase letter' })
    .refine((val) => /[A-Z]/.test(val), { message: 'Password must contain at least one uppercase letter' })
    .refine((val) => /[0-9]/.test(val), { message: 'Password must contain at least one number' })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), { message: 'Password must contain at least one special character' })
});

export const useSignup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async (e) => {
    e.preventDefault()

    const infos = { email: email, password: password }
    const { success, data = {} } = useSchema(credentialSchema, infos)
    if (!success) return

    try {
      const result = await loginUser(data)
      if (!result.success) throw new Error(result.error?.message ?? "Failed to signup")

      toast.success("Signup successfully")
    } catch (loginErro) {
      toast.error(loginErro instanceof Error ? loginErro.message : "Unknow error")
    }
  }

  return {
    setEmail,
    setPassword,
    signUp
  }
}
