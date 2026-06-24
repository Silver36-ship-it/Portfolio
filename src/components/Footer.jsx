import { personalInfo } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 px-6 py-8 sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-600">
          Designed & built by {personalInfo.name}
        </p>
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-600">
          © {year} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
