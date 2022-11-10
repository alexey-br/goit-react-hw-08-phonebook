import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { schema } from './validationSchema';

import {
  InputItem,
  Input,
  InputLabel,
  SubmitBtn,
  ValidationError,
} from './ContactForm.styled';
import { addContact } from 'redux/operations';

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputItem>
          <InputLabel>Name:</InputLabel>
          <Input type="text" name="name" autoComplete="off" />
          <ValidationError component="span" name="name" />
        </InputItem>
        <InputItem>
          <InputLabel>Number:</InputLabel>
          <Input type="tel" name="phone" autoComplete="off" />
          <ValidationError component="span" name="phone" />
        </InputItem>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
