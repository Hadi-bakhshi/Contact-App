const ContactList = ({ contacts, onDelete }) => {
  return (
   <>
   {
     contacts.map(contact =>{
       const { id, name, email } = contact;
       return <div key={id}>
         <p>Name :{name}</p>
          <p>Email :{email}</p>
          <button className="bg-red-100 text-red-700 p-2 mt-3 rounded-lg" onClick={()=>onDelete(id)}>Delete</button>
       </div>
     })
   }
   </>
  );
};

export default ContactList;
