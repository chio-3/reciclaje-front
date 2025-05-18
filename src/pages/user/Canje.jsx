import React from "react";

const canjes = [
  {
    id: "80",
    usuario: "Ana Ruiz",
    recompensa: "Descuento 20%",
    puntos: 50000,
    fecha: "15/03/25 20:00",
    estado: "Completo",
  },
  {
    id: "00",
    usuario: "Ana Ruiz",
    recompensa: "Tours Vacas Totora",
    puntos: 50000,
    fecha: "15/03/25 20:00",
    estado: "Pendiente",
  },
  {
    id: "92",
    usuario: "Ana Ruiz",
    recompensa: "Fexpo Entrada",
    puntos: 50000,
    fecha: "15/03/25 20:00",
    estado: "Completo",
  },
  {
    id: "09",
    usuario: "Ana Ruiz",
    recompensa: "Descuento 20%",
    puntos: 50000,
    fecha: "15/03/25 20:00",
    estado: "Completo",
  },
];

const CanjeHistorial= () => {
  return (
    <div className="text-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Canje</h1>

      <div className="bg-white text-black rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left table-auto">
          <thead>
            <tr className="bg-gray-200 text-black font-semibold">
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Usuario</th>
              <th className="px-3 py-2">Recompensa</th>
              <th className="px-3 py-2">Puntos</th>
              <th className="px-3 py-2">Fecha</th>
              <th className="px-3 py-2">Estado</th>
              <th className="px-3 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {canjes.map((item, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="px-3 py-2">{item.id}</td>
                <td className="px-3 py-2">{item.usuario}</td>
                <td className="px-3 py-2">{item.recompensa}</td>
                <td className="px-3 py-2">{item.puntos}</td>
                <td className="px-3 py-2">{item.fecha}</td>
                <td className="px-3 py-2">{item.estado}</td>
                <td className="px-3 py-2">
                  <button className="bg-blue-200 text-blue-800 font-semibold text-xs px-3 py-1 rounded-full border border-blue-500 hover:bg-blue-300 transition">
                    Mis puntos
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CanjeHistorial;
