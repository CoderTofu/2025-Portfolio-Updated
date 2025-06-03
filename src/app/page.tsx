import Navbar from "@/app/components/navbar";
import LandingSection from "./sections/landing_section";
import AboutSection from "./sections/about_section";
import ContactSection from "./sections/contact_section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
