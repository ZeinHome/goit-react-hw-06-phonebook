import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions';
import { getContacts } from 'components/redux/selectors';
import { Formik, Form, ErrorMessage } from 'formik';
import { Label, Input, Btn } from './ContactFom.styled';
import * as yup from 'yup';
const schema = yup.object().shape({
  name: yup.string(),
  number: yup.string().min(3).max(8),
});

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return alert(`Something went wrong in ContactForm`);
    }
  };

  const handleSubmit = e => {
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact`);
    } else {
      dispatch(
        actions.contactAdd({
          name,
          number,
        })
      );
      setName('');
      setNumber('');
    }
  };

  return (
    <Formik
      initialValues={{ name, number }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form
        autoComplete="off"
        style={{
          display: 'inline-block',
          border: '1px solid green',
          padding: '10px',
          paddingRight: '150px',
        }}
      >
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
          <ErrorMessage name="name" />
        </Label>

        <Label htmlFor="number" style={{ marginTop: '20px' }}>
          Number
          <Input
            type="tel"
            name="number"
            onChange={handleInputChange}
            value={number}
          />
          <ErrorMessage name="number" />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
}
