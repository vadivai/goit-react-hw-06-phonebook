import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { selectContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsItem key={contact.id} item={contact} />
      ))}
    </ul>
  );
};
