"use client";
import { merriweather } from "../fonts/fonts";
import SocialLink from "../Components/SocialLink";
import usePortfolio from "../_context/usePortfolio";
import GridBackground from "../Components/GridBackground";
import AnimatedBackgroundBox from "../Components/AnimatedBackgroundBox";
import SideNav from "../Components/SideNav";

function Page() {
  const { lightMode } = usePortfolio();

  return (
    <>
      <GridBackground />
      <SideNav />
      <div className="flex flex-col justify-center w-full h-screen px-[1.5rem] md:px-[3rem] lg:0 lg:w-[90%] xl:w-[70%] mx-auto">
        <h1
          className={`${merriweather.className} text-[2rem] md:text-[3rem] uppercase`}
        >
          Contact
        </h1>
        <hr
          className={`${
            lightMode ? "border-[#d1cece]" : "border-[#64748b]"
          } mt-[0.5rem] mb-[1.5rem] lg:mb-[2rem]`}
        />
        <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between xl:justify-normal lg:w-[95%] xl:w-full gap-[1.5rem] lg:gap-0">
          <div className="flex items-center xl:w-[60%] lg:gap-[2.5rem]">
            <h2
              className={`${
                lightMode ? "font-[400]" : "font-[300]"
              } w-[40%] md:w-[50%] lg:w-auto text-[1.3rem] md:text-[1.7rem] tracking-[0.15rem]`}
            >
              Mail
            </h2>
            <div className="w-[60%] md:w-[50%] lg:w-auto md:text-[1.5rem]">
              <SocialLink
                href="mailto:ifeanyihm@gmail.com"
                title="ifeanyihm@gmail.com"
              />
            </div>
          </div>
          <div className="flex xl:w-[40%] lg:gap-[2.5rem]">
            <h2
              className={`${
                lightMode ? "font-[400]" : "font-[300]"
              } w-[40%] md:w-[50%] lg:w-auto text-[1.3rem] md:text-[1.7rem] tracking-[0.15rem]`}
            >
              Socials
            </h2>
            <ul className="w-[60%] md:w-[50%] lg:w-auto flex flex-col gap-[0.4rem] md:text-[1.5rem]">
              <li>
                <SocialLink
                  href="https://github.com/ifeanyiHM"
                  title="Github"
                />
              </li>
              <li>
                <SocialLink
                  href="https://www.linkedin.com/in/ifeanyihm/"
                  title="Linkedin"
                />
              </li>
              <li>
                <SocialLink
                  href="https://twitter.com/ifeanyimichaell"
                  title="Twitter"
                />
              </li>
            </ul>
          </div>
        </div>
        <AnimatedBackgroundBox />
      </div>
    </>
  );
}

export default Page;
