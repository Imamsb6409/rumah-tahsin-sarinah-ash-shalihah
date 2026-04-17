import { NavLink } from "react-router";
import { 
  IconBrandInstagram, 
  IconBrandWhatsapp, 
  IconMail, 
  IconMapPin, 
  IconChevronRight,
  IconClock
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-head text-white pt-20 pb-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        
        {/* Kolom 1: Brand & Bio */}
        <div className="space-y-6">
          <h2 className="text-3xl font-dynaPuff">RTSarinah</h2>
          <p className="font-quicksand text-white/80 leading-relaxed">
            Membentuk generasi beraqidah lurus dan fasih berinteraksi dengan Al-Qur'an melalui metode yang menyenangkan.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/10 rounded-2xl hover:bg-white hover:text-head transition-all">
              <IconBrandInstagram size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-2xl hover:bg-white hover:text-head transition-all">
              <IconBrandWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div className="space-y-6">
          <h3 className="text-xl font-dynaPuff">Navigasi</h3>
          <ul className="space-y-4 font-quicksand">
            {["Home", "Hadist", "Blog", "Program"].map((item) => (
              <li key={item}>
                <NavLink to={`/${item === "Home" ? "" : item.toLowerCase()}`} className="flex items-center gap-2 hover:translate-x-2 transition-transform opacity-80 hover:opacity-100">
                  <IconChevronRight size={18} className="text-primary" /> {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="space-y-6">
          <h3 className="text-xl font-dynaPuff">Kontak Kami</h3>
          <ul className="space-y-4 font-quicksand opacity-80">
            <li className="flex items-start gap-3">
              <IconMapPin className="text-primary shrink-0" size={24} />
              <span>Panjibuwono Residence, Sriwedari CS 5/15, Babelan, Bekasi.</span>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="text-primary" size={24} />
              <span>info@rtsarinah.com</span>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Jam Operasional */}
        <div className="space-y-6">
          <h3 className="text-xl font-dynaPuff">Waktu Belajar</h3>
          <div className="bg-white/10 p-6 rounded-[2rem] space-y-3 font-quicksand">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="flex items-center gap-2"><IconClock size={18} /> Senin - Jumat</span>
              <span className="font-bold">14:00 - 17:00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><IconClock size={18} /> Sabtu</span>
              <span className="font-bold">08:00 - 11:00</span>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-quicksand opacity-60">
        <p>© {currentYear} Rumah Tahsin Sarinah Ash-Shalihah. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}