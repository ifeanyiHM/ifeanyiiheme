"use client";
import { usePathname } from "next/navigation";
import SkillsSkeleton from "./Components/skeleton/SkillsSkeleton";
import ContactSkeleton from "./Components/skeleton/ContactSkeleton";
import AboutSkeleton from "./Components/skeleton/AboutSkeleton";

function Loading() {
  const pathname = usePathname();

  const getLoadingMessage = () => {
    if (pathname.includes("about")) {
      return <AboutSkeleton />;
    } else if (pathname.includes("skills")) {
      return <SkillsSkeleton />;
    } else if (pathname.includes("projects")) {
      return "projects loading";
    } else if (pathname.includes("contact")) {
      return <ContactSkeleton />;
    } else {
      return "Welcome page loading";
    }
  };

  return <>{getLoadingMessage()}</>;
}

export default Loading;
