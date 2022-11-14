import { Typography } from '@mui/material';
import { Link } from 'components/reusableComponents';

export default function AuthNav() {
  return (
    <Typography variant="h6" component="div">
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </Typography>
  );
}
