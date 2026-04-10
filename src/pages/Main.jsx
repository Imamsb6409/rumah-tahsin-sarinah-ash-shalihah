import HeroSec from "../components/HeroSec";
import AboutSec from "../components/AboutSec";
import ProgramSec from "../components/Programsec";
import GallerySec from "../components/GallerySec";
import CTA from "../components/CTA";
import Footer from "../layout/Footer";
import Kata2 from '../components/Kata2';

export default function Main() {
  return (
    <>
      <div className="w-full min-h-screen pb-15 bg-primary relative">
        <HeroSec />
        <AboutSec />
        <Kata2 />
        <ProgramSec />
        <GallerySec />
        <CTA />
      </div>
      <Footer />
    </>
  );
}
