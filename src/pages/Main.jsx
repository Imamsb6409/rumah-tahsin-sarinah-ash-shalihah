import { motion } from "framer-motion";
import HeroSec from "../components/HeroSec";
import AboutSec from "../components/AboutSec";
import StatSec from "../components/StatSec";
import ProgramSec from "../components/ProgramSec";
import GallerySec from "../components/GallerySec";
import InvestmentSec from "../components/InvestmentSec";
import TestimonialSec from "../components/TestimonialSec";
import FaqSec from "../components/FaqSec";
import CTA from "../components/CTA";
import Footer from "../layout/Footer";

// Variabel animasi untuk memicu anak-anaknya muncul
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Muncul berurutan satu per satu
    },
  },
};

export default function Main() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col overflow-x-hidden bg-primary"
    >
      <HeroSec />
      <AboutSec />
      <StatSec />
      <ProgramSec />
      <GallerySec />
      <InvestmentSec />
      <TestimonialSec />
      <FaqSec />
      <CTA />
      <Footer />
    </motion.div>
  );
}