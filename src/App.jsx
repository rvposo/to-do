import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks"; //tasks component imported
import AddTask from "./components/AddTask";
const App = () => {
  const [message, setMessage] = useState("test");
  const [text, newText] = useState("sample name");

  return (
    <>
  <div className="h-screen w-screen bg-slate-500 flex justify-center">
  <AddTask />
      <Tasks /> {/* tasks component called */}
      <button
        onClick={() => {
          setMessage("TESTZAO");
          newText("new text rn");
        }}
      >
        {message}
      </button>
      <h1 className="text-red-500" >{text}</h1>
      <h2>name2</h2>
  </div>
    </>
  );
};

export default App;

// to do: install tailwindcss packaged and configure it at style.css
