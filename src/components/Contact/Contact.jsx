import s from './Contact.module.css';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';

const Contact = ({ data: { id, name, number }, deleteContact }) => {
    return (
        <li className={s.wrapper}>
            <div className={s.userData}>
                <h3 className={s.userName}>
                    <span className={s.icon}>
                        <FaUserLarge size="18" />
                    </span>
                    {name}
                </h3>
                <p className={s.userPhone}>
                    <span className={s.icon}>
                        <FaPhone size="18" />
                    </span>
                    {number}
                </p>
            </div>
            <button
                className={s.btn}
                type="button"
                onClick={() => deleteContact(id)}
            >
                Delete
            </button>
        </li>
    );
};

export default Contact;
