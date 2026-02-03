import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const iconClose = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-book-2"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12" />
      <path d="M19 16h-12a2 2 0 0 0 -2 2" />
      <path d="M9 8h6" />
    </svg>
  );

  const iconOpen = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-book"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6l0 13" />
      <path d="M12 6l0 13" />
      <path d="M21 6l0 13" />
    </svg>
  );

  return (
    <header className=" text-white py-4 px-10 fixed w-full top-0 left-0 z-20 flex justify-between items-center">
      <h1 className="text-lg md:text-2xl font-dynaPuff font-regular">Sarinah Ash-Shalihah</h1>
      <button onClick={toggleMenu} className="ml-auto cursor-pointer">
        {iconClose}
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary text-white p-4 fixed w-[250px] rounded-bl-3xl pt-14 pl-10 top-0 right-0 z-20 flex flex-col items-start"
          >
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              {iconOpen}
            </button>
            <ul className="flex flex-col items-center font-dynaPuff">
              <li className="mb-2 hover:text-[#4b533c] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
                <a href="#home">Home</a>
              </li>
              <li className="mb-2 hover:text-[#4b533c] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
                <a href="#about">About</a>
              </li>
              <li className="mb-2 hover:text-[#4b533c] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
                <a href="#services">Services</a>
              </li>
              <li className="mb-2 hover:text-[#4b533c] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out ">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
