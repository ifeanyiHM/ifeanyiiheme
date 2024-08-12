"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import usePortfolio from "../_context/usePortfolio";
import Link from "next/link";

function Navigation() {
  const { lightMode, setLightMode } = usePortfolio();

  return (
    <nav className="z-50 fixed flex items-center gap-[0.5rem] py-[0.5rem] top-[1rem] lg:top-[2rem] right-[1.5rem] lg:right-[2rem]">
      <Link
        href="/menu"
        className="flex flex-col gap-[0.2rem] mr-[0.3rem] cursor-pointer"
      >
        <span
          className={`${
            lightMode ? "bg-[#444452]" : "bg-[#e7e7e7]"
          } rounded-lg w-[0.8rem] h-[0.125rem] xl:h-[0.1rem]  `}
        ></span>
        <span
          className={`${
            lightMode ? "bg-[#444452]" : "bg-[#e7e7e7]"
          } rounded-lg w-[1.3rem] h-[0.125rem] xl:h-[0.13rem]  my-[0.1rem]`}
        ></span>
        <span
          className={`${
            lightMode ? "bg-[#444452]" : "bg-[#e7e7e7]"
          } rounded-lg w-[0.8rem] h-[0.125rem] xl:h-[0.1rem]  ml-auto`}
        ></span>
      </Link>
      <span className="text-[1.3rem] wave">
        <MdOutlineLightMode />
      </span>
      <span
        onClick={() => setLightMode(!lightMode)}
        className={`${
          lightMode ? "switchBtnL" : ""
        } cursor-pointer switchBtnR `}
      ></span>
      <span className="text-[1.3rem] wave">
        <MdOutlineDarkMode />
      </span>
    </nav>
  );
}

export default Navigation;
