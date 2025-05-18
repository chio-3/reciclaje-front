import { useState } from "react";
import inorganicoIcon from "./../../assets/image2.png";
import plasticoIcon from "./../../assets/image4.png";
import vidrioIcon from "./../../assets/image5.png";
import cartonIcon from "./../../assets/image6.png";
import metalIcon from "./../../assets/image7.png";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/SuccessAlert";

export default function RegistrarOrganico() {
  const [selectedType, setSelectedType] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleSelect = (type) => {
    setSelectedType(type);
  };
  const handleConfirm = () => {
    if (selectedType) {
      setShowAlert(true);
      // Optional: auto-hide after 3 seconds
      setTimeout(() => {setShowAlert(false)
        navigate("/registrar-reciclaje")
      }, 3000);
    }
  };
  return (
    <div className="text-white rounded-xl w-full max-w-md bg-zinc-900 p-6">
      {showAlert && <SuccessAlert message="Reciclaje registrado" />}
      {/* Title */}
      <h2 className="text-xl font-bold underline decoration-sky-400 underline-offset-4 mb-4">
        Registrar reciclaje
      </h2>

      {/* Message */}
      <div className="flex items-start gap-2 mb-6">
        <img src={inorganicoIcon} alt="Recycle" className="w-10 h-10 mt-1" />
        <p className="text-sm">
        Inorganico reciclables                     
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div
          onClick={() => handleSelect("plastico")}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition 
            ${
              selectedType === "plastico" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
        >
          <img src={plasticoIcon} alt="Plastico" className="w-8 h-8" />
          <span className="text-white font-medium">Plastico</span>
        </div>
        <div
          onClick={() => handleSelect("vidrio")}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition 
            ${
              selectedType === "vidrio" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
        >
          <img src={vidrioIcon} alt="Vidrio" className="w-8 h-8" />
          <span className="text-white font-medium">Vidrio</span>
        </div>
        <div
          onClick={() => handleSelect("carton")}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition 
            ${
              selectedType === "carton" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
        >
          <img src={cartonIcon} alt="Carton" className="w-8 h-8" />
          <span className="text-white font-medium">Papel , Carton</span>
        </div>
        <div
          onClick={() => handleSelect("metal")}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition 
            ${
              selectedType === "metal" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
        >
          <img src={metalIcon} alt="Metal" className="w-8 h-8" />
          <span className="text-white font-medium">Metal</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handleConfirm}
          className="bg-green-600 hover:bg-green-700 text-white py-1.5 px-4 rounded-md"
        >
          Confirmar
        </button>
        <button
          onClick={() => navigate("/registrar-reciclaje")}
          className="bg-red-800 hover:bg-red-900 text-white py-1.5 px-4 rounded-md"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
