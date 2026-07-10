import { useEffect, useState } from "react";
import { personalInfo } from "../data";

export default function Contact() {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const handleOpenOptions = () => setShowOptions(true);
    window.addEventListener("open-contact-options", handleOpenOptions);

    return () => {
      window.removeEventListener("open-contact-options", handleOpenOptions);
    };
  }, []);

  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent("Hello Chukwuemeka")}&body=${encodeURIComponent(`Hi Chukwuemeka,

I came across your portfolio and would love to connect.

Best regards,
[Your Name]`)}`;

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

          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <a
              href={emailLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-sky-400 px-10 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
            >
              Email Me →
            </a>
            <button
              type="button"
              onClick={() => setShowOptions((prev) => !prev)}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-10 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-sky-400 hover:text-sky-300"
            >
              Hire Me
            </button>
          </div>

          {showOptions && (
            <div className="mx-auto mb-8 max-w-2xl rounded-[1.5rem] border border-slate-800/70 bg-slate-950/70 p-5 text-left shadow-[0_15px_40px_rgba(2,6,23,0.35)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Reach me through
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 transition-all duration-300 hover:border-sky-400 hover:bg-slate-900"
                >
                  <p className="text-sm font-semibold text-white">LinkedIn</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Professional networking
                  </p>
                </a>
                <a
                  href={emailLink}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 transition-all duration-300 hover:border-sky-400 hover:bg-slate-900"
                >
                  <p className="text-sm font-semibold text-white">Email</p>
                  <p className="mt-1 text-sm text-slate-400">Direct message</p>
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 transition-all duration-300 hover:border-sky-400 hover:bg-slate-900"
                >
                  <p className="text-sm font-semibold text-white">WhatsApp</p>
                  <p className="mt-1 text-sm text-slate-400">Quick chat</p>
                </a>
              </div>
            </div>
          )}

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
              href={emailLink}
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
