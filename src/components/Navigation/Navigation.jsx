import { Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Typography variant="h6" component="nav">
      <Link to="/">Home</Link>
      {isLoggedIn ? <Link to="/contacts">Contacts</Link> : null}
    </Typography>
  );
};

export default Navigation;
