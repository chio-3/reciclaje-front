import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginImage from "./../../assets/login-bg.svg"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Correo no válido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("La contraseña es obligatoria"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert("Formulario válido ✅");
    console.log(data);
    if(data.email.includes("admin")){
      navigate("/admin");
      return;
    }else{

      navigate("/inicio");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-2xl overflow-hidden w-full max-w-4xl shadow-lg">
        {/* Left: Image */}
        <div className="hidden md:block md:w-1/2 bg-green-700 relative">
          <img
            src={loginImage}
            alt="Login"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:w-1/2 p-6 md:p-10 max-w-md mx-auto"
        >
          <p className="text-sm italic text-gray-400">
            👤 Usuario/Administrador
          </p>
          <h2 className="text-2xl font-bold">INICIO DE SESIÓN</h2>
          <p className="text-sm text-gray-400 mb-4">
            Inicia sesión con tu cuenta{" "}
            <span className="font-semibold">GMAIL</span>.
          </p>

          <div>
            <label className="text-sm block mb-1">Correo electrónico</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="usuario25@gmail.com"
            />
            {errors.email && (
              <small className="text-red-400 text-sm">
                {errors.email.message}
              </small>
            )}
          </div>

          <div>
            <label className="text-sm block mb-1">Contraseña</label>
            <input
              type="password"
              {...register("password")}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Introduce la contraseña"
            />
            {errors.password && (
              <small className="text-red-400 text-sm">
                {errors.password.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
          >
            Iniciar sesión
          </button>

          <p className="text-sm text-center mt-2">
            ¿No tienes cuenta?{" "}
            <a href="/registro" className="text-green-400 font-bold hover:underline">
              Regístrate
            </a>
          </p>
          <p className="text-sm text-center">
            <a href="#" className="text-green-400 font-bold hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
