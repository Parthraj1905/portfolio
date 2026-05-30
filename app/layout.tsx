import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parthrajsinh — Python Backend Engineer",
  description:
    "Architecting scalable backend services, optimizing relational databases, and designing high-performance REST APIs.",
  keywords: ["Python", "FastAPI", "Backend Developer", "PostgreSQL", "Database Optimization", "API Design", "Supabase", "Razorpay Integration", "Docker"],
  openGraph: {
    title: "Parthrajsinh — Python Backend Engineer",
    description:
      "Architecting scalable backend services, optimizing relational databases, and designing high-performance REST APIs.",
    type: "website",
  },
  icons: {
    icon: "/favicon2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="glow-bg" />
        {children}
      </body>
    </html>
  );
}
