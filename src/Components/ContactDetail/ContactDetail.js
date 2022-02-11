import { Link } from "react-router-dom";

const ContactDetail = ({ location }) => {
  const { contact } = location.state;
  return (
    <div className=" flex flex-col items-center justify-between">
      <p>Username is : {contact.name}</p>
      <p>Email is : {contact.email}</p>
      <Link
        className="bg-indigo-600 text-white p-1 rounded-md hover:ring-2 ring-indigo-800 mt-2"
        to="/"
      >
        Go back to contact List
      </Link>
    </div>
  );
};

export default ContactDetail;
