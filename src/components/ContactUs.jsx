import { i } from "motion/react-client";

const icons = [
    {
        name: "Instagram",
        icon:  (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
    ),
        link: "https://www.instagram.com/rt_sarinah_ash_shalihah/",
    },
    {
        name: "WhatsApp",
        icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"    
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.633l-.05 .046" />
            <path d="M9 16a5 5 0 1 1 6 0a5 5 0 0 1 -6 0" />
            <path d="M15 19l2 2l4 -4" />
        </svg>
    ),
        link: "https://wa.me/6281234567890",
    },
    {
        name: "Email",
        icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
        </svg>
    ),
        link: "mailto:info@rumahtahsintantepi.com",
    }
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
         <div className="bg-box w-70 h-70 rounded-4xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110" key={index}>
             <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-[#647050] hover:text-[#89986D] transition-colors duration-300"
          >
            {item.icon}
            <span className="text-white">{item.name}</span>
          </a>
         </div>
        ))
        
       }
       
      </div>
    </section>
  );
}
