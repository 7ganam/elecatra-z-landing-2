import React from "react";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <>
      <section className="bg-white  py-8" id="projects">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12 justify-center">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Projects
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink max-w-[500px]">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <img
                className=" w-full  z-0 grad  h-[300px] mb-5 object-cover"
                src="RTU.jpg"
              />
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  Pro. 1
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Data Monitoring and control system.
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  integrated system for monitoring and controlling medium and
                  low voltage devices.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <Link href="/projects/project1">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink max-w-[500px]">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <img
                className=" w-full  z-0 grad  h-[300px] mb-5"
                src="apps.png"
              />
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  Pro. 2
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  CNG system.
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Integrated system for monitoring natural gas vehicles
                  maintenance and operation.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
