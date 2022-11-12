import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import {
  Box,
  ErrorMessage,
  HeaderH1,
  HeaderH2,
  Loader,
} from '../components/reusableComponents';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box m={4}>
      <HeaderH1>Phonebook</HeaderH1>
      <ContactForm />
      <HeaderH2>Contacts:</HeaderH2>
      <Filter />
      {!error ? <ContactList /> : <ErrorMessage />}
      {isLoading && <Loader />}
    </Box>
  );
}
