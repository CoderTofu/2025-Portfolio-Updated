"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="absolute top-0 w-full flex justify-center z-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 1.3 } }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="w-full flex justify-between items-center py-4 px-4 sm:px-8 lg:px-12 max-w-[1500px]">
        <div className="flex items-center gap-4">
          <img
            className="hover:scale-110 transition-transform duration-300"
            src={"/assets/my-icon.svg"}
            alt="CoderTofu Icon"
          />
          <a href="#" className="font-1 animate-link-lk">
            codertofu.
          </a>
        </div>
        <div className="flex items-center gap-4 text-base font-1">
          <a href="#about" className="animate-link-lk">
            about
          </a>
          <a href="#contact" className="animate-link-lk">
            contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
