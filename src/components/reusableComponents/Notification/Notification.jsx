import { Alert, Snackbar } from '@mui/material';

export default function Notification({
  open,
  setIsToastOpen,
  text,
  toastType,
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
