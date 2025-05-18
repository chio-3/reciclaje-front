import React from "react";
import { FaMedal } from "react-icons/fa";

const historialData = [
  {
    fecha: "14/04/2025 15:22",
    canjeo: "Vale de compra",
    reciclaje: "",
    registro: "Hipermaxi",
    puntos: "-20 pts",
  },
  {
    fecha: "14/04/2025 15:00",
    canjeo: "",
    reciclaje: "Vidrio",
    registro: "Plaza Colón",
    puntos: "+15 pts",
  },
  {
    fecha: "13/04/2025 20:15",
    canjeo: "Fexpo",
    reciclaje: "",
    registro: "Ice Norte",
    puntos: "-10 pts",
  },
  {
    fecha: "12/03/2025 15:00",
    canjeo: "Cupón tienda",
    reciclaje: "",
    registro: "Fexpo",
    puntos: "-8 pts",
  },
  {
    fecha: "10/03/2025 08:55",
    canjeo: "",
    reciclaje: "Cartón",
    registro: "Laguna Alalay",
    puntos: "+8 pts",
  },
  {
    fecha: "09/03/2025 09:00",
    canjeo: "",
    reciclaje: "Orgánico",
    registro: "Parque Fidel Anze",
    puntos: "+10 pts",
  },
];

const HistorialPuntos = () => {
  return (
    <div className=" text-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Mi historial</h1>

      <div className="flex flex-col mb-6 gap-4">
        <div className="w-full flex justify-between items-center ">
          <div className="flex ">
            <FaMedal className="mr-3 text-yellow-400" />
            <p className="text-sm">Puntos acumulados</p>
          </div>
          <p className="font-bold">50000+</p>
        </div>
      </div>

      <div className="bg-white text-black rounded-md overflow-x-auto">
        <table className="w-full text-sm text-left table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 font-semibold border-b border-gray-300">
              <th className="px-3 py-2">Fecha & Hora</th>
              <th className="px-3 py-2">Canjeo</th>
              <th className="px-3 py-2">Reciclaje</th>
              <th className="px-3 py-2">Registro</th>
              <th className="px-3 py-2">Puntos</th>
            </tr>
          </thead>
          <tbody>
            {historialData.map((entry, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-3 py-2">{entry.fecha}</td>
                <td className="px-3 py-2 font-medium">{entry.canjeo}</td>
                <td className="px-3 py-2 font-medium">{entry.reciclaje}</td>
                <td className="px-3 py-2">{entry.registro}</td>
                <td
                  className={`px-3 py-2 font-bold ${
                    entry.puntos.startsWith("+") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {entry.puntos}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialPuntos;
