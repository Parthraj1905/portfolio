"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Shield, FileCode, CheckCircle } from "lucide-react";

const placeholderLogs = [
  {
    timestamp: "2026-05-20 18:42:01",
    level: "INFO",
    title: "Understanding Asynchronous Operations in Python",
    excerpt: "Diving deep into Event Loops, Async/Await syntax, and avoiding CPU-bound blocking calls.",
    tag: "Concur",
    readTime: "6 min read"
  },
  {
    timestamp: "2026-05-12 09:15:30",
    level: "DEBUG",
    title: "PostgreSQL Indexed Scans vs Sequential Iterations",
    excerpt: "Analyzing execution paths with EXPLAIN ANALYZE to reduce sub-second lookup delays.",
    tag: "SQL_Opt",
    readTime: "9 min read"
  },
  {
    timestamp: "2026-04-28 14:02:56",
    level: "TRACE",
    title: "Architecting Stateful Session Sync with Supabase & JWT Hooks",
    excerpt: "Managing subscription routes and secure claims payloads with third-party webhooks.",
    tag: "Security",
    readTime: "7 min read"
  }
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-28 px-6 bg-[#030303]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Index */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-4"
        >
          04 // JOURNAL LOGS & DEV telemetry
        </motion.p>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
              Technical Journals & <br />
              <span className="text-gradient font-mono">System Telemetry.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-mono text-xs max-w-sm border-l border-[#1e293b] pl-4">
            Notes, benchmarks, and architectural post-mortems logged directly from actual backend system implementations.
          </p>
        </motion.div>

        {/* Log stream items */}
        <div className="space-y-4 font-mono text-xs">
          {placeholderLogs.map((log, i) => (
            <motion.div
              key={log.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * (i + 2) }}
              className="group p-5 bg-[#0e0e11] border border-[#1e293b] rounded flex flex-col gap-4 hover:border-[#10b981]/30 hover:bg-[#0e0e11]/80 transition-all cursor-pointer"
            >
              {/* Log Header */}
              <div className="flex flex-wrap items-center gap-3 border-b border-[#1e293b]/60 pb-2 text-[10px]">
                <span className="text-slate-500">[{log.timestamp}]</span>
                <span className={`px-1.5 py-0.5 rounded font-bold ${
                  log.level === "INFO" ? "bg-sky-500/10 text-sky-400 border border-sky-500/20" :
                  log.level === "DEBUG" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                  "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}>
                  {log.level}
                </span>
                <span className="text-slate-500">//</span>
                <span className="text-[#10b981]">tag:{log.tag}</span>
                <span className="text-slate-500 ml-auto">{log.readTime}</span>
              </div>

              {/* Log Title & Excerpt */}
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-slate-100 group-hover:text-[#10b981] transition-colors leading-tight">
                  {log.title}
                </h3>
                <p className="text-slate-400 font-sans leading-relaxed text-xs">
                  {log.excerpt}
                </p>
              </div>

              {/* Log Footer */}
              <div className="flex items-center gap-2 text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors">
                <FileCode size={12} className="text-[#10b981]" />
                <span>read_journal_entry()</span>
                <span className="text-xs transition-transform group-hover:translate-x-1 select-none">➔</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
