import css from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.searchboxContainer}>
      <h2 className={css.searchboxHeading}>Find contacts by name</h2>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        placeholder="Enter name"
        className={css.searchboxInput}
      />
    </div>
  );
};

export default SearchBox;
