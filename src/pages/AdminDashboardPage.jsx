// 📁 src/pages/AdminDashboard.jsx
import { useAuth } from "../hooks/useAuth";

export const AdminDashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 shadow rounded-lg p-6 mb-6 text-white">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <p className="mt-2">Bienvenido, {user?.name} - Gestiona tu blog de masa madre</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-sm text-gray-600 mb-1">Total Posts</div>
            <div className="text-3xl font-bold text-gray-900">12</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-sm text-gray-600 mb-1">Comentarios</div>
            <div className="text-3xl font-bold text-gray-900">45</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-sm text-gray-600 mb-1">Usuarios</div>
            <div className="text-3xl font-bold text-gray-900">23</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-sm text-gray-600 mb-1">Vistas</div>
            <div className="text-3xl font-bold text-gray-900">1.2k</div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Crear Post */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Crear Post</h3>
            </div>
            <p className="text-gray-600 mb-4">Crea una nueva receta o artículo para tu blog</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium">Nuevo Post</button>
          </div>

          {/* Gestionar Posts */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Mis Posts</h3>
            </div>
            <p className="text-gray-600 mb-4">Edita, publica o elimina tus publicaciones</p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium">Ver Posts</button>
          </div>

          {/* Comentarios */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 rounded-full p-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Comentarios</h3>
            </div>
            <p className="text-gray-600 mb-4">Modera y responde comentarios</p>
            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md font-medium">Gestionar</button>
          </div>

          {/* Categorías */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 rounded-full p-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Categorías</h3>
            </div>
            <p className="text-gray-600 mb-4">Organiza tus posts por categorías</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium">Gestionar</button>
          </div>

          {/* Usuarios */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 rounded-full p-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Usuarios</h3>
            </div>
            <p className="text-gray-600 mb-4">Gestiona usuarios y roles</p>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium">Ver Usuarios</button>
          </div>

          {/* Configuración */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 rounded-full p-3">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Configuración</h3>
            </div>
            <p className="text-gray-600 mb-4">Ajustes generales del blog</p>
            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md font-medium">Configurar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
