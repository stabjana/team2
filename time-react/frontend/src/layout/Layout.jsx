// import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
