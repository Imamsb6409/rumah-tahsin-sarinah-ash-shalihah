import React from "react";
import { useParams, Link } from "react-router";
import blogData from "../data/blogData.json";
import DalilBox from "../components/DalilBox";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 font-dynaPuff">
          Artikel tidak ditemukan
        </h1>
        <Link
          to="/blog"
          className="mt-6 inline-block text-secondary underline font-inter"
        >
          ← Kembali ke daftar artikel
        </Link>
      </div>
    );
  }

  return (
    <article className=" min-h-screen pt-20 mx-auto px-6 py-12 bg-primary rounded-xl shadow-md">
      <h1 className="text-2xl md:text-4xl font-semibold md:font-bold text-head mb-8 font-dynaPuff">
        {blog.title}
      </h1>
      {blog.content.map((para, index) => (
        <p
          key={index}
          className="text-gray-800 leading-relaxed mb-5 font-inter text-md md:text-lg"
        >
          {para}
        </p>
      ))}

      {/* Dalil Box */} 
      {blog.dalil && (
        <DalilBox
          arabic={blog.dalil.arabic}
          indo={blog.dalil.indo}
          sumber={blog.dalil.sumber}
        />
      )}

      <Link
        to="/blog"
        className="inline-block mt-8 bg-secondary text-white px-5 py-2 rounded-lg hover:bg-sub transition-colors font-inter"
      >
        ← Kembali ke daftar artikel
      </Link>
    </article>
  );
}
