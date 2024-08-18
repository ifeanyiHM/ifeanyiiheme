"use client";
import usePortfolio from "../_context/usePortfolio";
import GridBackground from "../Components/GridBackground";
import { skillCategories } from "../Data/PortfolioProps";
import { merriweather } from "../page";

function Page() {
  const { lightMode } = usePortfolio();

  return (
    <>
      <GridBackground />
      {/* bg-[#121213] rgba(22,26,49,0.5)*/}
      <div className="lg:flex flex-col lg:items-center lg:justify-center w-full min-h-screen">
        <h1
          className={`${merriweather.className} lg:hidden text-[2rem] pt-[7rem] pb-[1rem] md:pb-[2rem] ml-[4rem] md:w-[65%] md:mx-auto md:text-[3rem] uppercase `}
        >
          Skill
        </h1>
        <div
          className={`${
            lightMode ? "#444452" : "text-[#afafbf]"
          } ml-[4rem] md:w-[65%] lg:w-[60%] lg:h-[60vh] lg:px-[5rem] lg:pt-[3rem] lg:shadow-[0px_4px_15px_rgba(0,0,0,0.3)] md:mx-auto rounded-[2rem]`}
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
                    lightMode ? "text-[#bae67e]" : "text-[#fff]"
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
    </>
  );
}

export default Page;
