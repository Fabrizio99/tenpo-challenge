import { FC } from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import { Input } from "@/components/Input";
import { PageLayout } from "@/components/PageLayout";
import { AuthActionTypes } from "@/context/auth/reducer";

interface FormType {
  email: string;
  password: string;
}
const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormType>();
  const { dispatch } = useAuth();
  const { fetchUser } = useUser();

  const onSubmit = async () => {
    const token = `fake-token-tenpo`;
    dispatch({ type: AuthActionTypes.LOGIN, token });
    await fetchUser();
  };

  return (
    <PageLayout>
      <div className="layout flex items-center justify-center h-full">
        <div className="card w-full max-w-md">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h5 className="card-title mb-2.5 text-center">Iniciar sesión</h5>
            <Input
              label="Correo"
              id="email-input"
              type="email"
              {...register("email", {
                required: "Correo requerido",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo inválido",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
            <Input
              id="password-input"
              type="password"
              label="Password"
              {...register("password", { required: "Contraseña requerida" })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
            <button className="btn btn-primary mt-2" disabled={!isValid}>
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
