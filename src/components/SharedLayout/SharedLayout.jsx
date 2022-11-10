import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
