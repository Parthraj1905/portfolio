"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const placeholderPosts = [
  {
    title: "My First Steps into Machine Learning",
    excerpt: "How I went from zero to training my first model — what worked, what didn't, and what I learned.",
    date: "Coming soon",
    tag: "Beginner",
    readTime: "5 min read",
  },
  {
    title: "Understanding Gradient Descent",
    excerpt: "A visual, intuitive explanation of one of the most fundamental concepts in ML.",
    date: "Coming soon",
    tag: "Theory",
    readTime: "8 min read",
  },
  {
    title: "My First Kaggle Competition",
    excerpt: "I entered my first competition without expecting to win — here's what the process taught me.",
    date: "Coming soon",
    tag: "Experience",
    readTime: "6 min read",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-32 px-6 bg-[#111111]/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4"
        >
          04 / Learning in Public
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#e5e5e5] leading-tight">
            Thinking out
            <br />
            <span className="text-gradient">loud.</span>
          </h2>
          <p className="text-[#525252] text-sm max-w-xs">
            Notes, experiments, and reflections from the learning journey.
          </p>
        </motion.div>

        <div className="space-y-4">
          {placeholderPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 2) }}
              className="group p-6 bg-[#141414] card-border rounded-lg flex flex-col md:flex-row md:items-center gap-4 hover:bg-[#161616] transition-colors cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-2 py-1 bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs font-mono text-[#525252]">{post.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#e5e5e5] group-hover:text-[#6366f1] transition-colors mb-1">
                  {post.title}
                </h3>
                <p className="text-[#525252] text-sm">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-mono text-[#525252]">{post.date}</span>
                <span className="text-[#525252] group-hover:text-[#6366f1] transition-colors text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
