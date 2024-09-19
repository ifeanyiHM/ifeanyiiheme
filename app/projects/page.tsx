import CrossGridBackground from "../Components/CrossGridBackground";
import GridBackground from "../Components/GridBackground";
import SideNav from "../Components/SideNav";
import ProjectPage from "./ProjectPage";

export const metadata = {
  title: "Projects",
};

function Page() {
  return (
    <div>
      <div className="hidden md:block">
        <GridBackground />
      </div>
      <div className="md:hidden">
        <CrossGridBackground />
      </div>
      <SideNav />
      <ProjectPage />
    </div>
  );
}

export default Page;
