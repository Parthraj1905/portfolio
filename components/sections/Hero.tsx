"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Server, TerminalSquare } from "lucide-react";
import { useState } from "react";

const codeSnippet = `from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .database import get_db
from .services import QueryOptimizer

app = FastAPI(title="Parthrajsinh API")

@app.get("/api/v1/optimize")
def optimize_query(db: Session = Depends(get_db)):
    """
    Optimizes critical analytical endpoints.
    Reduced sequential scan latency by 850ms.
    """
    optimizer = QueryOptimizer(db=db)
    metrics = optimizer.tune_indexed_scans(
        db_records=670_000, 
        index_type="B-Tree"
    )
    return {
        "status": "synchronized",
        "concurrency": "200_active_users",
        "latency_delta": "-850ms",
        "metrics": metrics
    }`;

const schemaSnippet = `{
  "database": "PostgreSQL",
  "records": 672048,
  "tables": {
    "users": "authenticated_via_jwt",
    "subscriptions": "razorpay_integrated",
    "content_generation": "gemini_orchestrated"
  },
  "performance": {
    "indexing": "btree_optimized_views",
    "caching": "stateful_python_sessions",
    "avg_response_time": "42ms"
  }
}`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"api" | "schema">("api");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden dot-grid">
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Copywriting */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-6 flex flex-col gap-6"
        >
          {/* Status Badge */}
          <motion.div variants={item} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0e0e11] border border-[#1e293b] rounded-full text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span>env: production | ready</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={item} className="space-y-2">
            <span className="text-xs font-mono text-[#10b981] uppercase tracking-wider block">
              SYSTEM INITIALIZED // NAME: PARTHRAJSINH
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-100 tracking-tight">
              Python Backend <br />
              <span className="text-gradient font-mono">Engineer</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-slate-400 font-sans text-md md:text-lg leading-relaxed max-w-xl"
          >
            Architecting scalable backend services, optimizing relational databases, and designing high-performance REST APIs.
          </motion.p>

          {/* Micro Stats panel (High Data Density) */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-3 p-4 bg-[#0e0e11] border border-[#1e293b] rounded font-mono"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-slate-500 uppercase">Latency optimization</span>
              <span className="text-sm font-semibold text-[#10b981] flex items-center gap-1">
                <Cpu size={14} /> -850ms
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-slate-500 uppercase">PostgreSQL records</span>
              <span className="text-sm font-semibold text-sky-400 flex items-center gap-1">
                <Database size={14} /> 670K+
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-slate-500 uppercase">Max Concurrency</span>
              <span className="text-sm font-semibold text-amber-400 flex items-center gap-1">
                <Server size={14} /> 200 Act.
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-[#10b981] hover:bg-[#059669] text-slate-900 text-xs font-mono font-medium rounded transition-all duration-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              cat ./projects.log
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-[#1e293b] hover:border-[#10b981]/50 text-slate-400 hover:text-slate-100 text-xs font-mono rounded transition-all duration-200 bg-slate-950/20"
            >
              curl -X POST /contact
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: IDE Code Panel Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 w-full bg-[#0e0e11] border border-[#1e293b] rounded-lg shadow-2xl overflow-hidden relative"
        >
          {/* IDE Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#030303] border-b border-[#1e293b]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 ml-3">
                <TerminalSquare size={12} className="text-[#10b981]" />
                <span>workspace / parth_backend</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/5 border border-[#10b981]/20 px-1.5 py-0.5 rounded">
              python
            </div>
          </div>

          {/* IDE Tabs */}
          <div className="flex bg-[#070709] border-b border-[#1e293b] font-mono text-xs text-slate-500">
            <button
              onClick={() => setActiveTab("api")}
              className={`px-4 py-2 border-r border-[#1e293b] flex items-center gap-1.5 transition-colors ${
                activeTab === "api" ? "bg-[#0e0e11] text-slate-300 border-t border-t-[#10b981]" : "hover:text-slate-300"
              }`}
            >
              <span>main_api.py</span>
            </button>
            <button
              onClick={() => setActiveTab("schema")}
              className={`px-4 py-2 border-r border-[#1e293b] flex items-center gap-1.5 transition-colors ${
                activeTab === "schema" ? "bg-[#0e0e11] text-slate-300 border-t border-t-[#10b981]" : "hover:text-slate-300"
              }`}
            >
              <span>sys_config.json</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto h-[320px] scanline relative select-none">
            {activeTab === "api" ? (
              <pre className="text-slate-300 whitespace-pre">
                {codeSnippet.split("\n").map((line, idx) => {
                  // Basic client-side highlighting for high-density visual delight
                  let formatted = line;
                  if (line.trim().startsWith("from ") || line.trim().startsWith("import ")) {
                    formatted = line.replace(/(from|import)/g, '<span class="text-pink-400">$1</span>');
                  } else if (line.trim().startsWith("def ") || line.trim().startsWith("class ")) {
                    formatted = line.replace(/(def|class)/g, '<span class="text-sky-400">$1</span>');
                  } else if (line.includes("@app.get")) {
                    formatted = line.replace(/(@app.get)/g, '<span class="text-[#10b981]">$1</span>');
                  } else if (line.trim().startsWith('"""') || line.trim().startsWith("#") || line.includes('"""') || line.trim().startsWith("*")) {
                    formatted = `<span class="text-slate-500">${line}</span>`;
                  } else if (line.includes("return")) {
                    formatted = line.replace(/(return)/g, '<span class="text-amber-400">$1</span>');
                  }
                  return (
                    <div key={idx} className="table-row">
                      <span className="table-cell pr-4 text-slate-600 text-right select-none w-6">{idx + 1}</span>
                      <span className="table-cell text-left" dangerouslySetInnerHTML={{ __html: formatted }} />
                    </div>
                  );
                })}
              </pre>
            ) : (
              <pre className="text-slate-300 whitespace-pre">
                {schemaSnippet.split("\n").map((line, idx) => {
                  let formatted = line;
                  // Color highlights for keys and values
                  formatted = line
                    .replace(/"([^"]+)":/g, '"<span class="text-sky-400">$1</span>":')
                    .replace(/: "([^"]+)"/g, ': "<span class="text-emerald-400">$1</span>"')
                    .replace(/: (\d+)/g, ': <span class="text-amber-400">$1</span>');
                  return (
                    <div key={idx} className="table-row">
                      <span className="table-cell pr-4 text-slate-600 text-right select-none w-6">{idx + 1}</span>
                      <span className="table-cell text-left" dangerouslySetInnerHTML={{ __html: formatted }} />
                    </div>
                  );
                })}
              </pre>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator with mono text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 select-none">
        <span className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">sys.scroll()</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-emerald-500 to-transparent"
        />
      </div>
    </section>
  );
}
