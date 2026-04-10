// src/components/DalilBox.jsx
import React from "react";

export default function DalilBox({ arabic, indo, sumber }) {
  if (!arabic || !indo || !sumber) return null;

  return (
    <div className="mt-10 p-6 bg-box rounded-xl shadow-md max-w-3xl">
      <h3 className="text-xl font-dynaPuff text-black mb-4">Dalil Pendukung</h3>
      <p className="text-right font-quicksand  text-2xl leading-relaxed mb-4">
        {arabic}
      </p>
      <p className="text-gray-800 font-inter mb-2">{indo}</p>
      <p className="text-sm text-gray-600 italic">{sumber}</p>
    </div>
  );
}
