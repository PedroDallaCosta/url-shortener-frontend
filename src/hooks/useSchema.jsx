import { useShowErrors } from "./useShowErrors";

export const useSchema = (schema, infos) => {
  const result = schema.safeParse(infos);
  
  if (!result.success) {
    const errors = result.error.errors;
    useShowErrors(errors)

    return {
      success: false,
      data: null,
      errors: errors
    };
  }

  return {
    success: true,
    data: result.data,
    errors: []
  };
};