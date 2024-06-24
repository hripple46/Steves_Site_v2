import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

import Header from "../components/header";
import DescriptionWithPic from "../components/DescriptionWithPic";
import BoatBackground from "../assets/boat_background.jpeg";

export default function TheCryingWolf() {
  return (
    <>
      <Header />

      <div className="mt-24">
        <DescriptionWithPic
          title="THE CRYING WOLF"
          text="Jake (13) loves life outside and on the water. He wants nothing more than to be a fishing guide like his father, working the family business at The Crying Wolf lodge, reeling in 40-inch northern and telling tales about it in the lodge. But when he finds a mysterious journal one day hidden on a remote shore, he no longer is sure about anything. And when his family is torn apart by tragedy, Jake is suddenly thrown into situations he’s not ready to handle, without the one person who could help him the most.

The Crying Wolf will appeal to young male readers, between 13-18. Additionally, Midwest families who vacation on lakes in Minnesota, Wisconsin, Michigan, would be interested. And finally, those who visit Canadian fishing camps would be very interested in reading about Jake, and his family’s adventures at The Crying Wolf.

I am a first-time author, and a life-time fisherman. I graduated with a degree in Creative Writing from the University of Minnesota and went immediately into the world of business. After many years there, I decided to get back to my passion of writing. And for over 20 years, I have joined a group of friends on an Ontario fishing trip, most of those years spent at Caribou Falls Lodge near Minaki, Ontario, the inspirational setting for The Crying Wolf. I have hooked countless walleye and northern pike and have even witnessed the hooking of a thumb. And I have personally dinged multiple props and a couple of skegs through the years."
          picture={BoatBackground}
        />
      </div>
      <Link to="/">Back to the main page</Link>
    </>
  );
}
