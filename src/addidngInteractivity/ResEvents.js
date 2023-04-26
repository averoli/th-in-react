import React from "react";

const AlertButton = ({ children, message, movieName }) => {
  return (
    <button
      onClick={() => {
        alert(message);
      }}
    >
      Play "{movieName}"!
    </button>
  );
};

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const ToolBar = ({ onPlay, onUpload }) => {
  return (
    <>
      <Button onClick={onPlay}>Play Movie</Button>
      <Button onClick={onUpload}> Upload Image</Button>
      <AlertButton message="Auydame!!!" movieName="Kiki">
        Alert button
      </AlertButton>
    </>
  );
};

const Propagate = () => {
  return (
    <div onClick={() => alert("Kuku")}>
      <button onClick={() => alert("First alert!")}>First</button>
      <button onClick={() => alert("Second one!")}>Second</button>
    </div>
  );
};

const ResEvents = () => {
  const onPlay = () => {
    alert("Play video");
  };

  const onUpload = () => {
    alert("Upload Image");
  };
  return (
    <>
      <ToolBar onPlay={onPlay} onUpload={onUpload} />
      <Propagate />
    </>
  );
};

export default ResEvents;
