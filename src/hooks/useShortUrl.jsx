import { createShortUrl } from "@/service/createShortUrl";
import { toast } from "sonner";
import { z } from "zod";
import { useSchema } from "./useSchema";
import { useShowErrors } from "./useShowErrors";

const passwordSchema = z.preprocess(
  (val) => (val === '' ? undefined : val),
  z.string().optional().refine((val) => {
    if (val === undefined) return true; 
    return val.length >= 8;
  }, { message: 'Password must be at least 8 characters long' })
    .refine((val) => {
      if (val === undefined) return true;
      return /[a-z]/.test(val);
    }, { message: 'Password must contain at least one lowercase letter' })
    .refine((val) => {
      if (val === undefined) return true;
      return /[A-Z]/.test(val);
    }, { message: 'Password must contain at least one uppercase letter' })
    .refine((val) => {
      if (val === undefined) return true;
      return /[0-9]/.test(val);
    }, { message: 'Password must contain at least one number' })
    .refine((val) => {
      if (val === undefined) return true;
      return /[!@#$%^&*(),.?":{}|<>]/.test(val);
    }, { message: 'Password must contain at least one special character' })
);

const expireSchema = z.preprocess(
  (val) => {
    if (typeof val === "string" || val instanceof Date) {
      const date = new Date(val);
      if (!isNaN(date.getTime())) return date;
      return undefined;
    }
    return val;
  },
  z.date().optional().refine((val) => {
    if (val === undefined) return true; 
    const now = new Date();
    return val > now;
  }, {
    message: "Expiration date must be in the future"
  })
);

const urlSchema = z.object({
  url: z.string().url({ message: "Invalid URL" }),
  password: passwordSchema,
  expireTime: expireSchema
});

export const useShortUrl = async (infos) => {
  const { success, data = {}, error = {} } = useSchema(urlSchema, infos)
  if (!success) return

  try {
    const result = await createShortUrl(data);
    toast.message("Link shortened successfully!", { description: result.urlDetails || "/" });
    return result.urlDetails
  } catch (errors) {
    useShowErrors(errors);
  }

  return false
}