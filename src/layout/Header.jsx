import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMenu2,
  IconX,
  IconArrowRight,
  IconCircleFilled,
} from "@tabler/icons-react";
import Icon from "/public/Favicon.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Cek apakah sedang tidak di halaman Home
  const isNotHome = location.pathname !== "/";

  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup menu mobile saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Hadist", path: "/hadist" },
    { name: "Blog", path: "/blog" },
    { name: "Tentang Kami", path: "/about" },
  ];

  // Logika Scroll atau Navigasi
  const handleCtaClick = () => {
    if (isNotHome) {
      navigate("/");
      setTimeout(() => {
        document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Penentuan warna dasar (Putih jika di Top Home, Gelap jika di Page lain atau Scroll)
  const isLightMode = isScrolled || isNotHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${
        isLightMode
          ? "py-4 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <span className="font-dynaPuff text-xl"><img src={Icon} alt="Logo RTSarinah" /></span>
            </div>
            <IconCircleFilled
              size={10}
              className="absolute -bottom-1 -right-1 text-primary"
            />
          </div>
          <span
            className={`text-2xl font-dynaPuff tracking-tight transition-colors duration-300 ${
              isLightMode ? "text-head" : "text-head"
            }`}
          >
            RTSarinah
          </span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 font-quicksand font-bold">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                relative transition-colors duration-300 py-2
                ${isActive ? "text-secondary" : isLightMode ? "text-head hover:text-secondary" : "text-head/90 hover:text-secondary"}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary 
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300
                ${isActive ? "after:scale-x-100" : ""}
              `}
            >
              {link.name}
            </NavLink>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCtaClick}
            className={`px-7 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl ${
              isLightMode
                ? "bg-secondary text-white shadow-secondary/20 hover:bg-head"
                : "bg-secondary text-white shadow-secondary/20 hover:bg-head"
            }`}
          >
            Daftar <IconArrowRight size={18} />
          </motion.button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${
            isLightMode ? "text-head bg-gray-100" : "text-white bg-white/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden overflow-hidden border-t border-gray-50"
          >
            <div className="flex flex-col p-8 gap-6 text-center font-quicksand font-bold">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xl py-2 transition-colors ${isActive ? "text-secondary" : "text-head"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <hr className="border-gray-100" />
              <button
                onClick={handleCtaClick}
                className="bg-secondary text-white py-4 rounded-2xl flex items-center justify-center gap-3 text-lg"
              >
                Hubungi Admin <IconArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
