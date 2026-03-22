export default function Footer() {
  return (
    <footer className="w-full bg-[#647050] py-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-6 px-4">
        
        {/* Navigation */}
        <div className="text-left w-full md:w-1/2">
          <p className="text-xl mb-2 font-semibold">Navigation</p>
          <ul className="text-lg tracking-widest space-y-1">
            <li><a href="#home" className="hover:underline hover:font-semibold">Home</a></li>
            <li><a href="#about" className="hover:underline hover:font-semibold">About</a></li>
            <li><a href="#program" className="hover:underline hover:font-semibold">Program</a></li>
            <li><a href="#gallery" className="hover:underline hover:font-semibold">Gallery</a></li>
            <li><a href="#contact" className="hover:underline hover:font-semibold">Contact</a></li>
          </ul>
        </div>

        {/* Find Us */}
        <div className="text-left w-full md:w-1/2">
          <p className="text-xl mb-2 font-semibold">Find Us</p>
          <ul className="text-lg space-y-1">
            <li>
              <a
                href="https://maps.app.goo.gl/7NbsiQadDUm9HKkP7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:font-semibold"
              >
                Panjibuwono Residence, Sriwedari CS 5/15, Babelan – Bekasi 17610📍
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Rumah Tahsin Sarinah Ash-Sholihah. All rights reserved.
      </div>
    </footer>
  );
}