import React, { useState } from "react";

const AddingArray = () => {
  let nextId = 0;
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  return (
    <>
      {" "}
      <h1>List of sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
          setName("");
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AddingArray;
