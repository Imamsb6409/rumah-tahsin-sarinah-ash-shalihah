import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react"; // Gunakan Tabler jika ingin konsisten, tapi ini sesuai kodemu
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

        {/* Grid System Updated:
          1. md:grid-rows-2: Memberi instruksi grid bahwa kita punya baris yang bisa diatur.
          2. auto-rows-[250px]: Mengecilkan sedikit baris dasar agar saat di-span tidak terlalu raksasa.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.id * 0.1 }}
              whileHover={{ scale: 0.98 }}
              /* Logika Tambahan: 
                 - index === 0 || index === 1 (Dua foto pertama) akan memakan 2 baris (row-span-2).
                 - Tinggi jadi otomatis mengikuti span.
              */
              className={`relative group rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white 
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
                  preload="metadata"
                >
                  <source
                    src={`/gallery-img/${item.imageName}`}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={`/gallery-img/${item.imageName}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={item.nama}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400?text=Gambar+Hilang";
                  }}
                />
              )}

              {!item.isVideo && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 pointer-events-none">
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