"use client";

import "../custom_css/about_section.css";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <main className="about-content px-[2rem] md:px-[5rem]">
        <div className="about-header">
          <h1 className="font-1 text-8xl md:text-16xl">About</h1>
        </div>
        <div className="about-body">
          {/* Left Side */}
          <div className="left-side sides text-">
            <div
              className="font-1 text-2xl md:text-4xl"
              style={{ lineHeight: "1.2" }}
            >
              Constantly exploring new technologies and ideas, both in web
              development and beyond. Let’s build something amazing together!
            </div>
            <div className="titles font-3">
              <div>
                <p>Front-End Developer & CS Student</p>
              </div>
              <a
                href="https://www.linkedin.com/in/paolo-dionisio/"
                className="cursor-pointer"
              >
                <p className="flex items-center gap-1 hover:pl-2 transition-all opacity-95 duration-300">
                  Explore LinkedIn
                  <span>
                    <img
                      className="ml-4 w-4"
                      src="/assets/link-svg.svg"
                      alt=""
                    />
                  </span>
                </p>
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="right-side sides">
            <p className="font-3 text-lg md:text-xl">
              I am a Computer Science student at Pamantasan ng Lungsod ng
              Maynila with a strong foundation in frontend web development and
              experience in business analysis.
              <br /> <br />
              As the former Web Development Lead for the{" "}
              <span className="bold">
                <span style={{ color: "#FBBC05" }}>G</span>
                <span style={{ color: "#4285F4" }}>D</span>
                <span style={{ color: "#34A853" }}>S</span>
                <span style={{ color: "#EA4335" }}>C</span>
              </span>{" "}
              PLM, I led multiple projects that supported the organization’s
              initiatives, sharpening both my technical and leadership skills.
              <br /> <br />
              I recently completed an internship as a Business Analyst, where I
              contributed to QA testing, data migration, user documentation, and
              client coordination across multiple system development projects.
              <br /> <br />
              Beyond academics, I have successfully led various school and
              personal projects, demonstrating strong teamwork, adaptability,
              and problem-solving abilities. My background also includes serving
              as a volunteer technical director for major university events,
              honing my ability to perform under pressure.
              <br /> <br />I am eager to explore new opportunities where I can
              apply my skills, continue learning, and contribute to impactful
              work.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
