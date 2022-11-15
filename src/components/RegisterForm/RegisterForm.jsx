import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box } from '@mui/system';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(register(values));
  };

  const formik = useFormik({ initialValues, onSubmit: handleSubmit });

  return (
    <>
      <Typography variant="h4" component="h1" align="center">
        Sign up
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
            name="name"
            id="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required={true}
          />
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
            Register
          </Button>
        </Box>
      </form>
    </>
  );
}
