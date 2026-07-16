import { motion } from "framer-motion";
import { experience } from "../data/resumeData";
import SectionHeading, { Reveal } from "./Section";

const bullets = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const bullet = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHeading eyebrow="Experience" title="Where I've made an impact" />

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal
            key={job.company + job.period}
            delay={i * 0.12}
            className="timeline__item"
          >
            <div className="timeline__marker">
              <motion.span
                className="timeline__dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.12 + 0.3 }}
              />
              {i !== experience.length - 1 && (
                <span className="timeline__line-track">
                  <motion.span
                    className="timeline__line"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.12 + 0.4 }}
                  />
                </span>
              )}
            </div>

            <motion.div
              className="timeline__card"
              whileHover={{ y: -4, borderColor: "var(--accent)" }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <div className="timeline__card-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline__company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="timeline__period">{job.period}</span>
              </div>
              <motion.ul
                variants={bullets}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {job.points.map((p, idx) => (
                  <motion.li key={idx} variants={bullet}>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
