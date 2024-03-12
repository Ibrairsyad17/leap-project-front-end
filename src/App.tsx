import { useState } from "react";
import reactLogo from "./assets/leap-motion.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Leap Motion Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Project leap motion untuk vocafe.</p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quod?
      </p>
    </>
  );
}

export default App;
