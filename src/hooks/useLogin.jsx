import { z } from "zod";
import { toast } from "sonner";
import { loginUser } from "@/service/api";
import { useState } from "react";
import { useSchema } from "./useSchema";

const credentialSchema = z.object({
  email: z.string().email({ message: "Invalid e-mail" }),
  password: z.string()
});

export const useLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async (e) => {
    e.preventDefault()

    const infos = { email: email, password: password }
    const { success, data = {} } = useSchema(credentialSchema, infos)
    if (!success) return

    try {
      const result = await loginUser(data)
      if (!result.success) throw new Error(result.error?.message ?? "Failed to signin")

      toast.success("Login successfully")
    } catch (loginErro) {
      toast.error(loginErro instanceof Error ? loginErro.message : "Unknow error")
    }
  }

  return {
    setEmail,
    setPassword,
    login
  }
}
