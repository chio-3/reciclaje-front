// File: components/OrganicMaterialScreen.jsx
import React from "react";
import { FaCheckCircle, FaBalanceScale, FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MaquinaOrganica() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/menu");
  };

  return (
    <div className="h-screen flex justify-center items-center">
        <div className="bg-green-800 text-white w-[400px] mx-auto rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-green-300 mb-4">
              <FaCheckCircle className="text-xl mr-2" />
              <span>Esta máquina acepta materiales ORGÁNICOS.</span>
            </div>
            <p className="mb-4">Por favor, introduzca su residuo orgánico en la balanza.</p>
            <div className="flex items-center mb-2">
              <FaBalanceScale className="mr-2" /> Peso detectado: <span className="ml-1 font-bold">0,0 kg</span>
            </div>
            <div className="flex items-center">
              <FaUserCheck className="mr-2" /> Registrado en su cuenta correctamente.
            </div>
          </div>
    
          <button onClick={handleFinish} className="w-full bg-white text-green-800 font-bold py-2 rounded mt-6">
            Terminar / Volver al Menú
          </button>
        </div>
    </div>
  );
}
