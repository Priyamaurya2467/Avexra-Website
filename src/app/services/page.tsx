import Navbar from "@/components/layout/Navbar";
import ServicesSection from "../../components/sections/ServicesSection";
import ContactSection from "../../components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

export default function Page() {
  return (
    <>
      <Navbar />
      <ServicesSection />
      <Background />
      <ContactSection />
      <Footer />
    </>
  );
}
