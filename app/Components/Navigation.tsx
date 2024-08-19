"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import usePortfolio from "../_context/usePortfolio";
import { usePathname } from "next/navigation";

function Navigation() {
  const { lightMode, setLightMode, isMenuOpen, setIsMenuOpen } = usePortfolio();

  const pathName = usePathname();
  const isAboutPage = pathName === "/about";
  const lightModeColor = isAboutPage
    ? "bg-[#e7e7e7] md:bg-black"
    : "bg-[#e7e7e7]";

  return (
    <nav className="z-[100] fixed flex items-center gap-[0.5rem] py-[0.5rem] top-[1rem] lg:top-[2rem] right-[1.5rem] lg:right-[2rem]">
      <span
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col gap-[0.2rem] mr-[0.3rem] cursor-pointer transition-all duration-300 ease-in-out"
      >
        <span
          className={`${lightMode ? "bg-[#444452]" : lightModeColor}
          ${
            isMenuOpen
              ? "translate-y-[5px] rotate-[37deg] w-[1.4rem]"
              : "rotate-[0] w-[0.8rem]"
          } rounded-lg h-[0.125rem] xl:h-[0.1rem]  transition-all duration-300 ease-in-out`}
        ></span>
        <span
          className={`${lightMode ? "bg-[#444452]" : lightModeColor} 
            ${isMenuOpen ? "opacity-0" : "opacity-1"}
            rounded-lg w-[1.3rem] h-[0.125rem] xl:h-[0.13rem]  my-[0.1rem] transition-all duration-300 ease-in-out`}
        ></span>
        <span
          className={`${lightMode ? "bg-[#444452]" : lightModeColor} 
            ${
              isMenuOpen
                ? "-translate-y-[8px] rotate-[-37deg] w-[1.4rem]"
                : "rotate-[0] w-[0.8rem]"
            }
            rounded-lg  h-[0.125rem] xl:h-[0.1rem]  ml-auto transition-all duration-300 ease-in-out`}
        ></span>
      </span>
      <span className="text-[1.3rem] mode">
        <MdOutlineLightMode />
      </span>
      <span
        onClick={() => setLightMode(!lightMode)}
        className={`${
          lightMode ? "switchBtnL" : ""
        } cursor-pointer switchBtnR `}
      ></span>
      <span className="text-[1.3rem] mode">
        <MdOutlineDarkMode />
      </span>
    </nav>
  );
}

export default Navigation;
