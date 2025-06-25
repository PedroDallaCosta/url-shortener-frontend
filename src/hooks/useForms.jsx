import { createShortUrl } from "@/service/api";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

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

    const schema = { url, password, expireTime };
    const { success, data = {}, error = {} } = urlSchema.safeParse(schema);

    if (!success) {
      error.errors.forEach(({ message }) => toast.error(message));
      return;
    }

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