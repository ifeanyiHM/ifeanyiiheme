"use client";
import Image from "next/image";
import usePortfolio from "../_context/usePortfolio";
import { skillCategories } from "../Data/PortfolioProps";
import { merriweather } from "../fonts/fonts";

function SkillsPage() {
  const { lightMode } = usePortfolio();

  return (
    <div className=" overflow-x-hidden">
      <div className="lg:flex flex-col lg:items-center md:mb-[5rem] lg:mb-0 lg:justify-center w-full lg:min-h-[100svh]">
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
          } ml-[4rem] md:w-[65%] lg:w-[70%] xl:w-[60%] lg:h-[80vh] xl:h-[75vh] lg:px-[5rem] lg:pt-[3rem] lg:shadow-[0px_4px_15px_rgba(0,0,0,0.3)] md:mx-auto rounded-[2rem]`}
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
                    {skill.language}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative px-[1.5rem] pb-[3rem] mt-[5rem] text-[#fff] md:pb-0 h-[23.125rem] md:h-[35.188rem] lg:h-[38.188rem] xl:h-[41.188rem]">
        <div className="md:w-[80%] lg:w-[60%] xl:w-[40%] md:ml-[3rem] lg:ml-[15%]">
          <h4
            className={`${
              lightMode ? "text-[#444452] font-[500]" : "text-[#fff]"
            } text-[1.5rem] pb-[1rem] md:pb-[2.5rem] md:text-[2rem] uppercase`}
          >
            COMPETENCE!
          </h4>
          <div
            className={` ${
              lightMode ? "text-[#444452]" : "text-[#fff]"
            } flex flex-col gap-[1.3rem] md:gap-[1.5rem] lg:gap-[1.9rem]`}
          >
            {skillCategories[0].skills.map((skill, index) => (
              <div key={index}>
                <div
                  className="flex justify-between pb-[0.3rem]"
                  style={{ width: `calc(${skill.percentage}% + 1rem)` }}
                >
                  <p
                    className={
                      lightMode
                        ? "font-[600] uppercase"
                        : "font-[500] uppercase"
                    }
                  >
                    {skill.language === "CSS3"
                      ? "css3 / Tailwind / Bootstrap"
                      : skill.language === "JavaScript"
                      ? "JavaScript / TypeScript"
                      : skill.language === "TypeScript"
                      ? "React / NextJS"
                      : skill.language === "NodeJS"
                      ? "Node / ExpressJS"
                      : skill.language}
                  </p>
                  <span className={lightMode ? "" : "font-[300]"}>
                    {skill.percentage}%
                  </span>
                </div>
                <div className="relative w-full h-[0.6rem] lg:h-[0.7rem] bg-[#fff] rounded-lg shadow-[0_0_5px_rgb(68,68,82,0.5)]">
                  <div
                    className=" h-[0.6rem] lg:h-[0.7rem] bg-[#417dbd] rounded-lg"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <div
                    className="absolute z-10 top-1/2 -translate-y-1/2 h-[1rem] w-[1rem] bg-[#fff] rounded-full border-4 border-[#417dbd]"
                    style={{ left: `calc(${skill.percentage}% - 0.5rem)` }}
                  ></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-[1rem] w-[1rem] bg-[#fff] rounded-full border-4 border-[#94a3b8]"
                    style={{ left: `calc(${skill.percentage}% - 0.55rem)` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 h-[23.125rem] md:h-[40.188rem] lg:h-[45.188rem] xl:h-[47.188rem] overflow-hidden top-[1rem] md:top-[-9rem] z-[-1] translate-x-[65%] xl:translate-x-[50%]">
          <Image
            className="object-cover"
            src="/images/tec.png"
            alt="404 not found"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
