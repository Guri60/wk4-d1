import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact List</h1>

      {contacts.map((contact) => (
        <div
          key={contact.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{contact.name}</h3>
          <h5>{contact.email}</h5>
          <p>{contact.company.catchPhrase}</p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;