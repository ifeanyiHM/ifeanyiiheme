"use client";
import usePortfolio from "../_context/usePortfolio";

function GridBackground() {
  const { lightMode } = usePortfolio();

  return (
    <div className="grid grid-cols-6 md:grid-cols-8 xl:grid-cols-12 w-full min-h-screen fixed z-[-1] top-0">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className={` ${
              lightMode ? "border-[#f5f4f4]" : "border-[#152342]"
            } border border-t-0 border-b-0 opacity-[0.5]`}
          ></span>
        ))}

      {Array(2)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className={` ${
              lightMode ? "border-[#f5f4f4]" : "border-[#152342]"
            } hidden md:grid border border-t-0 border-b-0 opacity-[0.5]`}
          ></span>
        ))}

      {Array(4)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className={` ${
              lightMode ? "border-[#f5f4f4]" : "border-[#152342]"
            } hidden xl:grid border border-t-0 border-b-0 opacity-[0.5]`}
          ></span>
        ))}
    </div>
  );
}

export default GridBackground;
