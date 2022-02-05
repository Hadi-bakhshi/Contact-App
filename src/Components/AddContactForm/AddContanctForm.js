import { useState } from "react";

const AddContanctForm = ({addContact}) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    addContact(formValue);
}

  return (
    <section>
      <form onSubmit={submitHandler}>
        <input onChange={changeHandler} name="name" type="text" placeholder="Name" />
        <input onChange={changeHandler} name="email" type="text" placeholder="Email" />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddContanctForm;
