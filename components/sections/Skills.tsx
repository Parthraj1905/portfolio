"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";
import { Terminal, Cpu, Database, Layers, CheckCircle2 } from "lucide-react";

const iconsConfig = {
  terminal: Terminal,
  database: Database,
  cpu: Cpu,
  layers: Layers
};

const levelConfig = {
  proficient: { label: "PRO", color: "border-emerald-500/20 text-[#10b981] bg-emerald-500/5" },
  comfortable: { label: "MID", color: "border-sky-500/20 text-sky-400 bg-sky-500/5" },
  learning: { label: "DEV", color: "border-slate-500/20 text-slate-400 bg-slate-500/5" }
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 bg-[#09090b]/40" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Identifier */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-4"
        >
          03 // ENGINEERING SKILLSETS & STACK
        </motion.p>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-slate-100 mb-16 leading-tight"
        >
          System Stack & <br />
          <span className="text-gradient font-mono">Technical Architecture.</span>
        </motion.h2>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => {
            const IconComponent = iconsConfig[cat.icon as keyof typeof iconsConfig] || Terminal;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (ci + 2) }}
                className="p-6 bg-[#0e0e11] border border-[#1e293b] rounded flex flex-col gap-6"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1e293b]/60">
                  <div className="flex items-center gap-2">
                    <IconComponent size={16} className="text-[#10b981]" />
                    <h3 className="font-mono text-sm font-bold text-slate-100 uppercase tracking-widest">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">
                    index: 0{ci + 1}
                  </span>
                </div>

                {/* Sub-skills list with code console structure (high density) */}
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill) => {
                    const cfg = levelConfig[skill.level];
                    return (
                      <div
                        key={skill.name}
                        className="bg-slate-950/60 hover:bg-slate-950 border border-[#1e293b]/50 hover:border-[#10b981]/25 p-3 rounded flex flex-col md:flex-row md:items-center justify-between gap-3 font-mono text-[11px] transition-colors"
                      >
                        {/* Left Info: Name & Specs */}
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#10b981] font-bold">::</span>
                            <span className="text-slate-200 font-bold">{skill.name}</span>
                          </div>
                          {skill.details && (
                            <span className="text-[10px] text-slate-500 font-normal">
                              param: {skill.details}
                            </span>
                          )}
                        </div>

                        {/* Right Info: Level tag */}
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          <span className={`px-2 py-0.5 border text-[9px] font-bold rounded ${cfg.color}`}>
                            {cfg.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
