import { motion } from "framer-motion";
import { skillGroups } from "../data/resumeData";
import SectionHeading, { Reveal } from "./Section";

const pillGroup = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
                variants={pillGroup}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {group.skills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
