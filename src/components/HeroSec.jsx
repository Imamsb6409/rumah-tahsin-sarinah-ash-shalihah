import HeroImg from "../assets/hero-image-rumah-tahsin.png";

export default function HeroSec() {

const right = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
)

  return (
    <section className="bg-primary relative">
      <div className="">
        <img
          src={HeroImg}
          alt="Hero Image"
          className="w-full h-screen object-cover object-top"
        />
      </div>
      <div className="w-full h-screen absolute bottom-0 left-0 bg-gradient-to-t from-black/65 via-black/60 to-primary z-10 flex flex-col justify-center items-center text-white gap-4">
        <div className=" font-dynaPuff text-center text-white">
          <h1 className="sm:text-xl lg:text-2xl -mb-3">Rumah tahsin</h1>
          <h1 className="text-7xl lg:text-9xl ">SARINAH</h1>
          <p className="font-quicksand font-medium text-lg px-6 lg:text-2xl mt-8 text-center max-w-2xl lg:max-w-3xl">
            Rumah tempat umat muslim menuntut ilmu tajweed dan belajar cara
            melafadzkan ayat Al-Quran dengan baik dan benar.
          </p>
        </div>
        <div className="mt-10">
            <button className="hover:bg-secondary text-white font-quicksand font-semibold text-lg lg:text-lg pl-5 pr-3 py-3 rounded-2xl border-2 border-[#4b533c] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out flex justify-center items-center gap-4">Profil Kami {right}</button>
        </div>
      </div>
    </section>
  );
}
