import React from "react";
import { Link } from "react-router";
import blogData from "../data/blogData.json";


export default function BlogList() {
  return (
   <div className="bg-primary">
     <div className="max-w-5xl mx-auto px-6 py-12 ">
      <h1 className="text-4xl font-bold text-center mb-10 text-head font-dynaPuff">
        Artikel Blog Rumah Tahsin Sarinah
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-primary shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 border border-box"
          >
            <h2 className="text-2xl font-semibold text-head mb-3 font-quicksand">
              {blog.title}
            </h2>
            <p className="text-gray-700 mb-5 font-inter">{blog.description}</p>
            <Link
              to={`/blog/${blog.slug}`}
              className="inline-block bg-secondary text-white px-5 py-2 rounded-lg hover:bg-sub transition-colors font-inter"
            >
              Baca Selengkapnya →
            </Link>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}
