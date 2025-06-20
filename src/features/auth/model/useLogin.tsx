import { publicRqClient } from "@/shared/api/instance";
import type { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/models/routes";
import { useSession } from "@/shared/models/session";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const session = useSession()
  const loginMutatate = publicRqClient.useMutation("post", "/auth/login", {
    onSuccess(data) {
      session.login(data.accessToken)
      navigate(ROUTES.HOME);
    },
  });

  const login = (data: ApiSchemas["LoginRequest"]) => {
    loginMutatate.mutate({ body: data });
  };

  const errorMessage = loginMutatate.isError
    ? loginMutatate.error.message
    : undefined;

  return {
    login,
    isPending: loginMutatate.isPending,
    errorMessage,
  };
}
