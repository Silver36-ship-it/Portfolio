import { aboutText, personalInfo } from "../data";

export default function About() {
  const infoCards = [
    { label: "Focus", value: "Frontend Development" },
    { label: "Location", value: personalInfo.location },
    { label: "Status", value: personalInfo.status },
    { label: "Education", value: "Semicolon Africa" },
  ];

  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-[0.35em] text-sky-400">
              01 — About
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Who I Am
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              I care deeply about clarity, performance, and creating interfaces
              that feel effortless to use.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.25)]">
            <div className="space-y-4">
              {aboutText.map((paragraph, i) => (
                <p key={i} className="text-base leading-8 text-slate-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_10px_30px_rgba(2,6,23,0.2)]"
              >
                <p className="mb-1 text-xs font-mono uppercase tracking-[0.3em] text-sky-400">
                  {card.label}
                </p>
                <p className="text-sm font-semibold text-slate-200">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
