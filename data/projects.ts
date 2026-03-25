export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: "completed" | "in-progress" | "planned";
  githubUrl?: string;
  demoUrl?: string;
  notebookUrl?: string;
  highlights: string[];
};

export const projects: Project[] = [
    {
      id: "data-nerd",
      title: "Data Nerd — Market Insights",
      description:
      "A live market insights dashboard that aggregates and visualises financial data in real time. Built to make market data approachable and readable.",
      longDescription:
      "An end-to-end data web application built from scratch and deployed on Vercel. Focused on clean data presentation, real-time updates, and an intuitive UI for exploring market trends.",
      tags: ["Next.js", "Data Visualisation", "Vercel", "Real-time Data"],
      status: "completed",
      githubUrl: "",        // add your GitHub repo link if public
      demoUrl: "https://data-nerd.vercel.app/",
      highlights: [
      "Fetches and displays live market data",
      "Built and deployed end-to-end independently",
      "Focused on clean, readable data presentation",
      ],
    },
  {
    id: "project-2",
    title: "Coming Soon",
    description: "Your second ML project will live here.",
    longDescription:
      "Deep learning, NLP, computer vision — whatever excites you most. This slot is waiting.",
    tags: ["PyTorch", "Deep Learning"],
    status: "planned",
    highlights: [
      "Architecture design",
      "Training pipeline",
      "Results & insights",
    ],
  },
];
