import { useState } from "react";
import organicIcon from "./../../assets/image1.png";
import inorganicIcon from "./../../assets/image2.png";
import recycleIcon from "./../../assets/image3.png";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/SuccessAlert";

export default function RegisterRecycleModal() {
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
        if (selectedType === "organico") {
          navigate("/registrar-organico");
        } else if (selectedType === "inorganico") {
          navigate("/registrar-inorganico");
        }
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
        <img src={recycleIcon} alt="Recycle" className="w-10 h-10 mt-1" />
        <p className="text-sm">
          Bienvenido, por favor seleccione el tipo de producto
        </p>
      </div>

      {/* Options */}
      <div className="space-y-4 mb-6">
        {/* Orgánico */}
        <div
          onClick={() => handleSelect("organico")}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition 
            ${
              selectedType === "organico" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
        >
          <img src={organicIcon} alt="Orgánico" className="w-8 h-8" />
          <span className="text-green-400 font-medium">Orgánico</span>
        </div>

        {/* Inorgánico */}
        <div
          onClick={() => handleSelect("inorganico")}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition 
            ${
              selectedType === "inorganico"
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
        >
          <img src={inorganicIcon} alt="Inorgánico" className="w-8 h-8" />
          <span className="text-gray-300 font-medium">
            Inorgánico reciclables
          </span>
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
          onClick={() => navigate("/inicio")}
          className="bg-red-800 hover:bg-red-900 text-white py-1.5 px-4 rounded-md"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
