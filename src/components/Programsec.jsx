import { motion } from "framer-motion";
import { BookOpen, Users, Star, GraduationCap, ArrowRight } from "lucide-react";
import programData from "../data/program.json";

export default function ProgramSec() {
  // Variants untuk animasi kontainer
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="program" className="py-24 bg-primary relative overflow-hidden px-6">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10"><BookOpen size={120} /></div>
        <div className="absolute bottom-10 right-10"><Star size={100} /></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-block p-3 bg-secondary/20 rounded-2xl text-secondary mb-4"
          >
            <GraduationCap size={32} />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-dynaPuff text-head mb-4">Program Unggulan</h2>
          <p className="font-quicksand text-sub text-xl max-w-2xl mx-auto">
            Kurikulum yang dirancang khusus untuk mencetak generasi cinta Al-Qur'an dan beraqidah lurus.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
        animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programData.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[3rem] p-8 shadow-xl shadow-secondary/5 border border-secondary/10 flex flex-col h-full group"
            >
              {/* Badge Kategori */}
              <div className="flex justify-between items-start mb-6">
                <div className={`px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider ${program.warnaType}`}>
                  {program.type}
                </div>
                <div className="text-secondary/30 group-hover:text-secondary transition-colors">
                  {program.type.includes("ummahat") ? <Users size={28} /> : <Star size={28} />}
                </div>
              </div>

              {/* Konten Utama */}
              <div className="flex-grow">
                <h3 className="text-2xl font-dynaPuff text-head mb-4 leading-snug">
                  {program.judul}
                </h3>
                <p className="font-quicksand text-gray-500 leading-relaxed">
                  {program.deskripsi}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-gray-50">
                <a 
                  href={program.link}
                  className="flex items-center gap-2 font-bold text-secondary group-hover:gap-4 transition-all"
                >
                  Info Selengkapnya 
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}