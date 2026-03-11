import programData from "../data/program.json";
import { useState } from "react";

export default function Programsec() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="bg-primary shadow-2xl min-h-screen text-head p-4 flex flex-col relative items-center">
      <div className="bg-box/30 absolute -left-16 bottom-16 w-100 h-100 rotate-12"></div>

      <div className="font-dynaPuff text-center md:text-center text-head relative mt-15">
        <h1 className="sm:text-xl lg:text-2xl -mb-3">Program Pembelajaran</h1>
        <h1 className="text-6xl lg:text-8xl">SARINAH</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {programData.map((program, index) => {
          const imgUrl = new URL(`../assets/${program.gambar}`, import.meta.url)
            .href;

          return (
            <div
              key={index}
              className="bg-box/30 p-6 rounded-lg shadow-lg flex flex-col items-center text-center justify-between relative cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={imgUrl}
                alt={program.judul}
                className="w-full h-auto mb-4"
              />
              <div>
                <h2 className="text-xl font-bold mb-2">{program.judul}</h2>

                {isHovered && (
                  <div className="absolute inset-0 bg-black/70 text-white p-4 rounded-lg flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-gray-300">{program.deskripsi}</p>
                    <a
                      href={program.link}
                      className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
                    >
                      Pelajari Lebih Lanjut
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
