export default function Header() {
  return (
    <>
      <ul className="w-full h-24 bg-blue-300 flex justify-center lg:justify-start items-center top-0 fixed">
        <div className=" h-full hover:bg-blue-400 flex items-center pl-2">
          <li className=" text-white text-3xl pr-2 ">Stephen Ripple</li>
        </div>
        <div className=" h-full hover:bg-blue-400 flex items-center pl-2">
          <li className="text-white text-2xl pr-2">Collection</li>
        </div>
        <div className=" h-full hover:bg-blue-400 flex items-center pl-2">
          <li className=" text-white text-2xl pr-2">Other</li>
        </div>
      </ul>
      <div className="h-24"></div>
    </>
  );
}
