import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingText({ words, interval = 2400 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="rotating-text">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rotating-text__word"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
