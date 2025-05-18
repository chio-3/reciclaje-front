import React from "react";
import { FaMedal } from "react-icons/fa";
import inicialIcon from "../../assets/inicial.png";
const pointHistory = [
  { date: "14/04/2025 14:59", action: "Reciclaje: Vidrio", points: "+15 pts" },
  {
    date: "14/04/2025 14:43",
    action: "Registro: Punto Zona",
    points: "+10 pts",
  },
  {
    date: "14/04/2025 13:35",
    action: "Reciclaje: Plástico",
    points: "+12 pts",
  },
  { date: "10/04/2025 08:55", action: "Reciclaje: Cartón", points: "+8 pts" },
  {
    date: "09/04/2025 19:40",
    action: "Registro: Punto EcoCentro",
    points: "+5 pts",
  },
];

const MisPuntos = () => {
  return (
    <div className="text-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Mis puntos</h1>

      {/* Info Summary */}
      <div className="flex flex-col mb-6 gap-4">
        <div className="w-full flex justify-between items-center ">
          <div className="flex ">
            <FaMedal className="mr-3 text-yellow-400" />
            <p className="text-sm">Puntos acumulados</p>
          </div>
          <p className="font-bold">50000+</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex ">
            <FaMedal className="mr-3 text-yellow-400" />
            <p className="text-sm">Nivel</p>
          </div>
          <p className="text-lg">
            <img src={inicialIcon} alt="" />
             Inicial</p>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white text-black rounded-lg p-4">
        <h2 className="font-bold mb-2">Últimas actividades de puntos</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b font-semibold">
              <th className="text-left py-1">Fecha & Hora</th>
              <th className="text-left py-1">Acción</th>
              <th className="text-right py-1">Puntos</th>
            </tr>
          </thead>
          <tbody>
            {pointHistory.map((entry, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="py-1">{entry.date}</td>
                <td className="py-1">{entry.action}</td>
                <td className="py-1 text-right font-semibold">
                  {entry.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MisPuntos;
