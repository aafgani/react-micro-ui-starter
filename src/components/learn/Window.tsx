// useEffect Hook
// useEffect = allows to perform side effects in functional components
// Side effects = data fetching, subscriptions, or manually changing the DOM
// Runs after every render by default, but can be configured to run only when certain values change

// 1. useEffect(() => {}) = runs after every render
// 2. useEffect(() => {}, []) = runs only once after the initial render (componentDidMount)
// 3. useEffect(() => { return () => {} }, []) = runs once on unmount (componentWillUnmount)
// 4. useEffect(() => {}, [dependencies]) = runs when dependencies change

import { useState, useEffect } from "react";

const Window = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Component mounted");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Width or Height changed:", width, height);
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div className="simple-card">
      <h2>Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default Window;
