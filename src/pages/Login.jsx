import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
import { setAuthError } from 'redux/auth/authSlice';
import LoginForm from 'components/LoginForm';
import { ErrorMessage } from 'components/reusableComponents';

export default function Login() {
  const error = useSelector(selectError);

  return (
    <>
      <LoginForm />
      {error && <ErrorMessage error={error} setError={setAuthError} />}
    </>
  );
}
