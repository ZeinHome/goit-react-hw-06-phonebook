import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Appp.styled';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Contact from './Contact/Contact';

const contact = localStorage.getItem('contacts');
const parseContact = JSON.parse(contact);

export default function App() {
  const [contacts, setContacts] = useState(() => parseContact ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (parseContact) {
      setContacts(parseContact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const onList = contacts.find(contact => contact.name === name);

    if (onList) {
      alert('This contact is already added');
      return;
    }

    setContacts(prev => [
      ...prev,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const onChangeSearchInput = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <Container>
      <Section title="Phonebook" />
      <ContactForm formSubmitHandler={formSubmitHandler} />

      <Section title="Contacts" />
      <Contact
        contacts={contacts}
        filter={filter}
        onChangeSearchInput={onChangeSearchInput}
        deleteContact={deleteContact}
      />
    </Container>
  );
}

// const contact = localStorage.getItem('contacts');
// const parseContact = JSON.parse(contact);

// useEffect(() => {
//   if (parseContact) {
//     setContacts(parseContact);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);
