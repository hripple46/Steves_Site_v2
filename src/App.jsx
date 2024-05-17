import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-red-300 text-3xl font-bold underline">
        Hello world!
      </h1>
      <Link to="downandaway">Down and away!</Link>
    </>
  );
}

export default App;
