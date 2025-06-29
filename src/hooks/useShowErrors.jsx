import { toast } from "sonner";

export const useShowErrors = (errors) => {
  if (Array.isArray(errors) && errors.length > 0) {
    errors.forEach((err) => {
      if (err?.message == "You need to be logged in"){
        window.location.href = "/login"
        return
      }
      
      toast.error(err?.message || 'Erro de validação.');
    });
  } else {
    toast.error('Ocorreu um erro inesperado.');
  }
};