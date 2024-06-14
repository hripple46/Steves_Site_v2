import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import BodyParagraph from "../components/bodyParagraph";

import Header from "../components/header";

function DownAndAway() {
  return (
    <>
      <Header />

      <div>Thanks for checking out the page for Down and Away!</div>
      <BodyParagraph text="Summary text goes here." />
      <Link to="/">Back to the main page</Link>
    </>
  );
}
export default DownAndAway;
