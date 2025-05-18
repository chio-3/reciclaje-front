import React from "react";
import { FaMedal } from "react-icons/fa";
import inicialIcon from "../../assets/inicial.png";
const promocionesData = [
  { material: "Plástico PET", puntos: "★ ¡Doble! +20 pts" },
  { material: "Vidrio", puntos: "★ ¡Doble! +16 pts" },
  { material: "Papel / Cartón", puntos: "+5 pts" },
  { material: "Aluminio / Latas", puntos: "+6 pts" },
];

const Promociones= () => {
  return (
    <div className=" text-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">PROMOCIONES</h1>

      {/* Header */}
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
      {/* Promo Content */}
      <div className="bg-green-100 text-black rounded-lg p-4">
        <h2 className="text-xl font-bold text-center mb-2">Recicla Cochabamba</h2>
        <p className="text-center mb-4 font-semibold">
          ¡Gana premios y duplica tus puntos en abril!
        </p>

        {/* Table */}
        <table className="w-full mb-4 text-sm text-left">
          <thead>
            <tr className="bg-green-300 text-green-900 font-bold">
              <th className="p-2">Material</th>
              <th className="p-2">Puntos x kilo</th>
            </tr>
          </thead>
          <tbody>
            {promocionesData.map((item, index) => (
              <tr key={index} className="border-b border-green-300">
                <td className="p-2">{item.material}</td>
                <td className="p-2 font-semibold">{item.puntos}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Benefits */}
        <ul className="list-disc list-inside text-sm mb-4 space-y-1">
          <li>Plantines nativos</li>
          <li>Cupones de descuento</li>
          <li>Kits ecológicos</li>
          <li>Sorteo de una bicicleta ecológica</li>
        </ul>

        <p className="text-center text-xs text-gray-700 font-semibold mt-2">
          Válido hasta el 30 de abril
        </p>
        <p className="text-center text-xs text-gray-600 italic">
          Cochabamba limpia, contigo es posible. <br />
          Recicla más, gana más.
        </p>
      </div>
    </div>
  );
};

export default Promociones;
