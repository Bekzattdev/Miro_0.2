import { rqClient } from "@/shared/api/instance";
import type { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/models/routes";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();
  
  const registerMutatate = rqClient.useMutation("post", "/auth/register", {
    onSuccess() {
      navigate(ROUTES.HOME);
    },
  });

  const register = (data: ApiSchemas["RegisterRequest"]) => {
    registerMutatate.mutate({ body: data });
  };

  const errorMessage = registerMutatate.isError
    ? registerMutatate.error.message
    : undefined;

  return {
    register,
    isPending: registerMutatate.isPending,
    errorMessage,
  };
}
