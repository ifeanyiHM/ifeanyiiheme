"use client";

import usePortfolio from "@/app/_context/usePortfolio";

function SkillsSkeleton() {
  const { lightMode } = usePortfolio();

  return (
    <div className="lg:flex flex-col lg:items-center lg:justify-center w-full min-h-[100svh] animate-pulse">
      <div
        className={`${
          lightMode ? "bg-gray-300" : "bg-[#050f27]"
        } lg:hidden rounded-[8px] h-[2rem] mt-[6.5rem] mb-[1rem] md:mb-[2rem] ml-[4rem] md:ml-[17.5%] w-[7.171rem] md:w-[10.756rem]  md:h-[3rem] `}
      ></div>
      <div
        className={`${
          lightMode ? "" : ""
        } ml-[4rem] md:w-[65%] lg:w-[60%] lg:h-[65vh] lg:px-[5rem] lg:pt-[3rem] md:mx-auto rounded-[2rem]`}
      >
        <div
          className={` ${
            lightMode ? "bg-gray-300" : "bg-[#050f27]"
          } hidden lg:block pb-[2rem] h-[3.5rem] md:w-[10.3rem] rounded-[8px]`}
        ></div>
        <div className="grid mt-[1.8rem] md:mt-[3.5rem] grid-cols-2 lg:flex lg:justify-between lg:gap-[2rem] xl:gap-[6rem] gap-y-[2rem] md:gap-y-[3rem]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-[0.5rem]">
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } mb-[0.5rem] w-[5.5rem] md:w-[6.5rem] h-[1rem] rounded-[4px] md:h-[1.5rem] bg-[1rem] md:bg-[1.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } flex flex-col gap-[0.5rem] rounded-[8px] w-[5rem] md:w-[5.5rem]`}
              >
                {Array.from({
                  length:
                    index === 0 ? 5 : index === 1 ? 4 : index === 2 ? 3 : 2,
                }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`bg-[1rem] mt-[0.5rem] w-[5rem] md:w-[5.5rem] h-[1rem] md:h-[1.3rem] md:bg-[1.2rem]`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSkeleton;
