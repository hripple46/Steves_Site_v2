import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

import Header from "../components/header";

function DownAndAway() {
  return (
    <>
      <Header />

      <div>Thanks for checking out the page for Down and Away!</div>
      <Link to="/">Back to the main page</Link>
    </>
  );
}
export default DownAndAway;
