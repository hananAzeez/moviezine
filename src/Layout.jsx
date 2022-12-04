import Navbar from "./components/navbar/Navbar";
import NavLinks from "./components/navLinks/NavLinks";
import Home from "./pages/home/Home";
import MovieGrid from "./components/movieGrid/MovieGrid";

const Layout = () => {
  return (
    <div className="layout">
      <div className="hero">
        <Navbar />
        <NavLinks />
        <Home />
      </div>
      <section className="container pt-52">
        <MovieGrid />
      </section>
    </div>
  );
};

export default Layout;
