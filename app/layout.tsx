import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parth — Data Enthusiastic",
  description:
    "Portfolio of a Data Scientist and ML Engineer passionate about building intelligent systems.",
  keywords: ["data science", "machine learning", "AI", "portfolio", "deep learning"],
  openGraph: {
    title: "Parth — Data Enthusiastic",
    description:
      "Portfolio of a Data Scientist and ML Engineer passionate about building intelligent systems.",
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
