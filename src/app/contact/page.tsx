import Navbar from "@/components/layout/Navbar";
import ContactSection from "../../components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

export default function Page() {
  return (
    <>
      <Navbar />
      <Background />
      <ContactSection />
      <Footer />
    </>
  );
}
