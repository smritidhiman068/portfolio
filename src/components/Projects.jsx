import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/resumeData";
import SectionHeading, { Reveal } from "./Section";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const tagPop = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <SectionHeading eyebrow="Projects" title="Things I've built" />

      <div className="projects__grid">
        {projects.map((proj, i) => (
          <Reveal key={proj.name} delay={i * 0.12} className="project-card-wrap">
            <motion.div
              className="project-card"
              whileHover={{ y: -10, boxShadow: "0 20px 45px rgba(124, 92, 255, 0.35)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="project-card__head">
                <div>
                  <h3>{proj.name}</h3>
                  <p className="project-card__subtitle">{proj.subtitle}</p>
                </div>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                    aria-label={`Visit ${proj.name}`}
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
              <p className="project-card__company">{proj.company}</p>
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {proj.points.map((p, idx) => (
                  <motion.li key={idx} variants={fadeUp}>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="project-card__tags"
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                {proj.tags.map((t) => (
                  <motion.span
                    key={t}
                    className="tag"
                    variants={tagPop}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
