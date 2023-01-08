import React from "react";

const Axis = () => {
  return (
    <>
      {" "}
      <section className="bg-white border-b py-8 w-full" id="axis">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Our working Axis
          </h2>
          <div className="w-full mb-[100px]">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Electrical hardware
              </h3>
              <p className="text-gray-600 mb-8 text-xl">
                We manufacture the electronics associated with collecting the
                data and executing the control actions.
              </p>
            </div>
            <div className="w-full sm:w-1/2  ">
              <div className="  max-w-[90%]  z-20 m-auto md:m-[30px] rounded-lg overflow-hidden w-[400px]">
                <img className=" w-full  z-0 grad  h-[250px] " src="iot.webp" />
              </div>
              {/* <div id="show_bg_2">something here</div> */}
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="  max-w-[90%]  z-20 m-auto md:m-[30px] rounded-lg overflow-hidden w-[400px]">
                <img className=" w-full  z-0 grad  h-[250px]" src="elec.jpg" />
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  IOT
                </h3>
                <p className="text-gray-600 mb-8 text-xl">
                  Transferring live data wired or wireless from data sources to
                  where your system admins are
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Web/mobile apps
              </h3>
              <p className="text-gray-600 mb-8 text-xl">
                handy interfaces for your system monitoring and control
              </p>
            </div>
            <div className="w-full sm:w-1/2  ">
              <div className="  max-w-[90%]  z-20 m-auto md:m-[30px] rounded-lg overflow-hidden w-[400px]">
                <img className=" w-full  z-0 grad  h-[250px] " src="apps.png" />
              </div>
              {/* <div id="show_bg_2">something here</div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Axis;
