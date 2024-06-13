import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

import Header from "../components/header";

export default function TheCryingWolf() {
  return (
    <>
      <Header />

      <div>Thanks for checking out the page for The Crying Wolf!</div>
      <Link to="/">Back to the main page</Link>
    </>
  );
}
