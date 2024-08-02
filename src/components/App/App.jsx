import './App.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

function App() {
  return (
    <div className="appWrapper">
      <div className="formContainer">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}

export default App;
