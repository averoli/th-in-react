import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const RemovingFromArray = () => {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <div>
      <h2>List of artists:</h2>
      {artists.map((artist) => (
        <ul key={artist.id}>
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RemovingFromArray;
