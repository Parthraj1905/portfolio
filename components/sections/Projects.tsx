"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";

const statusColors = {
  completed: "text-[#28c840] border-[#28c840]/30 bg-[#28c840]/10",
  "in-progress": "text-[#febc2e] border-[#febc2e]/30 bg-[#febc2e]/10",
  planned: "text-[#525252] border-[#525252]/30 bg-[#525252]/10",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 bg-[#111111]/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4"
        >
          02 / Projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e5e5e5] leading-tight">
            Things I've
            <br />
            <span className="text-gradient">built & explored.</span>
          </h2>
          <p className="text-[#525252] text-sm max-w-xs">
            Every project is a real experiment — messy, iterative, and honest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 2) }}
              className="group p-6 bg-[#141414] card-border rounded-lg flex flex-col gap-4 hover:bg-[#161616] transition-colors cursor-pointer"
              onClick={() => project.demoUrl && window.open(project.demoUrl, "_blank")}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-[#e5e5e5] group-hover:text-[#6366f1] transition-colors">
                  {project.title}
                </h3>
                <span
                  className={`text-xs font-mono px-2 py-1 border rounded-full shrink-0 ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-xs text-[#525252] flex items-center gap-2">
                    <span className="text-[#6366f1]">→</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-[#1f1f1f]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 bg-[#1f1f1f] text-[#525252] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#6366f1] hover:underline font-mono"
                  >
                    GitHub →
                  </a>
                )}
                {project.notebookUrl && (
                  <a
                    href={project.notebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#6366f1] hover:underline font-mono"
                  >
                    Notebook →
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
