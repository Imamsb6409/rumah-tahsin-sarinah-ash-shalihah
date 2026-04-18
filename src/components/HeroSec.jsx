import { useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { IconArrowRight, IconArrowDown, IconBook, IconStar } from "@tabler/icons-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSec() {
  const container = useRef();

  // Animasi GSAP untuk elemen dekoratif
  useGSAP(() => {
    gsap.to(".floating-shape", {
      y: 20,
      rotate: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });
  }, { scope: container });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-primary/20">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-12 relative z-10">
        
        {/* --- TEXT CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="font-dynaPuff text-4xl sm:text-6xl lg:text-7xl text-head leading-[1.1]">
            Belajar Quran <br />
            <span className="text-secondary relative">
              Jadi Menyenangkan
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                <path d="M5 15C50 5 150 5 295 15" stroke="#8DAA91" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl font-quicksand text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Membangun generasi beraqidah lurus dan fasih berinteraksi dengan
            Al-Qur'an sejak dini dengan metode yang ceria.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
           <a href="#cta">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} 
              className="w-full sm:w-auto px-10 py-4 bg-secondary text-white rounded-2xl font-bold shadow-lg shadow-secondary/30 hover:bg-[#647050] transition-all flex items-center justify-center gap-2 group"
            >
              Daftar Sekarang
              <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button></a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-secondary/20 text-head rounded-2xl font-bold hover:bg-secondary/5 transition-all flex items-center justify-center gap-2"
              onClick={() => scrollToSection("program")}
            >
              Pelajari Program
              <IconArrowDown size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* --- IMAGE AREA (DESIGNED) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Photo Frame with Blob Shape */}
          <div className="relative w-full max-w-[320px] sm:max-w-md aspect-square lg:aspect-auto lg:h-[550px]">
            
            {/* Background Shape (Blob) */}
            <div className="absolute inset-0 bg-secondary/20 rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] animate-blob-slow" />
            
            {/* The Image Container */}
            <div className="relative w-full h-full rounded-[30%_70%_70%_30%/_54%_30%_70%_46%] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/hero-image.webp"
                alt="Anak Mengaji"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements (Dekorasi Ikon) */}
            <div className="floating-shape absolute -top-5 -right-5 p-4 bg-white rounded-2xl shadow-xl z-20">
              <IconBook className="text-secondary" size={32} />
            </div>
            
            <div className="floating-shape absolute bottom-10 -left-10 p-4 bg-white rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <IconStar className="text-secondary" fill="currentColor" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Metode</p>
                  <p className="text-sm font-dynaPuff text-head">Asyik & Seru</p>
                </div>
              </div>
            </div>

            {/* Accent Circles */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full -z-10 border-4 border-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}