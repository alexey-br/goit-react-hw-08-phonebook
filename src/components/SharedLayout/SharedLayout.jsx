import AppBar from 'components/AppBar';
import { useAuth } from 'hooks/useAuth';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const { isRefreshing } = useAuth();
  return (
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <AppBar />
      {!isRefreshing ? <Outlet /> : <div>Refreshing page...</div>}
    </div>
  );
};

export default SharedLayout;
