import React, { useState } from "react";
import { sculptureList } from "./data.js";

export const Memory = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setIndex(index + 1);
  };

  const handleshowMore = () => {
    setShowMore(!showMore);
  };
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handleshowMore}>showMore</button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
};
