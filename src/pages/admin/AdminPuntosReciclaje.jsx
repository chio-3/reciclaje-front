import React from "react";
import mapIcon from "./../../assets/mapa1.png";
const points = new Array(6).fill({
  name: "Centro ecologico Tiquipaya",
  time: "8:00 am - 19:00pm",
  materials: "Orgánico / Inorgánico"
});

export default function AdminPuntosReciclaje() {
  return (
    <div className=" text-white min-h-screen  space-y-4">
      <h1 className="text-xl font-bold">Agregar puntos de reciclaje</h1>
      <div className="    p-4 shadow">
        <div className="flex text-white justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Puntos</h2>
          <button className="bg-green-500 text-white px-4 py-1 rounded">+ Añadir</button>
        </div>
        <div className="rounded bg-white text-black p-2">
            <div className="overflow-x-auto rounded">
              <table className="w-full text-sm " >
                <thead>
                  <tr className="text-left font-bold border-b">
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Punto</th>
                    <th className="p-2">Horario</th>
                    <th className="p-2">Material</th>
                  </tr>
                </thead>
                <tbody>
                  {points.map((point, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{point.name}</td>
                      <td className="p-2">
                        <button className="flex items-center space-x-2 border px-2 py-1 rounded">
                          <img src={mapIcon} alt="" className="w-6 h-6" />
                          <span className="text-purple-600 font-semibold">Seleccionar ubicación</span>
                        </button>
                      </td>
                      <td className="p-2">{point.time}</td>
                      <td className="p-2">{point.materials}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Editar</button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Eliminar</button>
        </div>
      </div>
    </div>
  );
}