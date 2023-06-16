import React, { useState } from 'react';
import ContactDetails from './ContactDetails';
import SearchContact from './SearchContact';
import AddContact from './AddContact';
import EditContact from './EditContact';

const ContactView = () => {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: 'John Doe',
      mobile: '1234567890',
      email: 'johndoe@example.com',
    },
    // Add more contacts...
  ]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddContact, setShowAddContact] = useState(false);
  const [editContact, setEditContact] = useState(null); // Track the selected contact for editing

  const handleSaveContact = (newContact) => {
    if (editContact) {
      const updatedContactList = contactList.map((contact) =>
        contact.id === editContact.id ? { ...newContact, id: editContact.id } : contact
      );
      setContactList(updatedContactList);
      setEditContact(null); // Reset the selected contact for editing
    } else {
      const updatedContactList = [...contactList, newContact];
      setContactList(updatedContactList);
    }
    setShowAddContact(false); // Hide Add Contact component after saving
  };

  const handleDeleteContact = (id) => {
    const updatedContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedContactList);
    if (editContact && editContact.id === id) {
      setEditContact(null); // Reset the selected contact for editing if it gets deleted
    }
  };

  const handleEditContact = (id) => {
    const contact = contactList.find((contact) => contact.id === id);
    setEditContact(contact); // Set the selected contact for editing
    setShowAddContact(true); // Show the Add Contact component for editing
  };

  const handleViewContact = (id) => {
    const contact = contactList.find((contact) => contact.id === id);
    setSelectedContact(contact);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.mobile.includes(searchQuery)
  );

  return (
    <div style={{border:'2px solid red', backgroundColor:'#E1AEFF',display: "flex",flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'5px'}}>
      <h1>Contact List</h1>
      <SearchContact value={searchQuery} onChange={handleSearch} />
      <button onClick={() => setShowAddContact(!showAddContact)}>
        {showAddContact ? 'Hide Add Contact' : 'Add Contact'}
      </button>
      {filteredContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        filteredContacts.map((contact) => (
          <div key={contact.id} style={{border:'2px solid brown',backgroundColor:'#99DBF5',borderRadius:'5px'}}>
            <p>Name: {contact.name}</p>
            <p>Mobile: {contact.mobile}</p>
            <p>Email: {contact.email}</p>
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            <button onClick={() => handleEditContact(contact.id)}>Edit</button>
            <button onClick={() => handleViewContact(contact.id)}>View</button>
            <hr />
          </div>
        ))
      )}
      {selectedContact && (
        <ContactDetails
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}
      {showAddContact && (
        <React.Fragment>
          {editContact ? (
            <EditContact contact={editContact} onSave={handleSaveContact} />
          ) : (
            <AddContact onSave={handleSaveContact} />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default ContactView;

