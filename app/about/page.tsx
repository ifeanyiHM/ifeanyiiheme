"use client";
import Image from "next/image";

import { socialsMobile } from "../Data/PortfolioProps";
import usePortfolio from "../_context/usePortfolio";
import Link from "next/link";
import { merriweather } from "../fonts/fonts";
import CrossGridBackground from "../Components/CrossGridBackground";
import SocialLink from "../Components/SocialLink";
import profilePic from "../../public/images/img.jpg";
import SideNav from "../Components/SideNav";

function AboutPage() {
  const { lightMode, isMenuOpen } = usePortfolio();

  return (
    <>
      {lightMode && <CrossGridBackground />}
      <SideNav />
      <div className="flex flex-col md:flex-row-reverse  px-[1.5rem] md:px-0 gap-[1.5rem] md:gap-0 min-h-screen mt-[4.3rem] md:mt-0 ">
        <div className="relative md:top-0 w-full md:w-[47%] lg:w-[23%] h-[60vh] md:h-[78vh] lg:h-[87vh]">
          <Image
            className="object-cover rounded-3xl md:rounded-none md:rounded-bl-3xl"
            src={profilePic}
            alt="profile picture"
            fill
            placeholder="blur"
          />
        </div>
        <div className="pb-[1rem] md:pb-0 md:w-[53%] lg:w-[67%] md:self-center">
          <div className="md:max-w-[78%] md:mx-auto">
            <div className="flex items-center justify-between">
              <h1
                className={`${merriweather.className} text-[2rem]  md:text-[3rem] uppercase`}
              >
                About
              </h1>
              <ul className="list-none flex gap-[1rem] text-[1rem] md:text-[1.2rem] text-[#64748b]">
                {socialsMobile.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"
                    }  hover:scale-[1.3] transition-all duration-300 ease-in-out`}
                  >
                    <Link href={link.href} target="_blank">
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr
              className={`${
                lightMode ? "border-[#d1cece]" : "border-[#64748b]"
              } mb-[1rem] lg:mb-[1.5rem] `}
            />
            <p className="lg:w-[75%] lg:text-[1.4rem] mb-[0.5rem]">
              I’m a dedicated individual based in Lagos, Nigeria, who puts my
              heart into everything I do. I’m committed to personal growth and
              strive for high productivity in my work. As a front-end engineer,
              this commitment has helped me successfully complete various
              projects, both independently and as part of a team. I love to
              learn about new technologies. ‘Let the beauty of what you love be
              what you do.’ – Rumi
            </p>
            <SocialLink
              href="/ifeanyi_iheme_resume.pdf"
              title="View Full Resume"
              classProp="md:text-[1.1rem]"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row-reverse px-[1.5rem] md:px-0 gap-[1.5rem] md:gap-0 min-h-screen mt-[4.3rem] md:mt-0 animate-pulse">
        <div className="relative md:top-0 w-full md:w-[47%] lg:w-[23%] h-[60vh] md:h-[78vh] lg:h-[87vh]">
          <div
            className={`${
              lightMode ? "bg-gray-300" : "bg-[#050f27]"
            } w-full h-full rounded-3xl md:rounded-none md:rounded-bl-3xl`}
          ></div>
        </div>
        <div className="pb-[1rem] md:pb-0 md:w-[53%] lg:w-[67%] md:self-center">
          <div className="md:max-w-[78%] md:mx-auto">
            <div className="flex items-center justify-between mb-[0.5rem] md:mb-[1.6rem] lg:mb-[1rem] md:h-[3rem]">
              <h1
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } h-[2.5rem] md:h-[3.8rem] lg:h-[3.5rem] w-[7rem] md:w-[10rem] lg:w-[11rem rounded-[0.5rem]`}
              ></h1>
              <ul className="list-none flex gap-[1rem] text-[1rem] md:text-[1.2rem] text-[#64748b]">
                {Array.from({ length: 4 }).map((_, index) => (
                  <li
                    key={index}
                    className={`${
                      lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"
                    }  hover:scale-[1.3] transition-all duration-300 ease-in-out`}
                  >
                    <div
                      className={`${
                        lightMode ? "bg-gray-300" : "bg-[#050f27]"
                      } h-[1.2rem] w-[1rem] md:w-[1.2rem]  md:h-[1.7rem] rounded-[0.2rem]`}
                    ></div>
                  </li>
                ))}
              </ul>
            </div>
            <hr
              className={`${
                lightMode ? "border-gray-300" : "border-[#050f27]"
              } mb-[1rem] lg:mb-[1.5rem] `}
            />
            <div className="flex flex-col gap-[0.4rem] lg:w-[75%] lg:text-[1.4rem] mb-[0.5rem] w-full">
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } xl:hidden h-[1.2rem] w-[86%] lg:w-[95%] md:h-[1.1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } xl:hidden h-[1.2rem] w-[98%] md:h-[1.1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } h-[1.2rem] w-[98%] md:h-[1.1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } h-[1.2rem] w-[90%] md:w-full md:h-[1.1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } h-[1.2rem] w-[87%] md:w-[89%] md:h-[1.1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } h-[1.2rem] w-[90%] md:w-[92%] md:h-[1.1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } h-[1.2rem] w-[93%] md:w-[95%] md:h-[1.1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } h-[1.2rem] w-[98%] md:h-[1.2rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } hidden md:block h-[1.2rem] w-[87%] lg:w-[97%] md:h-[1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } hidden lg:block h-[1.2rem] w-[87%] lg:w-[97%] md:h-[1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } hidden lg:block h-[1.2rem] w-[87%] lg:w-[70%] md:h-[1rem] lg:h-[1.5rem] xl:h-[1.4rem] rounded-[0.4rem]`}
              ></div>
            </div>
            <div
              className={`${
                lightMode
                  ? "hover:text-[#007bff] text-[#444452]"
                  : "hover:text-[#fff] text-[#64748b]"
              } group inline-flex gap-[0.5rem] items-center transition-all duration-200 ease-in-out mr-0`}
            >
              <div
                className={`${
                  lightMode ? "bg-gray-300" : "bg-[#050f27]"
                } h-[1.2rem] w-[9rem] md:h-[1.5rem] rounded-[0.4rem]`}
              ></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default AboutPage;
