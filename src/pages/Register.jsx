import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
import { setAuthError } from 'redux/auth/authSlice';
import RegisterForm from 'components/RegisterForm';
import { ErrorMessage } from 'components/reusableComponents';

export default function Register() {
  const error = useSelector(selectError);

  return (
    <>
      <RegisterForm />
      {error && <ErrorMessage error={error} setError={setAuthError} />}
    </>
  );
}
