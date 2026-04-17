import { motion } from "framer-motion";
import {
  IconBrandWhatsapp,
  IconCircleCheck,
  IconSparkles,
  IconArrowRight,
} from "@tabler/icons-react";

export default function CTA() {
  const waLink =
    "https://wa.me/6282260578959?text=" +
    encodeURIComponent(
      "Halo Admin RTSarinah, saya ingin mendaftarkan putra/putri saya untuk belajar Al-Quran.",
    );

  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -z-10"></div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/40 rounded-full blur-3xl opacity-50"
      ></motion.div>

      <div className="container mx-auto">
        <div className="bg-head rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-head/20 text-center md:text-left">
          {/* Ikon Dekoratif */}
          <div className="absolute top-10 right-10 text-primary/10 hidden lg:block">
            <IconSparkles size={120} />
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-12 relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6"
              >
                <IconCircleCheck size={18} /> Kuota Terbatas untuk Angkatan Ini
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-dynaPuff text-white leading-tight mb-6">
                Siap Mencetak Generasi{" "}
                <span className="text-primary italic">Cinta Al-Qur'an?</span>
              </h2>

              <p className="text-white/70 font-quicksand text-lg md:text-xl mb-10 max-w-lg">
                Bergabunglah bersama puluhan santri lainnya di Rumah Tahsin
                Sarinah Ash-Shalihah. Mari mulai langkah pertama hari ini.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-head px-8 py-5 rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 transition-all hover:bg-white"
                >
                  <IconBrandWhatsapp size={24} />
                  Daftar Sekarang
                </motion.a>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="px-8 py-5 rounded-[2rem] border-2 border-white/20 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  Lihat Jadwal <IconArrowRight size={20} />
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex justify-center"
            >
              {/* Box Ilustrasi Sederhana */}
              <div className="relative">
                <div className="w-64 h-64 bg-secondary rounded-[3rem] rotate-12 absolute inset-0 opacity-20"></div>
                <div className="w-64 h-64 bg-primary rounded-[3rem] -rotate-6 flex items-center justify-center shadow-2xl">
                  <IconBrandWhatsapp
                    size={100}
                    className="text-head"
                    stroke={1.5}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
