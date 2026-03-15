import { i } from "motion/react-client";

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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram w-full h-full"
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp w-full h-full"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    ),
    link: "https://wa.me/6282260578959",
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-mail w-full h-full"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <path d="M3 7l9 6l9 -6" />
      </svg>
    ),
    link: "mailto:info@rumahtahsintantepi.com",
  },
];

export default function ContactUs() {
  return (
    <section className="w-full min-h-[50vh] bg-secondary flex flex-col items-center justify-center p-4 gap-8 md:p-10">
      <div className="text-center text-white">
        <h2 className="text-3xl md:text-5xl font-dynaPuff font-bold mb-4 tracking-wide">
          Hubungi Kami
        </h2>
        <p className="text-xl md:text-2xl font-lato font-semibold">
          Jangan ragu untuk menghubungi kami. Kami siap membantu Anda!
        </p>
      </div>
      <div className="flex justify-around w-full ">
        {icons.map((item, index) => (
          <div
            className={` relative overflow-hidden bg-box w-70 h-40 md:h-60 lg:h-70 rounded-4xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 after:absolute after:inset-0 after:rounded-4xl after:bg-white/30 
    after:scale-[2.5] after:opacity-0 after:transition-all after:duration-700 
    after:ease-out hover:after:scale-0 hover:after:opacity-100 after:pointer-events-none`}
            key={index}
          >
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-[#647050] hover:text-[#89986D] transition-colors duration-300 w-25 md:w-30 lg:w-40 h-25 md:h-30 lg:h-40 justify-center"
            >
              {item.icon}
              <span className="text-white">{item.name}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
