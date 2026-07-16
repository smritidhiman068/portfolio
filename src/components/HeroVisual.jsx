import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

export default function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <motion.div
        className="hero__visual-ring hero__visual-ring--outer"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="hero__visual-ring hero__visual-ring--inner"
        animate={{ rotate: -360 }}
        transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
      >
        <span className="hero__visual-dot" />
      </motion.div>

      <motion.div
        className="hero__visual-core"
        animate={{ scale: [1, 1.07, 1], y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiCode />
      </motion.div>
    </div>
  );
}
