import { Dispatch, SetStateAction } from "react";

import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export interface PortfolioContextProps {
  lightMode: boolean;
  setLightMode: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const defaultPortfolioProps: PortfolioContextProps = {
  lightMode: true,
  setLightMode: () => {},
  isMenuOpen: true,
  setIsMenuOpen: () => {},
};

export const socials = [
  { title: "email", href: "#", delay: "delay-[700ms]" },
  { title: "twitter", href: "#", delay: "delay-[800ms]" },
  { title: "linkedin", href: "#", delay: "delay-[900ms]" },
  { title: "github", href: "#", delay: "delay-[1000ms]" },
];

export const socialLinks = [
  { href: "#", icon: <AiOutlineMail />, target: "_blank" },
  { href: "#", icon: <BsLinkedin />, target: "_blank" },
  { href: "#", icon: <RiTwitterXFill />, target: "_blank" },
  { href: "#", icon: <FaGithub />, target: "_blank" },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS/SASS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Nextjs", "Tailwind", "Bootstrap"],
  },
  {
    title: "Design",
    skills: ["Figma", "Canva", "Adobe XD"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];

export const projects = [
  {
    title: "Pheonix Global",
    images: [
      {
        src: "/images/pheonixdesktop.png",
        alt: "phoenixdesktop",
      },
      {
        src: "/images/pheonixtablet.png",
        alt: "phoenixtablet",
      },
      {
        src: "/images/pheonixmobile.png",
        alt: "phoenixmobile",
      },
    ],
    description:
      "The Phoenix Global website is a platform that helps people find and buy apartments or homes. It lists various properties with all the important details. The site guides users through the buying process, making it simple to find and purchase their ideal home.",
    links: [
      { href: "https://1502properties.com/", label: "Link" },
      { href: "https://github.com/ifeanyiHM/phoenixglobal", label: "Code" },
    ],
    technologies: ["Javascript", "TypeScript", "React", "Sass"],
  },
  {
    title: "Inkshare",
    images: [
      {
        src: "/images/inksharedesktop.png",
        alt: "inksharedesktop",
      },
      {
        src: "/images/inksharetablet.png",
        alt: "inksharetablet",
      },
      {
        src: "/images/inksharemobile.png",
        alt: "inksharemobile",
      },
    ],
    description:
      "Inkshare is a handy app for software developers and engineers to save and organize important links. It helps you keep track of useful resources like documentation, tutorials, and tools.",
    links: [
      { href: "https://inkshare.vercel.app/", label: "Link" },
      { href: "https://github.com/ifeanyiHM/inkshare", label: "Code" },
      {
        href: "https://www.figma.com/design/gY3QlGMHxB81euVxIYfBSr/link-sharing-app?node-id=86-23257&t=U2GSBnFEpag5Xn2J-1",
        label: "Design",
      },
    ],
    technologies: [
      "Nexjs",
      "Supabase",
      "Javascript",
      "TypeScript",
      "React",
      "Tailwind Css",
    ],
  },
  {
    title: "Kickoffkit",
    images: [
      {
        src: "/images/kickoffkitdesktop.png",
        alt: "kickoffkitdesktop",
      },
      {
        src: "/images/kickoffkittablet.png",
        alt: "kickoffkittablet",
      },
      {
        src: "/images/kickoffkitmobile.png",
        alt: "kickoffkitmobile",
      },
    ],
    description:
      "KickoffKit is a basic online store specializing in sports jerseys. As an intern project, I developed a simplified version with core functionalities. Customers can browse through a list of available jerseys, view specific product details, add items to a virtual shopping cart, and proceed to checkout to complete their purchase. This is not a fully functional ecommerce store.",
    links: [
      { href: "https://kickoffkit.vercel.app/", label: "Link" },
      { href: "https://github.com/ifeanyiHM/kickoffkit", label: "Code" },
      {
        href: "https://www.figma.com/design/bV1FJwUq3Ukb21MEC3inyh/Kickoff-Kits-HNG---Williams-Balogun?node-id=11-2&t=OvaXSxwd8sKjXvhL-1",
        label: "Design",
      },
    ],
    technologies: ["Javascript", "TypeScript", "React", "Sass"],
  },
];

export const otherProjects = [
  {
    name: "Pinterest Clone",
    tools: ["HTML", "Css", "SCSS", "JavaScript"],
    liveLink: "https://interest-gamma.vercel.app/",
    codeLink: "https://github.com/ifeanyiHM/Pinterest-Clone",
  },
  {
    name: "Notal",
    tools: ["React", "JavaScript"],
    liveLink: "https://notal.vercel.app/",
    codeLink: "https://github.com/ifeanyiHM/NOTAL",
  },
  {
    name: "Previous Portfolio",
    tools: ["Html", "SCSS", "JavaScript"],
    liveLink: "https://ifeanyimichael.vercel.app/",
    codeLink:
      "https://github.com/ifeanyiHM/University-of-Michigan-capstone-portfolio-project",
  },
  {
    name: "Material Dashboard",
    tools: ["Html", "SCSS", "JavaScript"],
    liveLink: "https://dashboard-theta-hazel.vercel.app/",
    codeLink: "https://github.com/ifeanyiHM/Dashboard",
  },
  {
    name: "Custom Dashboard",
    tools: ["Html", "SCSS", "JavaScript"],
    liveLink: "https://customdashbord.vercel.app/",
    codeLink: "https://github.com/ifeanyiHM/customdashbord",
  },
  {
    name: "Coding challenge",
    tools: ["Html", "Css", "JavaScript"],
    liveLink: "https://skill-test-tawny.vercel.app/",
    codeLink: "https://github.com/ifeanyiHM/skill-test",
  },
  {
    name: "Custom Calculator",
    tools: ["React", "JavaScript"],
    liveLink: "https://ifeanyihm.github.io/A-React-calculator-app/",
    codeLink: "https://github.com/ifeanyiHM/A-React-calculator-app",
  },
];

// export interface submittedProfileProps {
//   firstName: string;
//   lastName: string;
//   email: string;
//   imageFile: string;
// }

// export interface dropDownListProps {
//   name: string;
//   value: string;
//   src: string;
//   color: string;
// }
