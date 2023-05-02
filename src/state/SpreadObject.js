import React, { useState } from "react";

const SpreadObject = () => {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };
  const handleChange = (e) => {
    setPerson({
        ...person,
        [e.target.name]: e.target.value
      });
  };
  return (
    <>
      <label>
        First name:
        <input name='firstName' value={person.firstName} onChange={handleChange} />
      </label>
      <label>
        Last name
        <input name='lastName' value={person.lastName} onChange={handleChange} />f
      </label>
      <label>
        E-mail:
        <input name='email' value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default SpreadObject;
