import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import SharedLayout from './SharedLayout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
