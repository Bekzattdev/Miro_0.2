import { enableMocking } from "@/shared/api/mocks";
import { ROUTES } from "@/shared/models/routes";
import { useSession } from "@/shared/models/session";
import { Navigate, Outlet, redirect, } from "react-router-dom";

export function ProtectedRoute() {
  const {session} = useSession();

  if (!session) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return <Outlet />;
}

export async function ProtectedLoader(){
    await enableMocking()
  const token = await useSession.getState().refreshToken();

  if(!token ){
    return redirect(ROUTES.LOGIN)
  }
  return null
};