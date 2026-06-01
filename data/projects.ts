export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: "completed" | "in-progress" | "planned";
  githubUrl?: string;
  demoUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "data-nerd",
    title: "DataNerd — Aggregation Engine",
    description:
      "Engineered high-performance FastAPI REST endpoints to serve aggregations against a 670,000+ record PostgreSQL database. Reduced query latency by 850ms using indexed filtering and optimized SQL views. Implemented backend time-series calculations for dynamic client consumption.",
    longDescription:
      "A high-density data aggregation API built for sub-second responses. Focused on Postgres indexing strategy, partition tuning, and SQL view optimization.",
    tags: ["FastAPI", "PostgreSQL", "Python", "SQL Optimization", "Time-Series"],
    status: "completed",
    demoUrl: "https://data-nerd.vercel.app/",
    githubUrl: "https://github.com/Parthraj1905/data-nerd",
    metrics: [
      { label: "Query Latency Delta", value: "-850ms" },
      { label: "Database Records", value: "670K+" },
      { label: "Response Throughput", value: "1.2k req/s" }
    ],
    highlights: [
      "Reduced query latency by 850ms using indexed filtering and optimized SQL views",
      "Engineered FastAPI REST endpoints serving aggregations against a 670,000+ record PostgreSQL database",
      "Implemented backend time-series calculations for dynamic client consumption"
    ]
  },
  {
    id: "parikshai",
    title: "Parikshai — Service Orchestration & Core Backend",
    description:
      "Architected stateful Python backend services supporting 200 concurrent users. Implemented JWT-based authentication and real-time database sync via Supabase. Orchestrated complex third-party integrations including Gemini API for content generation and Razorpay for multi-tier subscription billing routing.",
    longDescription:
      "Core stateful backend service handling user authentication session caches, real-time sync, and external payment subscription billing loops.",
    tags: ["Python", "Supabase", "Gemini API", "Razorpay Integration", "JWT Auth"],
    status: "completed",
    demoUrl: "https://parikshai.vercel.app/",
    githubUrl: "https://github.com/Parthraj1905/parikshai",
    metrics: [
      { label: "Concurrent Sessions", value: "200 Active" },
      { label: "API Sync Frequency", value: "Real-time" },
      { label: "Payment Webhooks Latency", value: "<150ms" }
    ],
    highlights: [
      "Architected stateful Python backend services supporting 200 concurrent users",
      "Implemented secure JWT-based authentication and real-time database sync via Supabase",
      "Orchestrated complex integrations including Gemini API content generation and Razorpay subscription routing"
    ]
  }
];
