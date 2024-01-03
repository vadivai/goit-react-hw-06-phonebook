import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormGroup, Button } from './FormAddContact.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const contactsValidation = Yup.object().shape({
  name: Yup.string().min(4, 'Too Short!').required('Required'),
  number: Yup.string().min(7, 'At least 7').required('Required'),
});

export const FormAddContact = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsValidation}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Name
          <Field type="text" name="name" placeholder="Введіть ім'я" />
        </FormGroup>
        <FormGroup>
          Phone
          <Field type="tel" name="number" placeholder="Введіть телефон" />
          <Button type="submit">Add contact</Button>
        </FormGroup>
      </Form>
    </Formik>
  );
};
