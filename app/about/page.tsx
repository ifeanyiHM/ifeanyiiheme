import SideNav from "../Components/SideNav";
import AboutPage from "./AboutPage";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <>
      <SideNav />
      <AboutPage />
    </>
  );
}

export default Page;
