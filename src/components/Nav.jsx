import React from 'react'
import { Link } from 'react-scroll'


const Nav = () => {
  return (
    <nav className="z-20 bg-white dark:bg-slate-800 fixed md:static w-full md:w-auto boreder-b md:border-none shadow-lg md:shadow-none dark:border-none ">
      {/* Contenedor exterior del nav */}
      <div className="p-6 container mx-auto">
        <div className="flex items-center justify-between">
          {/* Contenedores interiores */}
          {/* Logo e Imagen */}
          <div className="z-20 group cursor-pointer">
            <Link to="" className="flex items-center">
              <img
                src="firefox.png"
                alt=""
                className="w-14 h-14 group-hover:scale-125 transition-all duration-500 "
              />
              <span className="text-3xl ml-3">
                <span className="font-bold">Firefox</span> Browser
              </span>
            </Link>
          </div>
          {/* Cuerpo del menú */}
          <div>
            {/* Botón responsive */}
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              className="peer"
              hidden
            />
            <label
              htmlFor="hamburger"
              className="peer-checked:hamburger block z-20 cursor-pointer md:hidden transition-all duration-500 p-5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded"
            >
              <div className="h-0.5 w-6 bg-black dark:bg-white transtion duration-500"></div>
              <div className="h-0.5 w-6 bg-black dark:bg-white transtion duration-500 mt-2"></div>
            </label>
            {/* Cuerpo de los enlaces */}
            <div className="bg-white dark:bg-slate-900 dark:md:bg-slate-800 w-3/5 shadow-lg transition duration-500 flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row">
              {/* Enlaces */}
              <div className="px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0 w-full">
                <Link
                  to="caracteristicas"
                  smooth={true}
                  duration={800}
                  className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition duration-500 hover:bg-blue-500"
                >
                  Características
                </Link>
                <Link
                  to="instalacion"
                  smooth={true}
                  duration={800}
                  className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition duration-500 hover:bg-yellow-400"
                >
                  Instalación
                </Link>
                <Link
                  to="componentes"
                  smooth={true}
                  duration={800}
                  className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition duration-500 hover:bg-indigo-500"
                >
                  Componentes
                </Link>
              </div>
              {/* Botón */}
              <div className="md:hidden block border-t py-8  px-6 md:border-t-0 dark:border-slate-700 md:py-0 md:pr-0 md:pl-6">
                <Link to='' className="block px-6 py-2 rounded text-center text-white text-lg font-semibold bg-blue-500 transition-all hover:bg-blue-600 duration-500">
                  Descargar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav