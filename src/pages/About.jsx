import { motion } from "framer-motion";
import {
  IconTargetArrow,
  IconEye,
  IconSchool,
  IconUsers,
  IconChecks,
  IconHeart,
} from "@tabler/icons-react";

const stats = [
  { label: "Santri Aktif", value: "50+", icon: <IconUsers size={28} /> },
  { label: "Pengajar Hafiz", value: "5", icon: <IconSchool size={28} /> },
  {
    label: "Program Unggulan",
    value: "4",
    icon: <IconTargetArrow size={28} />,
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-white min-h-screen pt-24 font-quicksand">
      {/* 1. HERO ABOUT */}
      <section className="relative py-20 bg-primary/30 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6"
          >
            <IconHeart size={18} /> Mengenal RTSarinah
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-dynaPuff text-head mb-6">
            Mencetak Generasi <br />{" "}
            <span className="text-secondary italic">Beraqidah Salimah</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
            Rumah Tahsin Sarinah Ash-Shalihah hadir sebagai wadah belajar
            Al-Qur'an yang menyenangkan, fasih, dan sesuai sunnah.
          </p>
        </div>
        {/* Dekorasi Background */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* 2. LATAR BELAKANG */}
      <section className="py-24 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/about-image.jpg"
                alt="Kegiatan Belajar"
                className="w-full h-[500px] object-cover"
                onError={(e) =>
                  (e.target.src =
                    "/public/tempat.png")
                }
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[3rem] shadow-xl hidden md:block border-2 border-primary">
              <p className="text-head font-dynaPuff text-2xl">Sejak 2022</p>
              <p className="text-gray-500 font-bold">Menebar Manfaat</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-dynaPuff text-head mb-8">
              Latar Belakang
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Berawal dari kegelisahan akan sulitnya mencari tempat belajar
                Al-Qur'an yang memberikan perhatian khusus pada{" "}
                <span className="font-bold text-secondary text-xl italic">
                  Tahsin (perbaikan bacaan)
                </span>{" "}
                sekaligus penanaman adab sejak dini.
              </p>
              <p>
                Rumah Tahsin Sarinah Ash-Shalihah didirikan untuk memberikan
                solusi bagi para orang tua yang menginginkan anaknya tidak hanya
                sekadar menghafal, tapi juga mencintai dan memahami Al-Qur'an
                dengan benar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 bg-primary/20 rounded-3xl text-center"
                >
                  <div className="flex justify-center text-secondary mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-dynaPuff text-head">
                    {stat.value}
                  </p>
                  <p className="text-sm font-bold text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. VISI & MISI */}
      <section className="py-24 bg-head text-white px-6 overflow-hidden relative">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
          {/* VISI */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md p-10 rounded-[4rem] border border-white/10"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-head mb-8">
              <IconEye size={36} />
            </div>
            <h3 className="text-3xl font-dynaPuff mb-6 text-primary">
              Visi Kami
            </h3>
            <p className="text-xl leading-relaxed opacity-90">
              "Menjadi lembaga pendidikan Al-Qur'an terdepan dalam membentuk
              generasi yang fasih membaca, kuat menghafal, dan berakhlak mulia
              berdasarkan pemahaman yang lurus."
            </p>
          </motion.div>

          {/* MISI */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md p-10 rounded-[4rem] border border-white/10"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-secondary mb-8">
              <IconTargetArrow size={36} />
            </div>
            <h3 className="text-3xl font-dynaPuff mb-6 text-primary">
              Misi Kami
            </h3>
            <ul className="space-y-4">
              {[
                "Menyelenggarakan program Tahsin berstandar sanad.",
                "Menanamkan kecintaan terhadap Al-Qur'an sejak usia dini.",
                "Membiasakan adab-adab islami dalam keseharian santri.",
                "Memberdayakan ummahat untuk turut serta dalam dakwah Quran.",
              ].map((misi, i) => (
                <li key={i} className="flex items-start gap-3 opacity-90">
                  <IconChecks className="text-primary shrink-0" size={24} />
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* Dekorasi Cahaya */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
      </section>

      {/* 4. PENUTUP / QUOTE */}
      <section className="py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="text-secondary flex justify-center mb-8">
            <IconSchool size={64} stroke={1.5} />
          </div>
          <h2 className="text-3xl md:text-5xl font-dynaPuff text-head leading-tight">
            Mari Menjadi Bagian dari <br />{" "}
            <span className="text-secondary italic">
              Perjalanan Dakwah Ini.
            </span>
          </h2>
          <button
            onClick={() => (window.location.href = "/#cta")}
            className="mt-12 bg-head text-white px-10 py-5 rounded-4xl font-bold text-xl hover:bg-secondary transition-all shadow-xl shadow-head/20"
          >
            Gabung Sekarang
          </button>
        </motion.div>
      </section>
    </div>
  );
}
