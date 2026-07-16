import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { personal } from "../data/resumeData";
import RotatingText from "./RotatingText";
import HeroBackground from "./HeroBackground";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });

  const blob1X = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const blob1Y = useTransform(springY, [-0.5, 0.5], [-30, 30]);
  const blob2X = useTransform(springX, [-0.5, 0.5], [25, -25]);
  const blob2Y = useTransform(springY, [-0.5, 0.5], [25, -25]);
  const blob3X = useTransform(springX, [-0.5, 0.5], [-45, 45]);
  const blob3Y = useTransform(springY, [-0.5, 0.5], [-45, 45]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      className="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="hero__blob hero__blob--1"
        style={{ x: blob1X, y: blob1Y }}
      />
      <motion.div
        className="hero__blob hero__blob--2"
        style={{ x: blob2X, y: blob2Y }}
      />
      <motion.div
        className="hero__blob hero__blob--3"
        style={{ x: blob3X, y: blob3Y }}
      />

      <HeroBackground />

      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="hero__eyebrow" variants={item}>
          Hi, I'm
        </motion.span>

        <motion.h1 className="hero__name" variants={item}>
          {personal.name}
        </motion.h1>

        <motion.h2 className="hero__title" variants={item}>
          {personal.title}
        </motion.h2>

        <motion.div className="hero__roles" variants={item}>
          <RotatingText words={personal.roles} />
        </motion.div>

        <motion.p className="hero__tagline" variants={item}>
          {personal.tagline}
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <a href={`mailto:${personal.email}`} className="btn btn--primary">
            <FiMail /> Get in touch
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </motion.div>

        <motion.div className="hero__contacts" variants={item}>
          <a href={`mailto:${personal.email}`}>
            <FiMail /> {personal.email}
          </a>
          <a href={`tel:${personal.phone}`}>
            <FiPhone /> {personal.phone}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
