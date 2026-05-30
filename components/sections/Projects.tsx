"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { Server, Terminal, Database, Activity, GitBranch } from "lucide-react";

const statusConfig = {
  completed: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  "in-progress": "text-amber-400 border-amber-500/20 bg-amber-500/5",
  planned: "text-slate-500 border-slate-500/20 bg-slate-500/5"
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6 bg-[#030303]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Identifier */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-4"
        >
          02 // INTEGRATION & SERVICES MATRIX
        </motion.p>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
              Production Engines & <br />
              <span className="text-gradient font-mono">Backend Orchestrations.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-mono text-xs max-w-sm border-l border-[#1e293b] pl-4">
            A matrix of stateful services, database optimizations, and external third-party API routes designed to run with maximum efficiency.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 2) }}
              className="bg-[#0e0e11] border border-[#1e293b] rounded-lg p-6 flex flex-col gap-5 hover:border-[#10b981]/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.02)] transition-all group"
            >
              {/* Top Row: Title & Status */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-slate-500 tracking-wider flex items-center gap-1 uppercase">
                    <GitBranch size={10} className="text-[#10b981]" />
                    svc_id: {project.id}
                  </span>
                  <h3 className="font-mono text-md md:text-lg font-bold text-slate-100 group-hover:text-[#10b981] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span
                  className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border rounded-full shrink-0 ${statusConfig[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              {/* API Route visual (high density backend detail) */}
              <div className="bg-slate-950 rounded border border-[#1e293b] px-3.5 py-2 flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                    project.id === "data-nerd" ? "bg-sky-500/10 text-sky-400 border border-sky-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}>
                    {project.id === "data-nerd" ? "GET" : "POST"}
                  </span>
                  <span className="text-slate-400">
                    {project.id === "data-nerd" ? "/api/v1/nerd/aggregations" : "/api/v1/parikshai/sync"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span>200 OK</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 font-sans text-xs md:text-sm leading-relaxed">
                {project.description}
              </p>

              {/* High Density Performance Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-2.5 bg-slate-950/40 p-3 rounded border border-[#1e293b]/60 font-mono">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-slate-500 uppercase">{metric.label}</span>
                      <span className="text-xs font-bold text-slate-200">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Key Deliverables:</span>
                <ul className="space-y-1">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-[#10b981] font-mono shrink-0 select-none">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#1e293b]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 border border-[#1e293b] text-slate-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 text-xs font-mono pt-1">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10b981] hover:underline flex items-center gap-1.5"
                  >
                    <Terminal size={12} />
                    <span>git clone url →</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
