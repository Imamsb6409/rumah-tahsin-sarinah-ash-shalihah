import { motion } from "framer-motion";
import { IconArrowRight,IconArrowDown } from "@tabler/icons-react";

export default function HeroSec() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-6 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left z-20"
        >
          {/* Responsive Text: text-3xl (HP), text-5xl (Tablet), text-7xl (Desktop) */}
          <h1 className="font-dynaPuff text-3xl sm:text-5xl lg:text-7xl text-head leading-tight">
            Belajar Quran <br className="hidden md:block" />
            <span className="text-sub">Jadi Menyenangkan</span>
          </h1>
          <p className="mt-4 text-sm md:text-xl font-quicksand text-gray-600 max-w-md mx-auto lg:mx-0">
            Membangun generasi beraqidah lurus dan fasih berinteraksi dengan
            Al-Qur'an sejak dini.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.button
             whileHover={{scale:1.02}}
             whileTap={{scale:0.95}} className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-2xl font-bold shadow-xl hover:bg-[#647050] transition-all flex items-center justify-center gap-2 group mx-auto lg:mx-0">
              Daftar Sekarang
              <IconArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
            <motion.button
             whileHover={{scale:1.02}}
             whileTap={{scale:0.95}}
              className="w-full sm:w-auto px-8 py-4 bg-primary border-2 border-secondary text-black rounded-2xl font-bold shadow-xl hover:bg-secondary/30 transition-all flex items-center justify-center gap-2 group mx-auto lg:mx-0"
              onClick={() => scrollToSection("program")}
            >
              Pelajari Program<IconArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-first lg:order-last z-10"
        >
          <img
            src="/hero-image.webp"
            alt="Anak Mengaji"
            className="w-full max-w-[200px] sm:max-w-xs lg:max-w-lg mx-auto drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
}
