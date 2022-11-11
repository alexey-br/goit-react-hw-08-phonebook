import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label>
      <FilterLabel>Find contacts by name:</FilterLabel>
      <FilterInput type="text" value={filter} onChange={onInput} />
    </label>
  );
}
