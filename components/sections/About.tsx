"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Terminal, Award, Timer, Server, Database } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Terminal state emulator
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Python 3.11.2 (main, May 30 2026, 13:02:56)",
    "[GCC 12.2.0] on linux",
    'Type "help" for a list of available systems.',
    ""
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let response: string[] = [];

    switch (command) {
      case "help":
        response = [
          `>> ${cmd}`,
          "Available actions:",
          "  cat profile       - Dump engineer details",
          "  sys_metrics       - Check database & response indices",
          "  check_concurrency - Load concurrent test pipeline",
          "  clear             - Flush terminal buffers"
        ];
        break;
      case "cat profile":
        response = [
          `>> ${cmd}`,
          "profile = {",
          '  "name": "Parthrajsinh",',
          '  "role": "Python Backend Engineer",',
          '  "specialty": "RESTful Architecture & High-Performance DB Tuning",',
          '  "stack": ["Python", "FastAPI", "PostgreSQL", "Supabase", "Docker"],',
          '  "philosophy": "Scale horizontally, index early, trace everything"',
          "}"
        ];
        break;
      case "sys_metrics":
        response = [
          `>> ${cmd}`,
          "Resolving telemetry...",
          "---------------------------------------",
          "  [POSTGRES] 670k Records - Indexed scan successfully mapped",
          "  [OPTIMIZE] Latency reduction: -850ms",
          "  [API] FastAPI Endpoints: status=200_OK, avg_latency=42ms",
          "  [INFRA] Docker multi-stage deployment build compiled: size=120MB"
        ];
        break;
      case "check_concurrency":
        response = [
          `>> ${cmd}`,
          "Simulating 200 concurrent user sessions...",
          "  JWT tokens verified: [OK]",
          "  Supabase DB synchronization: [OK]",
          "  Gemini API routing thread initialized: [OK]",
          "  Razorpay billing webhook latencies: [avg 142ms]",
          "Status: STABLE"
        ];
        break;
      case "clear":
        setTerminalLogs([]);
        return;
      default:
        response = [
          `>> ${cmd}`,
          `bash: command not found: ${cmd}. Type "help" for instructions.`
        ];
    }

    setTerminalLogs((prev) => [...prev, ...response, ""]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleCommand(inputValue);
    setInputValue("");
  };

  return (
    <section id="about" className="py-28 px-6 bg-[#09090b]/40 border-y border-[#1e293b]/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Index */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-4"
        >
          01 // ARCHITECTURE & OVERVIEW
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
              Engineering performance <br />
              <span className="text-gradient font-mono">at the application core.</span>
            </h2>

            <div className="space-y-4 text-slate-400 font-sans text-sm md:text-base leading-relaxed">
              <p>
                I am a focused backend engineer specializing in building robust applications with Python. 
                I write asynchronous services, tune indexing schemas for extensive SQL queries, and implement 
                failsafe server orchestrations.
              </p>
              <p>
                My development workflow prioritizes performance data. I build with standard backend architectural rules: 
                strict parameter validation (Pydantic), decoupled dependency injection (FastAPI), connection pooling, 
                and resource telemetry monitoring to identify overhead early in production pipelines.
              </p>
              <p>
                Whether it is reducing SQL search times on database clusters or integrating microservices, 
                I write cleanly structured, testable, and containerized configurations.
              </p>
            </div>

            {/* Currently Tuning indicators (Density metrics) */}
            <div className="p-4 bg-[#0e0e11] border border-[#1e293b] rounded">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-3">System Focus</p>
              <div className="flex flex-wrap gap-2">
                {["Asyncio & Threads", "Query Optimization", "Idempotency Patches", "Docker Devops", "JWT / RLS Access"].map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-mono px-2.5 py-1 bg-[#10b981]/5 text-[#10b981] border border-[#10b981]/15 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 w-full bg-[#0e0e11] border border-[#1e293b] rounded shadow-xl overflow-hidden font-mono"
          >
            {/* Terminal Top bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#030303] border-b border-[#1e293b]">
              <div className="flex items-center gap-1.5">
                <Terminal size={14} className="text-[#10b981]" />
                <span className="text-[11px] text-slate-500">pty_service (active)</span>
              </div>
              <div className="flex gap-2">
                {["cat profile", "sys_metrics", "check_concurrency"].map((btnCmd) => (
                  <button
                    key={btnCmd}
                    onClick={() => handleCommand(btnCmd)}
                    className="text-[10px] px-1.5 py-0.5 bg-[#1e293b]/50 hover:bg-[#10b981]/10 border border-[#1e293b] hover:border-[#10b981]/30 rounded text-slate-400 hover:text-[#10b981] transition-all"
                  >
                    {btnCmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 text-xs h-[280px] overflow-y-auto bg-slate-950/80 scanline text-slate-300 flex flex-col gap-1 select-none">
              {terminalLogs.map((log, index) => (
                <div
                  key={index}
                  className={`whitespace-pre-wrap ${
                    log.startsWith(">>")
                      ? "text-[#10b981] font-semibold"
                      : log.startsWith("profile") || log.includes("{")
                      ? "text-sky-400"
                      : log.includes("[OK]")
                      ? "text-emerald-400"
                      : log.includes("Resolving telemetry")
                      ? "text-amber-400 font-bold"
                      : "text-slate-300"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleFormSubmit} className="flex bg-[#030303] border-t border-[#1e293b] items-center">
              <span className="pl-4 pr-1 text-[#10b981] text-xs font-bold font-mono">{">>>"}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="type 'help' and press Enter..."
                className="flex-1 bg-transparent border-none outline-none py-2.5 text-xs text-slate-300 font-mono focus:ring-0 focus:border-none focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-[11px] text-slate-500 hover:text-[#10b981] border-l border-[#1e293b] hover:bg-[#10b981]/5 transition-colors"
              >
                Execute
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
