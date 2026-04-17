// App.jsx
import Header from "./layout/Header";
import FloatingWA from "./components/FloatingWA";
import { Outlet, BrowserRouter } from "react-router";
import ScrollToTop from "./components/ScrollToTop"; // Import komponen tadi

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Outlet />
      <FloatingWA />
    </>
  );
}
