import { Dispatch, SetStateAction } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

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

export const menuItems = [
  { href: "/", title: "WelcOme", delay: "delay-[500ms]" },
  { href: "/about", title: "AbOuT", delay: "delay-[600ms]" },
  { href: "/skills", title: "sKIlLs", delay: "delay-[700ms]" },
  { href: "/projects", title: "ProJecTs", delay: "delay-[800ms]" },
  { href: "/contact", title: "ConTaCts", delay: "delay-[900ms]" },
  {
    href: "/Ifeanyi_Iheme_resume.pdf",
    target: "_blank",
    title: "ResUme",
    delay: "delay-[900ms]",
  },
];

export const recentWorks = [
  {
    title: "1502 Properties",
    link: "https://1502properties.com/",
    delay: "delay-[0.7s]",
  },
  { title: "Axign", link: "https://axign.vercel.app/", delay: "delay-[0.8s]" },
  // {
  //   title: "Race Edu Consult",
  //   link: "https://race-navy.vercel.app/",
  //   delay: "delay-[0.9s]",
  // },
  {
    title: "Starsight Employee Portal",
    link: "https://starsight-employee-form-portal.vercel.app/",
    delay: "delay-[0.9s]",
  },
  {
    title: "Starsight Atlas",
    link: "https://starsight-solar.app/",
    delay: "delay-[1.0s]",
  },
];

export const socialsDesktop = [
  {
    title: "email",
    href: "mailto:ifeanyihm@gmail.com",
    delay: "delay-[700ms]",
  },
  {
    title: "twitter",
    href: "https://twitter.com/ifeanyimichaell",
    delay: "delay-[800ms]",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/ifeanyihm/",
    delay: "delay-[900ms]",
  },
  {
    title: "github",
    href: "https://github.com/ifeanyiHM",
    delay: "delay-[1000ms]",
  },
];

export const socialsMobile = [
  { href: "mailto:ifeanyihm@gmail.com", icon: <AiOutlineMail /> },
  { href: "https://www.linkedin.com/in/ifeanyihm/", icon: <BsLinkedin /> },
  { href: "https://twitter.com/ifeanyimichaell", icon: <RiTwitterXFill /> },
  { href: "https://github.com/ifeanyiHM", icon: <FaGithub /> },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { language: "HTML5", percentage: "80" },
      { language: "CSS3", percentage: "85" },
      { language: "JavaScript", percentage: "70" },
      { language: "TypeScript", percentage: "80" },
      { language: "NodeJS", percentage: "45" },
      { language: "SCSS / SASS", percentage: "90" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { language: "React", percentage: "" },
      { language: "Nextjs", percentage: "" },
      { language: "Tailwind", percentage: "" },
      { language: "ExpressJS", percentage: "" },
      { language: "Styled Component", percentage: "" },
      { language: "CSS Modules", percentage: "" },
      { language: "Bootstrap", percentage: "" },
    ],
  },
  {
    title: "Design",
    skills: [
      { language: "Figma", percentage: "" },
      { language: "Canva", percentage: "" },
      { language: "Adobe XD", percentage: "" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { language: "Supabase", percentage: "" },
      { language: "GitHub", percentage: "" },
      { language: "Git", percentage: "" },
      { language: "Vercel", percentage: "" },
      { language: "SEO", percentage: "" },
      { language: "MongoDB", percentage: "" },
    ],
  },
];

export interface ProjectProps {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
  description: string;
  links: {
    href: string;
    label: string;
  }[];
  technologies: string[];
}

