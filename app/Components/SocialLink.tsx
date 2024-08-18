import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import usePortfolio from "../_context/usePortfolio";

interface AboutProps {
  href: string;
  title: string;
  classProp?: string;
}

function SocialLink({ href, title, classProp }: AboutProps) {
  const { lightMode } = usePortfolio();

  return (
    <div
      className={`${
        lightMode
          ? "hover:text-[#007bff] text-[#444452]"
          : "hover:text-[#fff] text-[#64748b]"
      } group inline-flex gap-[0.5rem] items-center transition-all duration-200 ease-in-out mr-0`}
    >
      <Link
        className={`${classProp} block font-semibold `}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
      <span className="group-hover:translate-x-[0.2rem] group-hover:-translate-y-[0.2rem] transition-all duration-300 ease-in-out">
        <MdArrowOutward />
      </span>
    </div>
  );
}

export default SocialLink;
