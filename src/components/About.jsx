import { motion } from "framer-motion";
import { personal } from "../data/resumeData";
import SectionHeading, { Reveal } from "./Section";
import CountUp from "./CountUp";

const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "", label: "Companies" },
  { value: 3, suffix: "", label: "Major Projects" },
  { value: 30, suffix: "%", label: "Engagement Boost Delivered" },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <SectionHeading eyebrow="About Me" title="Building interfaces that just feel right" />

      <div className="about__grid">
        <div className="about__text">
          <Reveal delay={0.1}>
            <p>{personal.summary}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <p>
              I care about clean component architecture, measurable performance
              wins, and using modern AI tooling (ChatGPT, Claude AI, Cursor AI,
              GitHub Copilot) to ship high-quality features faster without
              cutting corners on testing or code review.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="about__stats"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((s) => (
            <motion.div
              className="stat-card"
              key={s.label}
              variants={card}
              whileHover={{ y: -6, rotate: -1, borderColor: "var(--accent)" }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <span className="stat-card__value">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span className="stat-card__label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
