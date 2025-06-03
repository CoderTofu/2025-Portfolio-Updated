import "../custom_css/about_section.css";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <main className="about-content">
        <div className="about-header">
          <h1 className="font-1">About</h1>
        </div>
        <div className="about-body">
          {/* Left Side */}
          <div className="left-side sides">
            <div className="font-1">
              Constantly exploring new technologies and ideas, both in web
              development and beyond. Let’s build something amazing together!
            </div>
            <div className="titles font-3">
              <div>
                <p>
                  Front-End Developer <br /> & CS Student
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/paolo-dionisio/"
                className="animate-link-hk cursor-pointer"
              >
                <p className="flex items-center gap-1">
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
            <p className="font-3">
              I am a 3rd-year Computer Science student at Pamantasan ng Lungsod
              ng Maynila, specializing in frontend web development.
              <br /> <br />
              As the Web Development Lead for the{" "}
              <span className="bold">
                <span style={{ color: "#FBBC05" }}>G</span>
                <span style={{ color: "#4285F4" }}>D</span>
                <span style={{ color: "#34A853" }}>S</span>
                <span style={{ color: "#EA4335" }}>C</span>
              </span>{" "}
              PLM, I have led multiple projects that contributed to the
              organization’s initiatives, further honing my technical and
              leadership skills.
              <br /> <br />
              Additionally, I have successfully led various academic projects,
              demonstrating strong teamwork and problem-solving abilities. My
              experience as a volunteer technical director for major school
              events has also strengthened my ability to handle high-pressure
              tasks efficiently.
              <br /> <br />
              Currently, I am seeking an internship opportunity to apply my
              expertise, expand my knowledge, and contribute to impactful
              projects.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
