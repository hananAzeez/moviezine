import Navbar from "./components/navbar/Navbar";
import NavLinks from "./components/navLinks/NavLinks";
import Home from "./pages/home/Home";

//styles

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <NavLinks />
      <Home />
    </div>
  );
};

export default Layout;
