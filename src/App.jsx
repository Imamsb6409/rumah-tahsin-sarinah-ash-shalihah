// App.jsx
import Header from "./layout/Header";
import FloatingWA from "./components/FloatingWA";
import { Outlet } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import { ReactLenis } from "lenis/react"; // Import Lenis
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan ScrollTrigger agar sinkron dengan Lenis
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  
  useEffect(() => {
    // Sinkronisasi GSAP ticker dengan Lenis
    function update(time) {
      ScrollTrigger.update();
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    // Kita gunakan ReactLenis di sini agar smooth scroll aktif di seluruh rute
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <Header />
      <ScrollToTop />
      
      {/* Outlet akan merender Main, Hadist, Blog, atau About */}
      <main>
        <Outlet />
      </main>

      <FloatingWA />
    </ReactLenis>
  );
}