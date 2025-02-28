import React from "react";
import { motion } from "framer-motion"

const InformationSection = () => {
  return (
    <section className="overflow-hidden">
      <h1
        className="md:text-6xl text-5xl text-center font-medium md:mt-40 md:mb-80 my-28"
        id="caracteristicas"
      >
        Lleva Firefox contigo, rápido, seguro y sincronizado.
      </h1>
      <div className="flex px-5 pb-10 md:pb-24 items-center flex-col ">
        {/* SVG e Imagen */}
        <div className="relative w-full flex justify-center items-end ">
          {/* Imagen */}
          <img
            id="caracteristicas"
            src="image_info1.png"
            className="w-4/5 md:w-8/12 h-1/5 mb-10 object-cover object-center rounded-md z-10"
            alt=""
          />
          {/* SVG */}
          <motion.svg
            animate={{
              rotate: [0, 5, -5, 0], // Gira ligeramente de un lado a otro
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20, // Duración de un ciclo de la animación
              repeat: Infinity, // Repetir indefinidamente
              repeatType: "loop", // Repetir de manera cíclica
              ease: "easeInOut", // Tipo de transición
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1242 532"
            className="absolute"
          >
            <path
              fill="none"
              stroke="#ffba2d"
              strokeWidth="2"
              d="M1198.8 232.3c4.7 3 6.1 9.1 3.2 13.8l-.2.3c-2.8 4.5-1.3 10.4 3.2 13.2 4.6 2.8 10.5 1.5 13.4-2.9l.2-.3c3.1-4.7 9.4-6 14.2-3.1 4.8 3 6.3 9.3 3.3 14.1-8.9 14.1-27.8 18.3-42 9.5-14.3-8.8-18.7-27.4-9.8-41.4 3-4.7 9.3-6.2 14.1-3.3l.2.1h.2z"
            ></path>
            <linearGradient
              id="a2"
              x1="1046.5737"
              x2="1180.3937"
              y1="142.2743"
              y2="50.0583"
              gradientTransform="matrix(1 0 0 -1 0 519.0001)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffda65"></stop>
              <stop offset="1" stopColor="#ff9741"></stop>
            </linearGradient>
            <circle cx="1096.9" cy="411.4" r="120.5" fill="url(#a2)"></circle>
            <linearGradient
              id="b2"
              x1="-83.934"
              x2="122.2983"
              y1="-272.8492"
              y2="-30.4322"
              gradientTransform="matrix(.766 -.6428 -.6428 -.766 175.4476 172.2943)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#c857f1"></stop>
              <stop offset="1" stopColor="#2ebffc"></stop>
            </linearGradient>
            <path
              fill="url(#b2)"
              d="M45.1 300.6l323-271C421.4-15.3 501-8.3 545.8 45.1l.2.2c44.8 53.4 37.8 132.9-15.5 177.7l-323 271C154 538.7 74.4 531.8 29.7 478.4l-.2-.2c-44.8-53.3-37.8-132.9 15.6-177.6z"
            ></path>
            <path
              fill="none"
              stroke="#ff008b"
              strokeWidth="2"
              d="M130.5 193.8L522.4 58.9c52.9-18.2 110.5 9.9 128.7 62.8h0c18.2 52.9-9.9 110.5-62.8 128.7L196.5 385.3c-52.9 18.2-110.5-9.9-128.7-62.8h0c-18.3-52.9 9.8-110.5 62.7-128.7z"
            ></path>
            <circle cx="811.9" cy="81.2" r="12" fill="#ff008b"></circle>
            <linearGradient
              id="c2"
              x1="733.0189"
              x2="647.999"
              y1="-193.4654"
              y2="-16.5744"
              gradientTransform="scale(1 -1) rotate(32.997 1111.38555617 211.5247949)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f80089"></stop>
              <stop offset="1" stopColor="#b833e1"></stop>
            </linearGradient>
            <path
              fill="url(#c2)"
              d="M678 256.3L981.8 59.1c58.4-37.9 136.5-21.3 174.5 37.1l.1.2c37.9 58.4 21.3 136.5-37.1 174.5L815.5 468.1C757.1 506 679 489.4 641.1 431l-.1-.2c-38-58.4-21.4-136.5 37-174.5z"
            ></path>
          </motion.svg>
        </div>
        {/* Textos */}
        <div className="xl:w-2/3 w-full px-8 xl:px-0 mt-5 md:mt-0 flex justify-between lg:flex-row flex-col gap-10">
          <div className="mt-20 md:mt-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium ">
              Conéctate con tus aplicaciones favoritas
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Integra Firefox con herramientas como Google Drive, Slack y más
              para una experiencia fluida y productiva.
            </p>
          </div>
          <div>
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium ">
              Inicia sesión sin complicaciones
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Guarda y autocompleta contraseñas de forma segura con la
              integración de gestores como Bitwarden y 1Password.
            </p>
          </div>
          <div>
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium ">
              Comparte y colabora fácilmente
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Envía enlaces, guarda artículos y trabaja en equipo con
              extensiones y servicios conectados a tu navegador.
            </p>
          </div>
        </div>
      </div>

      <div id="componentes" className="container mx-auto px-5 pb-24">
        <div className="flex md:flex-row flex-col flex-wrap -mx-4 -mb-10">
          <div className="md:w-1/2 mb-10 px-4 flex flex-col items-center justify-center">
            <div className="h-80 lg:h-96">
              <img
                src="image_info2.png"
                className="object-cover object-center w-full h-full"
                alt=""
              />
            </div>
            <h2 className="text-4xl font-medium mt-10 mb-3 text-center ">
              Colabora sin esfuerzo
            </h2>
            <p className="leading-relaxed text-lg text-gray-400">
              Firefox facilita el trabajo en equipo con herramientas que te
              permiten compartir enlaces, guardar artículos y sincronizar
              marcadores en todos tus dispositivos. Usa extensiones para
              integrarte con plataformas como Notion, Trello o Evernote y
              mantener tu flujo de trabajo organizado.
            </p>
          </div>
          <div className="md:w-1/2 mb-10 px-4 flex flex-col items-center justify-center">
            <div className="h-80 lg:h-96">
              <img
                src="image_info3.png"
                className="object-cover object-center w-full h-full"
                alt=""
              />
            </div>
            <h2 className="text-4xl font-medium mt-10 mb-3 text-center ">
              Automatiza tareas y optimiza tu productividad
            </h2>
            <p className="leading-relaxed text-lg text-gray-400">
              Con la integración de Firefox con plataformas como Zapier e IFTTT,
              puedes automatizar tareas repetitivas, conectar diferentes
              aplicaciones y crear flujos de trabajo personalizados. Desde
              gestionar correos electrónicos hasta organizar tus proyectos en
              herramientas como Trello o Asana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
