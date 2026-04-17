import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconQuestionMark } from "@tabler/icons-react";

const faqs = [
  { q: "Kapan kelas dimulai?", a: "Pendaftaran dibuka setiap bulan. Silakan hubungi admin untuk jadwal terdekat." },
  { q: "Apakah ada kelas untuk dewasa?", a: "Ya, kami memiliki program Tahsin khusus Ummahat dengan jadwal yang fleksibel." },
  { q: "Dimana lokasi belajarnya?", a: "Belajar tatap muka dilakukan di Panjibuwono Residence, Bekasi. Tersedia juga opsi kelas online." },
];

export default function FaqSec() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="py-24 bg-white px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-primary rounded-2xl text-secondary mb-4">
            <IconQuestionMark size={32} />
          </div>
          <h2 className="text-4xl font-dynaPuff text-head">Tanya Jawab</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-2 border-primary rounded-[2rem] overflow-hidden">
              <button 
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full p-6 flex justify-between items-center bg-white hover:bg-primary/30 transition-colors"
              >
                <span className="font-quicksand font-bold text-lg text-head text-left">{faq.q}</span>
                <IconChevronDown className={`transition-transform duration-300 ${activeIdx === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-600 font-quicksand"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}