import React from "react";

const DescriptionSection = () => {
  return (
    <>
      {/* Contenedor semántico */}
      <section>
        {/* Contenedor */}
        <div className="container mx-auto flex px-8 lg:py-20 p-14 md:flex-row flex-col items-center">
          {/* texto */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              fugit praesentium fuga saepe sapiente, perspiciatis nihil maxime
              aspernatur quibusdam incidunt optio velit voluptatum iusto
              laudantium tenetur. Distinctio pariatur natus iusto!
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
        </div>
        {/* Contenedor */}
        <div className="container mx-auto flex px-8 lg:py-20 p-14 md:flex-row flex-col items-center">
          {/* texto */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              fugit praesentium fuga saepe sapiente, perspiciatis nihil maxime
              aspernatur quibusdam incidunt optio velit voluptatum iusto
              laudantium tenetur. Distinctio pariatur natus iusto!
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
        </div>

        {/* Contenedor */}
        <div className="container mx-auto flex px-8 lg:py-20 p-14 md:flex-row flex-col items-center">
          {/* texto */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              fugit praesentium fuga saepe sapiente, perspiciatis nihil maxime
              aspernatur quibusdam incidunt optio velit voluptatum iusto
              laudantium tenetur. Distinctio pariatur natus iusto!
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
        </div>
      </section>
    </>
  );
};

export default DescriptionSection;
