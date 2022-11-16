import { Box, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2">
        Welcome, <Typography component="span">{user.name}</Typography>
      </Typography>
      <IconButton color="warning" type="button" onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
}
