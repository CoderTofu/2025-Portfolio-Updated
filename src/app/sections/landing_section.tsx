import Marquee from "react-fast-marquee";
import "../custom_css/landing_section.css";

export default function LandingSection() {
  return (
    <section className="w-full">
      <div className="marquee-container w-full">
        <Marquee className="p-0">
          <p className="font-2">Hello, I'm Juan Paolo B. Dionisio! &nbsp;</p>
          <p className="font-2">A Learner. &nbsp;</p>
          <p className="font-2">A Developer. &nbsp;</p>
          <p className="font-2">A Creator. &nbsp;</p>
        </Marquee>
      </div>

      <img
        className="max-h-screen w-auto absolute bottom-0 left-0 right-0 m-auto z-1 translate-y-1/8"
        src={"/assets/nobg.png"}
        alt="Landing Image"
      />
    </section>
  );
}
