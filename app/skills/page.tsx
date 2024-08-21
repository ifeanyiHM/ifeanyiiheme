"use client";
import usePortfolio from "../_context/usePortfolio";
import GridBackground from "../Components/GridBackground";
import SideNav from "../Components/SideNav";
import { skillCategories } from "../Data/PortfolioProps";
import { merriweather } from "../fonts/fonts";

function Page() {
  const { lightMode } = usePortfolio();

  return (
    <>
      <GridBackground />
      <SideNav />

      <div className="lg:flex flex-col lg:items-center lg:justify-center w-full min-h-[100svh]">
        <h1
          className={`${merriweather.className} lg:hidden text-[2rem] pt-[6rem] pb-[1rem] md:pb-[2rem] ml-[4rem] md:w-[65%] md:mx-auto md:text-[3rem] uppercase `}
        >
          Skills
        </h1>
        <div
          className={`${
            lightMode ? "text-[#444452]" : "text-[#afafbf]"
          } ml-[4rem] md:w-[65%] lg:w-[60%] lg:h-[65vh] lg:px-[5rem] lg:pt-[3rem] lg:shadow-[0px_4px_15px_rgba(0,0,0,0.3)] md:mx-auto rounded-[2rem]`}
        >
          <h1
            className={`${merriweather.className} ${
              lightMode ? "text-[#444452]" : "text-[#fff]"
            } hidden lg:block pb-[2rem] text-[3rem] uppercase `}
          >
            Skill
          </h1>
          <div className="grid grid-cols-2 lg:flex lg:justify-between gap-y-[1.5rem] md:gap-y-[2.5rem]">
            {skillCategories.map((category, index) => (
              <div key={index} className="flex flex-col gap-[0.5rem]">
                <h2
                  className={`${
                    lightMode ? "text-[#007bff]" : "text-[#fff]"
                  } mb-[0.5rem] md:text-[1.4rem]`}
                >
                  {category.title}
                </h2>
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="md:text-[1.2rem]">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="fixed top-0 left-0 lg:flex flex-col lg:items-center lg:justify-center w-full min-h-[100svh] animate-pulse">
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
                  } mb-[0.5rem] w-[5.5rem] md:w-[6.5rem] h-[1rem] rounded-[8px] md:h-[1.5rem] bg-[1rem] md:bg-[1.4rem]`}
                ></div>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`${
                      lightMode ? "bg-gray-300" : "bg-[#050f27] "
                    } bg-[1rem] mt-[0.5rem] w-[5rem] md:w-[5.5rem] rounded-[8px] h-[1rem] md:h-[1.3rem] md:bg-[1.2rem]`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Page;
