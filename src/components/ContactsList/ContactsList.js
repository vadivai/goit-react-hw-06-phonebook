import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import {
  selectContacts,
  selectFilter,
  // selectVisibleContacts,
} from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const cont = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredItems = cont.filter(item => {
    const hasName = item.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });
  return (
    <ul>
      {filteredItems.map(contact => (
        <ContactsItem key={contact.id} item={contact} />
      ))}
    </ul>
  );
};

// 2 вариант
// export const ContactsList = () => {
// const visibleContacts = useSelector(selectVisibleContacts);
// return (
//   <ul>
//     {visibleContacts.map(contact => (
//       <ContactsItem key={contact.id} item={contact} />
//     ))}
//   </ul>
// );
// };
