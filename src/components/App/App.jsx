import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import './App.css';

const LOCAL_STORAGE_KEY = 'user-contacts';

const defaultStateData = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialValues = {
    name: '',
    number: '',
};

function App() {
    const [contacts, setContacts] = useState(() => {
        const contactsWithLocalStorage = JSON.parse(
            window.localStorage.getItem(LOCAL_STORAGE_KEY)
        );

        if (contactsWithLocalStorage) {
            return contactsWithLocalStorage;
        }

        return defaultStateData;
    });

    const [filter, setFilter] = useState('');

    useEffect(() => {
        window.localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify(contacts)
        );
    }, [contacts]);

    const onFilterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const addNewContact = data => {
        const newContactAddId = { ...data, id: nanoid() };

        setContacts(prev => {
            return [...prev, newContactAddId];
        });
    };

    const deleteContact = deleteId => {
        setContacts(prev => {
            return prev.filter(contact => contact.id !== deleteId);
        });
    };

    return (
        <div className="appWrapper">
            <div className="formContainer">
                <h1 className="title">Phonebook</h1>
                <ContactForm
                    addNewContact={addNewContact}
                    initialValues={initialValues}
                />
                <SearchBox value={filter} onFilter={setFilter} />
            </div>
            <ContactList
                data={onFilterContacts}
                deleteContact={deleteContact}
            />
        </div>
    );
}

export default App;
