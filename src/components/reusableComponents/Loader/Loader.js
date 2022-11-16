import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

export default function Loader() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <CircularProgress />
    </Box>
  );
}
