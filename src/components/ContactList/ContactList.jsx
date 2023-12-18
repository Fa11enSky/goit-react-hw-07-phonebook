import ContactsItem from 'components/ContactItem/ContactItem';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
import { fetchContacts } from 'store/operations';
import { useEffect } from 'react';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filterValue = useSelector(getFilter);
  const createRenderListContact = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };
  return (
    <ul className={css.contacts}>
      {createRenderListContact().map(el => {
        return <ContactsItem key={el.id} contact={el} />;
      })}
    </ul>
  );
};
export default ContactList;
