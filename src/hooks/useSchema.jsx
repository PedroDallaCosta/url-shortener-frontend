import { toast } from "sonner";

export const useSchema = (schema, infos) => {
  const { success, data = {}, error = {} } = schema.safeParse(infos);
  if (!success) error.errors.forEach(({ message }) => toast.error(message));

  return { success, data, error }
}