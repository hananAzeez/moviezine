import styles from "./Navbar.module.css";
import SearchBar from "../searchBar/SearchBar";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo flex items-center gap-2">
        <img src={logo} alt="" className="w-16" />
        <h1 className="text-lg font-semibold">
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#ef8a22] to-[#ea4a4a] font-bold">
            Movie
          </span>
          zine
        </h1>
      </div>
      <div className={styles.navRightSection}>
        <SearchBar />
        <div className={styles.navLine}></div>
        <p className="font-light text-sm">Welcome guest!</p>
        <a href="#" className="font-light text-sm text-[#eb315a]">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
