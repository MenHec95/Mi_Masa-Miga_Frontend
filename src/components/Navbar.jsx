// 📁 src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Mi Masa Miga
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Inicio
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">Hola, {user?.name}</span>
                  <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Cerrar Sesión
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Iniciar Sesión
                </Link>
                <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
