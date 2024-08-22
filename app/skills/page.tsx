import GridBackground from "../Components/GridBackground";
import SideNav from "../Components/SideNav";

import SkillsPage from "./SkillsPage";

export const metadata = {
  title: "Skills",
};

function Page() {
  return (
    <>
      <GridBackground />
      <SideNav />
      <SkillsPage />
    </>
  );
}

export default Page;
