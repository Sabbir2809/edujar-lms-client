import Footer from "./Footer";
import Navbar1 from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="overflow-hidden md:overflow-hidden lg:overflow-hidden sm:w-[390px] lg:w-full md:w-[1024px]">
      <Navbar1></Navbar1>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
