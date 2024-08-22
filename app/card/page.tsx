import Image from "next/image";
import CrossGridBackground from "../Components/CrossGridBackground";
// import { merriweather } from "../fonts/fonts";
import { Poppins } from "next/font/google";

export const merriweather = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function page() {
  return (
    <>
      {/* <CrossGridBackground /> */}
      <div className="flex items-center">
        <div className="flex flex-col gap-[1.5rem] items-center justify-center w-[50%]">
          <h1
            className={`${merriweather.className} text-[4.5rem] font-[500] text-[#f5f5f5]`}
          >
            Ifeanyi Iheme
          </h1>
          <span className="text-[2.5rem] text-[rgb(94,234,212)] bg-[rgb(94,234,212,.1)] px-[1.5em] py-[1rem] opacity-[0.5] rounded-[50px]">
            Frontend Engineer
          </span>
        </div>
        <div className="relative w-[50%] h-screen">
          <Image
            className="object-cover "
            src="/images/img.jpg"
            alt="pp"
            fill
          />
        </div>
      </div>
    </>
  );
}

export default page;
