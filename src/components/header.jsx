import { useState } from "react";

import { Link } from "react-router-dom";

export default function Header() {
  const [isCollectionHovered, setIsCollectionHovered] = useState(false);

  const renderCollection = () => {
    if (isCollectionHovered) {
      return (
        <ul className="absolute top-full bg-white w-full left-0">
          <Link to="/downandaway">
            <li className="hover:bg-gray-200">Down and Away</li>
          </Link>
          <Link to="/thecryingwolf">
            <li className="hover:bg-gray-200">The Crying Wolf</li>
          </Link>
        </ul>
      );
    }
  };

  return (
    <>
      <ul className="w-full h-24 bg-blue-300 flex justify-center lg:justify-start items-center top-0 fixed">
        <div className=" h-full hover:bg-blue-400 flex items-center pl-2">
          <li className=" text-white text-3xl pr-2 ">Stephen Ripple</li>
        </div>
        <div
          onMouseEnter={() => setIsCollectionHovered(true)}
          onMouseLeave={() => setIsCollectionHovered(false)}
          className="relative h-full hover:bg-blue-400 flex items-center pl-2 pr-2"
        >
          <li className="text-white text-2xl ">Collection</li>
          {renderCollection()}
        </div>
        <div className=" h-full hover:bg-blue-400 flex items-center pl-2">
          <li className=" text-white text-2xl pr-2">Other</li>
        </div>
      </ul>
      <div className="h-24"></div>
    </>
  );
}
