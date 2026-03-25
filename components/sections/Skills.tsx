"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";

const levelConfig = {
  proficient: { label: "Proficient", color: "#6366f1", width: "90%" },
  comfortable: { label: "Comfortable", color: "#818cf8", width: "65%" },
  learning: { label: "Learning", color: "#525252", width: "35%" },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4"
        >
          03 / Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#e5e5e5] mb-12 leading-tight"
        >
          Tools of the
          <br />
          <span className="text-gradient">trade.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (ci + 2) }}
              className="p-6 bg-[#141414] card-border rounded-lg"
            >
              <h3 className="font-mono text-sm text-[#a3a3a3] uppercase tracking-widest mb-6">
                {cat.category}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill) => {
                  const config = levelConfig[skill.level];
                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-[#e5e5e5] font-sans">{skill.name}</span>
                        <span className="text-xs font-mono text-[#525252]">{config.label}</span>
                      </div>
                      <div className="h-px bg-[#1f1f1f] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: config.width } : {}}
                          transition={{ duration: 0.8, delay: 0.2 + ci * 0.05, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: config.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Level legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex items-center gap-6 justify-end"
        >
          {Object.entries(levelConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="w-3 h-px" style={{ backgroundColor: config.color }} />
              <span className="text-xs font-mono text-[#525252]">{config.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
