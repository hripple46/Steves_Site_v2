import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

import DescriptionWithPic from "../components/DescriptionWithPic";
import Header from "../components/header";

function DownAndAway() {
  return (
    <>
      <Header />

      <div className="mt-24">
        Thanks for checking out the page for Down and Away!
      </div>
      <DescriptionWithPic text="Summary text goes here." />
      <Link to="/">Back to the main page</Link>
    </>
  );
}
export default DownAndAway;
