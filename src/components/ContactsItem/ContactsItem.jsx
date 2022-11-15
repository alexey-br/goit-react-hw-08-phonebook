import { Box, Typography } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactNumber, DeleteBtn } from './ContactsItem.styled';

export default function ContactsItem({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <PhoneOutlinedIcon sx={{ mr: 1 }} /> {name}
      </Typography>
      <ContactNumber>{number}</ContactNumber>
      <DeleteBtn onClick={() => handleDelete(id)}>Delete</DeleteBtn>
    </Box>
  );
}

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
