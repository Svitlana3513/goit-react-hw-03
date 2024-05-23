import { useState, useEffect } from "react";
import css from './App.module.css';
import initialContacts from '../../contacts.json'

import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'


export default function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = window.localStorage.getItem("storage-contacts");
        if (savedContacts !== null) {
            return JSON.parse(savedContacts);
        }
        return initialContacts;
    })

    useEffect(() => {
        window.localStorage.setItem("storage-contacts", JSON.stringify(contacts));
    }, [contacts]);

    const addContact = newContact => {
        setContacts(prevContact => {
            return [...prevContact, newContact];
        });
    };
    
    const deleteContact = contactId => {
        setContacts(prevContact => {
            return prevContact.filter((contact)=>contact.id !== contactId)
        })
    };

    const [filter, setFilter] = useState("");

    const visibleContacts = contacts.filter((contact)=>contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
      <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={filter} onFilter={setFilter}/>
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
            

      </div>
)
}

