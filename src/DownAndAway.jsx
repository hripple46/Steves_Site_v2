import "./App.css";
import "./index.css";
import { Link } from "react-router-dom";

function DownAndAway() {
  return (
    <>
      <div className="bg-red-300 text-white text-3xl font-bold underline">
        Down and away!
      </div>
      <div>Thanks for checking out the page for Down and Away!</div>
      <Link to="/">Back to the main page</Link>
    </>
  );
}
export default DownAndAway;
