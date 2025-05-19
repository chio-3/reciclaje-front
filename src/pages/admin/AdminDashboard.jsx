import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const pieData = [
  { name: "Plástico", value: 45 },
  { name: "Metal", value: 55 },
];
const COLORS = ["#34D399", "#60A5FA"];

const lineData = [
  { name: "Ene", kg: 20 },
  { name: "Feb", kg: 40 },
  { name: "Mar", kg: 60 },
  { name: "Abr", kg: 80 },
];

const barData = [
  { name: "Ene", reciclaje: 25 },
  { name: "Feb", reciclaje: 45 },
  { name: "Mar", reciclaje: 60 },
  { name: "Abr", reciclaje: 75 },
];
const LocationMarker = ({ onSelect }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onSelect({ lat, lng });
    },
  });

  return position ? <Marker position={position} /> : null;
};
export default function AdminDashboard() {
  const [selected, setSelected] = useState(null);
console.log(selected);
  return (
    <div className=" min-h-screen text-white ">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white text-black rounded-xl shadow p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            Dashboard de Reciclaje y Sostenibilidad
          </h2>
          <div className="space-x-2">
            <button className="px-2 py-1 bg-gray-200 rounded">Mes</button>
            <button className="px-2 py-1 bg-gray-200 rounded">Año</button>
          </div>
        </div>

        <div>
          <div className=" grid grid-cols-3 gap-2">
            <div className="border p-4 rounded shadow">
              <h3 className="text-sm font-semibold">Total de Usuarios</h3>
              <p className="text-2xl font-bold">1,200</p>
              <p className="text-green-600 text-sm">Crecimiento Mensual</p>
            </div>

            <div className="border z-50  rounded shadow col-span-1 flex flex-col items-center">
              <h3 className="text-sm font-semibold mb-2">
                Material Más Reciclado
              </h3>
              <div className="relative w-full z-50">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={50}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">Total: 54</span>
              </div>
              </div>
            </div>

            <div className="border p-4 rounded shadow">
              <h3 className="text-sm font-semibold mb-2">Canjeo Más Elegido</h3>
              <ul className="text-sm">
                <li className="flex justify-between">
                  <span>Descuento</span>
                  <span>45%</span>
                </li>
                <li className="flex justify-between">
                  <span>Producto Gratis</span>
                  <span>30%</span>
                </li>
                <li className="flex justify-between">
                  <span>Sorpresa</span>
                  <span>20%</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="border p-4 rounded shadow ">
              <h3 className="text-sm font-semibold mb-2">
                Mapa de Ubicaciones
              </h3>
              <div className="h-64 w-full">
                <MapContainer
                  center={[-17.3975127, -66.1609942]}
                  zoom={13}
                  className="h-full w-full"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  />
                  <LocationMarker onSelect={(coords) => setSelected(coords)} />
                </MapContainer>
              </div>
            </div>
            <div className=" border p-4 rounded shadow">
              <h3 className="text-sm font-semibold mb-2">
                Tendencias Reciclaje
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="kg"
                    stroke="#10B981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded shadow ">
              <h3 className="text-sm font-semibold mb-2">
                Mapa de Ubicaciones
              </h3>
              <ul className="text-sm list-disc list-inside">
                <li>26/04/2025: Nueva ubicación en Cochabamba añadida</li>
                <li>28/04/2025: Reducción de CO₂ registrada</li>
              </ul>
            </div>
            <div className="border p-4 rounded shadow">
              <h3 className="text-sm font-semibold mb-2">
                Tendencias de Reciclaje
              </h3>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="reciclaje" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
