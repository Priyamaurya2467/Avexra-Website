import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import ServicesSection from "../components/sections/ServicesSection";
import MethodologySection from "../components/sections/MethodologySection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <MethodologySection />
      <ContactSection />
      <Footer />
    </>
  );
}
