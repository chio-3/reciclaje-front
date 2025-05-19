import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminDashboardTemplate = ({ children }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-2 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Reciclaje</h1>
          <div className="flex items-center space-x-4">
            <img
              src="https://avatars.githubusercontent.com/u/431958?v=4"
              alt="User avatar"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-white font-bold">Miguel Lopez</span>
          </div>
        </header>

        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <aside className="col-span-1 bg-zinc-900 p-6 rounded-lg shadow-md">
            <nav className="">
              <ul className="space-y-3">
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/admin")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Editar canje recompensa
                  </button>
                </li>
                
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/admin/catalogo")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Editar catalogo
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/admin/reporte")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Reporte de impacto total
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/admin/editar-reciclaje")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Editar material de reciclaje
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/admin/dashboard")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Dashboar
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/admin/puntos-reciclaje")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Agregar puntos de reciclaje
                  </button>
                </li>
                <li className="w-full ">
                  <button
                   onClick={() => navigate("/admin/bitacora-canje")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Bitacora de canje
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick ={() => navigate("/admin/bitacora-usuario")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Bitacora usuario
                  </button>
                </li>
              </ul>

              <button onClick={() => navigate("/")} className="w-full mt-8 px-4 py-2 bg-red-100 text-red-800 rounded-md font-medium hover:bg-red-200">
                Cerrar sesión
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="col-span-3">
            <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
