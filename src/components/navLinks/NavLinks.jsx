import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={`${styles.navLinks} container`}>
      <a href="">Home</a>
      <a href="">Movies</a>
      <a href="">Celebrities list</a>
      <a href="">Top movies</a>
      <a href="">News</a>
    </div>
  );
};

export default NavLinks;
