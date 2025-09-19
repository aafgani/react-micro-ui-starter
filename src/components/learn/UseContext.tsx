// useContext = React Hook that allows to share state across the entire app (or part of it) lightly and with ease
// It is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
// without passing props down manually at every level

// Provider Component
// 1. import {createContext} from 'react'
// 2. export const MyContext = createContext()
// 3. Wrap your component tree with <MyContext.Provider value={/* some value */}>
// <MyContext.Provider value={/* some value */}><Child /></MyContext.Provider>

// Consumer Component
// 1. import {useContext} from 'react'
// 2. import {MyContext} from 'path/to/MyContext'
// 3. const value = useContext(MyContext)

import { createContext, useContext, useState } from "react";

const UserContext = createContext<string>("");

const ComponentA = () => {
  const [user, setUser] = useState("Andrya");

  return (
    <div className="box">
      <UserContext.Provider value={user}>
        <h1>ComponentA</h1>
        <h2>Hi: {user}</h2>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  );
};

const ComponentC = () => {
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <ComponentD />
    </div>
  );
};

const ComponentD = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>Bye: {user}</h2>
    </div>
  );
};

export default ComponentA;
