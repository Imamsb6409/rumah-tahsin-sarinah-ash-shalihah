import { Outlet } from "react-router";

import Header from "./layout/Header";

const whatsappIcon = {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp w-10 h-10"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  ),
  link: "https://wa.me/6282260578959",
};

export default function App() {
  return (
    <>
      <Header />
      <div className="fixed right-7 bg-white flex justify-center items-center rounded-full bottom-30 w-15 h-15 z-50 text-green-500 shadow-lg cursor-pointer transition-all ease-in-out duration-200 active:scale-95 hover:scale-105">
        <a href={whatsappIcon.link} target="_blank" rel="noopener noreferrer">
          {whatsappIcon.icon}
        </a>
      </div>
      <Outlet />
    </>
  );
}
