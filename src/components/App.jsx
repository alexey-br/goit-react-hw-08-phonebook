import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';
// import {
//   Box,
//   ErrorMessage,
//   HeaderH1,
//   HeaderH2,
//   Loader,
// } from './reusableComponents';

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Box m={4}>
//       <HeaderH1>Phonebook</HeaderH1>
//       <ContactForm />
//       <HeaderH2>Contacts:</HeaderH2>
//       <Filter />
//       {!error ? <ContactList /> : <ErrorMessage />}
//       {isLoading && <Loader />}
//     </Box>
//   );
// }
