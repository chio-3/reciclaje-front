import React from "react";

export default function AdminBitacoraUser() {
  const logs = [
    {
      name: "Valeria Gómez",
      date: "15/04/2025 15:20",
      action: "Edición de perfil",
      points: "",
      details: "Cambio de teléfono: 77712345",
    },
    {
      name: "José Marcelo",
      date: "14/04/2025 09:00",
      action: "Canje Botella reutilizable Vikingo",
      points: "-20 pts",
      details: "XFKU01 (Puntoshop)",
    },
    {
      name: "Carla Ríos",
      date: "13/04/2025 10:45",
      action: "Reciclaje Vicio",
      points: "+15 pts",
      details: "5 Kg en Punto EcoCentro",
    },
    {
      name: "Luis Méndez",
      date: "13/04/2025 10:00",
      action: "Registro: Punto Zona Sur",
      points: "",
      details: "Nueva ubicación guardada",
    },
    {
      name: "Andrea Quiroga",
      date: "12/04/2025 16:20",
      action: "Canje: tienda ecológica",
      points: "-30 pts",
      details: "Uso 12/04/2025",
    },
    {
      name: "Elena Fernández",
      date: "08/04/2025 18:00",
      action: "Inicio de sesión",
      points: "",
      details: "Nuevo inicio de sesión desde Android",
    },
  ];

  return (
    <div className="min-h-screen text-white ">
      <h1 className="text-2xl font-bold mb-4">Bitacora Usuario</h1>
      <div className="bg-white text-black rounded-xl shadow p-4 space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold">1,250</p>
            <p className="text-sm">Users</p>
          </div>
          <div>
            <p className="text-lg font-bold">34,750</p>
            <p className="text-sm">Total Recycled</p>
          </div>
          <div>
            <p className="text-lg font-bold">8755 Kq</p>
            <p className="text-sm">CO₂ Reduction</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Fecha & Hora</th>
                <th className="px-4 py-2">Acción</th>
                <th className="px-4 py-2">Puntos</th>
                <th className="px-4 py-2">Detalle Adicional</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{log.name}</td>
                  <td className="px-4 py-2">{log.date}</td>
                  <td className="px-4 py-2">{log.action}</td>
                  <td className="px-4 py-2">{log.points}</td>
                  <td className="px-4 py-2">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
      <div className="flex justify-around pt-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg border border-blue-900">Añadir</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg border border-blue-900">Editar</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg border border-blue-900">Eliminar</button>
        </div>
    </div>
  );
}
