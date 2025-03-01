import React from "react";
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center relative pt-40">
        {/* Cuerpo */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 md:pb-0 flex flex-col md:items-start md:text-left text-center items-center pb-5">
          {/* Texto */}
          <h1 className="lg:text-5xl text-4xl mb-4 font-medium">
            Navega rápido, seguro y sin límites.
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-400">
            Descubre un navegador rápido, privado y personalizable que protege
            tu privacidad mientras exploras la web sin interrupciones.
          </p>
          {/* Botones */}
          <div className="flex xl:flex-row lg:flex-col md:flex-col flex-wrap w-full justify-center lg:justify-start gap-10 md:gap-0">
            <button className="btn-download hover:scale-110 transition-all duration-500">
              <img src="logo_windows.png" className="w-10 h-10" />
              <span className="ml-4 flex flex-col items-start leading-none text-white">
                <span className="text-xs uppercase">Instalar en</span>
                <span className="font-medium text-xl">Windows</span>
              </span>
            </button>
            <button className="btn-download hover:scale-110 transition-all duration-500 xl:ml-4 md:mt-4 mt-0 xl:mt-0">
              <img src="apple-logo.png" className="w-10 h-10" />
              <span className="ml-4 flex flex-col items-start leading-none text-white">
                <span className="text-xs uppercase">Instalar en</span>
                <span className="font-medium text-xl">Mac OS</span>
              </span>
            </button>
          </div>
        </div>
        {/* Imagen */}
        <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 z-10">
          <img
            src="image_hero1.png"
            className="object-cover object-center rouded"
            alt=""
          />
        </div>
        <motion.img
          animate={{
            rotate: [0, 5, -5, 0], // Gira ligeramente de un lado a otro
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 20, // Duración de un ciclo de la animación
            repeat: Infinity, // Repetir indefinidamente
            repeatType: "loop", // Repetir de manera cíclica
            ease: "easeInOut", // Tipo de transición
          }}
          src="image_hero2.svg"
          className="hidden md:block absolute right-0 xl:w-1/2 lg:w-[60%] md:w-[55%]"
          alt=""
        />
      </div>
      {/* Titulo */}
      <div className="container mx-auto md:py-28 pt-28 pb-16 w-10/12 md:w-8/12 ">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut", // Tipo de transición
          }}
          className="sm:text-5xl text-4xl mb-4 font-light text-center leading-tight text-gray-400"
        >
          Con herramientas avanzadas de protección, Firefox te ayuda a mantener
          tu información privada mientras navegas libremente.
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
