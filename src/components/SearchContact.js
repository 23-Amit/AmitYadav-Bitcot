import React from "react";


const SearchContact = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div style={{border:'2px solid yellow',borderRadius:'5px'}}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchContact;