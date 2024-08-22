"use client";
import usePortfolio from "@/app/_context/usePortfolio";

function ProjectSkeleton() {
  const { lightMode } = usePortfolio();
  return (
    <div className=" w-[80.47%] mt-[0.5rem] md:mt-[0.7rem] mx-auto mb-[2rem] animate-pulse">
      <h1
        className={`${
          lightMode ? "bg-gray-300" : "bg-[#050f27]"
        } h-[2rem] md:h-[3rem] w-[10.5rem] md:w-[16rem] rounded-[0.5rem] mt-[5rem] mb-[5.8rem] md:mt-[7rem] md:mb-[8.2rem]`}
      ></h1>

      <h2
        className={`${
          lightMode ? "bg-gray-300" : "bg-[#050f27]"
        } h-[1.3rem] md:h-[1.5rem] w-[8.5rem] md:w-[11rem] rounded-[0.3rem] mb-[1.2rem]`}
      ></h2>
      <div className="flex flex-col gap-[5rem] lg:gap-[15rem]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <div className="relative w-full lg:w-[98%] pb-[47%] lg:pb-[44%]">
              {Array.from({ length: 3 }).map((_, idx) => {
                const classes = [
                  "left-0 w-[70.499%] lg:w-[75%] h-[100%]",
                  "right-[3rem] md:right-[6.388rem] lg:right-[8.388rem] w-[25.65%] h-[79.11%]",
                  "right-[1rem] md:right-[3rem] w-[14.25%] h-[58.53%]",
                ];
                return (
                  <>
                    {" "}
                    <div
                      key={idx}
                      className={` ${classes[idx]} absolute bottom-0 rounded-[7px]`}
                    >
                      <div
                        className={`${
                          lightMode ? "bg-gray-300" : "bg-[#050f27]"
                        } w-full h-full rounded-[0.3rem]`}
                      ></div>
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              <div className="md:flex md:items-center md:justify-between md:mr-[3rem] lg:mr-[4.5rem] md:mt-[1.5rem] md:mb-[1rem] ">
                <h3
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } h-[1.3rem] md:h-[1.5rem] w-[10rem] md:w-[11rem] mt-[1.3rem] mb-[0.8rem] md:my-0 rounded-[0.5rem]`}
                ></h3>
                <div
                  className={`${
                    lightMode ? "gap-[1.5rem]" : "gap-[1rem]"
                  } flex text-[#777]`}
                >
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`${
                        lightMode ? "bg-gray-300" : "bg-[#050f27]"
                      } relative h-[2rem] w-[3.5rem] md:w-[4rem] rounded-[0.5rem] md:py-[0.2rem] px-[0.8rem] md:px-[1rem]`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[0.5rem] lg:gap-[0.8rem] mb-[1rem] md:mb-[1.6rem] lg:mb-[1.1rem] mt-[1.3rem] md:mt-[1.8rem] md:mr-[3rem] lg:w-[60%]">
                <p
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } xl:hidden w-full md:w-[95%] h-[1rem] rounded-[0.3rem]`}
                ></p>
                <p
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } w-[80%] md:w-[20%] lg:w-[98%] xl:w-[92%] h-[1rem] rounded-[0.3rem]`}
                ></p>
                <p
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } hidden lg:block w-[95%] xl:w-[100%] h-[1rem] rounded-[0.3rem]`}
                ></p>
                <p
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } hidden lg:block w-[93%] xl:w-[95%] h-[1rem] rounded-[0.3rem]`}
                ></p>
                <p
                  className={`${
                    lightMode ? "bg-gray-300" : "bg-[#050f27]"
                  } hidden lg:block w-[26%] xl:w-[40%] h-[1rem] rounded-[0.3rem]`}
                ></p>
              </div>
              <div className="flex gap-[1rem] flex-wrap">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`${
                      lightMode ? "bg-gray-300" : "bg-[#050f27]"
                    } h-[1.7rem] md:h-[2.4rem] w-[5.5rem] md:w-[6.5rem] lg:w-[6rem] md:py-[0.2rem] px-[0.8rem] md:px-[1rem] rounded-[0.5rem]`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSkeleton;
