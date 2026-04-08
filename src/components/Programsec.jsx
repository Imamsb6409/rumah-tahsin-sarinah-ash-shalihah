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
    <section
      id="program"
      className="bg-primary min-h-screen text-head p-4 flex flex-col relative items-center"
    >
      <div className="bg-box/30 absolute -left-16 bottom-16 w-100 h-100 rotate-12"></div>

      <div className="font-dynaPuff text-center md:text-center text-green-500 relative mt-15">
        <h1 className="sm:text-xl lg:text-2xl -mb-3">Program Pembelajaran</h1>
        <h2 className="text-6xl lg:text-8xl">SARINAH</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {programData.map((program, index) => {
          const imgUrl = `/program-img/${program.gambar}`;

          return (
            <div
              key={index}
              className=" bg-box/30 p-6 rounded-lg shadow-lg h flex flex-col items-center text-center justify-between relative cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={imgUrl}
                alt={program.judul}
                className="w-100 h-auto mb-4"
              />
              {/* benarkan kode dibawah */}
              <span className={`absolute top-0 right-0 ${program.warnaType} text-white px-4 py-2 rounded-bl-full text-sm font-bold`}>
                {program.type}
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2">{program.judul}</h3>

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
