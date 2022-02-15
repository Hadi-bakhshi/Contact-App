import "./App.css";
import { useState, useEffect } from "react";
import AddContanctForm from "./Components/AddContactForm/AddContanctForm";
import ContactList from "./Components/ContactList/ContactList";
import { Switch, Route } from "react-router-dom";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
import { getAllContacts } from "./services/getContactsServices";
import { deleteContacts } from "./services/deleteContactsService";
import { addNewContact } from "./services/addContactService";
import EditContact from "./Components/EditContact/EditContact";
import updateOneContact from "./services/updateContactService";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandle = async (contact) => {
    try {
      const { data } = await addNewContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const editContactHandler = async (id, contact) => {
   const {data} = await updateOneContact(id, contact);
    console.log(data);
  };

  const removeContactHandler = async (id) => {
    try {
      await deleteContacts(id);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getAllContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // to use local storage these codes will be used

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (savedContacts) setContacts(savedContacts);
  // }, []);

  return (
    <main className="h-screen w-screen text-center">
      <h1 className="border-b-2 border-indigo-300 text-lg font-bold py-4">
        Contact App
      </h1>
      <Switch>
        <Route
          path="/edit/:id"
          render={(props) => (
            <EditContact editContactHandler={editContactHandler} {...props} />
          )}
        />
        <Route path="/user/:id" component={ContactDetail} />
        <Route
          path="/add"
          render={(props) => (
            <AddContanctForm addContactHandle={addContactHandle} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <ContactList
              contacts={contacts}
              onDelete={removeContactHandler}
              {...props}
            />
          )}
        />
      </Switch>
      {/* <AddContanctForm addContactHandle={addContactHandle} /> */}
      {/* <ContactList contacts={contacts} onDelete={removeContactHandler} /> */}
    </main>
  );
}

export default App;
