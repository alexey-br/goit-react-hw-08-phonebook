import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { AppBar, Container } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Container
        maxWidth="md"
        sx={{
          minHeight: 64,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </AppBar>
  );
}
