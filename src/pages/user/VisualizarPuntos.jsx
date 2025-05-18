import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectOnMapLeaflet from "../../components/LeaFlet";

const schema = yup.object().shape({
  address: yup.string().required("La dirección es requerida"),
  materialType: yup.string().required("Debe seleccionar un tipo de material"),
});

const VisualizarPuntos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert(
      `Buscando puntos de reciclaje para ${data.materialType} cerca de ${data.address}`
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="">
        <h1 className="text-2xl font-bold text-white">
          Visualizar puntos de reciclaje
        </h1>
        <p className="text-gray-300 mt-2">
          Inventario los puntos de reciclaje cercanos
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        {/* Address Input */}
        <div>
          <SelectOnMapLeaflet></SelectOnMapLeaflet>
          {/* <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Ingresa tu dirección:
          </label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-gray-200 focus:outline-none focus:ring-2 ${
              errors.address
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-600 focus:ring-emerald-500"
            }`}
            placeholder="Ej: Av. Principal 123"
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-400">
              {errors.address.message}
            </p>
          )} */}
        </div>

        {/* Material Type Select */}
        <div>
          <label
            htmlFor="materialType"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Seleccione el tipo de material:
          </label>
          <select
            id="materialType"
            {...register("materialType")}
            className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-gray-200 focus:outline-none focus:ring-2 ${
              errors.materialType
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-600 focus:ring-emerald-500"
            }`}
          >
            <option value="">-- Seleccione --</option>
            <option value="plastic">Plástico</option>
            <option value="paper">Papel/Cartón</option>
            <option value="glass">Vidrio</option>
            <option value="metal">Metal</option>
            <option value="organic">Orgánico</option>
          </select>
          {errors.materialType && (
            <p className="mt-2 text-sm text-red-400">
              {errors.materialType.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className=" mb-4 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
          >
            BUSCAR PUNTOS
          </button>
        </div>
      </form>
      {/* Map Section */}
      <div className="min-h-48 bg-gray-700 rounded-lg p-4 border border-gray-600">
        <p className="text-white">
          CENTRO ECOLÓGICO COCHABAMBA (1.5 km)
          <br />
          📍 Av. América #1254, entre Santa Cruz y Jordán
          <br />
          🕒 Lunes a Sábado: 8:30-17:30
          <br />♻ Acepta:Organico
          <br />
          <a href="#" className="text-blue-500 hover:underline">
            CÓMO LLEGAR{" "}
          </a>
        </p>
        <p className="text-white">
          CENTRO ECOLÓGICO COCHABAMBA (1.5 km)
          <br />
          📍 Av. América #1254, entre Santa Cruz y Jordán
          <br />
          🕒 Lunes a Sábado: 8:30-17:30
          <br />♻ Acepta:Organico
          <br />
          <a href="#" className="text-blue-500 hover:underline">
            CÓMO LLEGAR{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default VisualizarPuntos;
