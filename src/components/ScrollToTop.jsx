import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa browser kembali ke koordinat 0,0 (paling atas & kiri)
    window.scrollTo(0, 0);
  }, [pathname]); // Akan jalan setiap kali URL berubah

  return null;
}