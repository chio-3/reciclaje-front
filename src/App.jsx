import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import RegistrationForm from "./pages/auth/Registro";
import { UserDashboardTemplate } from "./components/UserDashboardTemplate";
import { Inicio } from "./pages/user/Inicio";
import RecyclingRegistration from "./pages/user/RegistrarReciclaje";
import RegistrarInorganico from "./pages/user/RegistrarInorganico";
import RegistrarOrganico from "./pages/user/RegistrarOrganico";
import VisualizarPuntos from "./pages/user/VisualizarPuntos";
import ReporteImpacto from "./pages/user/Reporte";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<RegistrationForm />} />
        <Route
          path="/inicio"
          element={
            <UserDashboardTemplate>
              <Inicio />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/registrar-reciclaje"
          element={
            <UserDashboardTemplate>
              <RecyclingRegistration />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/registrar-organico"
          element={
            <UserDashboardTemplate>
              <RegistrarOrganico />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/registrar-inorganico"
          element={
            <UserDashboardTemplate>
              <RegistrarInorganico />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/puntos-reciclaje"
          element={
            <UserDashboardTemplate>
              <VisualizarPuntos />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/reporte-impacto"
          element={
            <UserDashboardTemplate>
              <ReporteImpacto />
            </UserDashboardTemplate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
