"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Data Engineer",
  "Data Analyst",
  "AI Enthusiast",
  "Problem Solver",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-[#6366f1] font-mono">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Status badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366f1] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366f1]" />
          </span>
          <span className="text-xs font-mono text-[#a3a3a3] tracking-widest uppercase">
            Open to opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Parth.</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div variants={item} className="text-2xl md:text-3xl font-sans font-light text-[#a3a3a3] mb-6 h-10">
          <TypingText />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-[#a3a3a3] text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I turn raw data into insight and build models that learn. Currently
          diving deep into machine learning, deep learning, and everything AI —
          one experiment at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#6366f1] text-white text-sm font-sans font-medium rounded-md hover:bg-[#4f46e5] transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1f1f1f] text-[#a3a3a3] text-sm font-sans rounded-md hover:border-[#6366f1]/40 hover:text-[#e5e5e5] transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={item}
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#525252] font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#525252] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
