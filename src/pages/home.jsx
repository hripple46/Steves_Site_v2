import Header from "../components/header";
import ProfilePic from "../assets/profile_pic.jpg";

function HomePage() {
  return (
    <div>
      <Header />
      <img src={ProfilePic} alt="Stephen's Profile Picture" />
    </div>
  );
}

export default HomePage;
