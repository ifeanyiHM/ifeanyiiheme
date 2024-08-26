"use client";
import Image from "next/image";

import { socialsMobile } from "../Data/PortfolioProps";
import Link from "next/link";
import { merriweather } from "../fonts/fonts";
import SocialLink from "../Components/SocialLink";
import profilePic from "../../public/images/img.jpg";
import usePortfolio from "../_context/usePortfolio";
import CrossGridBackground from "../Components/CrossGridBackground";

function AboutPage() {
  const { lightMode } = usePortfolio();

  return (
    <>
      {lightMode && <CrossGridBackground />}
      <div className="flex flex-col md:flex-row-reverse  px-[1.5rem] md:px-0 gap-[1.5rem] md:gap-0 min-h-screen mt-[4.3rem] md:mt-0 ">
        <div className="relative md:top-0 w-full md:w-[47%] lg:w-[23%] h-[60vh] md:h-[78vh] lg:h-[87vh]">
          <Image
            className="object-cover rounded-3xl md:rounded-none md:rounded-bl-3xl"
            src={profilePic}
            alt="profile picture"
            fill
            placeholder="blur"
          />
        </div>
        <div className="pb-[1rem] md:pb-0 md:w-[53%] lg:w-[67%] md:self-center">
          <div className="md:max-w-[78%] md:mx-auto">
            <div className="flex items-center justify-between">
              <h1
                className={`${merriweather.className} ${
                  lightMode ? "text-[#444452]" : "text-[#e7e7e7]"
                } text-[2rem]  md:text-[3rem] uppercase`}
              >
                About
              </h1>
              <ul className="list-none flex gap-[1rem] text-[1rem] md:text-[1.2rem] text-[#64748b]">
                {socialsMobile.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"
                    }  hover:scale-[1.3] transition-all duration-300 ease-in-out`}
                  >
                    <Link href={link.href} target="_blank">
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr
              className={`${
                lightMode ? "border-[#d1cece]" : "border-[#64748b]"
              } mb-[1rem] lg:mb-[1.5rem] `}
            />
            <p className="lg:w-[75%] lg:text-[1.4rem] mb-[0.5rem]">
              I’m a dedicated individual based in Lagos, Nigeria, who puts my
              heart into everything I do. I’m committed to personal growth and
              strive for high productivity in my work. As a front-end engineer,
              this commitment has helped me successfully complete various
              projects, both independently and as part of a team. I love to
              learn about new technologies. ‘Let the beauty of what you love be
              what you do.’ – Rumihhhh
            </p>
            <SocialLink
              href="/Ifeanyi_Iheme_resume.docx.pdf"
              title="View Full Resume"
              classProp="md:text-[1.1rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