export const recentProjects = [
  {
    title: "1502 Properties",
    images: [
      {
        src: "/images/1502propertiesdesktop.png",
        alt: "1502propertiesdesktop",
      },
      {
        src: "/images/1502propertiestablet.png",
        alt: "1502propertiestablet",
      },
      {
        src: "/images/1502propertiesmobile.png",
        alt: "1502propertiesmobile",
      },
    ],
    description:
      "The 1502 Properties web app is a platform that helps people find and buy apartments or homes. It lists various properties with all the important details. The site guides users through the buying process, making it simple to find and purchase their ideal home.",
    links: [
      { href: "https://1502properties.com/", label: "Link" },
      { href: "https://github.com/ifeanyiHM/phoenixglobal", label: "Code" },
    ],
    technologies: ["Javascript", "Supabase", "TypeScript", "React", "SCSS"],
  },
  {
    title: "Axign",
    images: [
      {
        src: "/images/axigndesktop.png",
        alt: "axigndesktop",
      },
      {
        src: "/images/axigntablet.png",
        alt: "axigntablet",
      },
      {
        src: "/images/axignmobile.png",
        alt: "axignmobile",
      },
    ],
    description:
      "Axign is a comprehensive task management platform designed to streamline organizational operations and enhance team productivity. Built specifically for businesses, it provides CEOs with powerful tools to create, assign, and track tasks while offering employees an intuitive interface to manage their work and update progress. With role-based access control, real-time analytics, and automated notifications, Axign replaces scattered emails and messages with a centralized system that ensures clear accountability, eliminates missed deadlines, and enables seamless collaboration—whether teams are working remotely or on-site.",
    links: [
      { href: "https://axign.vercel.app/", label: "Link" },
      { href: "https://github.com/ifeanyiHM/axign", label: "Code" },
    ],
    technologies: [
      "Nexjs",
      "Fullstack",
      "Javascript",
      "TypeScript",
      "Storybook",
      "Shadcn UI",
      "React",
      "Tailwind Css",
    ],
  },
  {
    title: "Starsight Employee Form Portal",
    images: [
      {
        src: "/images/starsightdesktop.png",
        alt: "starsightdesktop",
      },
      {
        src: "/images/starsighttablet.png",
        alt: "starsighttablet",
      },
      {
        src: "/images/starsightmobile.png",
        alt: "starsightmobile",
      },
    ],
    description:
      "Starsight Employee Form Portal is a centralized digital platform designed to streamline employee documentation and internal HR processes. It enables staff to easily access, complete, and track essential company forms while providing quick access to important organizational documents. Built with a focus on clarity and efficiency, the portal simplifies administrative workflows and improves overall employee experience through an organized, user-friendly interface.",
    links: [
      {
        href: "https://starsight-employee-form-portal.vercel.app/",
        label: "Link",
      },
      {
        href: "https://github.com/ifeanyiHM/starsight-employee-form-portal",
        label: "Code",
      },
    ],
    technologies: [
      "Nexjs",
      "Fullstack",
      "Javascript",
      "TypeScript",
      "React",
      "Tailwind Css",
    ],
  },
  {
    title: "Starsight Atlas",
    images: [
      {
        src: "/images/starsightatlasdesktop.png",
        alt: "starsightatlasdesktop",
      },
      {
        src: "/images/starsightatlastablet.png",
        alt: "starsightatlastablet",
      },
      {
        src: "/images/starsightatlasmobile.png",
        alt: "starsightatlasmobile",
      },
    ],
    description:
      "This project is a modern environmental analytics dashboard that allows users to retrieve and visualize real-time climate and energy data from the NASA POWER API. Users can search for any location or use their current device location to access environmental insights such as temperature, rainfall, and solar radiation within a selected date range. The platform features intelligent location search suggestions, responsive data visualization, and a professional dashboard interface designed for energy analysis, climate monitoring, and environmental research applications.",
    links: [
      {
        href: "https://starsight-solar.vercel.app/",
        label: "Link",
      },
      {
        href: "https://github.com/ifeanyiHM/starsight-solar",
        label: "Code",
      },
    ],
    technologies: [
      "Nexjs",
      "Fullstack",
      "Javascript",
      "TypeScript",
      "React",
      "Tailwind Css",
    ],
  },
];

export const otherProjects = [
  {
    name: "Race Edu Consult",
    tools: ["Next.Js", "Tailwind", "React", "JavaScript"],
    liveLink: "https://race-navy.vercel.app/",
    codeLink: "https://github.com/ifeanyiHM/race",
  },
  {
    name: "Pinterest Clone",
    tools: ["HTML", "Css", "SCSS", "JavaScript"],
    liveLink: "https://pinterest-clone-ten-silk.vercel.app/",
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
