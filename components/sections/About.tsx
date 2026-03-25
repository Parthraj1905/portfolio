"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "1", label: "Projects Completed", suffix: "" },
  { value: "∞", label: "Curiosity Level", suffix: "" },
  { value: "1", label: "Goal: Get Hired", suffix: "" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4"
        >
          01 / About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e5e5e5] mb-6 leading-tight">
              I'm obsessed with
              <br />
              <span className="text-gradient">making data talk.</span>
            </h2>

            <div className="space-y-4 text-[#a3a3a3] leading-relaxed">
              <p>
                I'm a passionate self-learner transitioning into data science and
                machine learning. I believe the most interesting problems in the
                world are data problems — and I'm building the skills to solve them.
              </p>
              <p>
                My approach is simple: learn by doing. Every project I take on
                is an experiment, every failure a data point, and every insight
                a step forward.
              </p>
              <p>
                When I'm not training models, I'm reading papers, exploring
                datasets, or writing about what I've learned.
              </p>
            </div>

            {/* Currently learning */}
            <div className="mt-8 p-4 bg-[#141414] border border-[#1f1f1f] rounded-lg">
              <p className="text-xs font-mono text-[#525252] uppercase tracking-widest mb-3">Currently exploring</p>
              <div className="flex flex-wrap gap-2">
                {["Deep Learning", "NLP", "Computer Vision", "MLOps"].map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-mono px-3 py-1 bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Stats + visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-[#141414] border border-[#1f1f1f] rounded-lg text-center hover:border-[#6366f1]/30 transition-colors"
                >
                  <p className="font-display text-3xl font-bold text-[#6366f1]">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs text-[#525252] mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Terminal-style card */}
            <div className="bg-[#141414] border border-[#1f1f1f] rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f1f1f]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs font-mono text-[#525252] ml-2">about.py</span>
              </div>
              <pre className="p-4 text-xs font-mono text-[#a3a3a3] leading-relaxed overflow-x-auto">
{`# Who am I?
profile = {
  "name": "Parmar Parthrajsinh",
  "role": "Aspiring Data / ML Engineer",
  "location": "India",
  "learning": ["PyTorch", "MLOps", "NLP"],
  "goal": "Land first ML role in 2026",
  "mindset": "data-driven",
}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
