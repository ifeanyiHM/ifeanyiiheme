"use client";
import usePortfolio from "@/app/_context/usePortfolio";

function MoreBlogsSkeleton() {
  const { lightMode } = usePortfolio();
  return (
    <div className={lightMode ? "bg-[#f9f9f9]" : "bg-black/30"}>
      <div className="py-12 flex flex-col gap-10 px-[1.5rem] md:px-14 lg:px-0 lg:max-w-[680px] mx-auto lg:text-[1.1rem] animate-pulse">
        <h2
          className={`${
            lightMode ? "bg-gray-300" : "bg-[#050f27]"
          } rounded-[0.3rem] h-[2rem] w-[12rem]`}
        ></h2>
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`${
                lightMode ? "border-[#f7f6f6]" : "border-[#253a69]"
              } flex flex-col gap-4 border-b pb-4`}
            >
              <div className="relative h-[13.696rem] bg-gray-300 dark:bg-[#050f27] rounded-md"></div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex-shrink-0 bg-gray-300 dark:bg-[#050f27] rounded-full"></div>
                <span className="w-24 h-4 bg-gray-300 dark:bg-[#050f27] rounded"></span>
              </div>

              <h2 className="w-[80%] h-6 bg-gray-300 dark:bg-[#050f27] rounded"></h2>
              <p className="md:hidden w-[90%] h-4 bg-gray-300 dark:bg-[#050f27] rounded"></p>
              <p className="hidden lg:block w-[75%] h-4 bg-gray-300 dark:bg-[#050f27] rounded"></p>
            </div>
          ))}
        </div>
        <div
          className={`${
            lightMode ? "border-[#222]" : "border-[#253a69]"
          } w-full border rounded-full text-center py-2 h-[2.5rem] bg-gray-300 dark:bg-[#050f27]`}
        ></div>
      </div>
    </div>
  );
}

export default MoreBlogsSkeleton;
