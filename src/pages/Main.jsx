import { motion } from "framer-motion";
import HeroSec from "../components/HeroSec";
import AboutSec from "../components/AboutSec";
import StatSec from "../components/StatSec";
import ProgramSec from "../components/Programsec";
import GallerySec from "../components/GallerySec";
import InvestmentSec from "../components/InvestmentSec";
import TestimonialSec from "../components/TestimonialSec";
import FaqSec from "../components/FaqSec";
import CTA from "../components/CTA";
import Footer from "../layout/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      <section id="home"><HeroSec /></section>
      <section id="about"><AboutSec /></section>
      <StatSec />
      <section id="program"><ProgramSec /></section>
      <section id="gallery"><GallerySec /></section>
      <section id="investasi"><InvestmentSec /></section>
      <TestimonialSec />
      <section id="faq"><FaqSec /></section>
      <section id="cta"><CTA /></section>
      <Footer />
    </motion.div>
  );
}