"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, GitBranch, ShieldCheck } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Logs", href: "#blog" },
  { label: "REST Client", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030303]/90 backdrop-blur-md border-b border-[#1e293b]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-2 font-mono text-sm tracking-wider text-slate-100 hover:text-[#10b981] transition-colors">
          <Terminal size={16} className="text-[#10b981]" />
          <span>parthrajsinh@dev:~</span>
        </a>

        {/* Git & API Indicators (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#0e0e11] border border-[#1e293b] rounded">
            <GitBranch size={12} className="text-[#10b981]" />
            <span>main</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#0e0e11] border border-[#1e293b] rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            <span>API: 200 OK</span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-mono text-slate-400 hover:text-slate-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 border border-[#10b981]/40 text-[#10b981] rounded bg-[#10b981]/5 hover:bg-[#10b981]/15 transition-all duration-200"
        >
          <ShieldCheck size={14} />
          <span>Connect API</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030303]/95 backdrop-blur-md border-b border-[#1e293b]"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-mono text-slate-400 hover:text-slate-100 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 pt-2 border-t border-[#1e293b] text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <GitBranch size={12} className="text-[#10b981]" />
                  <span>main</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span>API: 200 OK</span>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
