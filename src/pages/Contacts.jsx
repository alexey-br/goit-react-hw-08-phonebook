import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import {
  ErrorMessage,
  // HeaderH2,
  Loader,
} from '../components/reusableComponents';
import { Box, Typography } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ maxWidth: 500, m: '0 auto' }}>
      <Typography variant="h4" component="h1" align="center">
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h5" component="h2" align="center">
        Contacts:
      </Typography>
      <Filter />
      {!error ? <ContactList /> : <ErrorMessage />}
      {isLoading && <Loader />}
    </Box>
  );
}
