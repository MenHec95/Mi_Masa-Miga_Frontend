// 📁 src/pages/DashboardPage.jsx
import { useAuth } from "../hooks/useAuth";
import { AdminDashboardPage } from "./AdminDashboardPage";
import { UserDashboardPage } from "./UserDashboardPage";

export const DashboardPage = () => {
  const { user } = useAuth();

  // Renderizar dashboard según el rol
  if (user?.role === "ADMIN") {
    return <AdminDashboardPage />;
  }

  return <UserDashboardPage />;
};
