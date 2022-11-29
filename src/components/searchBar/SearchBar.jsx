import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="search movies"
      className="p-2 rounded-2xl"
    />
  );
};

export default SearchBar;
