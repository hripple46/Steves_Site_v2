export default function DescriptionWithPic({ text, picture }) {
  return (
    <div className="flex justify-center items-center">
      <p className="w-1/3">{text}</p>
      <img src={picture} />
    </div>
  );
}
