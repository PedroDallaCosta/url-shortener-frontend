import { createShortUrl } from "@/service/api";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useSchema } from "./useSchema";

const urlSchema = z.object({
  url: z.string().url({ message: "Invalid URL" }),
  password: z.string().optional(),
  expireTime: z.preprocess((val) => {
    if (typeof val === "string" || val instanceof Date) {
      const date = new Date(val);
      if (!isNaN(date.getTime())) return date;
      return undefined;
    }
    return val;
  }, z.date().optional()),
});

export const useForm = () => {
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [expireTime, setExpireTime] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const infos = { url, password, expireTime };
    const { success, data = {}, error = {} } = useSchema(urlSchema, infos)
    if (!success) return
    
    setLoading(true);

    try {
      const result = await createShortUrl(data);
      if (!result.success) throw new Error(result.error?.message ?? "Failed to create short URL")

      toast.message("Link shortened successfully!", { description: result.shortUrl || "/"});
      window.location.href = result.shortUrl;
    } catch (apiError) {
      toast.error(apiError instanceof Error ? apiError.message : "Unknown error");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    setUrl,
    setPassword,
    expireTime,
    setExpireTime,
    loading,
    handleSubmit,
  };
}