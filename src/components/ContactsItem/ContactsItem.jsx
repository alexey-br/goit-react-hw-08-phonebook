import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Box, IconButton, Typography } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          minWidth: 240,
        }}
      >
        <PhoneOutlinedIcon sx={{ mr: 1 }} /> {name}
      </Typography>
      <Typography sx={{ flexGrow: 1 }}>{number}</Typography>
      <IconButton type="button" onClick={() => handleDelete(id)} size="small">
        <DeleteOutlineOutlinedIcon />
      </IconButton>
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
