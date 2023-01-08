import React from "react";

const TimeLine = () => {
  return (
    <>
      <section
        className="bg-white border-b py-8 w-full bg-gray-100"
        id="solutions"
      >
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 ">
          Our Solutions
        </h2>
        <div className="w-full mb-[100px]">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="container m-auto  max-w-[1200px]">
          <div className="flex flex-col md:flex-row">
            <div className="h-[300px] grow flex justify-start relative flex-col items-center ">
              <div className="hidden md:block absolute h-3 bg-yellow-400 w-1/2 top-[40px] right-0 z-0"></div>
              <div className="h-[100px] w-[100px] gradient rounded-3xl z-10 flex justify-center items-center text-5xl font-bold">
                1
              </div>
              <div className="text-2xl text-black mt-2 ">Problem solving</div>
              <div className="text-lg  mt-4 text-ali flex justify-center items-center text-center text-slate-800 max-w-[80%]">
                we define the problem and customize a solution for the customer
              </div>
            </div>
            <div className="h-[300px] grow flex justify-start relative flex-col items-center ">
              <div className="hidden md:block absolute h-3 bg-yellow-400 w-1/2 top-[40px] right-0 z-0"></div>
              <div className="hidden md:block absolute h-3 bg-yellow-400 w-1/2 top-[40px] left-0 z-0"></div>
              <div className="h-[100px] w-[100px] gradient rounded-3xl z-10 flex justify-center items-center text-5xl font-bold">
                2
              </div>
              <div className="text-2xl text-black mt-2 ">Install</div>
              <div className="text-lg  mt-4 text-ali flex justify-center items-center text-center text-slate-800 max-w-[80%]">
                our electrical hardware is to be installed with the lowest
                initial investment
              </div>
            </div>
            <div className="h-[300px] grow flex justify-start relative flex-col items-center ">
              <div className="hidden md:block absolute h-3 bg-yellow-400 w-1/2 top-[40px] right-0 z-0"></div>
              <div className="hidden md:block absolute h-3 bg-yellow-400 w-1/2 top-[40px] left-0 z-0"></div>
              <div className="h-[100px] w-[100px] gradient rounded-3xl z-10 flex justify-center items-center text-5xl font-bold">
                3
              </div>
              <div className="text-2xl text-black mt-2 ">Dashboard</div>
              <div className="text-lg  mt-4 text-ali flex justify-center items-center text-center text-slate-800 max-w-[80%]">
                Join our board to monitor your data and control your system.
              </div>
            </div>
            <div className="h-[300px] grow flex justify-start relative flex-col items-center ">
              <div className="hidden md:block absolute h-3 bg-yellow-400 w-1/2 top-[40px] left-0 z-0"></div>
              <div className="h-[100px] w-[100px] gradient rounded-3xl z-10 flex justify-center items-center text-5xl font-bold">
                4
              </div>
              <div className="text-2xl text-black mt-2 ">Save</div>
              <div className="text-lg  mt-4 text-ali flex justify-center items-center text-center text-slate-800 max-w-[80%]">
                Your time and effort in doing the same tasks in traditional ways
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeLine;
