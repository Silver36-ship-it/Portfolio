import { projects } from "../data";

const statusLabel = {
  live: null,
  "in-development": "In development",
  "coming-soon": "Coming soon",
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-[0.35em] text-sky-400">
              03 — Projects
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What I&apos;ve Built
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A mix of product-minded work, side projects, and experiments built
            with care and intention.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border p-7 transition-all duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "border-sky-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"
                  : "border-slate-800/80 bg-slate-900/80"
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 ${project.featured ? "bg-gradient-to-r from-sky-400 to-fuchsia-400" : "bg-slate-700"}`}
              />

              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-600">
                  {project.id}
                </span>
                {project.featured && (
                  <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-300">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-slate-100">
                {project.name}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.25em] text-sky-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-4">
                {project.status === "live" ? (
                  <div className="flex gap-5">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-sky-400"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-sky-400"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                ) : (
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-600">
                    {statusLabel[project.status]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
