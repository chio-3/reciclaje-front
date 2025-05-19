// File: components/ThankYouScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MaquinaSuccess() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/menu");
  };

  return (
    <div className="h-screen flex justify-center items-center">
   
        <div className="bg-green-100 text-green-900 w-[400px]  mx-auto rounded-xl p-6 flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">¡Gracias por reciclar!</h1>
            <p className="mb-6">Contribuye a cuidar el planeta</p>
            <div className="text-5xl text-green-700 mb-6">❤️</div>
            <button
              onClick={handleContinue}
              className="bg-green-800 text-white font-bold py-2 px-6 rounded shadow"
            >
              Continuar
            </button>
          </div>
        </div>
    </div>
  );
}
