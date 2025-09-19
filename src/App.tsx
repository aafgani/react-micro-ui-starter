import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Card,
  Hello,
  MyCounter,
  WindowWidth,
  ComponentA,
  ToDoList,
} from "./components/learn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Hello name="Andrya" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ToDoList />
      <br />
      <Card title="Profile">
        <p>This is inside the card.</p>
        <button>Click Me</button>
      </Card>
      <MyCounter />
      <WindowWidth />
      <ComponentA />
    </>
  );
}

export default App;
