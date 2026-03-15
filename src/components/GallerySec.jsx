import galleryData from "../data/gallery.json";

export default function GallerySec() {
  return (
    <section className="min-h-[140vh] w-full bg-primary p-4 md:p-10 flex flex-col gap-8">
      {/* HEADER SECTION */}
      <div className="text-white">
        <h1>
          <span className="text-2xl lg:text-3xl -mb-2 text-center block font-dynaPuff text-sub tracking-widest">
            Galeri Kegiatan
          </span>
          <span className="text-6xl lg:text-8xl text-center block font-semibold font-dynaPuff text-head tracking-tighter">
            SARINAH
          </span>
        </h1>
      </div>

      {/* GRID SECTION */}
      <div className="grid min-h-screen md:h-[110vh] w-full grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4">
        {galleryData.map((item) => {
          // 1. Logika Layout
          let layoutClass = "";
          if (item.id === 1) {
            layoutClass = "md:col-span-2 md:row-span-2";
          } else if (item.id === 2) {
            layoutClass = "md:col-span-1 md:row-span-2";
          } else if (item.id === 3 || item.id === 4) {
            layoutClass = "md:col-span-1 md:row-span-2";
          } else {
            layoutClass = "md:col-span-1 md:row-span-1";
          }

          // 2. Path Gambar (Asumsi di folder public/gallery-img/)
          const imgUrl = `/gallery-img/${item.imageName}`;

          return (
            <div
              key={item.id}
              className={`relative min-h-50 overflow-hidden rounded-3xl border-4 border-[#7a8450] group ${layoutClass}
              `}
            >
              {item.isVideo ? (
                <video
                  src={imgUrl}
                  alt={item.nama}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  controls
                />
              ) : (
                <img
                  src={imgUrl}
                  alt={item.nama}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400?text=Gambar+Kosong";
                  }}
                />
              )}

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent  opacity-100" />

              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {item.nama}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
