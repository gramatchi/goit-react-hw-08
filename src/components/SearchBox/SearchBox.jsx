import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from "../../redux/filters/selectors";



const SearchBox = () => {
  const filter = useSelector(selectFilter);
	const dispatch = useDispatch();

  return (
    <div className={css.searchboxContainer}>
      <h2 className={css.searchboxHeading}>Find contacts by name</h2>
      <input
        value={filter}
				type='text'
				onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
