import React, { useState } from "react";

const initCounters = [0, 0, 0];

const CounterList = () => {
  const [counters, setCounters] = useState(initCounters);
  const handleCounter = (index) => {
    const nextCounter = counters.map((c, i) => {
      if (i !== index) {
        return c;
      } else {
        return ( c + 1);
      }
    });
    setCounters(nextCounter)
  };

  return (
    <div>
      <h2>Counters:</h2>
      {counters.map((counter, index) => (
        <li key={index}>
          {counter} <button onClick={() => handleCounter(index)}>+ 1</button>
        </li>
      ))}
    </div>
  );
};

export default CounterList;
