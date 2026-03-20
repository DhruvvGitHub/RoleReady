import React from 'react'

const AppInfo = () => {
  return (
    <section className="mb-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-md px-6 py-8 sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-64 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />
      
      <div className="relative space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-blue-300 ring-1 ring-blue-400/30 mb-4">
            About RoleReady
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl mb-3">
            Your AI-Powered Interview Coach
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-slate-300 sm:text-base leading-relaxed">
            Transform your job search with intelligent interview preparation. Our AI analyzes your resume and job descriptions to provide personalized insights, questions, and preparation strategies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
              <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-slate-100">Smart Analysis</h3>
            <p className="text-xs text-slate-400 sm:text-sm">
              AI-powered matching between your profile and job requirements
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
              <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-slate-100">Tailored Questions</h3>
            <p className="text-xs text-slate-400 sm:text-sm">
              Practice with relevant technical and behavioral questions
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
              <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-slate-100">Skill Gap Analysis</h3>
            <p className="text-xs text-slate-400 sm:text-sm">
              Identify areas for improvement and get targeted preparation plans
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
              <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-slate-100">Resume Builder</h3>
            <p className="text-xs text-slate-400 sm:text-sm">
              Generate optimized resumes based on job requirements
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-6">
          <h3 className="mb-4 text-center font-semibold text-slate-100">How It Works</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-slate-900 mx-auto">
                1
              </div>
              <h4 className="mb-1 font-medium text-slate-100">Upload Resume</h4>
              <p className="text-xs text-slate-400">
                Share your current resume and job description
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-slate-900 mx-auto">
                2
              </div>
              <h4 className="mb-1 font-medium text-slate-100">AI Analysis</h4>
              <p className="text-xs text-slate-400">
                Our AI analyzes your match and identifies opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-slate-900 mx-auto">
                3
              </div>
              <h4 className="mb-1 font-medium text-slate-100">Get Prepared</h4>
              <p className="text-xs text-slate-400">
                Receive personalized questions and preparation plans
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-slate-800/50 px-4 py-2 text-xs text-slate-400">
            <svg className="mr-2 h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.844c-4.52 0-8.401 2.949-9.734 7.155a.75.75 0 00.116.825l2.416 3.904a.75.75 0 001.033.242l2.416-1.458a.75.75 0 00.361-.642l-.006-5.584a.75.75 0 00-.361-.642L3.615 6.926a.75.75 0 00-1.033.242L.166 10.825a.75.75 0 00.116.825 11.954 11.954 0 009.718 7.155c1.333-4.206 5.214-7.155 9.734-7.155zm2.851 2.851a1.5 1.5 0 00-2.121 0L10 10.586 8.104 8.708a1.5 1.5 0 00-2.121 0L4.464 12.227a.75.75 0 001.06 1.061l2.476-2.476 2.476 2.476a.75.75 0 001.06-1.06l-3.52-3.52z" clipRule="evenodd" />
            </svg>
            Secure • Private • AI-Powered
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppInfo
