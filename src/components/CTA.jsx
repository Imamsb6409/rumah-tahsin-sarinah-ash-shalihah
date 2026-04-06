export default function CTA() {
  return (
    <div className="bg-box w-[95%] min-h-70 md:w-[90%] mx-auto py-8 md:py-12 px-6 md:px-12 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-inner">
      {/* Bagian Teks */}
      <div className="w-full md:w-2/3 flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-dynaPuff text-[#647050] tracking-wide leading-tight">
          Ingin si kecil lancar membaca Al-Qur’an?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
          Bersama Rumah{" "}
          <span className="font-semibold text-[#647050]">
            Tahsin Sarinah Ash-Sholihah
          </span>
          , kami bimbing anak Anda membaca Al-Qur’an dengan lancar, tartil, dan
          penuh cinta.
        </p>
      </div>

      {/* Bagian Tombol */}
      <div className="w-full md:w-auto flex justify-center">
        <a
          href="https://wa.me/6282260578959?text=Assalamu'alaikum%2C%20saya%20tertarik%20untuk%20mendaftar%20program%20pembelajaran%20di%20Rumah%20Tahsin%20Sarinah%20Ash-Sholihah.%20Mohon%20informasi%20lebih%20lanjut."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full md:w-auto bg-[#89986D] text-white text-xl md:text-2xl lg:text-3xl py-4 md:py-5 px-8 md:px-10 rounded-2xl font-dynaPuff hover:bg-[#647050] transition duration-300 shadow-lg active:scale-95">
            Daftar Sekarang
          </button>
        </a>
      </div>
    </div>
  );
}
