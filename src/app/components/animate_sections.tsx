"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

export function AnimateSection({ children }: { children: ReactNode }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // section enters viewport to section leaves
  });

  // Fade in from 0 to 1, then fade out again as it scrolls away
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0.3]
  );
  const opacity = useSpring(rawOpacity, {
    stiffness: 50,
    damping: 20,
    mass: 0.3,
  });

  return (
    <motion.section
      ref={ref}
      className="w-full min-h-screen"
      initial={{}}
      whileInView={{
        transition: { duration: 0.8, ease: "easeOut" },
      }}
      viewport={{ once: false, amount: 0.5 }}
      style={{ opacity }}
    >
      {children}
    </motion.section>
  );
}
