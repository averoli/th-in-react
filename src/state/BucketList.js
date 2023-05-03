import React, { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

const ItemList = ({ artworks, onToggle }) => {
  return (
    <ul>
      {artworks.map((art) => {
        return (
          <li key={art.id}>
            <label>
              <input
                type="checkbox"
                checked={art.seen}
                onChange={(e) => onToggle(art.id, e.target.checked)}
              />
            </label>
            {art.title}
          </li>
        );
      })}
    </ul>
  );
};

export const BucketList = () => {
  const [list, setList] = useState(initialList);

  const handleToggle = (artworkId, ifSeen) => {
    setList(
      list.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: ifSeen };
        } else {
          return artwork;
        }
      })
    );
  };
  return (
    <div>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
    </div>
  );
};
