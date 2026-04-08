import {NavLink} from 'react-router';

const kata2 = [
    {
    "arabic": "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    "riwayat": "HR. Muslim",
    "arti": "Barangsiapa menempuh jalan untuk mencari ilmu, Allah akan mudahkan baginya jalan menuju surga."
  },
]

export default function Kata2() {
  return (
    <div className="min-h-max flex flex-col items-center justify-center bg-primary pt-22 pb-12 text-secondary">
      <h3 className=" text-xl md:text-4xl font-semibold ml-4 text-center font-quicksand">
      {kata2[0].arabic}
      </h3>
      <p className="text-md md:text-lg text-center mt-4">{kata2[0].arti}</p>
      <p className=" text-sm md:text-md text-center mt-2 italic">{kata2[0].riwayat}</p>
      <div className="w-[70%] mt-2"><hr /></div>
      <NavLink to="/hadist" className="bg-secondary text-primary py-2 px-4 rounded-md hover:bg-primary hover:text-secondary transition duration-300 mt-4">
        Hadist lainnya
      </NavLink>
    </div>
  );
}