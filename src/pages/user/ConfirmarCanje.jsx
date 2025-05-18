import React from "react";
import { FaTicketAlt } from "react-icons/fa";

const ConfirmarCanje = () => {
  return (
    <div className="text-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Confirmar canje</h1>

      {/* Reward Card */}
      <div className="bg-green-600 rounded-lg p-4 text-white flex items-center justify-between mb-6 shadow-md">
        <div className="flex items-center gap-3">
          <FaTicketAlt className="text-3xl" />
          <div>
            <h2 className="font-bold text-white">Vale de compra</h2>
            <p>$100 en Supermercado ecológico</p>
          </div>
        </div>
        <div className="text-3xl font-bold text-green-200">$</div>
      </div>

      {/* Details */}
      <div className="text-sm mb-6">
        <p className="font-semibold mb-2">Detalles del canje:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Este vale de compra de Bs 700 puede ser utilizado en los siguientes supermercados ecológicos: <strong>HIPERMAXI</strong> y <strong>ICE NORTE</strong> (en sucursales participantes).</li>
          <li>Válido hasta: <strong>31 de diciembre de 2024</strong>.</li>
          <li>El canje es inmediato, no reembolsable y será registrado en tu historial.</li>
          <li>El código de canje será enviado a tu correo electrónico registrado o estará disponible en tu cuenta, en la sección “Mis Canjes”.</li>
        </ul>
        <p className="mt-4 font-bold text-white">
          ⚠️ Importante:<br />
          <span className="text-gray-200">Revisa los supermercados participantes antes de confirmar, ya que este canje no se puede deshacer.</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4">
        <button className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded text-white font-bold">
          Canjear
        </button>
        <button className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded text-white font-bold">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ConfirmarCanje;
