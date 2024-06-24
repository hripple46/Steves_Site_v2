import { useState } from "react";

import { Link } from "react-router-dom";

export default function Header() {
  const [isCollectionHovered, setIsCollectionHovered] = useState(false);

  const renderCollection = () => {
    if (isCollectionHovered) {
      return (
        <ul className="absolute top-full bg-white w-full left-0 box-border">
          <Link to="/downandaway">
            <li className="text-center p-2 hover:bg-gray-200">Down and Away</li>
          </Link>
          <Link to="/thecryingwolf">
            <li className="p-2 text-center hover:bg-gray-200">
              The Crying Wolf
            </li>
          </Link>
        </ul>
      );
    }
  };

  return (
    //header has height of 24 (tailwindcss); add margins to top of other components to push down same height
    <>
      <ul className="z-10 w-full h-24 bg-blue-300 flex justify-center lg:justify-start items-center top-0 fixed">
        <Link to="/" className="h-full">
          <div className=" h-full hover:bg-blue-400 flex items-center pl-2">
            <li className="pl-8 text-white text-3xl pr-8 text-center ">
              Stephen Ripple
            </li>
          </div>
        </Link>

        <div
          onMouseEnter={() => setIsCollectionHovered(true)}
          onMouseLeave={() => setIsCollectionHovered(false)}
          className="relative h-full hover:bg-blue-400 hover:cursor-pointer  flex items-center pl-2 pr-2"
        >
          <li className="text-white text-2xl ">Collection</li>
          {renderCollection()}
        </div>
        <div className=" h-full hover:bg-blue-400 hover:cursor-pointer flex items-center pl-2">
          <li className=" text-white text-2xl pr-2">Other</li>
        </div>
      </ul>
    </>
  );
}
