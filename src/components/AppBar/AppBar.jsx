import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { Box } from 'components/reusableComponents';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      pt={4}
      pb={4}
      borderBottom="1px solid"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};

export default AppBar;
