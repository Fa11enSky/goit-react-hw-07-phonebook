import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { getIsLoading } from 'store/selectors';
import { useSelector } from 'react-redux';
import Loader from './Loader/Loader';
const App = () => {
  const isLoading=useSelector(getIsLoading)
  return (
    <div>
      <h1
        style={{
          fontSize: '45px',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: '40px',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading &&<Loader/>}
      <ContactList />
    </div>
  );
};
export default App;
