import React, { useState } from "react";
import { useInterview } from "../hooks/useInterview";

const Interview = () => {
  const [activeSection, setActiveSection] = useState("technical");

  const { report, loading } = useInterview();

  const technicalQuestions = Array.isArray(report?.technicalQuestions)
    ? report.technicalQuestions
    : [];

  const behavioralQuestions = Array.isArray(report?.behavioralQuestions)
    ? report.behavioralQuestions
    : [];

  const preparationPlan = Array.isArray(report?.preparationPlan)
    ? report.preparationPlan
    : [];

  const skillGaps = Array.isArray(report?.skillGaps) ? report.skillGaps : [];

  const getSkillGapColor = (priority) => {
    const p = String(priority || "").toLowerCase();
    if (p.includes("high")) {
      return "bg-rose-500/15 text-rose-200 border-rose-500/40";
    }
    if (p.includes("medium")) {
      return "bg-amber-500/15 text-amber-200 border-amber-500/40";
    }
    if (p.includes("low")) {
      return "bg-emerald-500/15 text-emerald-200 border-emerald-500/40";
    }
    return "bg-sky-500/15 text-sky-200 border-sky-500/40";
  };

  const normalizedPlan = preparationPlan.map((item, idx) => {
    if (typeof item === "string") {
      return {
        day: `Day ${idx + 1}`,
        title: item,
        bullets: [],
      };
    }

    const bulletsRaw =
      item?.tasks ??
      item?.task ??
      item?.bullets ??
      item?.points ??
      item?.items ??
      [];

    const bullets =
      Array.isArray(bulletsRaw) && bulletsRaw.length
        ? bulletsRaw
        : typeof bulletsRaw === "string" && bulletsRaw.trim().length
        ? [bulletsRaw]
        : item?.focus
        ? [item.focus]
        : [];

    return {
      day: item?.day ?? `Day ${idx + 1}`,
      title:
        item?.title ?? item?.focus ?? item?.topic ?? item?.name ?? `Day ${idx + 1}`,
      bullets,
    };
  });

  const renderContent = () => {
    if (activeSection === "technical") {
      if (loading) {
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Technical Questions
            </h2>
            <p className="text-sm text-slate-300">
              Generating your interview report…
            </p>
          </div>
        );
      }
      

      return (
        <div className="space-y-5">
          <header className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Technical Questions
              </h2>
              <p className="text-xs text-slate-400 sm:text-sm">
                Review role-aligned technical questions. Use these to simulate
                deep-dive interviews.
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30 text-center">
              {technicalQuestions.length
                ? `${technicalQuestions.length} questions`
                : "No questions yet"}
            </span>
          </header>

          {technicalQuestions.length ? (
            <ul className="space-y-4">
              {technicalQuestions.map((q, index) => (
                <li
                  key={q?._id ?? q?.id ?? `${index}-${q?.question ?? "q"}`}
                  className="group rounded-xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm transition hover:border-slate-600"
                >
                  <div className="mb-2 flex flex-wrap items-start gap-2">
                    <span className="inline-flex rounded-md bg-rose-500/20 px-2.5 py-1 text-xs font-semibold text-rose-200 ring-1 ring-rose-400/40">
                      Q{index + 1}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      {q?.category ?? q?.topic ?? "Technical"}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-50 sm:text-base">
                    {q?.question ?? q?.prompt ?? q?.text ?? "—"}
                  </p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="inline-flex rounded-md bg-violet-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-200 ring-1 ring-violet-400/40">
                        Intention
                      </span>
                      <p className="mt-2 text-sm text-slate-200">
                        {q?.intention ?? "—"}
                      </p>
                    </div>
                    <div>
                      <span className="inline-flex rounded-md bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200 ring-1 ring-emerald-400/40">
                        Model Answer
                      </span>
                      <p className="mt-2 text-sm text-slate-200">
                        {q?.modelAnswer ?? q?.answer ?? "—"}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
              No technical questions found in this report yet.
            </div>
          )}
        </div>
      );
    }

    if (activeSection === "behavioral") {
      if (loading) {
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Behavioral Questions
            </h2>
            <p className="text-sm text-slate-300">
              Generating your interview report…
            </p>
          </div>
        );
      }

      return (
        <div className="space-y-5">
          <header className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Behavioral Questions
              </h2>
              <p className="text-xs text-slate-400 sm:text-sm">
                Practice STAR-format answers for high-signal behavioral topics.
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30 text-center">
              {behavioralQuestions.length
                ? `${behavioralQuestions.length} questions`
                : "No questions yet"}
            </span>
          </header>

          {behavioralQuestions.length ? (
            <ul className="space-y-4">
              {behavioralQuestions.map((q, index) => (
                <li
                  key={q?._id ?? q?.id ?? `${index}-${q?.prompt ?? "q"}`}
                  className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm transition hover:border-slate-600"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-md bg-rose-500/20 px-2.5 py-1 text-xs font-semibold text-rose-200 ring-1 ring-rose-400/40">
                      Q{index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      {q?.title ?? q?.category ?? "Behavioral"}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-50 sm:text-base">
                    {q?.prompt ?? q?.question ?? q?.text ?? "—"}
                  </p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="inline-flex rounded-md bg-violet-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-200 ring-1 ring-violet-400/40">
                        Intention
                      </span>
                      <p className="mt-2 text-sm text-slate-200">
                        {q?.intention ?? "—"}
                      </p>
                    </div>
                    <div>
                      <span className="inline-flex rounded-md bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200 ring-1 ring-emerald-400/40">
                        Model Answer
                      </span>
                      <p className="mt-2 text-sm text-slate-200">
                        {q?.modelAnswer ?? q?.answer ?? "—"}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
              No behavioral questions found in this report yet.
            </div>
          )}
        </div>
      );
    }

    if (loading) {
      return (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Preparation Road Map
          </h2>
          <p className="text-sm text-slate-300">
            Generating your interview report…
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-5">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Preparation Road Map
            </h2>
            <p className="text-xs text-slate-400 sm:text-sm">
              A focused preparation plan aligned with this role.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 transition hover:bg-emerald-500/20"
          >
            Day-wise plan
          </button>
        </header>

        {normalizedPlan.length ? (
          <ol className="relative space-y-4 border-l border-slate-700 pl-5">
            {normalizedPlan.map((item, index) => (
              <li key={`${item.day}-${item.title}-${index}`} className="relative pl-2">
                <div className="absolute -left-2 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-emerald-400 bg-slate-900" />
                {index !== normalizedPlan.length - 1 && (
                  <div className="absolute -left-[9px] top-5 h-full w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
                )}

                <div className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 shadow-sm">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="inline-flex min-w-[4rem] justify-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                      {item.day}
                    </span>
                    <p className="text-sm font-medium text-slate-50 sm:text-base">
                      {item.title}
                    </p>
                  </div>
                  {item.bullets.length ? (
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-slate-300 sm:text-sm">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300">
            No preparation plan found in this report yet.
          </div>
        )}
      </div>
    );
  };

  const matchScore =
    typeof report?.matchScore === "number" ? report.matchScore : 0;

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
        {/* Left sidebar */}
        <aside className="lg:w-60">
          <div className="sticky top-4 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-5 shadow-lg backdrop-blur">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Sections
            </p>
            <nav className="space-y-1">
              <button
                type="button"
                onClick={() => setActiveSection("technical")}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition cursor-pointer ${
                  activeSection === "technical"
                    ? "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/60"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-50"
                }`}
              >
                <span>Technical Questions</span>
                <span className="text-[10px] text-slate-400">Core</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSection("behavioral")}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition cursor-pointer ${
                  activeSection === "behavioral"
                    ? "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/60"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-50"
                }`}
              >
                <span>Behavioral Questions</span>
                <span className="text-[10px] text-slate-400">Mindset</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSection("roadmap")}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition cursor-pointer ${
                  activeSection === "roadmap"
                    ? "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/60"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-50"
                }`}
              >
                <span>Road Map</span>
                <span className="text-[10px] text-slate-400">7-day</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Center content */}
        <section className="flex-1">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-6 shadow-xl sm:px-7 sm:py-7">
            <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-64 bg-gradient-to-b from-emerald-500/15 to-transparent blur-3xl" />
            {renderContent()}
          </div>
        </section>

        {/* Right sidebar */}
        <aside className="w-full lg:w-72">
          <div className="sticky top-4 space-y-4">
            {/* Match Score */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-5 shadow-lg">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Match Score
              </p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-1 rounded-full " />
                  <p className="relative text-2xl font-semibold text-emerald-300">
                    {matchScore}
                    <span className="text-sm text-emerald-200">%</span>
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-emerald-300">
                    Strong match for this role
                  </p>
                  <p className="text-xs text-slate-400">
                    Based on your resume, job description, and self description.
                    {loading ? " Generating score…" : ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Skill Gaps */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-5 shadow-lg">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Skill Gaps
              </p>
              <div className="mt-3 space-y-2">
                {skillGaps.length ? (
                  skillGaps.map((skill, index) => {
                    const label =
                      typeof skill === "string"
                        ? skill
                        : skill?.label ??
                          skill?.skill ??
                          skill?.name ??
                          skill?.title ??
                          "Skill gap";

                    const priority =
                      typeof skill === "string"
                        ? ""
                        : skill?.level ?? skill?.priority ?? skill?.severity;

                    const color = getSkillGapColor(priority);

                    return (
                      <div
                        key={`${label}-${index}`}
                        className={`flex items-center justify-between rounded-xl border px-3 py-2 text-xs sm:text-sm ${color}`}
                      >
                        <span className="font-medium">{label}</span>
                        {priority ? (
                          <span className="text-[10px] opacity-80">
                            {String(priority)}
                          </span>
                        ) : null}
                      </div>
                    );
                  })
                ) : (
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 text-sm text-slate-300">
                    No skill gaps found in this report yet.
                  </div>
                )}
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Focus on closing 1–2 gaps per week. These will update as new
                reports are generated.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Interview;