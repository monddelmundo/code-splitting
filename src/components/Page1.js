import React from "react";
import logo from "../logo.svg";

const Page1 = ({ onRouteChange }) => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
      </header>
      <button className="disabled">Page1</button>
      <button onClick={() => onRouteChange("page2")}>Page2</button>
      <button onClick={() => onRouteChange("page3")}>Page3</button>
    </>
  );
};

export default Page1;
