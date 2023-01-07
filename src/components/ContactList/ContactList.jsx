import { Button } from './ContactList.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactSlice.js';
import { getContacts, getFilterName } from 'components/redux/selectors.js';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilterName);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts
        .filter(({ name }) =>
          name.toLowerCase().includes(filterName.toLowerCase())
        )
        .map(({ name, id, number }) => {
          return (
            <li key={id}>
              <span>{name} : </span>
              <span>{number}</span>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                delete
              </Button>
            </li>
          );
        })}
    </ul>
  );
};
