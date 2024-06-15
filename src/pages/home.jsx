import Header from "../components/header";

import ProfilePic from "../assets/profile_pic.jpg";
import BoatBackground from "../assets/boat_background.jpeg";

function HomePage() {
  return (
    <div>
      <Header />
      <div>
        <div className="absolute bg-boat bg-cover">
          <div className="backdrop-blur-sm w-screen h-screen flex justify-evenly items-center">
            <img
              className="h-auto w-1/3 rounded-md shadow-2xl"
              src={ProfilePic}
              alt="Stephen's Profile Picture"
            />
            <p className="p-2 w-1/3 bg-slate-600/25 rounded-md shadow-2xl  z-10 flex items-center justify-center">
              I am an author, a Midwest "lake person", and a fan of baseball
              games at all levels, especially if they last less than three
              hours. I graduated with a degree in Creative Writing from the
              University of Minnesota and live in St. Paul with my
              wife/professor, Dr. Teresa Ripple, and two middle-aged friendly
              but odd dogs. I have written two books (both yet to be published)
              and I am beginning to work on my third. I have fished for years at
              the Canadian lodge that inspired THE CRYING WOLF, and I have spent
              time in the Iron Range of Minnesota, the setting of DOWN AND AWAY.
              I have even eaten rutabaga, potato, and beef pasties, and can
              honestly say I love them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
