import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';

export default function Notification({
  open,
  setIsToastOpen,
  text,
  toastType = 'info',
}) {
  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsToastOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity={toastType} onClose={handleClose} sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
}

Notification.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsToastOpen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  toastType: PropTypes.string,
};
