"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { otherProjects, projects } from "../Data/PortfolioProps";
import { merriweather } from "../fonts/fonts";
import usePortfolio from "../_context/usePortfolio";
import BlurImage from "../Components/placeholder/BlurImage";

function ProjectPage() {
  const [expandedTexts, setExpandedTexts] = useState<boolean[]>(
    projects.map(() => false)
  );

  const { lightMode } = usePortfolio();

  const animateWorksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      const threshold = window.innerWidth >= 768 ? 300 : 400;

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

  const toggleExpand = (index: number) => {
    setExpandedTexts((prev) => {
      const newText = [...prev];
      newText[index] = !newText[index];
      return newText;
    });
  };

  return (
    <div className="w-[80.47%] mx-auto mb-[2rem]">
      <h1
        className={`${merriweather.className}  ${
          lightMode ? "text-[#444452]" : "text-[#fff]"
        } text-[2rem] my-[5rem] md:my-[7rem] md:text-[3rem] uppercase`}
      >
        Projects.
      </h1>

      <h2
        className={` ${
          lightMode ? "text-[#417dbd]" : "text-[#fff] font-[300]"
        } text-[1.3rem] mb-[1rem] md:text-[1.5rem] uppercase`}
      >
        Recent works
      </h2>
      <div className="flex flex-col gap-[5rem] lg:gap-[15rem]">
        {projects.map((project, index) => (
          <div
            className={index !== 0 ? "animate" : ""}
            key={index}
            ref={(el) => {
              if (el) {
                animateWorksRef.current[index] = el;
              }
            }}
          >
            <div className="relative w-full lg:w-[98%] pb-[47%] lg:pb-[44%]">
              {project.images.map((image, idx) => {
                const classes = [
                  "left-0 w-[70.499%] lg:w-[75%] h-[100%]",
                  "right-[3rem] md:right-[6.388rem] lg:right-[8.388rem] w-[25.65%] h-[79.11%]",
                  "right-[1rem] md:right-[3rem] w-[14.25%] h-[58.53%]",
                ];
                return (
                  <>
                    {" "}
                    <div
                      key={idx}
                      className={`${
                        lightMode && idx > 0
                          ? "shadow-[5px_-5px_5px_rgb(68,68,82,0.1),-5px_5px_5px_rgb(68,68,82,0.1)]"
                          : idx === 0 && lightMode
                          ? "shadow-[0_0_10px_rgb(68,68,82,0.3)]"
                          : ""
                      } ${classes[idx]} absolute bottom-0 rounded-[7px]`}
                    >
                      <BlurImage src={image.src} alt={image.alt} />
                    </div>
                    {lightMode && (
                      <div
                        className={`${classes[idx]} absolute bg-[rgb(0,0,0,0.02)] bottom-0`}
                      ></div>
                    )}
                  </>
                );
              })}
            </div>
            <div>
              <div className="md:flex md:items-center md:justify-between md:mr-[3rem] lg:mr-[4.5rem] md:mt-[1.5rem] md:mb-[1rem] ">
                <h3
                  className={`${
                    lightMode ? "text-[#417dbd]" : "text-[#fff]"
                  } text-[1.1rem] md:text-[1.3rem] mt-[1rem] mb-[0.5rem] md:my-0 uppercase`}
                >
                  {project.title}
                </h3>
                <div
                  className={`${
                    lightMode ? "gap-[1.5rem]" : "gap-[1rem]"
                  } flex text-[#777]`}
                >
                  {project.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      target="_blank"
                      className={`${
                        lightMode
                          ? "bg-[#417dbd] text-[#fff]"
                          : " py-[0.2rem] text-[#417dbd]"
                      } relative md:py-[0.2rem] px-[0.8rem] md:px-[1rem] btn`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <p className="my-[1rem] md:mr-[3rem] md:text-[1.2rem] lg:w-[60%]">
                {expandedTexts[index]
                  ? project.description
                  : `${project.description.slice(0, 70)}`}
                <span className="hidden lg:inline">
                  {project.description.slice(70)}
                </span>
                <>
                  <span className="lg:hidden">...</span>{" "}
                  <span
                    className="lg:hidden text-[rgb(0,123,255)] hover:underline cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedTexts[index] ? " Hide text" : " See more"}
                  </span>
                </>
              </p>
              <div className="flex gap-[1rem] flex-wrap">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`${
                      lightMode
                        ? "shadow-[0_0_5px_rgb(68,68,82,0.5)]"
                        : "shadow-[0_0_5px_rgb(0,123,255,0.5)] text-[#417dbd]"
                    } text-[0.9rem] md:text-[1rem] md:py-[0.2rem] px-[0.8rem] md:px-[1rem]`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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
        <thead>
          <tr
            className={`${
              lightMode
                ? "border-b-[rgb(68,68,82,0.2)] text-[#444452]"
                : "border-b-[#152342] text-[#fff]"
            } border-b uppercase`}
          >
            <th className="py-[0.5rem] md:py-[1rem]">Project</th>
            <th className="py-[0.5rem] md:py-[1rem]">Tools</th>
            <th className="hidden lg:table-cell py-[0.5rem] md:py-[1rem]">
              Link
            </th>
            <th className="hidden lg:table-cell py-[0.5rem] md:py-[1rem] text-left"></th>
          </tr>
        </thead>
        <tbody>
          {otherProjects.map((project, idx) => (
            <tr
              key={idx}
              className={`${
                lightMode
                  ? "border-b-[rgb(68,68,82,0.2)]"
                  : "border-b-[#152342]"
              } ${otherProjects.length - 1 !== idx ? "border-b" : ""}`}
            >
              <td className="py-[0.8rem] md:py-[1rem] lg:w-[20%] text-[0.95rem] md:text-[1rem] lg:text-[1.1rem]">
                <span className="hidden lg:table-cell py-[0.8rem] md:py-[1rem]">
                  {project.name}
                </span>
                <Link
                  className="lg:hidden hover:underline"
                  href={project.liveLink}
                >
                  {project.name}
                </Link>
              </td>
              <td className="py-[0.8rem] md:py-[1rem] xl:w-[37%]">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className={`${
                      lightMode
                        ? "shadow-[0_0_5px_rgb(68,68,82,0.5)]"
                        : "shadow-[0_0_5px_rgb(0,123,255,0.5)] text-[#417dbd]"
                    } ${
                      index === 1 ? "hidden md:inline" : ""
                    } mr-[0.5rem] md:mr-[1rem] text-[0.9rem] md:text-[1rem] md:py-[0.2rem] px-[0.2rem] md:px-[1rem]`}
                  >
                    {tool}
                  </span>
                ))}
              </td>
              <td className="hidden lg:table-cell py-[0.8rem] md:py-[1rem] lg:pr-[0.5rem]">
                <Link href={project.liveLink} className="hover:underline">
                  {project.liveLink.slice(8)}
                </Link>
              </td>
              <td className="hidden md:table-cell text-left xl:w-[12%]">
                <Link
                  href={project.codeLink}
                  className={`${
                    lightMode ? "text-[#417dbd]" : "text-[#fff] font-[300]"
                  } hover:underline`}
                >
                  Code
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectPage;
