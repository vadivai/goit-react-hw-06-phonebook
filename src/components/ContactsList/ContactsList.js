import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { selectContacts, selectState } from '../../redux/selectors';
import { useSelector } from 'react-redux';

// const contacts = useSelector(selectContacts);
// const filter = useSelector(selectFilter);
// const state = useSelector(selectState);
// if (!filter) {
//   return;
// }

// const filteredItems = contacts.filter(item => {
//   const hasName = item.name.toLowerCase().includes(filter.toLowerCase());
//   return hasName;
// });

export const ContactsList = () => {
  const cont = useSelector(selectContacts);
  // const state1 = useSelector(selectState);
  // console.log('state1', state1);
  // console.log('cont.items', cont.items);
  return (
    <ul>
      {cont.map(contact => (
        <ContactsItem key={contact.id} item={contact} />
      ))}
    </ul>
  );
};
