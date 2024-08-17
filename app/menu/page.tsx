"use client";
import Link from "next/link";
import GridBackground from "../Components/GridBackground";
import { usePathname } from "next/navigation";

function Page() {
  const pathName = usePathname();
  const links = [
    { href: "/", title: "welcome" },
    { href: "/about", title: "background" },
    { href: "/projects", title: "projects" },
    { href: "/contact", title: "contact" },
    { href: "/contact", title: "resume" },
  ];

  return (
    <>
      <GridBackground />

      <div className="relative h-screen flex flex-col justify-center gap-[3rem] px-[3.125rem] sm:px-[6.25rem] md:px-[9rem] xl:px-0 ">
        <ul className="menu flex flex-col  gap-[1.5rem] md:gap-[3rem] xl:gap-[1.5rem]  text-[1.8rem] md:text-[2.1rem] xl:text-[2.8rem] font-bold uppercase text-[#64748b]">
          {links.map((link, index) => {
            const isActive = pathName.startsWith(link.href);
            return (
              <li
                key={index}
                className={`${
                  isActive ? "text-[#fff]" : "text-[#64748b]"
                }  group hover:text-[#fff]  flex gap-[0.5rem] items-center transition-all duration-300 ease-in-out`}
              >
                <hr
                  className={`${
                    isActive ? "bg-[#fff] w-[5rem]" : "bg-[#64748b] w-[3rem]"
                  } group-hover:w-[5rem] transition-all duration-300 ease-in-out  group-hover:bg-[#fff] border-0 h-[1px] w-[3rem]`}
                />

                <Link href={link.href}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <div>lsdl;sdls;dl;</div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </>
  );
}

export default Page;
