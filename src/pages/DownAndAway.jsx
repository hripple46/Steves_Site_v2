import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

import DescriptionWithPic from "../components/DescriptionWithPic";
import Header from "../components/header";
import OldBaseball from "../assets/oldbaseball.jpeg";

function DownAndAway() {
  return (
    <>
      <Header />

      <DescriptionWithPic
        title="DOWN AND AWAY"
        picture={OldBaseball}
        text="In DOWN AND AWAY, the setting of OCTOBER SKY meets the family complexity of THE FABELMANS. It was 1915 in Chisholm, Minnesota. Max realized at an early age that he wanted to become a doctor. But the need to help his mother pay the bills made life as an iron ore miner the only path he could see. A horrific mining accident that took the life of his best friend made him realize that a different path to becoming a doctor was needed. Through the help of local baseball-player-turned-doctor, Archibald Graham, Max was able to chart a different course. He was determined to never again enter the depths of an iron ore mine. Despite so many challenges, including family members who weren’t what they seemed, Max found hope on a baseball field. DOWN AND AWAY will appeal to readers who grew up in small towns and readers who want something more than their current environments can provide. Additionally, it will appeal to anyone who has ever seen baseball as more than a sport. I am a life-time resident of Minnesota, and a life-time fan of baseball. I graduated with a degree in Creative Writing from the University of Minnesota. I’m also the grandson of Rudy Ripple, the real-life miner, turned baseball player, turned doctor on whom this book was based.

"
      />
    </>
  );
}
export default DownAndAway;
