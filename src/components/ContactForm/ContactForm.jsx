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
import { addContact } from 'redux/contacts/operations';

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
          <Input type="tel" name="number" autoComplete="off" />
          <ValidationError component="span" name="number" />
        </InputItem>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
}
