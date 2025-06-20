import { publicRqClient } from "@/shared/api/instance";
import type { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/models/routes";
import { useSession } from "@/shared/models/session";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();
  
  const session = useSession()
  const registerMutatate = publicRqClient.useMutation("post", "/auth/register", {
    onSuccess(data) {
      session.login(data.accessToken)
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
