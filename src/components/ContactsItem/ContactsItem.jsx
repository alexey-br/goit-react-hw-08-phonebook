import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  Contact,
  ContactIcon,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactsItem.styled';

export default function ContactsItem({ contact }) {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Contact>
      <ContactIcon />
      <ContactName>{name}: </ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <DeleteBtn onClick={() => handleDelete(id)}>Delete</DeleteBtn>
    </Contact>
  );
}

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
