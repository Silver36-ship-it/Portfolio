import { personalInfo } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-10 text-center shadow-[0_25px_80px_rgba(14,116,144,0.2)] sm:p-14">
          <p className="mb-2 text-xs font-mono uppercase tracking-[0.35em] text-sky-400">
            04 — Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-slate-400">
            I&apos;m currently open to new opportunities — whether it&apos;s a
            full-time role, a freelance project, or a thoughtful conversation
            about building something meaningful.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mb-12 inline-flex rounded-full bg-sky-400 px-10 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
          >
            Say Hello →
          </a>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-sky-400"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-sky-400"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-sky-400"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
