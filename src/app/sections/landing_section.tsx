"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import "../custom_css/landing_section.css";
import Separator from "../components/separator";

export default function LandingSection() {
  return (
    <motion.section
      className="w-full h-screen bg-radial-[at_50%_50%] from-gray-200 to-gray-500 relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 1, ease: "easeInOut" },
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="marquee-container w-full">
        <Marquee className="p-0">
          <p className="font-2">Hello, I'm Juan Paolo B. Dionisio! &nbsp;</p>
          <p className="font-2">A Learner. &nbsp;</p>
          <p className="font-2">A Developer. &nbsp;</p>
          <p className="font-2">A Creator. &nbsp;</p>
        </Marquee>
      </div>

      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 h-screen w-auto max-w-none object-cover"
        src={"/assets/nobg.png"}
        alt="Landing Image"
      />

      <Separator />
    </motion.section>
  );
}
