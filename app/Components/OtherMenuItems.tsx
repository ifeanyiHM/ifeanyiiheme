import Link from "next/link";
import usePortfolio from "../_context/usePortfolio";
import { ReactNode } from "react";

/* RECENT WORKS */
interface RecentWorkProps {
  item: {
    title: string;
    link: string;
    delay: string;
  };
}

export function RecentWorks({ item }: RecentWorkProps) {
  const { isMenuOpen } = usePortfolio();

  return (
    <li
      className={`${
        isMenuOpen ? `${item.delay} scale-y-[1]` : "scale-y-0"
      } transition-all duration-500 ease-in-out `}
    >
      <Link href={item.link}>{item.title}</Link>
    </li>
  );
}

/* SOCIAL DESKTOP */
interface SocialDesktopProps {
  link: {
    title: string;
    href: string;
    delay: string;
  };
}

export function SocialDesktop({ link }: SocialDesktopProps) {
  const { lightMode, isMenuOpen } = usePortfolio();

  return (
    <li
      className={`
    ${lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"}
    transform transition-transform duration-300 ease-in-out 
    ${isMenuOpen ? `${link.delay} scale-y-[1]` : "scale-y-0"}
  `}
    >
      <Link href={link.href}>{link.title}</Link>
    </li>
  );
}

/* SOCIAL MOBILE */
interface SocialMobileProps {
  link: {
    href: string;
    icon: ReactNode;
  };
}

export function SocialMobile({ link }: SocialMobileProps) {
  const { lightMode } = usePortfolio();

  return (
    <li
      className={`${
        lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"
      }  hover:scale-[1.2] transition-all duration-300 ease-in-out`}
    >
      <Link href={link.href} target="_blank">
        {link.icon}
      </Link>
    </li>
  );
}
