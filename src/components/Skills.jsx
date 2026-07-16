import { motion } from "framer-motion";
import { skillGroups } from "../data/resumeData";
import SectionHeading, { Reveal } from "./Section";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const pill = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <SectionHeading eyebrow="Skills" title="Tools & technologies I work with" />

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <motion.div
              className="skills__card"
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <h3>{group.category}</h3>
              <motion.div
                className="skills__pills"
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="pill"
                    variants={pill}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {skill}
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
