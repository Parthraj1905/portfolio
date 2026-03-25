"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const email = "parthrajsinhparmar19@email.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4"
        >
          05 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold text-[#e5e5e5] mb-6 leading-tight"
        >
          Let's build something
          <br />
          <span className="text-gradient">meaningful.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#a3a3a3] text-lg max-w-xl mx-auto mb-12"
        >
          I'm actively looking for opportunities in data science and ML.
          Whether you have a role, a project, or just want to talk data —
          I'd love to hear from you.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={handleCopy}
            className="group flex items-center gap-3 px-6 py-3 bg-[#141414] border border-[#1f1f1f] rounded-lg hover:border-[#6366f1]/40 transition-all"
          >
            <span className="font-mono text-sm text-[#a3a3a3]">{email}</span>
            <span className="text-xs font-mono text-[#525252] group-hover:text-[#6366f1] transition-colors">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
          <a
            href={`mailto:${email}`}
            className="px-6 py-3 bg-[#6366f1] text-white text-sm font-sans font-medium rounded-lg hover:bg-[#4f46e5] transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            Send an email
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-8"
        >
          {[
            { label: "GitHub", href: "https://github.com/Parthraj1905" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/parthrajsinh-parmar-a86463373/" },
            { label: "Kaggle", href: "https://www.kaggle.com/parthrajsinhparmar" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-[#525252] hover:text-[#6366f1] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
