"use client";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import { socialLinks } from "../Data/PortfolioProps";
import usePortfolio from "../_context/usePortfolio";
import { MdArrowOutward } from "react-icons/md";

import Link from "next/link";

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function AboutPage() {
  const { lightMode, isMenuOpen } = usePortfolio();

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse  px-[1.5rem] md:px-0 gap-[1.5rem] md:gap-0 min-h-screen mt-[4.3rem] md:mt-0 ">
        <div className="relative md:top-0 w-full md:w-[47%] lg:w-[23%] h-[60vh] md:h-[78vh] lg:h-[87vh]">
          <Image
            className="object-cover rounded-3xl md:rounded-none md:rounded-bl-3xl"
            src="/images/IMG2.JPG"
            alt="profile picture"
            fill
          />
        </div>
        <div className="pb-[1rem] md:pb-0 md:w-[53%] lg:w-[67%] md:self-center">
          <div className="md:max-w-[78%] md:mx-auto">
            <div className="flex items-center justify-between">
              <h1
                className={`${merriweather.className} text-[2rem]  md:text-[3rem] uppercase font-semibold`}
              >
                About
              </h1>
              <ul className="list-none flex gap-[1rem] text-[1rem] md:text-[1.2rem] text-[#64748b]">
                {socialLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      lightMode ? "hover:text-[#bae67e]" : "hover:text-[#fff]"
                    }  hover:scale-[1.3] transition-all duration-300 ease-in-out`}
                  >
                    <Link href={link.href} target={link.target}>
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="mb-[1rem] lg:mb-[1.5rem] border-[#444452]" />
            <p className="lg:w-[75%] lg:text-[1.4rem]">
              Hey, my name is Charles Bruyerre and I use Sharlee as my nickname
              across social medias. I’m a graphic designer, UX/UI designer &amp;
              front-end web developer from France. I’m also passionate about pop
              music and make portraits and universes around what I listen to and
              I’m always curious to learn more when it comes to new technologies
              and creative coding.
            </p>
            <div
              className={`${
                lightMode ? "hover:text-[#bae67e]" : "hover:text-[#fff]"
              } group inline-flex gap-[0.5rem] items-center pt-[0.5rem] text-[#64748b] transition-all duration-200 ease-in-out mr-0`}
            >
              <Link
                className="block font-semibold md:text-[1.1rem]"
                href="/ifeanyi_iheme_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Resume
              </Link>
              <span className="group-hover:translate-x-[0.2rem] group-hover:-translate-y-[0.2rem] transition-all duration-300 ease-in-out">
                <MdArrowOutward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
