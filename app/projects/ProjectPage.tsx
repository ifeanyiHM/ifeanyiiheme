"use client";
import React, { useEffect, useRef } from "react";
import { recentProjects } from "../Data/PortfolioProps";
import { merriweather } from "../fonts/fonts";
import usePortfolio from "../_context/usePortfolio";
import RecentProject from "../Components/RecentProject";
import OtherProjects from "../Components/OtherProjects";

function ProjectPage() {
  const { lightMode } = usePortfolio();

  const animateWorksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      let threshold;

      if (window.innerWidth >= 1024) {
        threshold = 500;
      } else if (window.innerWidth >= 768) {
        threshold = 700;
      } else {
        threshold = 400;
      }

      console.log(threshold);

      animateWorksRef.current.forEach((work) => {
        if (work) {
          const workDistance = work.offsetTop;

          if (scrollDistance >= workDistance - threshold) {
            work.classList.add("show-animate");
          } else {
            work.classList.remove("show-animate");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[80.47%] mx-auto mb-[2rem] lg:ml-[10rem] xl:ml-auto">
      <h1
        className={`${merriweather.className}  ${
          lightMode ? "text-[#444452]" : "text-[#fff]"
        } relative text-[2rem] my-[5rem] md:my-[7rem] md:text-[3rem] uppercase`}
      >
        Projects.{" "}
        <span className="absolute text-[0] w-0">and past and recent works</span>
      </h1>

      <h2
        className={` ${
          lightMode ? "text-[#417dbd]" : "text-[#fff] font-[300]"
        } text-[1.3rem] mb-[1rem] md:text-[1.5rem] uppercase`}
      >
        Recent works
      </h2>
      <div className="flex flex-col gap-[5rem] lg:gap-[15rem]">
        {recentProjects.map((project, index) => (
          <div
            className={index !== 0 ? "animate" : ""}
            key={index}
            ref={(el) => {
              if (el) {
                animateWorksRef.current[index] = el;
              }
            }}
          >
            <RecentProject project={project} index={index} />
          </div>
        ))}
      </div>

      <h2
        className={`${
          lightMode ? "text-[#417dbd]" : "text-[#fff] font-[300]"
        } text-[1.2rem] mt-[5rem] mb-[1rem] md:text-[1.5rem] uppercase`}
      >
        Other Projects
      </h2>

      <table
        className="animate table-auto w-full xl:w-[98%] text-left"
        ref={(el) => {
          if (el) {
            animateWorksRef.current[animateWorksRef.current.length] = el;
          }
        }}
      >
        <OtherProjects />
      </table>
    </div>
  );
}

export default ProjectPage;
