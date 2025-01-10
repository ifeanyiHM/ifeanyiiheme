import SideNav from "@/app/Components/SideNav";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

function layout({ children }: layoutProps) {
  return (
    <>
      <SideNav />
      {children}
    </>
  );
}

export default layout;
