import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center relative pt-40">
        {/* Cuerpo */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 md:pb-0 flex flex-col md:items-start md:text-left text-center items-center pb-5">
          {/* Texto */}
          <h1 className="lg:text-5xl text-4xl mb-4 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            dolor illum porro suscipit, perspiciatis quisquam temporibus
            maiores!
          </p>
          {/* Botones */}
          <div className="flex xl:flex-row lg:flex-col md:flex-col flex-wrap w-full justify-center lg:justify-start gap-10 md:gap-0">
            <button className="btn-download">
              <img src="logo_windows.png" className="w-10 h-10" />
              <span className="ml-4 flex flex-col items-start leading-none text-white">
                <span className="text-xs uppercase">Instalar en</span>
                <span className="font-medium text-xl">Windows</span>
              </span>
            </button>
            <button className="btn-download xl:ml-4 md:mt-4 mt-0 xl:mt-0">
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
        <img
          src="image_hero2.svg"
          className="hidden md:block absolute right-0 xl:w-1/2 lg:w-[60%] md:w-[55%]"
          alt=""
        />
          </div>
          {/* Titulo */}
          <div className="container mx-auto md:py-28 pt-28 pb-16 w-10/12 md:w-8/12 ">
              <h1 className="sm:text-5xl text-4xl mb-4 font-normal text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quia ab veniam.</h1>
          </div>
    </>
  );
};

export default Hero;
