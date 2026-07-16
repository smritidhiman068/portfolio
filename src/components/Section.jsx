import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "", y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="section__heading">
      <span className="section__eyebrow">{eyebrow}</span>
      <h2 className="section__title">{title}</h2>
    </Reveal>
  );
}
