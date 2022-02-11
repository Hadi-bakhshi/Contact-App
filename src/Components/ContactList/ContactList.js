import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
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

      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </section>
  );
};

export default ContactList;
