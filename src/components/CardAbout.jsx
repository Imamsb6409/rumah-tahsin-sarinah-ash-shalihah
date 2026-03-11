export default function cardAbout({ image, desc }) {
  return (
    <div className="border-20 border-box bg-transparent w-75 h-75 flex flex-col justify-center items-center gap-4 text-center rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
      <img src={image} className=" w-37.5  object-cover" />
      <div className="px-4   font-lato text-sub text-xl">{desc}</div>
    </div>
  );
}