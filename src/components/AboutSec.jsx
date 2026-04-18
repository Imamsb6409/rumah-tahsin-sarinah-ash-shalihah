import { motion } from "framer-motion";
import iconSunnah from "../assets/about-image/icon-sunnah.png";
import iconTajwid from "../assets/about-image/icon-tajwid.png";
import iconTenagaK from "../assets/about-image/icon-tenagaK.png";
import iconTalqin from "../assets/about-image/icon-Talqin.png";

const dataAbout = [
  { image: iconSunnah, desc: "Pemahaman sesuai sunnah & salaf shalih." },
  { image: iconTenagaK, desc: "Tenaga kerja yang ahli & berpengalaman." },
  { image: iconTajwid, desc: "Pembelajaran sesuai dengan kaidah tajwid." },
  { image: iconTalqin, desc: "Penyampaian mudah dimengerti anak-anak." },
];

export default function AboutSec() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="about"
      className="py-24 bg-primary relative overflow-hidden px-6 min-h-screen flex items-center"
    >
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-box/20 rounded-full blur-3xl rotate-12"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="font-dynaPuff text-emerald-600 text-2xl tracking-widest uppercase">
            Rumah Tahsin
          </h2>
          <h1 className="text-6xl lg:text-8xl font-dynaPuff text-head leading-none">
            SARINAH
          </h1>
          <h3 className="text-2xl font-quicksand font-bold text-sub">
            Ash-Shalihah
          </h3>
          <p className="font-quicksand font-semibold text-xl text-sub max-w-xl leading-relaxed">
            Tempat ternyaman bagi umat muslim menuntut ilmu tajwid dan
            melafadzkan Al-Quran dengan tartil yang sempurna.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-6"
        >
          {dataAbout.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center text-center gap-4 border-b-8 border-emerald-100"
            >
              <img
                src={item.image}
                className="w-20 h-20 object-contain"
                alt="icon"
              />
              <p className="font-quicksand font-bold text-gray-700 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
