import { Field, Formik, Form } from 'formik';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <>
      <h1>Login</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            Name
            <Field name="name" />
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
