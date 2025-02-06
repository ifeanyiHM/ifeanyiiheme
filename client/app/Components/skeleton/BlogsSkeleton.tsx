"use client";
import usePortfolio from "@/app/_context/usePortfolio";

function BlogsSkeleton() {
  const { lightMode } = usePortfolio();

  const styles = {
    listStyles: `${lightMode ? "bg-gray-300" : "bg-[#080f20]"} h-3 rounded w-5`,
    background: `${lightMode ? "bg-gray-300" : "bg-[#080f20]"}`,
  };
  return (
    <div className="flex flex-col gap-6 md:gap-10 mt-20 md:mt-24 px-[1.5rem] lg:pr-8 lg:pl-20 xl:pl-28">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`${
            lightMode ? "border-gray-300" : "border-[#050f27] bg-[#10192e]"
          } border rounded-md shadow-md hover:shadow-lg flex justify-between items-center p-2 animate-pulse`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`${styles.background} w-16 h-16 flex-shrink-0 rounded-md`}
            ></div>
            <div className="flex flex-col gap-1 w-48">
              <div className={`${styles.background} h-4 rounded w-3/4`}></div>
              <div className={`${styles.background} h-3 rounded w-1/2`}></div>
              <div className="flex gap-2 items-center md:hidden">
                <div className={styles.listStyles}></div>
                <div className={styles.listStyles}></div>
                <div className={styles.listStyles}></div>
                <div className={styles.listStyles}></div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-2 text-end w-32">
            <div
              className={`${styles.background} h-4 rounded w-3/4 self-end`}
            ></div>
            <div className="flex gap-2 items-center justify-end">
              <div className={styles.listStyles}></div>
              <div className={styles.listStyles}></div>
              <div className={styles.listStyles}></div>
              <div className={styles.listStyles}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogsSkeleton;
