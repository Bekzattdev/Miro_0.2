import { ROUTES } from "@/shared/models/routes";
import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/authLayout";
import { RegisterForm } from "./ui/registerForm";

function RegisterPage() {
  return (
    <AuthLayout
      title="Регистрация"
      description="Введите ваш email и пароль для входа в систему"
      form={<RegisterForm />}
      footerText={
        <>
          Уже есть аккаунта? <Link to={ROUTES.LOGIN}>Войти</Link>
        </>
      }
    />
  );
}

export const Component = RegisterPage;
