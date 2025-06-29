import Navbar from "@/app/components/navbar";
import { AnimateSection } from "./components/animate_sections";
import LandingSection from "./sections/landing_section";
import AboutSection from "./sections/about_section";
import ContactSection from "./sections/contact_section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <AnimateSection>
        <LandingSection />
      </AnimateSection>
      <AnimateSection>
        <AboutSection />
      </AnimateSection>
      <AnimateSection>
        <ContactSection />
      </AnimateSection>
    </main>
  );
}
