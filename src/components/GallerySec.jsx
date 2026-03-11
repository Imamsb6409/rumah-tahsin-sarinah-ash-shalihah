import { useState } from "react";

export default function GallerySec() {
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
        <h1 className="sm:text-xl lg:text-2xl -mb-3">Galeri Kegiatan</h1>
        <h1 className="text-6xl lg:text-8xl">SARINAH</h1>
      </div>
    </section>
  );
}
