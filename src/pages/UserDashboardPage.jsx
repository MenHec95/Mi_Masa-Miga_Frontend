// 📁 src/pages/UserDashboard.jsx
import { useAuth } from "../hooks/useAuth";

export const UserDashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow rounded-lg p-6 mb-6 text-white">
          <h1 className="text-3xl font-bold">¡Hola, {user?.name}!</h1>
          <p className="mt-2">Bienvenido a tu espacio personal de Mi Masa Miga</p>
        </div>

        {/* User Info Card */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Mi Perfil</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Nombre</div>
                <div className="font-medium">{user?.name}</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-3 mr-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Email</div>
                <div className="font-medium">{user?.email}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mis Comentarios */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-purple-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Mis Comentarios</h3>
              </div>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">0</span>
            </div>
            <p className="text-gray-600 mb-4">Gestiona tus comentarios en las recetas y artículos</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium">Ver mis comentarios</button>
          </div>

          {/* Mis Favoritos */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-red-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Recetas Favoritas</h3>
              </div>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">0</span>
            </div>
            <p className="text-gray-600 mb-4">Accede rápido a tus recetas guardadas</p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium">Ver favoritos</button>
          </div>

          {/* Archivos Digitales - Futuro */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow opacity-75">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-yellow-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Mis Archivos Digitales</h3>
              </div>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">Próximamente</span>
            </div>
            <p className="text-gray-600 mb-4">Guías, PDFs y material exclusivo que hayas adquirido</p>
            <button disabled className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-md font-medium cursor-not-allowed">
              Disponible pronto
            </button>
          </div>

          {/* Mis Clases - Futuro */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow opacity-75">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">Mis Clases</h3>
              </div>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">Próximamente</span>
            </div>
            <p className="text-gray-600 mb-4">Clases reservadas y tu historial de aprendizaje</p>
            <button disabled className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-md font-medium cursor-not-allowed">
              Disponible pronto
            </button>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-6 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Actividad Reciente</h2>
          <div className="text-center py-8 text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="mt-2">No tienes actividad reciente</p>
            <p className="text-sm">Comienza explorando recetas y dejando comentarios</p>
          </div>
        </div>
      </div>
    </div>
  );
};
