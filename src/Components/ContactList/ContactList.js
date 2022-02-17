import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Contact from "./Contact/Contact";
import { getAllContacts } from "../../services/getContactsServices";
import { deleteContacts } from "../../services/deleteContactsService";

const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);

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

  const removeContactHandler = async (id) => {
    try {
      await deleteContacts(id);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col items-center mx-2">
      <div className="w-1/2 flex flex-row justify-between items-center">
        <h2 className="font-medium py-2">Contacts</h2>
        <Link to="/add">
          <button className="bg-indigo-600 text-white py-1 px-4 rounded-md hover:ring-2 ring-indigo-800">
            Add
          </button>
        </Link>
      </div>

      {contacts ? (
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={removeContactHandler}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default ContactList;
