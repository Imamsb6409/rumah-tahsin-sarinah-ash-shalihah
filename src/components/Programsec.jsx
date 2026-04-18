import { useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { BookOpen, Users, Star, GraduationCap, ArrowRight } from "lucide-react";
import programData from "../data/program.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramSec() {
  const container = useRef();

  useGSAP(
    () => {
      // Pastikan selector sesuai dengan class di bawah
      gsap.from(".program-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".program-grid",
          start: "top 80%",
          // toggleActions: "play none none none" // Menjamin animasi hanya jalan sekali
        },
      });

      gsap.to(".bg-decoration", {
        y: 20,
        rotate: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <section
      id="program"
      ref={container}
      className="py-24 bg-primary relative overflow-hidden px-6"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="bg-decoration absolute top-20 left-10">
          <BookOpen size={150} />
        </div>
        <div className="bg-decoration absolute bottom-20 right-10">
          <Star size={120} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-secondary/10 rounded-[1.5rem] text-secondary mb-6">
            <GraduationCap size={40} />
          </div>
          <h2 className="text-5xl md:text-6xl font-dynaPuff text-head mb-4">
            Program Unggulan
          </h2>
          <p className="font-quicksand text-sub text-xl font-semibold max-w-2xl mx-auto">
            Kurikulum yang dirancang khusus untuk mencetak generasi cinta
            Al-Qur'an dan beraqidah lurus.
          </p>
        </div>

        {/* Tambahkan class program-grid di sini sebagai trigger GSAP */}
        <div className="program-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="program-card bg-white rounded-[3rem] p-8 shadow-xl shadow-secondary/5 border-2 border-transparent hover:border-secondary/10 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-8">
                <div
                  className={`px-5 py-2 rounded-2xl text-white text-[10px] font-bold uppercase tracking-widest ${program.warnaType}`}
                >
                  {program.type}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-secondary/40 group-hover:text-secondary transition-all">
                  {program.type.toLowerCase().includes("ummahat") ? (
                    <Users size={24} />
                  ) : (
                    <Star size={24} />
                  )}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-dynaPuff text-head mb-4">
                  {program.judul}
                </h3>
                <p className="font-quicksand text-gray-500 text-sm leading-relaxed">
                  {program.deskripsi}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between">
                <Link
                  to={`/program/${program.slug}`}
                  className="flex items-center gap-2 font-bold text-secondary group-hover:gap-4 transition-all"
                >
                  Info Selengkapnya
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
