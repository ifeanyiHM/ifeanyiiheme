"use client";

import Link from "next/link";
import usePortfolio from "./_context/usePortfolio";
import { useEffect, useState } from "react";

export default function Home() {
  const { lightMode } = usePortfolio();

  const [numOfSpans, setNumOfSpans] = useState(5);

  useEffect(() => {
    const updateNumOfSpans = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setNumOfSpans(12); // mobile: <640px
      } else if (width >= 768 && width < 1024) {
        setNumOfSpans(8); // tablet: 640px to <768px
      } else {
        setNumOfSpans(5); // desktop: >=768px
      }
    };

    // Initialize the number of spans based on current screen size
    updateNumOfSpans();

    // Add event listener to update on window resize
    window.addEventListener("resize", updateNumOfSpans);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNumOfSpans);
    };
  }, []);
  console.log(numOfSpans);

  const spansArray = Array(numOfSpans).fill(null);
  return (
    <>
      {lightMode && (
        <div
          className={`grid grid-cols-${numOfSpans} w-full min-h-screen fixed z-[-1]`}
        >
          {spansArray.map((_, index) => (
            <span
              key={index}
              className=" border border-t-0 border-b-0 border-[#f5f4f4]"
            ></span>
          ))}
        </div>
      )}
      <header className="flex flex-col h-screen xl:h-full ">
        <div className="flex-grow flex flex-col justify-between sm:my-[5rem] xl:mt-[2rem] xl:mb-[0] px-[3.125rem] sm:px-[6.25rem] py-[4.375rem] sm:py-[7.5rem] xl:pt-[7rem] xl:pb-0">
          <h1 className="my-[1rem] text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem]">
            Hello!{" "}
            <span className="wave cursor-pointer text-[1.875rem] xl:text-[3rem]">
              &#128075;&#127998;
            </span>{" "}
          </h1>
          <h2 className="text-[1.75rem] my-[2rem] font-[300] sm:text-[2rem] md:text-[2.25rem] lg:text-[3rem] max-w-[47rem]">
            I&apos;m <span className="font-bold">Ifeanyi Iheme</span> a
            design-minded front-end software engineer focused on building
            beautiful interfaces &amp; experiences
          </h2>
          <h3 className="text-[1rem] my-[1rem] sm:text-[1.25rem] md:flex items-center">
            <div className="relative pr-[2.5rem]">
              Get in touch{" "}
              <span className="text-[1.563rem] md:absolute top-[-0.4rem] right-[-0.2rem]">
                👉🏾
              </span>
            </div>
            <Link
              href="mailto:ifeanyihm@gmail.com"
              className="mail-address cursor-pointer relative inline-block h-[2.7rem] pt-[0.4rem] pb-[0.3rem] md:px-[0.625rem] md:ml-[0.2rem] overflow-hidden tracking-[2px]"
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
