import SideNav from "../Components/SideNav";
import BlogPage from "./BlogPage";

export const metadata = {
  title: "Blog",
};

function Page() {
  return (
    <>
      <SideNav />
      <BlogPage />
    </>
  );
}

export default Page;
