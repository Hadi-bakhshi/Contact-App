const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="flex flex-col items-center">
      {/* Map on the contacts */}
      {contacts.map((contact) => {
        const { id, name, email } = contact;
        return (
          // the main container for each contact
          <div
            key={id}
            className="bg-slate-50 w-1/2 flex items-center justify-between p-1 border-2 border-slate-300 mt-5 rounded-md shadow-md"
          >
            {/* items container - image */}
            <div className="flex flex-row items-center">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
                alt="avatar"
              />
              {/* name and email */}
              <div className="flex flex-col items-start">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
              </div>
              {/* end of name and email */}
            </div>
            {/* end of items container */}
            {/* button */}
            <button
              className="bg-red-500 text-white p-2 rounded-lg"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure that you want to delete this item?"
                  )
                )
                  onDelete(id);
              }}
            >
              Delete
            </button>
            {/* end of the button */}
          </div>
          // end of the main container
        );
      })}
    </section>
  );
};

export default ContactList;
