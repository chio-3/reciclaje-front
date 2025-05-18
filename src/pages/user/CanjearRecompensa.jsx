import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Form schema
const schema = yup
  .object({
    categoria: yup.string().required("Selecciona una categoría"),
  })
  .required();

const CanjearRecompensa = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Categoría seleccionada:", data.categoria);
  };

  return (
    <div className=" text-white min-h-screen">
      <h1 className="text-xl font-bold mb-2">Canjear recompensa</h1>
      <p className="mb-4">Canjea tus puntos por beneficios sustentables</p>

      <div className="mb-4">
        <span className="font-semibold">Puntos disponibles:</span> 5000
        <span className="ml-4 underline cursor-pointer">Historial</span>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-green-100 p-4 rounded text-black mb-6"
      >
        <label className="block font-bold mb-2">Categorías de puntos</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {[
            "Todos",
            "Alimentos",
            "Entretenimiento",
            "Compras",
            "Servicios",
            "Eventos",
          ].map((cat) => (
            <label key={cat} className="inline-block">
              <input
                type="radio"
                value={cat}
                {...register("categoria")}
                className="hidden peer"
              />
              <div className="peer-checked:bg-green-600 peer-checked:text-white border rounded px-3 py-1 cursor-pointer">
                {cat}
              </div>
            </label>
          ))}
        </div>
        {errors.categoria && (
          <p className="text-red-500">{errors.categoria.message}</p>
        )}
        {/* <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded mt-2"
        >
          Filtrar
        </button> */}
      </form>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-yellow-400">
          DESTACADOS COCHABAMBA:
        </h2>
        <ul className="list-none ml-5 mt-2 space-y-2">
          <li className="text-white">
            <span className="bg-blue-600 px-3 py-0 mr-2 rounded-full"></span>1
            día en Parque Ecoturístico Pairumani (1,200 pts)
          </li>
          <li className="text-white">
            <span className="bg-green-600 px-3 py-0 mr-2 rounded-full"></span>
            Taller de compostaje en Queru Queru (500 pts)
          </li>
          <li className="text-white">
            <span className="bg-yellow-600 px-3 py-0 mr-2 rounded-full"></span>
            Vale $50 en Feria Agroecológica (350 pts)
          </li>
        </ul>
      </div>

      <h3 className="text-blue-600 font-extrabold text-lg mb-4">
        PROMOCIONES GANA MAS!!!
      </h3>

      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
        Ver catálogo completo
      </button>
    </div>
  );
};

export default CanjearRecompensa;
