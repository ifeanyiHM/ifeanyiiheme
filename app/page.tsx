"use client";

import Link from "next/link";
import usePortfolio from "./_context/usePortfolio";
import GridBackground from "./Components/GridBackground";
import Image from "next/image";

export default function Home() {
  const { lightMode } = usePortfolio();

  return (
    <>
      {lightMode && <GridBackground />}
      <header
        className={` ${
          lightMode ? "text-[#444452]" : "text-[#e7e7e7]"
        } flex flex-col h-[100svh] xl:h-full`}
      >
        <div className="flex-grow flex flex-col justify-between sm:my-[5rem] lg:mt-[2rem] lg:mb-[0] pl-[1.8rem] pr-[3.125rem] sm:px-[6.25rem] pt-[3.575rem] sm:pt-[5.5rem] lg:pt-[5.2rem] lg:pb-0">
          <div className="flex items-center gap-[1rem] lg:gap-[1.5rem] mt-[3rem] mb-[1rem] md:my-[1rem]">
            <h1 className=" text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem]">
              Hello!
            </h1>
            <div className="wave cursor-pointer relative w-[1.875rem] h-[1.875rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem]">
              <Image src="/images/waving.png" fill alt="waving hand" priority />
            </div>
          </div>
          <h2 className="text-[1.75rem] my-[1rem] md:my-[2rem] lg:my-[1rem] xl:my-[2rem] font-[300] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.87rem] xl:text-[3rem] max-w-[47rem]">
            I&apos;m <span className="font-bold">Ifeanyi Iheme</span>
            <Image
              className=" inline pb-[0.5rem] md:pb-[1rem] w-[0.875rem] md:w-[1.125rem]"
              src="/images/verify.png"
              alt="verified"
              width="18"
              height="18"
              priority
            />{" "}
            a front-end engineer who loves solving problems and creating
            beautiful, easy-to-use web interfaces.
          </h2>
          <h3 className="text-[1rem] my-[1rem] sm:text-[1.25rem] md:flex items-center">
            <div className="relative pr-[2.5rem]">
              Get in touch{" "}
              <Image
                className="pointing inline pl-[0.5rem] md:pl-0 pb-[0.2rem] md:pb-0 md:absolute top-[0.2rem] right-[-0.2rem]"
                src="/images/pointed.png"
                alt="pointed hand"
                width="25"
                height="25"
                priority
              />
            </div>
            <Link
              href="mailto:ifeanyihm@gmail.com"
              className="mail-address cursor-pointer relative inline-block h-[2.7rem] pt-[0.4rem] pb-[0.3rem] md:px-[0.625rem] md:ml-[0.5rem] overflow-hidden tracking-[2px]"
              target="_blank"
            >
              <span className="relative  h-[100%]  block transition duration-500">
                ifeanyihm@gmail.com
              </span>
              <span className="relative  h-[100%] block transition duration-500">
                ifeanyihm@gmail.com
              </span>
            </Link>
          </h3>
        </div>
      </header>
    </>
  );
}
