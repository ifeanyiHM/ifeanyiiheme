"use client";
import usePortfolio from "@/app/_context/usePortfolio";

function AboutSkeleton() {
  const { lightMode } = usePortfolio();
  return (
    <div className="flex flex-col md:flex-row-reverse px-[1.5rem] md:px-0 gap-[1.5rem] md:gap-0 min-h-screen mt-[4.3rem] md:mt-0 animate-pulse">
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
    </div>
  );
}

export default AboutSkeleton;
