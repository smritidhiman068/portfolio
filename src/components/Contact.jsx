import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { personal } from "../data/resumeData";
import SectionHeading, { Reveal } from "./Section";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeading eyebrow="Contact" title="Let's build something great together" />

      <Reveal delay={0.1} className="contact__card-wrap">
        <div className="contact__card">
          <span className="contact__glow" />
          <p>
            I'm open to new opportunities and interesting projects. Reach out
            and let's talk.
          </p>
          <div className="contact__links">
            <a href={`mailto:${personal.email}`} className="btn btn--primary">
              <FiMail /> {personal.email}
            </a>
            <a href={`tel:${personal.phone}`} className="btn btn--ghost">
              <FiPhone /> {personal.phone}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {personal.name}. Built with React &
          Framer Motion.
        </p>
      </footer>
    </section>
  );
}
