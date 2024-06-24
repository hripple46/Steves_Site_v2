export default function DescriptionWithPic({ text, picture, title }) {
  return (
    <div className="mt-48 flex flex-col md:flex-row justify-evenly items-center md:items-start">
      <div className="flex w-3/4 md:w-1/3 flex-col">
        <h1 className="mb-2 pb-2 border-b-2 text-3xl">{title}</h1>
        <p>{text}</p>
      </div>
      <img className="w-3/4 md:w-1/3 rounded-md shadow-2xl" src={picture} />
    </div>
  );
}
