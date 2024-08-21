import Link from "next/link";
import usePortfolio from "../_context/usePortfolio";

interface MenuItemsProps {
  link: {
    href: string;
    title: string;
    delay: string;
    target?: string;
  };
  isActive: boolean;
}

function MenuItems({ link, isActive }: MenuItemsProps) {
  const { lightMode, isMenuOpen, setIsMenuOpen } = usePortfolio();

  return (
    <li
      className={`
        ${
          isActive
            ? lightMode
              ? "text-[#007bff]"
              : "text-[#fff]"
            : "text-[#64748b]"
        }
        ${lightMode ? "hover:text-[#007bff]" : "hover:text-[#fff]"}
        group flex gap-[0.5rem] items-center 
        transition-[transform] duration-300 ease-in-out lg:mr-auto
        ${isMenuOpen ? `${link.delay} scale-y-[1]` : "scale-y-0"}
    `}
    >
      <hr
        className={`
        ${
          isActive
            ? `w-[4rem] ${lightMode ? "bg-[#007bff]" : "bg-[#fff]"}`
            : "bg-[#64748b] w-[2.5rem]"
        }
        ${lightMode ? "group-hover:bg-[#007bff]" : "group-hover:bg-[#fff]"}
        
        lg:group-hover:w-[4rem] transition-all duration-500 ease-in-out border-0 h-[1px] w-[2.5rem]`}
      />

      <Link
        href={link.href}
        target={link.target}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.title}
      </Link>
    </li>
  );
}

export default MenuItems;
