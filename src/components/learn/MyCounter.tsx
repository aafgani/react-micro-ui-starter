// React hook = Special function that allow functional components to use React features without a class component
//                        (useState, useEffect, useContext, etc.)

// useState = allows to create stateful variable to functional components
// State = a way to store and manage data in a component
// When state changes, the component re-renders to reflect the new state

import { useState } from "react";

function MyCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <p className="count-display">Counter: {count}</p>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default MyCounter;
