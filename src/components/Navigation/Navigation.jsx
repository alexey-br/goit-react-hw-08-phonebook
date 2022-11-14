import { Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Link } from '../reusableComponents';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Typography variant="h5" component="nav">
      <Link to="/">Home</Link>
      {isLoggedIn ? <Link to="/contacts">Contacts</Link> : null}
    </Typography>
  );
};

export default Navigation;
