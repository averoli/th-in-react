import React, { useState } from "react";

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const InsertingIntoArray = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  const handleInsert = () => {
    let nextId = artists.length;
    const nextArtist = [...artists, { id: nextId, name: name }];
    setArtists(nextArtist);
    setName("");
  };
  let nextId = artists.length;
  return (
    <div>
      <h2>Inspiring sculptors:</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleInsert}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InsertingIntoArray;
