import Header from "../components/header";
import ProfilePic from "../assets/profile_pic.jpg";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="w-screen h-screen flex justify-center items-center">
        <img
          className="h-auto w-1/3 rounded-md"
          src={ProfilePic}
          alt="Stephen's Profile Picture"
        />
        <div className="h-1/3 w-1/3 rounded-md bg-slate-600/25 flex items-center justify-center">
          <p>Here's where the author description goes.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
