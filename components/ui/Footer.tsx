export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1e293b] py-8 px-6 bg-[#030303] text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-1.5">
          <span>© {year} parthrajsinh.</span>
          <span className="text-[#10b981]">::</span>
          <span>compiled_successfully_with_nextjs</span>
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Parthraj1905"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10b981] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/parthrajsinh-parmar-a86463373/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10b981] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.kaggle.com/parthrajsinhparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10b981] transition-colors"
          >
            Kaggle
          </a>
        </div>
      </div>
    </footer>
  );
}
