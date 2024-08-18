"use client";
import Link from "next/link";
import GridBackground from "./GridBackground";
import { usePathname } from "next/navigation";

import usePortfolio from "../_context/usePortfolio";
import { socialLinks, socials } from "../Data/PortfolioProps";
import CrossGridBackground from "./CrossGridBackground";
import AnimatedBackgroundBox from "./AnimatedBackgroundBox";

function MenuPage() {
  const { lightMode, isMenuOpen, setIsMenuOpen } = usePortfolio();

  const pathName = usePathname();
  const links = [
    { href: "/", title: "WelcOme", delay: "delay-[500ms]" },
    { href: "/about", title: "BackGrouNd", delay: "delay-[600ms]" },
    { href: "/skills", title: "sKIlLs", delay: "delay-[700ms]" },
    { href: "/projects", title: "ProJecTs", delay: "delay-[800ms]" },
    { href: "/contact", title: "ConTaCt", delay: "delay-[900ms]" },
    {
      href: "/ifeanyi_iheme_resume.pdf",
      title: "ResUme",
      delay: "delay-[900ms]",
    },
  ];

  const menuItems = [
    { title: "inkshare", delay: "delay-[0.7s]" },
    { title: "kickoffkit", delay: "delay-[0.8s]" },
    { title: "pheonixGlobal", delay: "delay-[0.9s]" },
  ];

  return (
    // isMenuOpen && (
    <div
      className={`${lightMode ? "bg-[#fff]" : "bg-[#0f172a] "}
        ${!isMenuOpen ? "opacity-0 delay-[0.5s] z-[-1]" : "opacity-100 z-[50]"}
         fixed w-full top-0 bottom-0 left-0 right-0 bg-[#0f172a] transition-all duration-700 ease-in-out `}
    >
      {/* <GridBackground /> */}
      <CrossGridBackground />

      <div className="relative h-screen flex flex-col justify-center md:justify-around  gap-[3rem]">
        <div className="md:flex md:mx-auto lg:m-0 lg:ml-[10%] lg:max-w-[80%] lg:justify-between md:gap-[5rem] lg:gap-[0]">
          <div className="hidden lg:w-[40%] md:block text-[#64748b] lg:flex flex-col lg:gap-[5rem]">
            <div>
              <h1 className="text-[1.2rem] uppercase">recent works</h1>
              <ul className="text-[1.9rem] font-bold">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      isMenuOpen ? `${item.delay} scale-y-[1]` : "scale-y-0"
                    } transition-all duration-500 ease-in-out `}
                  >
                    <Link href="#">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block lg:mr-auto">
              <h1
                className={`${
                  lightMode ? "text-[#007bff]" : "text-[#fff]"
                } text-[0.8rem] uppercase`}
              >
                socials
              </h1>
              <ul className="text-[1.2rem] font-bold underline uppercase">
                {socials.map((link, index) => (
                  <li
                    key={index}
                    className={`
                    ${lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"}
                    transform transition-transform duration-300 ease-in-out 
                    ${isMenuOpen ? `${link.delay} scale-y-[1]` : "scale-y-0"}
                  `}
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul
            className={`${
              lightMode ? "text-[#64748b]" : "text-[#444452]"
            } menu  ml-[3rem] md:m-0 lg:w-[60%] list-none flex flex-col gap-[1rem] md:gap-[2rem] lg:gap-[0.5rem]  text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] md:font-semibold lg:font-bold`}
          >
            {links.map((link, index) => {
              const isActive = pathName === link.href;
              return (
                <li
                  key={index}
                  className={`
                  ${
                    isActive
                      ? lightMode
                        ? "text-[#007bff]"
                        : "text-[#fff]"
                      : "text-[#64748b]"
                  }
                  ${lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"}
                  group flex gap-[0.5rem] items-center 
                  transition-[transform] duration-300 ease-in-out lg:mr-auto
                  ${isMenuOpen ? `${link.delay} scale-y-[1]` : "scale-y-0"}
                `}
                >
                  <hr
                    className={`
                    ${
                      isActive
                        ? `w-[4rem] ${lightMode ? "bg-[#007bff]" : "bg-[#fff]"}`
                        : "bg-[#64748b] w-[2.5rem]"
                    }
                    ${
                      lightMode
                        ? "group-hover:bg-[#007bff]"
                        : "group-hover:bg-[#fff]"
                    }
                    
                  lg:group-hover:w-[4rem] transition-all duration-500 ease-in-out border-0 h-[1px] w-[2.5rem]`}
                  />

                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="list-none lg:hidden ml-[5rem] md:ml-[7rem] flex gap-[1rem] md:gap-[1.5rem] text-[1.5rem] md:text-[2rem] text-[#64748b]">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"
              }  hover:scale-[1.2] transition-all duration-300 ease-in-out`}
            >
              <Link href={link.href} target={link.target}>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>

        <AnimatedBackgroundBox />
      </div>
    </div>
  );
  // );
}

export default MenuPage;
