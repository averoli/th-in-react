import React, { useState } from "react";

const SeriesOfState = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(n => n + 5);
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>Increase the number</button>
    </div>
  );
};

export default SeriesOfState;
