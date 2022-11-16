import { useFormik } from 'formik';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  const formik = useFormik({ initialValues, onSubmit: handleSubmit });

  return (
    <>
      <Typography variant="h4" component="h1" align="center">
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 500,
            m: '20px auto',
            gap: 3,
          }}
        >
          <TextField
            name="email"
            id="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required={true}
          />
          <TextField
            type="password"
            name="password"
            id="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required={true}
          />
          <Button type="submit" variant="contained" size="large">
            Login
          </Button>
        </Box>
      </form>
    </>
  );
}
