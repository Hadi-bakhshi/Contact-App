import "./App.css";
import { useState } from "react";
import AddContanctForm from "./Components/AddContactForm/AddContanctForm";
import ContactList from "./Components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandle = (contact) => {
    setContacts([
      ...contacts,
      { ...contact, id: Math.floor(Math.random() * 1000) },
    ]);
  };

  const removeContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <main className="h-screen w-screen text-center">
      <h1 className="border-b-2 border-indigo-300 text-lg font-bold py-4">Contact App</h1>
      <AddContanctForm addContactHandle={addContactHandle} />
      <ContactList contacts={contacts} onDelete={removeContactHandler} />
    </main>
  );
}

export default App;
