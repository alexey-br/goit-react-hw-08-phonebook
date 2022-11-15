import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { schema } from './validationSchema';
import { addContact } from 'redux/contacts/operations';
import { Box, TextField, Button, FormHelperText } from '@mui/material';

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          m: '20px 0',
          gap: 3,
        }}
      >
        <Box sx={{ position: 'reletive' }}>
          <TextField
            name="name"
            id="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            autoComplete="off"
            size="small"
            fullWidth={true}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
          <FormHelperText error={true} sx={{ position: 'absolute' }}>
            {formik.touched.name && formik.errors.name}
          </FormHelperText>
        </Box>

        <Box>
          <TextField
            type="tel"
            name="number"
            id="number"
            label="Number"
            value={formik.values.number}
            onChange={formik.handleChange}
            autoComplete="off"
            size="small"
            fullWidth={true}
            error={formik.touched.number && Boolean(formik.errors.number)}
          />
          <FormHelperText error={true} sx={{ position: 'absolute' }}>
            {formik.touched.number && formik.errors.number}
          </FormHelperText>
        </Box>
        <Button type="submit" variant="outlined" size="small">
          Add contact
        </Button>
      </Box>
    </form>
  );
}
