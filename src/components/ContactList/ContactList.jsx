import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const showFilteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.wrapper}>
      {showFilteredContacts.map(item => {
        return <Contact key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default ContactList;
