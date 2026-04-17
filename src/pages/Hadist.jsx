import dataHadist from "../data/hadist.json";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
  IconArrowLeft,
  IconBook,
  IconMapPin,
  IconHeartFilled,
  IconChevronRight,
} from "@tabler/icons-react";

const socialMedia = [
  {
    name: "Instagram",
    icon: <IconBrandInstagram size={24} />,
    link: "https://www.instagram.com/rt_sarinah_ash_shalihah/",
  },
  {
    name: "Email",
    icon: <IconMail size={24} />,
    link: "mailto:info@rumahtahsintantepi.com",
  },
  {
    name: "WhatsApp",
    icon: <IconBrandWhatsapp size={24} />,
    link: "https://wa.me/6282260578959",
  },
];

export default function Hadist() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-primary min-h-screen font-quicksand">
      {/* Hero Section Hadist */}
      <section className="bg-head pt-32 pb-20 px-4 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto"
        >
          <div className="flex justify-center mb-6 text-primary">
            <IconBook size={56} stroke={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-dynaPuff mb-4">
            Hadist-Hadist Pilihan
          </h1>
          <p className="max-w-2xl mx-auto opacity-90 text-lg">
            Kumpulan nasihat Rasulullah ﷺ untuk memotivasi ananda dan ummahat
            dalam menuntut ilmu.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dataHadist.map((hadist, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[3rem] shadow-xl border border-secondary/5 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <span className="text-xs font-bold text-secondary/40">
                    #{index + 1}
                  </span>
                  <IconHeartFilled
                    size={20}
                    className="text-secondary/10 group-hover:text-red-400 transition-colors"
                  />
                </div>

                {/* Teks Arab */}
                <p className="text-right text-3xl font-amiri leading-16 text-head font-arabic">
                  {hadist.arabic}
                </p>
                <p className="text-right text-[10px] font-bold text-secondary mt-4 uppercase tracking-widest opacity-70">
                  {hadist.riwayat}
                </p>
              </div>

              <div className="mt-8 border-t border-secondary/10 pt-6">
                <p className="text-gray-600 leading-relaxed italic font-medium">
                  "{hadist.arti}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 bg-head text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:shadow-head/30 transition-all active:scale-95 group"
          >
            <IconArrowLeft
              size={22}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Kembali ke Beranda
          </NavLink>
        </motion.div>
      </div>

      {/* Footer Khusus Halaman Hadist (Konsisten dengan Main Footer) */}
      <footer className="w-full bg-head pt-20 pb-10 text-white px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/10 pb-16">
          {/* Menu */}
          <div>
            <p className="text-xl mb-8 font-dynaPuff text-primary">Navigasi</p>
            <ul className="space-y-4">
              {["Beranda", "Koleksi Hadist", "Artikel Blog"].map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item === "Beranda" ? "/" : item === "Koleksi Hadist" ? "/hadist" : "/blog"}
                    className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-all group"
                  >
                    <IconChevronRight
                      size={18}
                      className="text-primary group-hover:translate-x-1 transition-transform"
                    />
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Alamat */}
          <div>
            <p className="text-xl mb-8 font-dynaPuff text-primary">Lokasi</p>
            <div className="flex items-start gap-4 opacity-80">
              <IconMapPin size={28} className="text-primary shrink-0" />
              <p className="leading-relaxed">
                Panjibuwono Residence, Sriwedari CS 5/15, Babelan – Bekasi 17610
              </p>
            </div>
          </div>

          {/* Sosmed */}
          <div>
            <p className="text-xl mb-8 font-dynaPuff text-primary">
              Media Sosial
            </p>
            <div className="flex gap-4">
              {socialMedia.map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-4 rounded-2xl transition-all"
                  aria-label={item.name}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-10 text-center text-sm opacity-50 tracking-widest font-quicksand">
          © {new Date().getFullYear()} RUMAH TAHSIN SARINAH ASH-SHOLIHAH
        </div>
      </footer>
    </div>
  );
}
