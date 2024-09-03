"use client";
import usePortfolio from "../_context/usePortfolio";
import { skillCategories } from "../Data/PortfolioProps";
import { merriweather } from "../fonts/fonts";

function SkillsPage() {
  const { lightMode } = usePortfolio();

  return (
    <div className="lg:flex flex-col lg:items-center lg:justify-center w-full min-h-[100svh]">
      <h1
        className={`${merriweather.className} ${
          lightMode ? "text-[#444452]" : "text-[#fff]"
        } relative lg:hidden text-[2rem] pt-[6rem] pb-[1rem] md:pb-[2rem] ml-[4rem] md:w-[65%] md:mx-auto md:text-[3rem] uppercase`}
      >
        Skills{" "}
        <span className="absolute text-[0] w-0">software development</span>
      </h1>
      <div
        className={`${
          lightMode ? "text-[#444452]" : "text-[#afafbf]"
        } ml-[4rem] md:w-[65%] lg:w-[60%] lg:h-[70vh] lg:px-[5rem] lg:pt-[3rem] lg:shadow-[0px_4px_15px_rgba(0,0,0,0.3)] md:mx-auto rounded-[2rem]`}
      >
        <h2
          className={`${merriweather.className} ${
            lightMode ? "text-[#444452]" : "text-[#fff]"
          } hidden lg:block pb-[2rem] text-[3rem] uppercase`}
        >
          Skill
        </h2>
        <div className="grid grid-cols-2 lg:flex lg:justify-between gap-y-[1.5rem] md:gap-y-[2.5rem]">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col gap-[0.5rem]">
              <h3
                className={`${
                  lightMode ? "text-[#417dbd]" : "text-[#fff]"
                } mb-[0.5rem] md:text-[1.4rem]`}
              >
                {category.title}
              </h3>
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
  );
}

export default SkillsPage;
