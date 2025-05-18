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
import CanjearRecompensa from "./pages/user/CanjearRecompensa";
import Catalogo from "./pages/user/Catalogo";
import ConfirmarCanje from "./pages/user/ConfirmarCanje";
import MisPuntos from "./pages/user/Puntos";
import Promociones from "./pages/user/Promociones";
import CanjeHistorial from "./pages/user/Canje";
import HistorialPuntos from "./pages/user/Historial";
import AdminCanjearRecompensa from "./pages/admin/AdminCanjearRecompensa";
import { AdminDashboardTemplate } from "./components/AdminDashboardTemplate";

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
        <Route
          path="/canjear-recompensa"
          element={
            <UserDashboardTemplate>
              <CanjearRecompensa />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/catalogo"
          element={
            <UserDashboardTemplate>
              <Catalogo />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/confirmar-canje"
          element={
            <UserDashboardTemplate>
              <ConfirmarCanje />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/puntos-acumulados"
          element={
            <UserDashboardTemplate>
              <MisPuntos />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/promociones"
          element={
            <UserDashboardTemplate>
              <Promociones />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/canje"
          element={
            <UserDashboardTemplate>
              <CanjeHistorial />
            </UserDashboardTemplate>
          }
        />
        <Route
          path="/user-historial"
          element={
            <UserDashboardTemplate>
              <HistorialPuntos />
            </UserDashboardTemplate>
          }
        />
         <Route
          path="/admin"
          element={
            <AdminDashboardTemplate>
              <AdminCanjearRecompensa />
            </AdminDashboardTemplate>
          }
        />
      </Routes>
     
    </>
  );
}

export default App;
