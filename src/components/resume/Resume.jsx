import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Experience
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-400">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                
                <h3 className="text-[1.2rem] font-semibold sm:text-xl">
                  Subject Matter Expert
                </h3>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Chegg Inc
                </span>
                <span className=" text-[.9rem]  font-semibold text-blue-500 sm:text-base">
                  March 2022 - Present
                </span>
                
                <h3 className="text-[1.2rem] font-semibold sm:text-xl">
                  Summer Intern
                </h3>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  East Coast Railway HQ
                </span>
                <span className=" text-[.9rem]  font-semibold text-blue-500 sm:text-base">
                  June 2023 - July 2023
                </span>
                <h3 className="text-[1.2rem] font-semibold sm:text-xl">
                  FRT Intern
                </h3>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Microsoft
                </span>
                <span className=" text-[.9rem]  font-semibold text-blue-500 sm:text-base">
                Dec 2022 - Feb 2023
                </span>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-400">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.2rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Indira Gandhi Institute of Technology, Sarang
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-400 sm:text-base">
                  2020 - present
                </span>
                <h1 className="text-[1.2rem] font-semibold sm:text-xl">
                  Class XII (Science)
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Odisha Science Academy, Bbsr
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-400 sm:text-base">
                  2018 - 2020
                </span>
                <h1 className="text-[1.2rem] font-semibold sm:text-xl">
                  Class X 
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Govt. High School, Nilgiri
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-400 sm:text-base">
                  2017 - 2018
                </span>
                
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
