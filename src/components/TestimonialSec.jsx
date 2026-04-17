import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialSec() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-dynaPuff text-head text-center mb-16">Apa Kata Mereka?</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="max-w-sm p-8 bg-primary rounded-[3rem] relative border border-secondary/10"
            >
              <Quote className="absolute top-6 right-8 text-secondary/20" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="font-quicksand italic text-gray-600 mb-6">
                "Anak saya sekarang jauh lebih lancar membaca Al-Qur'an. Lingkungan belajarnya sangat nyaman dan ustadzahnya sangat sabar."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full" />
                <div>
                  <h5 className="font-bold text-head">Ummu Abdurrahman</h5>
                  <p className="text-xs text-sub uppercase">Wali Santri</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}