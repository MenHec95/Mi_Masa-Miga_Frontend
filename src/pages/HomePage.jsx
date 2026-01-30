// 📁 src/pages/HomePage.jsx
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Bienvenido a</span>
            <span className="block text-blue-600">Mi Masa Miga</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Descubre el arte de la masa madre y la panadería artesanal. Recetas, técnicas y consejos para crear el pan perfecto.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/register"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Comenzar
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/login"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Blog</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Todo sobre masa madre</p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Recetas</div>
                <p className="mt-2 text-base text-gray-500">Aprende a hacer pan de masa madre desde cero con nuestras recetas paso a paso.</p>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Técnicas</div>
                <p className="mt-2 text-base text-gray-500">Domina las técnicas de amasado, fermentación y horneado profesional.</p>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Consejos</div>
                <p className="mt-2 text-base text-gray-500">Tips y trucos para resolver problemas comunes y mejorar tus panes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
