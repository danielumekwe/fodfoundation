import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ImpactCardsSection from "@/components/ImpactCardsSection";
import VoicesSection from "@/components/voicessection";
import SupportSection from "@/components/supportsection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ImpactCardsSection />
      <VoicesSection />
      <SupportSection />
      <FaqSection />
      <Footer />
    </>
  );
}