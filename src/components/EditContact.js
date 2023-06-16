import React, { useState } from 'react';


const EditContact = ({ contact, onSave }) => {
  const [name, setName] = useState(contact.name);
  const [mobile, setMobile] = useState(contact.mobile);
  const [email, setEmail] = useState(contact.email);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    const updatedContact = {
      id: contact.id,
      name,
      mobile,
      email,
    };
    onSave(updatedContact);
  };

  return (
    <div style={{border:'2px solid green',backgroundColor:'#F6FA70',borderRadius:'5px'}}>
      <h2>Edit Contact</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Mobile:
        <input type="text" value={mobile} onChange={handleMobileChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditContact;
