"use client";
import usePortfolio from "@/app/_context/usePortfolio";

function HomeSkeleton() {
  const { lightMode } = usePortfolio();

  return (
    <div className="flex flex-col h-[100svh] xl:h-full animate-pulse">
      <div className="flex-grow flex flex-col justify-between sm:my-[5rem] xl:mt-[2rem] xl:mb-[0] pl-[1.8rem] pr-[3.125rem] sm:px-[6.25rem] pt-[3.575rem] sm:pt-[5.5rem] xl:pt-[5.2rem] xl:pb-0">
        <div className="mt-[3.5rem] mb-[1rem] md:mt-[1.5rem]">
          <h1
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            } rounded-[0.3rem] h-[1.75rem] sm:h-[2rem] md:h-[2.25rem] lg:h-[2.7rem] w-[7.5rem] sm:w-[8rem] md:w-[9rem] lg:w-[11rem]`}
          ></h1>
        </div>
        <div className="flex flex-col gap-[1rem] lg:gap-[1.7rem] mt-[1.4rem] md:mt-[2.5rem] lg:mt-[3.5rem] mb-[1rem] md:mb-[2rem] font-[300] max-w-[47rem]">
          <p
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            }  rounded-[0.3rem] h-[1.65rem] sm:h-[2rem] md:h-[2.25rem] lg:h-[2.7rem] w-[82%] sm:w-[92%] md:w-[80%]`}
          ></p>
          <p
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            }  rounded-[0.3rem] h-[1.65rem] sm:h-[2rem] md:h-[2.25rem] lg:h-[2.7rem] w-[90%] sm:w-[80%] md:w-[95%]`}
          ></p>
          <p
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            }  rounded-[0.3rem] h-[1.65rem] sm:h-[2rem] md:h-[2.25rem] lg:h-[2.7rem] w-[87%] sm:w-[95%] md:w-[88%]`}
          ></p>
          <p
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            }  rounded-[0.3rem] h-[1.65rem] sm:h-[2rem] md:h-[2.25rem] lg:h-[2.7rem] w-[85%] sm:w-[80%] md:w-[39%]`}
          ></p>
          <p
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            } sm:hidden  rounded-[0.3rem] h-[1.65rem] sm:h-[2rem] md:h-[2.25rem] lg:h-[2.5rem] w-[62%]`}
          ></p>
          <p
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            } sm:hidden  rounded-[0.3rem] h-[1.65rem] sm:h-[2rem] md:h-[2.25rem] lg:h-[2.5rem] w-[40%]`}
          ></p>
        </div>
        <h3
          className={`${
            lightMode ? "md:bg-gray-300" : "md:bg-[#050f27]"
          } my-[1rem] lg:mt-[2rem] sm:text-[1.25rem] md:flex items-center md:h-[2.5rem] md:w-[25rem] md:rounded-[0.3rem]`}
        >
          <div
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            } md:hidden  rounded-[0.3rem] h-[1.65rem] sm:h-[2rem] md:h-[2.25rem] lg:h-[2.5rem] w-[40%] sm:w-[30%] pr-[2.5rem]`}
          ></div>
          <div
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            } md:hidden  rounded-[0.3rem] w-[12rem] sm:w-[14rem] relative inline-block h-[2rem] mt-[0.4rem] mb-[0.3rem] md:px-[0.625rem] md:ml-[0.5rem] overflow-hidden tracking-[2px]`}
          ></div>
        </h3>
      </div>
    </div>
  );
}

export default HomeSkeleton;
