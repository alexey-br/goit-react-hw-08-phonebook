import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import ContactsItem from '../ContactsItem';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactsItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
