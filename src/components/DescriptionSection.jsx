import React from "react";
import { motion } from "framer-motion"

const DescriptionSection = () => {
  return (
    <>
      {/* Contenedor semántico */}
      <section>
        {/* Contenedor */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container mx-auto flex px-8 lg:py-20 p-14 md:flex-row flex-col items-center"
          id="caracteristicas"
        >
          {/* texto */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
            <motion.h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Personaliza tu navegador con potentes extensiones
            </motion.h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-400">
              Añade funciones y herramientas a Firefox con miles de extensiones.
              Desde bloqueadores de anuncios hasta gestores de contraseñas, haz
              que tu experiencia de navegación se adapte a tus necesidades.
            </p>
          </div>
          {/* imagen */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img
              src="image_content1.svg"
              alt=""
              className="object-cover object-center rounded shadow-xl"
            />
          </div>
        </motion.div>
        {/* Contenedor */}
        <motion.div
          className="container mx-auto flex px-8 lg:py-20 p-14 md:flex-row flex-col items-center"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* texto */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Navega a máxima velocidad sin interrupciones
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-400">
              Firefox está optimizado para ofrecer un rendimiento rápido y
              eficiente. Carga páginas en segundos, usa menos memoria y disfruta
              de una experiencia fluida en todos tus dispositivos.
            </p>
          </div>
          {/* imagen */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-first">
            <img
              src="image_content2.svg"
              alt=""
              className="object-cover object-center rounded"
            />
          </div>
        </motion.div>

        {/* Contenedor */}
        <motion.div
          className="container mx-auto flex px-8 lg:py-20 p-14 md:flex-row flex-col items-center"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* texto */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Sincroniza tu navegación en todos tus dispositivos
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-400">
              Accede a tus marcadores, contraseñas e historial desde cualquier
              lugar. Con Firefox, tu experiencia de navegación se mantiene
              conectada y segura en móviles, tablets y computadoras.
            </p>
          </div>
          {/* imagen */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img
              src="image_content3.png"
              alt=""
              className="object-cover object-center rounded"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default DescriptionSection;
