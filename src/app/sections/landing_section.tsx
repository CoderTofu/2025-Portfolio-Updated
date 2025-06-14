"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import "../custom_css/landing_section.css";
import Separator from "../components/separator";

const fadeUpLoadVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function LandingSection() {
  return (
    <section className="w-full h-[700px] md:h-screen bg-radial-[at_50%_50%] from-gray-200 to-gray-500 relative overflow-hidden">
      <div className="marquee-container w-full">
        <Marquee className="p-0">
          <p className="font-2">Hello, I'm Juan Paolo B. Dionisio! &nbsp;</p>
          <p className="font-2">A Learner. &nbsp;</p>
          <p className="font-2">A Developer. &nbsp;</p>
          <p className="font-2">A Creator. &nbsp;</p>
        </Marquee>
      </div>

      <motion.img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 h-[700px] md:h-screen w-auto max-w-none object-cover"
        src={"/assets/nobg.png"}
        alt="Landing Image"
        variants={fadeUpLoadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <Separator />
    </section>
  );
}
