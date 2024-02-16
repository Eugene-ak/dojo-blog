import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// Root layout structure. Display navbar on all pages
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}
 
export default RootLayout;