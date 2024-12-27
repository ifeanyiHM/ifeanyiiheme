import SideNav from "@/app/Components/SideNav";

function layout({ children }) {
  return (
    <>
      <SideNav />
      {children}
    </>
  );
}

export default layout;
