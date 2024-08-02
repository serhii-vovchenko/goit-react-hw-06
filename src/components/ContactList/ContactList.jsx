import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ data, deleteContact }) => {
    return (
        <ul className={s.wrapper}>
            {data.map(contact => {
                return (
                    <Contact
                        key={contact.id}
                        data={contact}
                        deleteContact={deleteContact}
                    />
                );
            })}
        </ul>
    );
};

export default ContactList;
