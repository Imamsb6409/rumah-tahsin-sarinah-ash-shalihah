import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    name: "Ummu Abdurrahman",
    role: "Wali Santri",
    text: "Anak saya sekarang jauh lebih lancar membaca Al-Qur'an. Lingkungan belajarnya sangat nyaman dan ustadzahnya sangat sabar dalam mengajar.",
    rating: 5
  },
  {
    id: 2,
    name: "Ibu Fatimah",
    role: "Kelas Ummahat",
    text: "Metode yang diajarkan sangat mudah dipahami bagi saya yang memulai kembali belajar tahsin di usia dewasa. Sangat merekomendasikan tempat ini.",
    rating: 5
  },
  {
    id: 3,
    name: "Bapak Ahmad",
    role: "Wali Santri",
    text: "Fasilitasnya bersih dan tenang, membuat anak-anak fokus saat mengaji. Perkembangan hafalan anak saya terpantau dengan sangat baik.",
    rating: 5
  }
];

export default function TestimonialSec() {
  return (
    <section className="py-24 bg-white overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dynaPuff text-head">Apa Kata Mereka?</h2>
          <div className="w-24 h-1.5 bg-secondary/20 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-10">
          {testimonialData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="max-w-sm w-full p-10 bg-primary rounded-[3.5rem] relative border-b-8 border-secondary/10 shadow-sm"
            >
              {/* Ikon Quote Dekoratif */}
              <div className="absolute -top-5 -right-2 w-16 h-16 bg-secondary rounded-3xl flex items-center justify-center shadow-lg rotate-12">
                <Quote className="text-white" size={28} />
              </div>

              {/* Rating Bintang */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Teks Testimoni */}
              <p className="font-quicksand italic text-gray-600 mb-10 leading-relaxed text-lg">
                "{item.text}"
              </p>

              {/* Identitas Pemberi Testimoni */}
              <div className="flex items-center gap-4 pt-6 border-t border-secondary/5">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary font-bold text-xl border-2 border-white shadow-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-dynaPuff text-head text-lg">{item.name}</h5>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}