import PropTypes from 'prop-types';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
}

RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};
