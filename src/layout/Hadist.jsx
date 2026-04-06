import dataHadist from "../data/hadist.json";
import Header from "./Header";
import { NavLink } from "react-router";

const icons = [
  {
    name: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M16.5 7.5v.01" />
      </svg>
    ),
    link: "https://www.instagram.com/rt_sarinah_ash_shalihah/",
  },
  {
    name: "Email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <path d="M3 7l9 6l9 -6" />
      </svg>
    ),
    link: "mailto:info@rumahtahsintantepi.com",
  },
  {
    name: "WhatsApp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    ),
    link: "https://wa.me/6282260578959",
  },
];

export default function Hadist() {
  return (
    <div>
      <div className="min-h-screen items-center justify-center bg-primary pt-22 pb-12">
        <Header />
        <h1 className="text-xl font-semibold ml-4 text-center underline-offset-1 underline">
          Hadist-Hadist Singkat
        </h1>
        <div className="w-full gap-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          {dataHadist.map((hadist, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-4 py-5 rounded-lg shadow-md"
            >
              <p className="text-right text-2xl font-bold font-quicksand">
                {hadist.arabic}
              </p>
              <p className="text-right text-sm text-gray-500">
                {hadist.riwayat}
              </p>
              <p className="mt-2">{hadist.arti}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full bg-[#647050] py-8 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-6 px-4">
          {/* pages */}
          <div className="text-left w-full md:w-1/2">
            <p className="text-xl mb-2 font-semibold">Pages</p>
            <ul className="text-lg tracking-widest space-y-1">
              <li>
                <NavLink to="/" className="hover:underline hover:font-semibold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hadist"
                  className="hover:underline hover:font-semibold"
                >
                  Hadist
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            {/* Find Us */}
            <div className="text-left">
              <p className="text-xl mb-2 font-semibold">Find Us</p>
              <ul className="text-lg space-y-1">
                <li>
                  <a
                    href="https://maps.app.goo.gl/7NbsiQadDUm9HKkP7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:font-semibold"
                  >
                    Panjibuwono Residence, Sriwedari CS 5/15, Babelan – Bekasi
                    17610📍
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Us */}
            <div className="text-left mt-6 md:mt-0 ">
              <p className="text-xl mb-2 font-semibold">Contact Us</p>
              <ul className="text-lg space-y-1 flex gap-x-2">
                {icons.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:font-semibold"
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Rumah Tahsin Sarinah Ash-Sholihah.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}
