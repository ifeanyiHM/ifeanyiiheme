import GridBackground from "../Components/GridBackground";
import SideNav from "../Components/SideNav";
import ProjectPage from "./ProjectPage";

export const metadata = {
  title: "Projects",
};

function Page() {
  return (
    <div>
      <GridBackground />
      <SideNav />
      <ProjectPage />
    </div>
  );
}

export default Page;
