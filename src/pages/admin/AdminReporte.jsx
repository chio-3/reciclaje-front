// EnvironmentalReport.jsx
import organicoIcon from "./../../assets/image2.png";
import inorganicoIcon from "./../../assets/image1.png";
import plasticoIcon from "./../../assets/image4.png";
import vidrioIcon from "./../../assets/image5.png";
import cartonIcon from "./../../assets/image6.png";
import metalIcon from "./../../assets/image7.png";

const data = [
  {
    label: "Orgánico",
    value: "40kg",
    icon: organicoIcon,
    color: "bg-green-700",
  },
  {
    label: "Inorgánica",
    value: "60kg",
    icon: inorganicoIcon,
    color: "bg-blue-600",
  },
  {
    label: "Papel ,cartón",
    value: "40kg",
    icon: cartonIcon,
    color: "bg-yellow-600",
  },
  { label: "Metal", value: "50kg", icon: metalIcon, color: "bg-red-600" },
  {
    label: "Plástico",
    value: "50kg",
    icon: plasticoIcon,
    color: "bg-orange-600",
  },
  { label: "Vidrio", value: "20kg", icon: vidrioIcon, color: "bg-emerald-600" },
];

export default function AdminReporte() {
  return (
    <div className="text-white ">
      <h2 className="text-lg font-bold text-center">
        Reporte de impacto ambiental <br />
      </h2>

      <div className="space-y-1">
        <p>Tu impacto ambiental :</p>
        <p className="flex items-center gap-2 text-white">
          ✅ <span>50 kg de CO2 reducidos !!</span>
        </p>
        <p className="flex items-center gap-2 text-white">
          ♻️ <span>120 kg materiales reciclados</span>
        </p>
      </div>

      <div className="space-y-2">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-6 h-6 flex items-center justify-center rounded`}>
              <img src={item.icon} alt="" />
            </div>
            <div className="flex justify-between w-full  border-gray-700 pb-1 text-sm">
              <span className="italic">{item.label}</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
}
