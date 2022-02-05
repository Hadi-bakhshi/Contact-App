import { useState } from "react";
import AddContanctForm from "../AddContactForm/AddContanctForm";
import ContactList from "../ContactList/ContactList";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (formValue) => {
    setContacts([
      ...contacts,
      { ...formValue, id: Math.floor(Math.random() * 1000) },
    ]);
  };

  return (
    <div>
      <AddContanctForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contacts;
