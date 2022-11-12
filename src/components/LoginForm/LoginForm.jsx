import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, actions) => {
    dispatch(login({ email, password }));
  };

  return (
    <>
      <h1>Login</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            Email
            <Field name="email" type="email" />
          </label>
          <label>
            Password
            <Field name="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
}
