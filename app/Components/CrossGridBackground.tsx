"use client";
import usePortfolio from "../_context/usePortfolio";

function CrossGridBackground() {
  const { lightMode } = usePortfolio();

  return (
    <div className="grid grid-cols-6 md:grid-cols-8 xl:grid-cols-[repeat(15,_minmax(0,_1fr))] w-full min-h-screen fixed z-[-1]">
      {Array(54)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className={` ${
              lightMode ? "border-[#f5f4f4]" : "border-[#152342]"
            }  border opacity-[0.5]`}
          ></span>
        ))}

      {Array(26)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className={` ${
              lightMode
                ? "border-[#f5f4f4] opacity-[0.8]"
                : "border-[#152342] opacity-[0.5]"
            } hidden md:inline border  `}
          ></span>
        ))}

      {Array(25)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className={` ${
              lightMode
                ? "border-[#f5f4f4] opacity-[0.8]"
                : "border-[#152342] opacity-[0.5]"
            } hidden xl:inline border `}
          ></span>
        ))}
    </div>
  );
}

export default CrossGridBackground;
