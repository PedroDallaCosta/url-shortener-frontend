import { toast } from "sonner";

export const useShowErrors = (errors) => {
  if (Array.isArray(errors) && errors.length > 0) {
    errors.forEach((err) => {
      switch (err?.message) {
        case "URL is invalid or expire":
          window.location.href = "/"
          break;
        case "You need to be logged in":
          window.location.href = "/login"
          break;
        default:
          toast.error(err?.message || 'Erro de validação.');
          break;
      }
    });
  } else {
    toast.error('Ocorreu um erro inesperado.');
  }
};