import { useDispatch } from 'react-redux';
import { LiItem } from './ContactsItem.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactsItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  // console.log('id', id);
  return (
    <LiItem>
      <span>
        {name} {number}
      </span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </LiItem>
  );
};
