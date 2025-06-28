import { toast } from "sonner";

export const useShowErrors = (errors, navigate) => {
  if (Array.isArray(errors) && errors.length > 0) {
    errors.forEach((err) => {
      toast.error(err?.message || 'Erro de validação.');
    });
  } else {
    toast.error('Ocorreu um erro inesperado.');
  }
};