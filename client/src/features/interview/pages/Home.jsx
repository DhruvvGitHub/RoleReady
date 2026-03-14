import React from "react";

const Home = () => {
  return (
    <main className="home min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-10">
      <div className="main-container w-full max-w-4xl">
        <section className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 shadow-2xl backdrop-blur-md px-6 py-8 sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-64 bg-gradient-to-b from-emerald-500/15 to-transparent blur-3xl" />

          <header className="mb-8 space-y-3 text-center sm:text-left">
            <p className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300 ring-1 ring-emerald-400/30">
              RoleReady Interview Assistant
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Enter your details to generate an interview report
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              Paste the job description, upload your resume, and briefly describe yourself. We’ll generate a tailored interview readiness report based on your profile.
            </p>
          </header>

          <div className="input-container grid gap-6 md:grid-cols-[minmax(0,2fr)]">
            {/* Job Description */}
            <div className="input-group flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="jobDescription"
                  className="text-sm font-medium text-slate-100 sm:text-base"
                >
                  Job Description
                </label>
                <span className="text-xs font-medium text-emerald-300">
                  Required
                </span>
              </div>
              <textarea
                name="jobDescription"
                id="jobDescription"
                placeholder="Paste the full job description, including responsibilities and requirements..."
                className="w-full min-h-40 resize-y rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              ></textarea>
              <p className="text-xs text-slate-400">
                This helps us understand the role expectations and align your report accordingly.
              </p>
            </div>

            {/* Upload Resume */}
            <div className="input-group mt-2 flex flex-col gap-2 sm:mt-4">
              <label
                htmlFor="resume"
                className="text-sm font-medium text-slate-100 sm:text-base"
              >
                Upload Resume (PDF)
              </label>
              <div className="flex flex-col gap-3 rounded-xl border border-dashed border-slate-700 bg-slate-900/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1 text-sm text-slate-300">
                  <p className="font-medium">Attach your latest resume</p>
                  <p className="text-xs text-slate-400">
                    We only use this to analyze your experience and skills. Maximum file size depends on your plan.
                  </p>
                </div>
                <label className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-emerald-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:mt-0">
                  <span>Choose PDF</span>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Self Description */}
            <div className="input-group mt-2 flex flex-col gap-2 sm:mt-4">
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="selfDescription"
                  className="text-sm font-medium text-slate-100 sm:text-base"
                >
                  Self Description
                </label>
                <span className="text-xs text-slate-400">
                  Optional but recommended for best results
                </span>
              </div>
              <textarea
                name="selfDescription"
                id="selfDescription"
                placeholder="Briefly describe your background, strengths, and what you’re targeting in your next role..."
                className="w-full min-h-32 resize-y rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              ></textarea>
              <p className="text-xs text-slate-400">
                Use this to highlight anything that isn’t obvious from your resume or the job description.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-4 flex flex-col items-stretch justify-between gap-4 border-t border-slate-800 pt-4 sm:flex-row sm:items-center">
              <div className="space-y-1 text-xs text-slate-400 sm:text-sm">
                <p>
                  By continuing, you confirm that you have permission to use this job description and resume data.
                </p>
                <p className="text-emerald-300">
                  Your report typically generates in under a minute.
                </p>
              </div>
              <button
                type="submit"
                className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Generate Interview Report
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
