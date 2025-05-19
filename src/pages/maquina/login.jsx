// File: components/LoginSelectMaterial.jsx
import React from "react";
import { FaRecycle, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("El usuario es requerido"),
  password: yup.string().required("La contraseña es requerida"),
});

export default function LoginSelectMaterial() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate('/menu');
  };

  const handleNavigation = (material) => {
    if (material === 'organico') {
      navigate('/maquina/organico');
    } else if (material === 'inorganico') {
      navigate('/maquina/inorganico');
    }
  };

  return (
   <div className="h-screen flex justify-center items-center">
        <div  className="bg-green-800 text-white w-[400px]   mx-auto rounded-xl p-6 flex flex-col align-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center text-lg font-bold mb-4">Ingresa a tu cuenta</h2>
            <div className="space-y-2">
              <div className="flex items-center bg-green-700 p-2 rounded">
                <FaUser className="mr-2" />
                <input {...register("username")} className="bg-transparent outline-none w-full" placeholder="Usuario" />
              </div>
              {errors.username && <p className="text-red-300 text-sm mt-1">{errors.username.message}</p>}
    
              <div className="flex items-center bg-green-700 p-2 rounded">
                <FaLock className="mr-2" />
                <input type="password" {...register("password")} className="bg-transparent outline-none w-full" placeholder="Contraseña" />
              </div>
              {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <button type="submit" className="w-full mt-4 bg-white text-green-800 font-bold py-2 rounded">
              Iniciar sesión
            </button>
          </form>
    
          <div className="text-center mt-6">
            <p className="mb-2">Selecciona el material</p>
            <div className="flex justify-around">
              <button onClick={() => handleNavigation('organico')} className="bg-white text-green-800 px-4 py-2 rounded flex items-center">
                <FaRecycle className="mr-2" /> ORGÁNICO
              </button>
              <button onClick={() => handleNavigation('inorganico')} className="bg-white text-green-800 px-4 py-2 rounded flex items-center">
                <FaRecycle className="mr-2" /> INORGÁNICO
              </button>
            </div>
          </div>
        </div>
   </div>
  );
}