import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 sm:px-10 ${
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <a
        href="#top"
        className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-sm font-semibold text-sky-300"
      >
        {personalInfo.firstName}
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-slate-400 transition-colors hover:text-slate-100"
          >
            {link}
          </a>
        ))}
      </div>

      <a
        href={`mailto:${personalInfo.email}`}
        className="rounded-full border border-sky-400/30 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300 transition-all hover:bg-sky-400 hover:text-slate-950"
      >
        Hire Me
      </a>
    </nav>
  );
}
