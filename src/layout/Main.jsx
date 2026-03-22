import HeroSec from "../components/HeroSec";
import AboutSec from '../components/AboutSec';
import ProgramSec  from '../components/Programsec';
import GallerySec  from '../components/GallerySec';
import CTA from '../components/CTA';
import ContactUs  from '../components/ContactUs';
export default function Main() {
  return (
    <div className="w-full min-h-screen bg-primary">
      <HeroSec />
      <AboutSec />
      <ProgramSec />
      <GallerySec />
       <CTA />
       <ContactUs />
    </div>
  );
}
