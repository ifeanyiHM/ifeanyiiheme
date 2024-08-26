import Link from "next/link";
import usePortfolio from "../_context/usePortfolio";
import BlurImage from "./placeholder/BlurImage";
import { useState } from "react";
import { recentProjects } from "../Data/PortfolioProps";

interface RecentProjectProps {
  project: {
    title: string;
    images: {
      src: string;
      alt: string;
    }[];
    description: string;
    links: {
      href: string;
      label: string;
    }[];
    technologies: string[];
  };
  index: number;
}

function RecentProject({ project, index }: RecentProjectProps) {
  const [expandedTexts, setExpandedTexts] = useState<boolean[]>(
    recentProjects.map(() => false)
  );

  const { lightMode } = usePortfolio();

  const toggleExpand = (index: number) => {
    setExpandedTexts((prev) => {
      const newText = [...prev];
      newText[index] = !newText[index];
      return newText;
    });
  };

  return (
    <>
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
              className="lg:hidden text-[#417dbd] hover:underline cursor-pointer"
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
    </>
  );
}

export default RecentProject;
