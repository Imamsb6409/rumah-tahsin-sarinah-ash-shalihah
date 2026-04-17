import { motion } from "framer-motion";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Wallet, Info } from "lucide-react";

const pricing = [
  {
    kategori: "Kelas Anak-Anak",
    biaya: "0,00",
    periode: "per bulan",
    fitur: [
      "Pertemuan 5x seminggu",
      "Metode Talqin & Talaqqi",
      "Laporan perkembangan santri",
      "Tidak ada batas maksimal santri",
    ],
    highlight: false,
  },
  {
    kategori: "Kelas Ummahat",
    biaya: "0,00",
    periode: "per bulan",
    fitur: [
      "Pertemuan 5x seminggu (Intensif)",
      "Tahsin & Tajwid Aplikatif",
      "Konsultasi bacaan via WA",
      "Halaqah dengan Syaikh dari mesir",
    ],
    highlight: true,
  },
];

const handleChoosePlan = (planName) => {
  const message = encodeURIComponent(
    `Halo Admin RTSarinah, saya tertarik untuk mendaftar ${planName}. Bisa minta info detailnya?`,
  );
  window.open(`https://wa.me/6282260578959?text=${message}`, "_blank");
};

export default function InvestmentSec() {
  return (
    <section id="investasi" className="py-24 bg-white px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm mb-4">
            <Wallet size={16} /> Investasi Pendidikan
          </div>
          <h2 className="text-5xl font-dynaPuff text-head">Biaya Belajar</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[3.5rem] border-2 ${
                plan.highlight
                  ? "border-secondary bg-secondary/5"
                  : "border-primary bg-primary/20"
              } relative overflow-hidden`}
            >
              <h3 className="text-2xl font-dynaPuff text-head mb-2">
                {plan.kategori}
              </h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-secondary font-quicksand">
                  Rp {plan.biaya}
                </span>
                <span className="text-gray-500">/{plan.periode}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.fitur.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-quicksand text-gray-700"
                  >
                    <IconCircleCheckFilled
                      size={20}
                      className="text-secondary shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleChoosePlan(plan.kategori)}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                    : "bg-white text-secondary border border-secondary"
                }`}
              >
                Pilih Program Ini
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm italic font-quicksand">
          <Info size={16} />
          *Biaya pendaftaran dan administrasi awal sebesar Rp 50.000
        </div>
      </div>
    </section>
  );
}
