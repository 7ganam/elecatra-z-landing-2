import React from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const Axis = () => {
  return (
    <>
      <section className="bg-white border-b py-8 w-full" id="axis">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Our working Axis
          </h2>
          <div className="w-full mb-[100px]">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <motion.div
            className="flex flex-wrap shadow-2xl rounded-xl mt-[50px]"
            whileHover={{
              scale: 1.1,
              boxShadow: "rgb(0 0 0 / 17%) -1px 5px 8px 9px",
            }}
            transition={{ duration: 0.2 }}
            style={{
              boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
            }}
          >
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Electrical hardware
              </h3>
              <p className="text-gray-600 mb-4 text-xl">
                We manufacture the electronics associated with collecting the
                data and executing the control actions.
              </p>
              <div>
                <ul>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 1</div>
                  </li>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 2</div>
                  </li>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 3</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/2  ">
              <div className="  max-w-[90%]  z-20 my-5 ml-auto mr-5  rounded-lg overflow-hidden w-[400px]">
                <img className=" w-full  z-0 grad  h-[250px] " src="iot.webp" />
              </div>
              {/* <div id="show_bg_2">something here</div> */}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-wrap shadow-2xl rounded-xl mt-[50px]"
            whileHover={{
              scale: 1.1,
              boxShadow: "rgb(0 0 0 / 17%) -1px 5px 8px 9px",
            }}
            transition={{ duration: 0.2 }}
            style={{
              boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
            }}
          >
            <div className="w-full sm:w-1/2  ">
              <div className="  max-w-[90%]  z-20 my-5 mr-auto ml-5  rounded-lg overflow-hidden w-[400px]">
                <img className=" w-full  z-0 grad  h-[250px] " src="elec.jpg" />
              </div>
              {/* <div id="show_bg_2">something here</div> */}
            </div>

            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                IOT
              </h3>
              <p className="text-gray-600 mb-4 text-xl">
                Transferring live data wired or wireless from data sources to
                where your system admins are.
              </p>
              <div>
                <ul>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 1</div>
                  </li>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 2</div>
                  </li>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 3</div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-wrap shadow-2xl rounded-xl mt-[50px]"
            whileHover={{
              scale: 1.1,
              boxShadow: "rgb(0 0 0 / 17%) -1px 5px 8px 9px",
            }}
            transition={{ duration: 0.2 }}
            style={{
              boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
            }}
          >
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Web/mobile apps
              </h3>
              <p className="text-gray-600 mb-4 text-xl">
                handy interfaces for your system monitoring and control.
              </p>
              <div>
                <ul>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 1</div>
                  </li>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 2</div>
                  </li>
                  <li className="flex ml-5">
                    <div className="h-5 w-5 gradient rounded-full mt-[2px] mr-3 mb-3 flex justify-center items-center">
                      <FaPlus />
                    </div>
                    <div className="text-gray-600 font-bold ">Point 3</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/2  ">
              <div className="  max-w-[90%]  z-20 my-5 ml-auto mr-5  rounded-lg overflow-hidden w-[400px]">
                <img className=" w-full  z-0 grad  h-[250px] " src="apps.png" />
              </div>
              {/* <div id="show_bg_2">something here</div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Axis;
