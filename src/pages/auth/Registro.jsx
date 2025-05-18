// RegistrationForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
// Validation schema
const schema = yup.object().shape({
  carnet: yup.string().required('Carnet is required'),
  nombre: yup.string().required('Nombre completo is required'),
  correo: yup.string().email('Invalid email').required('Correo is required'),
  contrasena: yup.string().required('Contraseña is required'),
  telefono: yup.string().required('Teléfono is required'),
});

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/inicio");
  };

  return (
    <div className="flex items-center justify-center bg-black p-5">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-gray-800 p-10 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-white text-2xl mb-5">Registro</h2>
        
        <div className="mb-4">
          <label className="text-white">Ingrese su carnet de identidad</label>
          <input
            type="text"
            {...register("carnet")}
            className={`mt-1 block w-full p-2 rounded border bg-gray-700 text-white ${errors.carnet ? 'border-red-500' : 'border-blue-500'}`}
          />
          {errors.carnet && <p className="text-red-500">{errors.carnet.message}</p>}
        </div>

        <div className="mb-4">
          <label className="text-white">Nombre completo</label>
          <input
            type="text"
            {...register("nombre")}
            className={`mt-1 block w-full p-2 rounded border bg-gray-700 text-white ${errors.nombre ? 'border-red-500' : 'border-blue-500'}`}
          />
          {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
        </div>

        <div className="mb-4">
          <label className="text-white">Correo electronico</label>
          <input
            type="email"
            {...register("correo")}
            className={`mt-1 block w-full p-2 rounded border bg-gray-700 text-white ${errors.correo ? 'border-red-500' : 'border-blue-500'}`}
          />
          {errors.correo && <p className="text-red-500">{errors.correo.message}</p>}
        </div>

        <div className="mb-4">
          <label className="text-white">Contraseña</label>
          <input
            type="password"
            {...register("contrasena")}
            className={`mt-1 block w-full p-2 rounded border bg-gray-700 text-white ${errors.contrasena ? 'border-red-500' : 'border-blue-500'}`}
          />
          {errors.contrasena && <p className="text-red-500">{errors.contrasena.message}</p>}
        </div>

        <div className="mb-4">
          <label className="text-white">Telefono</label>
          <input
            type="text"
            {...register("telefono")}
            className={`mt-1 block w-full p-2 rounded border bg-gray-700 text-white ${errors.telefono ? 'border-red-500' : 'border-blue-500'}`}
          />
          {errors.telefono && <p className="text-red-500">{errors.telefono.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-5"
        >
          Registrar
        </button>
        <button 
          type="button" 
          onClick={() => navigate("/")}
          className="text-white ml-4 mt-5 underline"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
