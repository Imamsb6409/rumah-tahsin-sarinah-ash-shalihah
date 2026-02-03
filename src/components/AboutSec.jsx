import CardAbout from "./CardAbout";
import iconSunnah from "../assets/about-image/icon-sunnah.png";
import iconTajwid from "../assets/about-image/icon-tajwid.png";
import iconTenagaK from "../assets/about-image/icon-tenagaK.png";
import iconTalqin from "../assets/about-image/icon-Talqin.png";

const dataAbout = [
  {
    image: iconSunnah,
    desc: "Pemahaman sesuai sunnah & salaf shalih.",
  },
  {
    image: iconTenagaK,
    desc: "Tenaga kerja yang ahli & berpengalaman.",
  },
  {
    image: iconTajwid,
    desc: "Pembelajaran sesuai dengan kaidah tajwid.",
  },
  {
    image: iconTalqin,
    desc: "Penyampaian yang mudah dimengerti oleh anak-anak.",
  },
];

export default function AboutSec() {
  return (
    <section className="bg-primary h-screen text-head p-4 flex flex-col md:flex-row justify-center md:justify-around items-center gap-y-4 md:items-start pt-[100px] relative overflow-hidden">
      <div className="bg-box/30 absolute -left-16 bottom-16 w-[400px] h-[400px] rotate-12"></div>
      
      <div className="font-dynaPuff text-center md:text-left text-head relative">
        <h1 className="sm:text-xl lg:text-2xl -mb-3">Rumah tahsin</h1>
        <h1 className="text-6xl lg:text-8xl">SARINAH</h1>
        <h1 className="sm:text-xl lg:text-2xl -mt-3 md:absolute">Ash-Shalihah</h1>
        <p className="font-quicksand font-medium text-[20px] lg:text-[20px] mt-8 max-w-xl md:max-w-sm lg:max-w-xl text-sub">
          Rumah tempat umat muslim menuntut ilmu tajweed dan belajar cara
          melafadzkan ayat Al-Quran dengan baik dan benar.
          
        </p>
      </div>

      {/* --- BAGIAN MARQUEE --- */}
      <div className="z-10 flex flex-row md:flex-col gap-4 overflow-hidden h-full max-h-[600px] mt-11">
        <div className="flex flex-row md:flex-col gap-4 animate-marquee md:animate-marqueeVertical">
          {/* Mapping Pertama */}
          {dataAbout.map((item, index) => (
            <CardAbout key={`first-${index}`} image={item.image} desc={item.desc} />
          ))}
          {/* Mapping Kedua (Duplikatnya lah pokoknya biar bagus uhuy) */}
          {dataAbout.map((item, index) => (
            <CardAbout key={`second-${index}`} image={item.image} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
