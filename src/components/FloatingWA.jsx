import { motion } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function FloatingWA() {
  const message = encodeURIComponent("Halo Admin RTSarinah, saya ingin tanya seputar pendaftaran kelas...");
  
  return (
    <motion.a
      href={`https://wa.me/6282260578959?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Tanya Pendaftaran
      </div>
      <IconBrandWhatsapp size={32} />
    </motion.a>
  );
}