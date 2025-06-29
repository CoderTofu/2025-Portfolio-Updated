"use client";

import Marquee from "react-fast-marquee";
import "../custom_css/landing_section.css";
import Separator from "../components/separator";

export default function LandingSection() {
  const phrases = [
    "Hello, I'm Juan Paolo B. Dionisio!",
    "A Learner.",
    "A Developer.",
    "A Creator.",
  ];

  return (
    <section className="w-full h-screen bg-radial-[at_50%_50%] from-gray-200 to-gray-500 relative overflow-hidden">
      <div className="marquee-container w-full overflow-hidden">
        <Marquee className="p-0 select-none" gradient={false} speed={40}>
          {phrases.map((text, i) => (
            <p key={i} className="font-2 mx-4">
              {text}&nbsp;
            </p>
          ))}
        </Marquee>
      </div>

      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 h-screen w-auto max-w-none object-cover"
        src={"/assets/nobg.png"}
        alt="Landing Image"
      />

      <Separator />
    </section>
  );
}
