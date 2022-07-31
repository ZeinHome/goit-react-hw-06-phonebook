import { ContactList, ContactItem, Delete } from './Contact.styled';
import { changeFilter, contactDelete } from '../redux/actions';
import { getFilteredContacts } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

function Contact() {
  const value = useSelector(state => state.contacts.filter);
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
      <ContactList>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {name}: {number}
              <Delete onClick={() => dispatch(contactDelete(id))}>
                Delete
              </Delete>
            </ContactItem>
          );
        })}
      </ContactList>
    </div>
  );
}
export default Contact;
