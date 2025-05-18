import React from "react";
import { FaTicketAlt, FaMusic, FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const rewards = [
  {
    icon: <FaTicketAlt className="text-3xl text-white" />,
    title: "Vale de compra",
    description: "$100 en Supermercado ecológico",
  },
  {
    icon: <FaMusic className="text-3xl text-green-400" />,
    title: "EcoFest Cochabamba",
    description: "(25–27 oct 2024) Kit de jardinería urbana 🌿",
  },
  {
    icon: <FaUniversity className="text-3xl text-white" />,
    title: "Descuento 50 %",
    description: "Entrada Museo Bolsa ecológica premium",
  },
];

const Catalogo = () => {
    const navigate = useNavigate();
  return (
    <div className=" text-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Catalogo</h1>

      <div className="space-y-4 mb-6 bg-green-400 p-4">
        {rewards.map((reward, index) => (
          <div key={index} className="bg-green-600 rounded-lg p-4 flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-1">{reward.icon}</div>
              <div>
                <h2 className="font-bold text-white">{reward.title}</h2>
                <p className="text-sm text-white">{reward.description}</p>
              </div>
            </div>
            <button onClick={() => navigate("/confirmar-canje")} className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded font-bold text-sm">
              CANJEAR
            </button>
          </div>
        ))}
      </div>

      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-bold">
        Atras
      </button>
    </div>
  );
};

export default Catalogo;
