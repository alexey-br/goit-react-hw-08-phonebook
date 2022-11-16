import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';

export default function ErrorMessage({ error, setError }) {
  const dispatch = useDispatch();
  let isOpen = true;

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    isOpen = false;
    dispatch(setError(''));
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="error" onClose={handleClose} sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};
