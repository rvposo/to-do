import { useState } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("test");
  const [text, newText] = useState("sample name");

  return (
    <>
      <button
        onClick={() => {
          setMessage("TESTZAO");
          newText("new text rn");
        }}
      >
        {message}
      </button>

      <h1>{text}</h1>
      <h2>name2</h2>
    </>
  );
};

export default App;
