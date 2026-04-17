import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import galleryData from "../data/gallery.json";

export default function GallerySec() {
  return (
    <section id="gallery" className="py-24 bg-primary px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <ImageIcon className="text-secondary" size={32} />
            <h2 className="text-4xl font-dynaPuff text-head">
              Galeri Kegiatan
            </h2>
          </div>
        </div>

        {/* Grid System - Kembali ke performa maksimal tanpa GSAP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              // Animasi muncul yang ringan
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }} // Efek angkat sedikit saat hover (ringan)
              className={`relative group rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white bg-white
                ${(index === 0 || index === 1) ? "md:row-span-2" : "md:row-span-1"} 
                ${item.layout || ""}`}
            >
              {item.isVideo ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/gallery-img/thumbnail-video.png"
                >
                  <source
                    src={`/gallery-img/${item.imageName}`}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={`/gallery-img/${item.imageName}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={item.nama}
                  loading="lazy" // Penting: Agar tidak lemot saat load awal
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400?text=Gambar+Hilang";
                  }}
                />
              )}

              {/* Info Overlay */}
              {!item.isVideo && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 pointer-events-none">
                  <h4 className="text-white font-dynaPuff text-2xl">
                    {item.nama}
                  </h4>
                  <p className="text-white/80 text-sm font-quicksand">
                    {item.deskripsi}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}