import { Container } from './Appp.styled';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Contact from './Contact/Contact';

export default function App() {
  return (
    <Container>
      <Section title="Phonebook" />
      <ContactForm />

      <Section title="Contacts" />
      <Contact />
    </Container>
  );
}
