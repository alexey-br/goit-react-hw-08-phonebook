import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
