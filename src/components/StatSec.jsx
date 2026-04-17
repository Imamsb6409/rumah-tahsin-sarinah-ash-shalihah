import { motion } from "framer-motion";
import { Users, GraduationCap, BookOpen, Heart } from "lucide-react";

const stats = [
  { icon: <Users size={32} />, label: "Santri Aktif", value: "200+" },
  { icon: <GraduationCap size={32} />, label: "Lulusan Terbaik", value: "150+" },
  { icon: <BookOpen size={32} />, label: "Program Kelas", value: "8" },
  { icon: <Heart size={32} />, label: "Pengajar Ahli", value: "12" },
];

export default function StatSec() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-sm"
            >
              <div className="text-secondary mb-4">{stat.icon}</div>
              <h4 className="text-4xl font-dynaPuff text-head">{stat.value}</h4>
              <p className="font-quicksand text-sub font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}