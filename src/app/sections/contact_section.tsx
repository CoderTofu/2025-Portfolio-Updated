import "../custom_css/contact_section.css";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content m-10">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-slogan">
            <h2 className="font-1 text-center md:text-left">
              Great things can happen with a simple&nbsp;
              <span className="bold">hello!</span>
            </h2>
          </div>
          <a
            className="contact-button ml-20 animate-link-hk hidden lg:flex"
            href="mailto:kioskpaolo@protonmail.com"
          >
            <p className="font-3">Contact Me</p>
            <img src="/assets/link-svg.svg" alt="" />
          </a>
        </div>

        {/* Socials */}
        <div className="contact-socials flex-col sm:flex-row">
          {/* Left Part */}
          <div className="contact-info">
            <a href="#" className="font-3">
              codertofu
            </a>
            <a href="mailto:kioskpaolo@protonmail.com" className="font-3">
              kioskpaolo@protonmail.com
            </a>
          </div>
          {/* Right Part */}
          <div className="contact-links">
            <div className="contact-link animate-link-lk">
              <a href="https://github.com/CoderTofu" className="font-1">
                Github
              </a>
              <img src="/assets/link-svg.svg" alt="" />
            </div>
            <div className="contact-link animate-link-lk">
              <a
                href="https://www.linkedin.com/in/paolo-dionisio/"
                className="font-1"
              >
                LinkedIn
              </a>
              <img src="/assets/link-svg.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="font-3 copyright">
          ©2025 Paolo Dionisio. ALL RIGHTS RESERVED
        </div>
      </div>
    </section>
  );
}
