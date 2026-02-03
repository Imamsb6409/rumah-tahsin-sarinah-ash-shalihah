/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F6F0D7",
        secondary: "#89986D",
        box: "#B8C4A9",
      },
      fontFamily: {
        dynaPuff: ["DynaPuff", "cursive"],
        inter: ["Inter", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      textColor: {
        sub: "#9CAB84",
        head: "#89986D",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        marqueeVertical: "marqueeVertical 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // Pakai -50% karena kita duplikat 1x
        },
        marqueeVertical: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" }, // Pakai -50% agar mulus
        },
      },
    },
  },
  plugins: [],
};
