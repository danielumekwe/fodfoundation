import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CauseCards from "@/components/CauseCards";
import AboutSection from "@/components/AboutSection";
import VoicesSection from "@/components/voicessection";
import SupportSection from "@/components/supportsection";
import ActionBanner from "@/components/ActionBanner";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <CauseCards />
      <VoicesSection />
      <SupportSection />
      <ActionBanner />
      <FaqSection />
      <Footer />
    </>
  );
}