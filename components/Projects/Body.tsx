import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import VideoContentYT from "react-video-content-youtube";

const Body: React.FC = () => {
  return (
    <>
      <div className="bg-white text-slate-600 text-2xl max-w-[90vw] p-[20px] m-auto my-[50px]">
        Cng Automation System Datasheet Our CNG Electra-Z system is an IOT
        solution meant for the natural gas vehicles and its charging stations.
        The system is an implementation to build an integration cylinder and
        vehicle verification system along with gas charging control system
        solution for gas station. This system will protect the gas stations and
        the vehicles from catastrophic accidents and will ensure the safety of
        the whole system. The system automates the verification process without
        any human intervention using a secured database.
      </div>

      <div className=" max-w-[90vw] p-[20px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <ul className="text-xl">
              <li className="flex ml-5 my-5">
                <div className="h-[20px] w-[20px] min-h-[20px] min-w-[20px] g gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center text-white">
                  <FaPlus />
                </div>
                <div className="text-gray-600 font-bold ">
                  Operator scans Cylinder QR code using a smart Android based
                  mobile application.{" "}
                </div>
              </li>
              <li className="flex ml-5 my-5">
                <div className="h-[20px] w-[20px] min-h-[20px] min-w-[20px] gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center text-white">
                  <FaPlus />
                </div>
                <div className="text-gray-600 font-bold ">
                  Once operator sends QR data it receives a successful or
                  failure to verify with the car numbers. In case of success,
                  the app sends an authorization message to the controller
                  entered by the operator to allow charging the car.
                </div>
              </li>
              <li className="flex ml-5 my-5">
                <div className="h-[20px] w-[20px] min-h-[20px] min-w-[20px] g gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center text-white">
                  <FaPlus />
                </div>
                <div className="text-gray-600 font-bold ">
                  The microcontroller receives a verification to fuel and opens
                  nozzle to start fueling.{" "}
                </div>
              </li>
              <li className="flex ml-5 my-5">
                <div className="h-[20px] w-[20px] min-h-[20px] min-w-[20px] g gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center text-white">
                  <FaPlus />
                </div>
                <div className="text-gray-600 font-bold ">
                  The microcontroller receives a verification to fuel and opens
                  Interfaces with existing CNG dispensers, readily implemented
                  on all types of NGV’s
                </div>
              </li>
              <li className="flex ml-5 my-5">
                <div className="h-[20px] w-[20px] min-h-[20px] min-w-[20px] g gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center text-white">
                  <FaPlus />
                </div>
                <div className="text-gray-600 font-bold ">
                  Certified for use in hazardous locations.
                </div>
              </li>
              <li className="flex ml-5 my-5">
                <div className="h-[20px] w-[20px] min-h-[20px] min-w-[20px] g gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center text-white">
                  <FaPlus />
                </div>
                <div className="text-gray-600 font-bold ">
                  Reliable & secure means of identifying certified & inspected
                  vehicles.
                </div>
              </li>
              <li className="flex ml-5 my-5">
                <div className="h-[20px] w-[20px] min-h-[20px] min-w-[20px] g gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center text-white">
                  <FaPlus />
                </div>
                <div className="text-gray-600 font-bold ">
                  Secure central database assures traceability of all vehicle
                  systems.
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-start ml-5">
              <a href="/DataSheetEZ.pdf" download="datasheet_1.pdf">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  <div className="flex gap-3">
                    DATASHEET
                    <FaFileDownload className=" text-xl" />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div>
            <VideoContentYT src={"kUmS_5L15l8"} params={{ autoPlay: false }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
