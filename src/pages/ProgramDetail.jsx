import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Calendar, Clock, GraduationCap } from "lucide-react";
import programData from "../data/program.json";
import Footer from "../layout/Footer";

export default function ProgramDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Mencari data program yang sesuai dengan slug di URL
  const program = programData.find((p) => p.slug === slug);

  if (!program) {
    return <div className="min-h-screen flex items-center justify-center font-dynaPuff">Program tidak ditemukan.</div>;
  }

  return (
    <>
      <div className="bg-primary min-h-screen pt-32 pb-20 px-6 font-quicksand">
        <div className="container mx-auto max-w-4xl">
          
          {/* Tombol Kembali */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-secondary font-bold mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft size={20} /> Kembali ke Program
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-secondary/10"
          >
            {/* Header Detail */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
              <div>
                <span className={`px-4 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest ${program.warnaType}`}>
                  {program.type}
                </span>
                <h1 className="text-4xl md:text-5xl font-dynaPuff text-head mt-4">
                  {program.judul}
                </h1>
              </div>
              <div className="bg-secondary/10 p-4 rounded-3xl text-secondary">
                <GraduationCap size={48} />
              </div>
            </div>

            {/* Deskripsi Lengkap */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-head mb-4">Tentang Program</h2>
              <p className="text-gray-600 leading-relaxed italic">
                {program.fullDescription || program.deskripsi}
              </p>
            </div>

            {/* Grid Informasi */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Materi yang Dipelajari */}
              <div>
                <h3 className="text-xl font-bold text-head mb-6 flex items-center gap-2">
                  <CheckCircle2 size={24} className="text-secondary" /> Materi Belajar
                </h3>
                <ul className="space-y-4">
                  {(program.materi || []).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-bold text-sm bg-primary/50 p-3 rounded-2xl">
                      <div className="w-2 h-2 rounded-full bg-secondary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jadwal & Waktu */}
              <div className="bg-secondary/5 p-8 rounded-[2rem] border border-secondary/10">
                <h3 className="text-xl font-bold text-head mb-6 flex items-center gap-2">
                  <Calendar size={24} className="text-secondary" /> Jadwal Kelas
                </h3>
                <div className="flex items-center gap-4 text-gray-700 font-bold mb-4">
                  <Clock className="text-secondary" size={20} />
                  <span>{program.jadwal || "Hubungi Admin untuk Jadwal"}</span>
                </div>
                <button className="w-full mt-6 py-4 bg-secondary text-white rounded-2xl font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}