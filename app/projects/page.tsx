"use client";
import GridBackground from "../Components/GridBackground";
import { projects } from "../Data/PortfolioProps";
import { merriweather } from "../fonts/fonts";
import RecentProjects from "../Components/RecentProjects";
import OtherProjects from "../Components/OtherProjects";

function Page() {
  return (
    <div>
      <GridBackground />
      <div className="w-[80.47%] mx-auto mb-[2rem]">
        <h1
          className={`${merriweather.className} text-[2rem] my-[5rem] md:my-[7rem] md:text-[3rem] uppercase`}
        >
          Projects.
        </h1>

        <h2 className="text-[1.2rem] mb-[1rem] md:text-[1.5rem]">
          My Recent works
        </h2>
        <div className="flex flex-col gap-[5rem] lg:gap-[15rem]">
          {projects.map((project, index) => (
            <RecentProjects key={index} project={project} index={index} />
          ))}
        </div>

        <h2 className="text-[1.2rem] mt-[5rem] mb-[1rem] md:text-[1.5rem]">
          Other Projects
        </h2>

        <OtherProjects />
      </div>
    </div>
  );
}

export default Page;
