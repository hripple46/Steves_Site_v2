import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomePage from "./pages/home";

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <HomePage />
      <Link to="downandaway">Down and away!</Link>
    </>
  );
}

export default App;
