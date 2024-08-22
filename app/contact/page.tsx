import GridBackground from "../Components/GridBackground";
import SideNav from "../Components/SideNav";
import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact",
};

function Page() {
  return (
    <>
      <GridBackground />
      <SideNav />
      <ContactPage />
    </>
  );
}

export default Page;
