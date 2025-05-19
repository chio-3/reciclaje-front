// File: components/InorganicMaterialSelection.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MaquinaInorganica() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/inorganico/registro");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-green-800 text-white w-[400px]  mx-auto rounded-xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-green-300 mb-4">
            <FaCheckCircle className="text-xl mr-2" />
            <span>Esta máquina acepta materiales INORGÁNICOS.</span>
          </div>
          <p className="mb-4">Seleccione el tipo de material</p>
  
          <div className="space-y-2">
            <button className="w-full bg-white text-green-800 font-bold py-2 rounded hover:bg-green-200 hover:text-green-900 transition duration-300" >PLÁSTICO</button>
            <button className="w-full bg-white text-green-800 font-bold py-2 rounded hover:bg-green-200 hover:text-green-900 transition duration-300">VIDRIO</button>
            <button className="w-full bg-white text-green-800 font-bold py-2 rounded hover:bg-green-200 hover:text-green-900 transition duration-300">PAPEL</button>
            <button className="w-full bg-white text-green-800 font-bold py-2 rounded hover:bg-green-200 hover:text-green-900 transition duration-300">METALES</button>
          </div>
        </div>
  
        <button onClick={handleConfirm} className="w-full bg-white text-green-800 font-bold py-2 rounded mt-6">
          Confirmar
        </button>
      </div>
    </div>
  );
}
