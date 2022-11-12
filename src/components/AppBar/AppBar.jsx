import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { Box } from 'components/reusableComponents';
import { useAuth } from 'hooks/useAuth';

export default function AppBar() {
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
}
