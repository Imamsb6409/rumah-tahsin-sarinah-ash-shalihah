import { useRef } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, BookOpen, Heart } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: <Users size={32} />, label: "Santri Aktif", value: 200, suffix: "+" },
  { icon: <GraduationCap size={32} />, label: "Lulusan Terbaik", value: 150, suffix: "+" },
  { icon: <BookOpen size={32} />, label: "Program Kelas", value: 8, suffix: "" },
  { icon: <Heart size={32} />, label: "Pengajar Ahli", value: 12, suffix: "" },
];

export default function StatSec() {
  const containerRef = useRef();

  useGSAP(() => {
    // Cari semua elemen dengan class 'stat-value'
    const statElements = gsap.utils.toArray(".stat-value");

    statElements.forEach((el) => {
      const targetValue = el.getAttribute("data-target");
      
      gsap.fromTo(el, 
        { innerText: 0 }, 
        { 
          innerText: targetValue, 
          duration: 2, 
          ease: "power2.out",
          snap: { innerText: 1 }, // Supaya angkanya bulat (nggak pakai koma)
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // Animasi mulai saat elemen 90% muncul di layar
            once: true, // Jalan cuma sekali biar nggak pusing
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-[2.5rem] shadow-sm border-2 border-transparent hover:border-secondary/20 transition-all duration-300"
            >
              {/* Ikon */}
              <div className="text-secondary mb-4">{stat.icon}</div>
              
              {/* Angka & Suffix */}
              <div className="flex items-baseline gap-0.5">
                <h4 
                  className="stat-value text-4xl md:text-5xl font-dynaPuff text-head"
                  data-target={stat.value}
                >
                  0
                </h4>
                {stat.suffix && (
                  <span className="text-2xl font-dynaPuff text-secondary">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <p className="font-quicksand text-sub font-bold mt-2 uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}