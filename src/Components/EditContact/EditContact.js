import { useState, useEffect } from "react";
import { getOneContact } from "../../services/getOneContact";
import http from "../../services/httpServices";
const EditContact = ({ history, match }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("Please fill all the fields");
      return;
    }
    e.preventDefault();
    try {
      await http.put(`/contacts/${match.params.id}`, contact);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOneContact(match.params.id)
      .then((res) => setContact({ name: res.data.name, email: res.data.email }))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <form className="flex flex-col items-center" onSubmit={submitForm}>
      <div className="flex flex-col items-start mt-5">
        <label className="">Name</label>
        <input
          className="outline-none rounded-md border-2 bg-indigo-50 border-indigo-300 py-1 px-2 focus:ring-2 ring-indigo-700"
          name="name"
          type="text"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-col items-start mt-5">
        <label className="">Email</label>
        <input
          className="outline-none rounded-md border-2 bg-indigo-50 border-indigo-300 py-1 px-2 focus:ring-2 ring-indigo-700"
          name="email"
          type="text"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white p-2 mt-5 rounded-lg hover:border-2 border-indigo-700"
      >
        Update Contact
      </button>
    </form>
  );
};

export default EditContact;
