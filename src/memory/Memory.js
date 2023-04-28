import React, { useState } from "react";
import { sculptureList } from "./data.js";

export const Memory = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;

  const handleClickPrev = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  const handleClickNext = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handleshowMore = () => {
    setShowMore(!showMore);
  };

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClickPrev} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleClickNext} disabled={!hasNext}>
        Next
      </button>
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
