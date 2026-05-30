export type Skill = {
  name: string;
  level: "learning" | "comfortable" | "proficient";
  details?: string;
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Core Backend",
    icon: "terminal",
    skills: [
      { name: "Python", level: "proficient", details: "Asyncio, OOP patterns, typing" },
      { name: "FastAPI", level: "proficient", details: "Pydantic parsing, dependency injection, router optimization" },
      { name: "Flask", level: "proficient", details: "RESTful architecture, WSGI configs, microservices" },
      { name: "SQLAlchemy", level: "proficient", details: "ORM mappings, connection pools, eager loading" }
    ]
  },
  {
    category: "Database Operations",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "proficient", details: "Indexing strategies, partitioning, complex views" },
      { name: "MySQL", level: "comfortable", details: "Query optimization, schema design" },
      { name: "Supabase", level: "proficient", details: "Real-time sync, Row Level Security, Edge Functions" },
      { name: "Advanced Query Optimization", level: "proficient", details: "EXPLAIN ANALYZE, indexed filters, index-only scans" }
    ]
  },
  {
    category: "Architecture & Integration",
    icon: "cpu",
    skills: [
      { name: "RESTful API Design", level: "proficient", details: "Idempotency, status codes, OpenAPI, resource nesting" },
      { name: "JWT Auth", level: "proficient", details: "Token signatures, stateless claims, token rotation" },
      { name: "Docker", level: "comfortable", details: "Multi-stage builds, compose files, container networking" },
      { name: "External API Orchestration", level: "proficient", details: "Gemini AI generation, Razorpay subscription hooks" }
    ]
  },
  {
    category: "Ancillary",
    icon: "layers",
    skills: [
      { name: "JavaScript", level: "comfortable", details: "ES6+, fetch, async/await events" },
      { name: "React", level: "comfortable", details: "SPA structure, simple interfaces" },
      { name: "Tailwind", level: "comfortable", details: "Utility-first layouts, responsive grids" }
    ]
  }
];
