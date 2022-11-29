import styles from "./Navbar.module.css";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className="container">
      <h1>
        Movie<span className={styles.zine}>zine</span>
      </h1>
      <div className={styles.navRightSection}>
        <SearchBar />
        <div className={styles.navLine}></div>
        <p>Welcome guest!</p>
        <a href="#" className={styles.navLogin}>
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
