"use client";
import Link from "next/link";
import usePortfolio from "../_context/usePortfolio";

function SideNav() {
  const { lightMode } = usePortfolio();

  return (
    <div className="fixed h-screen left-[1rem] flex flex-col justify-between py-[5rem]">
      <div className="flex flex-col items-center gap-[3rem]">
        <span
          className={`${
            lightMode ? " text-[#444452]" : " text-[#64748b]"
          } -rotate-90 uppercase pt-[0.2rem] hover:line-through text-[0.95rem] tracking-[0.3rem] transition-all duration-300 ease-in-out`}
        >
          <Link href="/">Home</Link>
        </span>
        <hr className="h-[7rem] w-[1px] bg-[#64748b] border-0" />
      </div>
      <span
        className={` ${
          lightMode ? " text-[#444452]" : " text-[#64748b]"
        } -rotate-90 tracking-[0.2rem]`}
      >
        ©/2024
      </span>
    </div>
  );
}

export default SideNav;
