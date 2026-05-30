"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Terminal, Play, CheckCircle2, ShieldCheck, Mail } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const email = "parthrajsinhparmar19@email.com";
  
  // Interactive REST client state
  const [requestBody, setRequestBody] = useState({
    name: "Developer Friend",
    email: "partner@example.com",
    message: "Let's collaborate on scalable Python backend architectures."
  });
  
  const [isSending, setIsSending] = useState(false);
  const [responseLog, setResponseLog] = useState<string | null>(null);

  const handleInputChange = (field: string, val: string) => {
    setRequestBody(prev => ({
      ...prev,
      [field]: val
    }));
  };

  const executePostRequest = () => {
    setIsSending(true);
    setResponseLog(null);
    
    // Copy to clipboard immediately
    navigator.clipboard.writeText(email);

    setTimeout(() => {
      setIsSending(false);
      setResponseLog(JSON.stringify({
        status: 201,
        statusText: "Created",
        latency: "42ms",
        headers: {
          "content-type": "application/json",
          "x-powered-by": "FastAPI/Uvicorn",
          "x-action": "email_copied_to_clipboard"
        },
        body: {
          success: true,
          message: "Mail dispatch queue initialized successfully.",
          recipient: email,
          metadata: {
            copied: true,
            action: "Use parthrajsinhparmar19@email.com to send your formal invite"
          }
        }
      }, null, 2));
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#09090b]/40 border-t border-[#1e293b]/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Identifier */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-4"
        >
          05 // REST CLIENT INTERACTION
        </motion.p>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight">
            Connect Client to <br />
            <span className="text-gradient font-mono">POST /api/v1/contact</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base max-w-xl mx-auto">
            Interact with the simulated backend handler below to dispatch an automated communication route and copy my email address to your session clipboard.
          </p>
        </motion.div>

        {/* Mock REST Client Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0e0e11] border border-[#1e293b] rounded-lg shadow-2xl overflow-hidden font-mono text-xs"
        >
          {/* Header Panel */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#030303] border-b border-[#1e293b]">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[#10b981]" />
              <span className="text-[11px] font-bold text-slate-300">FastAPI Interactive REST Client v1.0</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>connected_local_socket</span>
            </div>
          </div>

          {/* Configuration Grid */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1e293b] min-h-[340px] bg-slate-950/40">
            {/* Left side: Request Configuration */}
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-[#1e293b]/60 pb-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Request Parameters</span>
                <span className="text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded font-bold">POST</span>
              </div>

              {/* Endpoint row */}
              <div className="flex items-center gap-2 bg-[#030303] border border-[#1e293b] px-3 py-2 rounded">
                <span className="text-slate-500 text-[10px]">URL:</span>
                <span className="text-slate-300 select-all">/api/v1/contact</span>
              </div>

              {/* Editable Fields */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-500 uppercase">sender_name</label>
                  <input
                    type="text"
                    value={requestBody.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-[#030303] border border-[#1e293b] focus:border-[#10b981]/50 rounded px-3 py-2 text-slate-200 outline-none focus:ring-0 text-xs font-mono"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-500 uppercase">sender_email</label>
                  <input
                    type="email"
                    value={requestBody.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-[#030303] border border-[#1e293b] focus:border-[#10b981]/50 rounded px-3 py-2 text-slate-200 outline-none focus:ring-0 text-xs font-mono"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-500 uppercase">message_payload</label>
                  <textarea
                    rows={3}
                    value={requestBody.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-[#030303] border border-[#1e293b] focus:border-[#10b981]/50 rounded px-3 py-2 text-slate-200 outline-none focus:ring-0 text-xs font-mono resize-none"
                  />
                </div>
              </div>

              {/* Send Button */}
              <button
                onClick={executePostRequest}
                disabled={isSending}
                className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 bg-[#10b981] hover:bg-[#059669] text-slate-900 font-bold rounded hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all disabled:opacity-50 select-none"
              >
                {isSending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    <span>Executing pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play size={12} fill="currentColor" />
                    <span>Send Request</span>
                  </>
                )}
              </button>
            </div>

            {/* Right side: Console output / JSON response */}
            <div className="p-5 flex flex-col gap-4 bg-slate-950/80 scanline">
              <div className="flex items-center justify-between border-b border-[#1e293b]/60 pb-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Server Telemetry Response</span>
                {responseLog && (
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold">201 CREATED</span>
                )}
              </div>

              {/* Response Code viewport */}
              <div className="flex-1 flex flex-col justify-center min-h-[220px] overflow-x-auto text-[11px]">
                {isSending && (
                  <div className="text-slate-500 animate-pulse text-center space-y-1">
                    <p className="font-bold text-[#10b981]">HTTP/1.1 POST /api/v1/contact</p>
                    <p>Resolving DNS cache...</p>
                    <p>Negotiating handshake...</p>
                    <p>Writing JSON packet...</p>
                  </div>
                )}

                {!isSending && !responseLog && (
                  <div className="text-slate-600 text-center space-y-1 py-8">
                    <p className="font-bold">// PIPELINE DISCONNECTED</p>
                    <p>Adjust the payload values on the left and click 'Send Request' to trigger connection.</p>
                  </div>
                )}

                {!isSending && responseLog && (
                  <pre className="text-slate-300 leading-relaxed whitespace-pre font-mono">
                    {responseLog.split("\n").map((line, idx) => {
                      let formatted = line;
                      formatted = line
                        .replace(/"([^"]+)":/g, '"<span class="text-sky-400">$1</span>":')
                        .replace(/: "([^"]+)"/g, ': "<span class="text-emerald-400">$1</span>"')
                        .replace(/: (\d+)/g, ': <span class="text-amber-400">$1</span>')
                        .replace(/: (true|false)/g, ': <span class="text-amber-500">$1</span>');
                      return (
                        <div key={idx} dangerouslySetInnerHTML={{ __html: formatted }} />
                      );
                    })}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy to Clipboard confirmation / Manual links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Mail size={12} className="text-[#10b981]" />
            <span>Standard Delivery Interface:</span>
            <a href={`mailto:${email}`} className="text-slate-300 hover:text-[#10b981] underline">
              {email}
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 mt-2">
            {[
              { label: "GitHub", href: "https://github.com/Parthraj1905" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/parthrajsinh-parmar-a86463373/" },
              { label: "Kaggle", href: "https://www.kaggle.com/parthrajsinhparmar" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-500 hover:text-[#10b981] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
