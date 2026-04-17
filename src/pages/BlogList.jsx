import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { BookOpenText, Calendar, ArrowRight } from "lucide-react";
import blogData from "../data/blogData.json";
import Footer from "../layout/Footer";

export default function BlogList() {
  return (
    <>
      <div className="bg-primary min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <BookOpenText className="mx-auto text-secondary mb-4" size={48} />
            <h1 className="text-5xl font-dynaPuff text-head">
              Wawasan Qur'ani
            </h1>
            <p className="text-sub mt-4 max-w-2xl mx-auto italic font-quicksand">
              Temukan tips praktis dan keutamaan belajar Al-Qur'an untuk
              keluarga muslimah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-secondary/10 flex flex-col"
              >
                <div className="h-56 bg-secondary/20 flex items-center justify-center relative overflow-hidden group">
                  <BookOpenText
                    size={64}
                    className="text-secondary opacity-20 group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold text-secondary flex items-center gap-2 shadow-sm">
                    <Calendar size={12} />
                    Blog RTSarinah
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-dynaPuff text-head mb-4 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 font-quicksand mb-6 line-clamp-3">
                    {blog.description}
                  </p>

                  <div className="mt-auto">
                    <NavLink
                      to={`/blog/${blog.slug}`}
                      className="flex items-center justify-between w-full bg-secondary/5 hover:bg-secondary hover:text-white p-4 rounded-2xl transition-all font-bold group"
                    >
                      Baca Artikel
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
