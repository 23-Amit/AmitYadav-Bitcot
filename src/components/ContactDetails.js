import React from "react";

const ContactDetails = ({ contact, onClose }) => {
    console.log(contact)
  if (!contact) {
    return null;
  }

  return (
    <div style={{border:'2px solid blue',backgroundColor:'#FFB84C',borderRadius:'5px'}}>
      <h2>Contact Details</h2>
      <button onClick={onClose}>Close</button>
      <div>
        <strong>Name:</strong> {contact.name}
      </div>
      <div>
        <strong>Email:</strong> {contact.email}
      </div>
      <div>
        <strong>Phone:</strong> {contact.mobile}
      </div>
    </div>
  );
};

export default ContactDetails;

