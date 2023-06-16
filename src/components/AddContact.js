import React, { useState } from 'react';

const AddContact = ({ onSave }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    const newContact = {
      id: Date.now(),
      name,
      mobile,
      email,
    };
    onSave(newContact);
    setName('');
    setMobile('');
    setEmail('');
  };

  return (
    <div style={{border:'2px solid brown', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#DD58D6',borderRadius:'5px'}}>
      <h2>Add Contact</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Mobile:</label>
      <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddContact;
