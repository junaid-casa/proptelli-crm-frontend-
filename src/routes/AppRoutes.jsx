import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import RoleManagementPage from "../pages/RoleManagementPage";
import Dashboard from "../pages/Dashboard";
import RoleInfoPage from "../pages/RoleInfoPage";
import RoleCreatePage from "../pages/RoleCreatePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roles" element={<RoleManagementPage />} />
        <Route path="/roleinfo" element={<RoleInfoPage />} />
        <Route path="/createrole" element={<RoleCreatePage />} />
      </Route>

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
