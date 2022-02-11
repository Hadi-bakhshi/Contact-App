import "./App.css";
import { useState, useEffect } from "react";
import AddContanctForm from "./Components/AddContactForm/AddContanctForm";
import ContactList from "./Components/ContactList/ContactList";
import { Switch, Route } from "react-router-dom";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
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
    localStorage.removeItem(id);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="h-screen w-screen text-center">
      <h1 className="border-b-2 border-indigo-300 text-lg font-bold py-4">
        Contact App
      </h1>
      <Switch>
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
