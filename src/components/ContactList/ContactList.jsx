import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Box } from 'components/reusableComponents';
import ContactsItem from '../ContactsItem';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Box as="ul" pl={0}>
      {filteredContacts.map(contact => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </Box>
  );
}
