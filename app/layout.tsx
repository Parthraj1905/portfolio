import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Data Scientist & ML Engineer",
  description:
    "Portfolio of a Data Scientist and ML Engineer passionate about building intelligent systems.",
  keywords: ["data science", "machine learning", "AI", "portfolio", "deep learning"],
  openGraph: {
    title: "Your Name — Data Scientist & ML Engineer",
    description:
      "Portfolio of a Data Scientist and ML Engineer passionate about building intelligent systems.",
    type: "website",
  },
  icons: {
    icon: "/public/favicon.png",       // for most browsers
    apple: "/public/favicon.png",      // for iOS when added to home screen
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
