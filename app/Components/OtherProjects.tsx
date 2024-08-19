import Link from "next/link";
import usePortfolio from "../_context/usePortfolio";
import { useRef } from "react";
import { otherProjects } from "../Data/PortfolioProps";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function OtherProjects() {
  const { lightMode } = usePortfolio();

  const animateWorksRef = useRef<(HTMLDivElement | null)[]>([]);
  useScrollAnimation(
    animateWorksRef.current.map((el) => ({ current: el })),
    200
  );

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollDistance = window.scrollY;

  //       animateWorksRef.current.forEach((work) => {
  //         if (work) {
  //           const workDistance = work.offsetTop;

  //           if (scrollDistance >= workDistance - 150) {
  //             work.classList.add("show-animate");
  //           } else {
  //             work.classList.remove("show-animate");
  //           }
  //         }
  //       });
  //     };
  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
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
            lightMode ? "border-b-[rgb(0,123,255,0.3)]" : "border-b-[#152342]"
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
              lightMode ? "border-b-[rgb(0,123,255,0.3)]" : "border-b-[#152342]"
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
                      : "shadow-[0_0_5px_rgb(0,123,255,0.5)]"
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
              <Link href={project.codeLink} className="hover:underline">
                Code
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OtherProjects;
