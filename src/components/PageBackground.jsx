import { motion } from "framer-motion";

export default function PageBackground() {
  return (
    <div className="page__bg" aria-hidden="true">
      <div className="page__grid" />
      <motion.div
        className="page__blob page__blob--1"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="page__blob page__blob--2"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="page__blob page__blob--3"
        animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
