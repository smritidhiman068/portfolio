import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="hero__bg" aria-hidden="true">
      <motion.div
        className="hero__spotlight"
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
