const ContactList = ({ contacts }) => {
  return (
    <section>
      {contacts.map((c) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "left",
          }}
          key={c.id}
        >
          <span style={{ display: "block" }}>Name: {c.name}</span>
          <span style={{ display: "block" }}>Email: {c.email}</span>
        </div>
      ))}
    </section>
  );
};

export default ContactList;
