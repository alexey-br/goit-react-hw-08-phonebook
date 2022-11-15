import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <TextField
      label="search"
      variant="standard"
      fullWidth
      type="search"
      value={filter}
      onChange={onInput}
      sx={{ mb: 2 }}
    />
  );
}
