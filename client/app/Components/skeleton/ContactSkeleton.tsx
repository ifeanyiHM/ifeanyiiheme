"use client";
import usePortfolio from "@/app/_context/usePortfolio";
import React from "react";

function ContactSkeleton() {
  const { lightMode } = usePortfolio();

  return (
    <div className="mt-[0.5rem] md:mt-0 lg:mt-[0.5rem] flex flex-col justify-center w-full h-[100svh] px-[1.5rem] md:px-[3rem] lg:0 lg:w-[90%] xl:w-[70%] mx-auto animate-pulse">
      <h1
        className={` ${
          lightMode ? "bg-gray-300" : "bg-[#050f27]"
        } w-[10rem] md:w-[15rem] h-[2.5rem] md:h-[4rem] mb-[0.25rem] rounded-xl`}
      ></h1>
      <hr
        className={`${
          lightMode ? "border-gray-300" : "border-[#050f27]"
        } mt-[0.5rem] mb-[1.5rem] lg:mb-[2rem]`}
      />
      <div className="flex md:mt-[0.4rem] lg:mt-0 flex-col lg:flex-row lg:items-baseline lg:justify-between xl:justify-normal lg:w-[95%] xl:w-full gap-[1.5rem] lg:gap-0">
        <div className="flex items-center xl:w-[60%] lg:gap-[2.5rem]">
          <div
            className={`${
              lightMode ? "font-[400]" : "font-[300]"
            } w-[40%] md:w-[50%]  lg:w-auto h-[1.5rem] md:h-[1.7rem] lg:h-[2rem]`}
          >
            <div
              className={`${
                lightMode ? "bg-gray-300" : "bg-[#050f27]"
              } h-full rounded-[0.5rem] w-[3rem] md:w-[3.5rem]`}
            ></div>
          </div>
          <div className="w-[60%] md:w-[50%] lg:w-auto md:text-[1.5rem]">
            <div
              className={` group inline-flex items-center transition-all duration-200 ease-in-out mr-0`}
            >
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } block h-[1.4rem] md:h-[1.9rem] w-[11rem] md:w-[17rem] rounded-[0.5rem]`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex xl:w-[40%] lg:gap-[2.5rem]">
          <div
            className={`w-[40%] md:w-[50%]  lg:w-auto h-[1.5rem] md:h-[2rem] tracking-[0.15rem]`}
          >
            <div
              className={`${
                lightMode ? "bg-gray-300" : "bg-[#050f27]"
              } h-full rounded-[0.5rem] w-[5rem] md:w-[6rem]`}
            ></div>
          </div>
          <ul className="w-[60%] md:w-[50%] lg:w-auto flex flex-col gap-[0.4rem] md:text-[1.5rem]">
            <li>
              <div
                className={` group inline-flex items-center transition-all duration-200 ease-in-out mr-0`}
              >
                <div
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } block h-[1.2rem] lg:h-[1.5rem] w-[5rem] md:w-[6rem] lg:w-[7rem] rounded-[0.5rem]`}
                ></div>
              </div>
            </li>
            <li>
              <div
                className={`group inline-flex items-center transition-all duration-200 ease-in-out mr-0`}
              >
                <div
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } block h-[1.2rem] lg:h-[1.5rem] w-[5rem] md:w-[8rem] rounded-[0.5rem]`}
                ></div>
              </div>
            </li>
            <li>
              <div
                className={` group inline-flex items-center transition-all duration-200 ease-in-out mr-0`}
              >
                <div
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } block h-[1.2rem] lg:h-[1.5rem] w-[5rem] md:w-[6.5rem] lg:w-[7rem] rounded-[0.5rem]`}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactSkeleton;
