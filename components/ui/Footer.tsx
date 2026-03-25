export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1f1f1f] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#525252] text-sm font-mono">
          © {year} Parmar Parthrajsinh. Built with Next.js & Framer Motion.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Parthraj1905"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#525252] hover:text-[#6366f1] text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/parthrajsinh-parmar-a86463373/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#525252] hover:text-[#6366f1] text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.kaggle.com/parthrajsinhparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#525252] hover:text-[#6366f1] text-sm transition-colors"
          >
            Kaggle
          </a>
        </div>
      </div>
    </footer>
  );
}
