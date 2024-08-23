"use client";
import { usePathname } from "next/navigation";

import usePortfolio from "../_context/usePortfolio";
import {
  menuItems,
  recentWorks,
  socialsDesktop,
  socialsMobile,
} from "../Data/PortfolioProps";
import CrossGridBackground from "./CrossGridBackground";
import AnimatedBackgroundBox from "./AnimatedBackgroundBox";
import MenuItems from "./MenuItems";
import { RecentWorks, SocialDesktop, SocialMobile } from "./OtherMenuItems";

function MenuPage() {
  const { lightMode, isMenuOpen } = usePortfolio();

  const pathName = usePathname();

  return (
    <div
      className={`${lightMode ? "bg-[#fff]" : "bg-[#0f172a] "}
        ${!isMenuOpen ? "opacity-0 delay-[0.5s] z-[-1]" : "opacity-100 z-[50]"}
         fixed w-full top-0 left-0 right-0 bg-[#0f172a] transition-all duration-700 ease-in-out `}
    >
      <CrossGridBackground />

      <div className="relative h-[100svh] flex flex-col gap-[6rem] md:gap-[3rem] md:justify-around pt-[7rem] pb-[1rem] md:py-0">
        <div className="md:flex md:mx-auto lg:m-0 lg:ml-[10%] lg:max-w-[80%] lg:justify-between md:gap-[5rem] lg:gap-[0]">
          <div className="hidden lg:w-[40%] md:block text-[#64748b] lg:flex flex-col lg:gap-[5rem]">
            <div>
              <h1 className="text-[1.2rem] uppercase">recent works</h1>

              {/* recent works */}
              <ul className="text-[1.9rem] font-bold">
                {recentWorks.map((item, index) => (
                  <RecentWorks key={index} item={item} />
                ))}
              </ul>
            </div>

            {/* To be displayed on desktop */}
            <div className="hidden lg:block lg:mr-auto">
              <h1
                className={`${
                  lightMode ? "text-[#007bff]" : "text-[#fff]"
                } text-[0.8rem] uppercase`}
              >
                socials
              </h1>
              <ul className="text-[1.2rem] font-bold underline uppercase">
                {socialsDesktop.map((link, index) => (
                  <SocialDesktop key={index} link={link} />
                ))}
              </ul>
            </div>
          </div>

          {/* menu list */}
          <ul
            className={`${
              lightMode ? "text-[#64748b]" : "text-[#444452]"
            } menu  ml-[3rem] md:m-0 lg:w-[60%] list-none flex flex-col gap-[0.5rem] md:gap-[1.5rem] lg:gap-[0.5rem] text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] md:font-semibold lg:font-bold`}
          >
            {menuItems.map((link, index) => {
              const isActive = pathName === link.href;
              return <MenuItems key={index} link={link} isActive={isActive} />;
            })}
          </ul>
        </div>

        {/* to be displayed on mobile */}
        <div className="lg:hidden flex items-center justify-between mx-[1rem] md:mx-[7rem]">
          <ul className="list-none flex gap-[1rem] md:gap-[1.5rem] text-[1.2rem] md:text-[2rem] text-[#64748b]">
            {socialsMobile.map((link, index) => (
              <SocialMobile key={index} link={link} />
            ))}
          </ul>
          <span
            className={` ${
              lightMode ? " text-[#444452]" : " text-[#64748b]"
            }  tracking-[0.2rem]`}
          >
            ©/2024
          </span>
        </div>

        <AnimatedBackgroundBox />
      </div>
    </div>
  );
}

export default MenuPage;
