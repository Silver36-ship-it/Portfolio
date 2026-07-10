import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900/70 px-6 py-24 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-mono uppercase tracking-[0.35em] text-sky-400">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What I Work With
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
            A blend of modern tools and solid fundamentals that help ship
            polished products quickly and reliably.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-[1.75rem] border border-slate-800/80 bg-slate-950/80 p-6 shadow-[0_15px_45px_rgba(2,6,23,0.2)]"
            >
              <h3 className="mb-4 border-b border-slate-800 pb-2 text-sm font-semibold text-slate-200">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-mono text-slate-400 transition-all hover:border-sky-400 hover:text-sky-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
