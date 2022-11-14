import { Typography } from '@mui/material';
import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
  };

  return (
    <>
      <Typography variant="h4" component="h1" align="center">
        Sign up
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            Name
            <Field name="name" />
          </label>
          <label>
            Email
            <Field name="email" type="email" />
          </label>
          <label>
            Password
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
