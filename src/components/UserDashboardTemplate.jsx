import React from "react";
import { useNavigate } from "react-router-dom";

export const UserDashboardTemplate = ({ children }) => {
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
            <span className="text-white font-bold">Juan Perez</span>
          </div>
        </header>

        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <aside className="col-span-1 bg-zinc-900 p-6 rounded-lg shadow-md">
            <nav className="">
              <ul className="space-y-3">
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/registrar-reciclaje")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Registrar reciclaje
                  </button>
                </li>
                
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/puntos-reciclaje")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Visualizar puntos de reciclaje
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/reporte-impacto")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Reporte de impacto personal
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/canjear-recompensa")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Canjear recompensa
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/puntos-acumulados")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Puntos acumulados
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick={() => navigate("/catalogo")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Catálogo
                  </button>
                </li>
                <li className="w-full ">
                  <button
                   onClick={() => navigate("/nivel")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Nivel
                  </button>
                </li>
                <li className="w-full ">
                  <button
                    onClick ={() => navigate("/editar-perfil")}
                    className="w-full bg-green-600 hover:bg-green-700  text-white py-2 px-4 rounded"
                  >
                    Editar perfil
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
