import Link from "next/link";
import usePortfolio from "../_context/usePortfolio";
import { otherProjects } from "../Data/PortfolioProps";

function OtherProjects() {
  const { lightMode } = usePortfolio();

  return (
    <>
      <thead>
        <tr
          className={`${
            lightMode
              ? "border-b-[rgb(68,68,82,0.2)] text-[#444452]"
              : "border-b-[#152342] text-[#fff]"
          } md:border-b uppercase`}
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
              lightMode ? "border-b-[rgb(68,68,82,0.2)]" : "border-b-[#152342]"
            } ${otherProjects.length - 1 !== idx ? "md:border-b" : ""}`}
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
    </>
  );
}

export default OtherProjects;
