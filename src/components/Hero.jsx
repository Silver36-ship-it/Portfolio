import { useState, useEffect } from "react";
import { personalInfo } from "../data";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const githubUsername = personalInfo.github.split("/").filter(Boolean).pop();
  const profileImageUrl = `https://github.com/${githubUsername}.png?size=400`;

  return (
    <section className="relative flex min-h-screen items-center px-6 pb-16 pt-28 sm:px-10 lg:px-12">
      <div
        className={`fade-in ${visible ? "visible" : ""} grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center`}
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for select opportunities
          </div>

          <p className="mb-4 text-sm font-mono uppercase tracking-[0.35em] text-sky-400">
            Hi, I&apos;m
          </p>

          <h1 className="mb-5 text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
            <span className="gradient-text">{personalInfo.firstName}</span>
            <br />
            <span className="text-slate-400">{personalInfo.lastName}.</span>
          </h1>

          <p className="mb-4 max-w-2xl text-lg font-medium text-slate-300 sm:text-xl">
            {personalInfo.title}
          </p>

          <p className="mb-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            {personalInfo.bio}
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-7 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-sky-400 hover:text-sky-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="mx-auto w-full max-w-3xl rounded-[1.5rem] border border-slate-800/50 bg-slate-900/30 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.35)] backdrop-blur glass">
            <div className="flex items-center justify-between">
              <p className="text-sm font-mono uppercase tracking-[0.3em] text-sky-400">
                What I bring
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 rounded-xl border border-slate-800/40 bg-slate-950/40 p-3">
                <p className="text-sm font-semibold text-white">
                  Clean, conversion-focused UI
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Interfaces that feel polished, intuitive, and easy to trust.
                </p>
              </div>

              <div className="flex-1 rounded-xl border border-slate-800/40 bg-slate-950/40 p-3">
                <p className="text-sm font-semibold text-white">
                  Fast and responsive experiences
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Thoughtful performance and modern front-end architecture.
                </p>
              </div>

              <div className="flex-1 rounded-xl border border-slate-800/40 bg-slate-950/40 p-3">
                <p className="text-sm font-semibold text-white">
                  Problem-first thinking
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Building solutions around real user needs and clear business
                  goals.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-slate-800/40 bg-slate-950/30 p-3">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
                Current focus
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Designing crisp interfaces, fast workflows, and polished web
                experiences that leave a lasting impression.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex flex-wrap justify-center gap-8">
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
        </div>

        <div className="mx-auto w-full max-w-md lg:ml-auto">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-cyan-400/15 to-fuchsia-500/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-900/70 p-3 shadow-[0_25px_80px_rgba(2,6,23,0.45)]">
              {!imageError ? (
                <img
                  src={profileImageUrl}
                  alt={`${personalInfo.fullName} portrait`}
                  className="h-[420px] w-full rounded-[1.5rem] object-cover object-center"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex h-[420px] w-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-6xl font-bold text-slate-100">
                  {personalInfo.firstName.charAt(0)}
                  {personalInfo.lastName.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
