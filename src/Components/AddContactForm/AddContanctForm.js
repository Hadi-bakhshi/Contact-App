import { useState } from "react";

const AddContanctForm = ({ addContactHandle }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    if(!contact.name || !contact.email){
      alert("Please fill all the fields");
      return;
    }
    e.preventDefault();
    addContactHandle(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label className="block">Name</label>
        <input
          className="bg-indigo-100 border border-indigo-600 rounded-sm"
          name="name"
          type="text"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label className="block">Email</label>
        <input
          className="bg-indigo-100 border border-indigo-600 rounded-sm"
          name="email"
          type="text"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit" className="bg-green-100 text-green-700 p-2 mt-3 rounded-lg">Add contact</button>
    </form>
  );
};

export default AddContanctForm;
