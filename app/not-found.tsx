"use client";
import Image from "next/image";
import CrossGridBackground from "./Components/CrossGridBackground";
import usePortfolio from "./_context/usePortfolio";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";

function NotFound() {
  const { lightMode } = usePortfolio();
  const router = useRouter();

  return (
    <>
      <CrossGridBackground />
      <div className="flex flex-col items-center justify-center h-[89vh] lg:h-[99vh]">
        <h1 className="text-[1.2rem] md:text-[1.5rem] font-[300]">
          This page could not be found :(
        </h1>
        <div className="h-[12.75rem] md:h-[17rem] overflow-hidden my-[1rem] md:my-[1.5rem]">
          <Image
            className="object-cover"
            src="/images/confused.webp"
            alt="404 not found"
            width={480}
            height={342}
            priority
          />
        </div>
        <div className="flex gap-[1.5rem]">
          <button
            onClick={() => router.back()}
            className={`${
              lightMode
                ? "shadow-[0_0_5px_rgb(68,68,82,0.5)]"
                : "shadow-[0_0_5px_rgb(0,123,255,0.5)]"
            } flex items-center gap-[0.4rem] py-[0.2rem] px-[1rem] transition-all duration-300 hover:scale-[1.1]`}
          >
            <span className="arrow">
              <BiArrowBack />
            </span>
            <span> back</span>
          </button>
          <button
            onClick={() => router.push("/")}
            className={`${
              lightMode
                ? "shadow-[0_0_5px_rgb(68,68,82,0.5)]"
                : "shadow-[0_0_5px_rgb(0,123,255,0.5)]"
            } flex items-center gap-[0.4rem] py-[0.2rem] px-[1rem] transition-all duration-300 hover:scale-[1.1]`}
          >
            <IoHomeOutline />
            <span>home</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
