import { useParams, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Quote, BookCheck, Share2, Check } from "lucide-react";
import { useState } from "react";
import blogData from "../data/blogData.json";

export default function BlogDetail() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) return <div className="p-20 text-center font-dynaPuff">Artikel tidak ditemukan...</div>;

  const handleShare = () => {
    // Mengambil URL saat ini
    const currentUrl = window.location.href;
    
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      // Reset status tombol setelah 2 detik
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-primary min-h-screen pt-32 pb-20">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 max-w-4xl"
      >
        <NavLink to="/blog" className="inline-flex items-center gap-2 text-secondary font-bold mb-8 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={20} /> Kembali ke Daftar Artikel
        </NavLink>

        <article className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-secondary/5">
          <h1 className="text-4xl md:text-6xl font-dynaPuff text-head mb-8 leading-tight">
            {blog.title}
          </h1>

          {/* Bagian Dalil (Box Spesial) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-secondary/10 border-l-8 border-secondary p-8 rounded-3xl mb-12 relative overflow-hidden"
          >
            <Quote className="absolute top-4 right-4 text-secondary/20" size={64} />
            <p className="text-right text-3xl font-amiri leading-[4rem] text-head font-arabic mb-4">
              {blog.dalil.arabic}
            </p>
            <p className="font-quicksand text-gray-700 italic mb-2">"{blog.dalil.indo}"</p>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest">— {blog.dalil.sumber}</p>
          </motion.div>

          {/* Konten Utama */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 text-xl font-bold text-head font-quicksand mb-4">
              <BookCheck className="text-secondary" />
              Pembahasan Utama:
            </h4>
            <ul className="space-y-4">
              {blog.content.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-primary/30 rounded-2xl font-quicksand text-lg text-gray-700"
                >
                  <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                    {i + 1}
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Bagian Bagikan */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <p className="text-sub font-medium">Bagikan ilmu ini:</p>
            <div className="flex items-center gap-3">
              {/* Notifikasi popup kecil saat berhasil salin */}
              <AnimatePresence>
                {copied && (
                  <motion.span 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-lg"
                  >
                    Link disalin!
                  </motion.span>
                )}
              </AnimatePresence>

              <button 
                onClick={handleShare}
                className={`p-3 rounded-full transition-all flex items-center gap-2 ${
                  copied 
                  ? "bg-green-500 text-white" 
                  : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-white"
                }`}
              >
                {copied ? <Check size={20} /> : <Share2 size={20} />}
              </button>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}