import { Container } from '@mui/material';
import Header from 'components/Header';
import { useAuth } from 'hooks/useAuth';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const { isRefreshing } = useAuth();
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ pt: 3, pb: 3 }}>
        <Suspense fallback={null}>
          {!isRefreshing ? <Outlet /> : <div>Refreshing page...</div>}
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
