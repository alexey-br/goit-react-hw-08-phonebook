import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
