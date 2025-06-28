import { createShortUrl } from "@/service/createShortUrl";
import { toast } from "sonner";
import { z } from "zod";
import { useSchema } from "./useSchema";
import { useShowErrors } from "./useShowErrors";

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

export const useShortUrl = async (infos) => {
  const { success, data = {}, error = {} } = useSchema(urlSchema, infos)
  if (!success) return

  try {
    const result = await createShortUrl(data);
    toast.message("Link shortened successfully!", { description: result.urlShort || "/" });
    return result.urlShort
  } catch (errors) {
    useShowErrors(errors);
  }

  return false
}