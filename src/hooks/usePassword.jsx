import api from "@/service/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useShowErrors } from "./useShowErrors";
import { z } from "zod";
import { useSchema } from "./useSchema";

const passwordSchema = z.object({
  password: z.string()
});

export const usePassword = (shortId) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (infos) => {
    const { success, data = {} } = useSchema(passwordSchema, infos)
    if (!success) return

    setLoading(true)

    try {
      const response = await api.post(`/api/urls/unlock/${shortId}`, data)
      const { urlDestination } = response?.data
      if (urlDestination) window.location.href = urlDestination
    } catch (error) {
      const errors = error?.response?.data?.errors || error?.error?.errors || error?.message || ['An unexpected error occurred'];
      useShowErrors(errors);
    }

    setLoading(false)
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    loading
  }
}
