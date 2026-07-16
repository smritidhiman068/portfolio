import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { education, certifications } from "../data/resumeData";
import SectionHeading, { Reveal } from "./Section";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function EducationCerts() {
  return (
    <section id="education" className="section edu-certs">
      <SectionHeading eyebrow="Education & Certifications" title="Foundations & recognition" />

      <div className="edu-certs__grid">
        <Reveal delay={0.05} className="edu-certs__col">
          <h3 className="edu-certs__col-title">
            <FiBookOpen /> Education
          </h3>
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {education.map((e) => (
              <motion.div
                className="edu-card"
                key={e.degree}
                variants={item}
                whileHover={{ y: -5, borderColor: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className="edu-card__row">
                  <h4>{e.degree}</h4>
                  <span>{e.period}</span>
                </div>
                <p>
                  {e.school} · {e.location}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>

        <Reveal delay={0.18} className="edu-certs__col">
          <h3 className="edu-certs__col-title">
            <FiAward /> Certifications
          </h3>
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {certifications.map((c) => (
              <motion.div
                className="edu-card"
                key={c.name}
                variants={item}
                whileHover={{ y: -5, borderColor: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className="edu-card__row">
                  <h4>{c.name}</h4>
                </div>
                <p>{c.issuer}</p>
                <p className="edu-card__detail">{c.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
