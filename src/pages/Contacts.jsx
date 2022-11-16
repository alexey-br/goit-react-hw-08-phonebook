import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { setError } from 'redux/contacts/contactsSlice';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import {
  ErrorMessage,
  Loader,
  Notification,
} from '../components/reusableComponents';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const prevContacts = useRef(0);
  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState('info');
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    if (prevContacts.current === 0) {
      prevContacts.current = contacts.length;
      return;
    }
    if (contacts.length > prevContacts.current) {
      setToastType('info');
      setToast(
        `One contact was added. There are ${contacts.length} contacts in phonebook now.`
      );
      setIsToastOpen(true);
    }
    if (contacts.length < prevContacts.current) {
      setToastType('warning');
      setToast(`One contact was deleted, ${contacts.length} contacts left.`);
      setIsToastOpen(true);
    }

    prevContacts.current = contacts.length;
  }, [contacts]);

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

      {!error ? (
        <ContactList />
      ) : (
        <ErrorMessage error={error} setError={setError} />
      )}
      {isLoading && <Loader />}
      <Notification
        open={isToastOpen}
        setIsToastOpen={setIsToastOpen}
        text={toast}
        toastType={toastType}
      />
    </Box>
  );
}
