import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { name, id, email } = contact;
  return (
    <div
      key={id}
      className="bg-slate-50 w-1/2 flex items-center justify-between p-1 border-2 border-slate-300 mt-5 rounded-md shadow-md"
    >
      <div className="flex flex-row items-center">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
          alt="avatar"
        />

        <Link to={`user/${id}`}>
          <div className="flex flex-col items-start">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        </Link>
      </div>
      <button
        className="bg-red-500 text-white p-2 rounded-lg"
        onClick={() => {
          if (window.confirm("Are you sure that you want to delete this item?"))
            onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
