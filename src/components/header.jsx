export default function Header() {
  return (
    <>
      <ul className="w-full h-12 bg-red-300 flex justify-center justify-evenly align-center top-0 fixed">
        <li className="bg-red-300 text-white text-3xl font-bold underline">
          Home
        </li>
        <li className="bg-red-300 text-white text-3xl font-bold underline">
          Collection
        </li>
        <li className="bg-red-300 text-white text-3xl font-bold underline">
          Other
        </li>
      </ul>
      <div className="h-12"></div>
    </>
  );
}
