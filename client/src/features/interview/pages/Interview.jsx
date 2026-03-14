import React, { useState } from "react";

const Interview = () => {
  const [activeSection, setActiveSection] = useState("technical");

  const technicalQuestions = [
    {
      id: 1,
      category: "Node.js & Backend",
      question:
        "Explain the Node.js event loop and how it handles asynchronous I/O operations.",
      intention:
        "To assess the candidate's deep understanding of Node.js internal architecture and non-blocking I/O.",
      modelAnswer:
        "The candidate should explain the different phases of the event loop (timers, pending callbacks, idle/prepare, poll, check, close). They should mention how Libuv handles the thread pool and how the callback queue works with the call stack to ensure performance without blocking the main thread.",
    },
    {
      id: 2,
      category: "MongoDB & Data Modeling",
      question:
        "How would you design a schema for tracking user applications across multiple job posts?",
      intention:
        "To evaluate data modeling skills and understanding of when to reference vs embed documents.",
      modelAnswer:
        "Discuss a main Applications collection with references to Users and JobPosts. Use compound indexes on (userId, jobPostId) for uniqueness and (jobPostId, status) for listing. Mention embedding status history or notes only if read patterns justify it.",
    },
    {
      id: 3,
      category: "System Design",
      question:
        "Design a scalable interview preparation platform for thousands of concurrent users.",
      intention:
        "To test system design thinking: load distribution, state management, and scalability trade-offs.",
      modelAnswer:
        "Talk about load balancing (e.g. round-robin or least connections), stateless app servers, caching (Redis) for sessions and hot content, database read replicas and sharding by tenant or feature. Mention queue-based jobs for report generation and CDN for static assets.",
    },
  ];

  const behavioralQuestions = [
    {
      id: 1,
      title: "Handling Ambiguity",
      prompt:
        "Tell me about a time you had to deliver on a vague requirement. How did you bring clarity and move forward?",
      intention:
        "To see how you gather requirements and drive alignment when the brief is unclear.",
      modelAnswer:
        "Describe a specific project, the ambiguity (e.g. 'make it better' or missing success criteria). Explain how you asked questions, proposed a short discovery or MVP, and aligned with stakeholders. End with the outcome and what you'd do differently.",
    },
    {
      id: 2,
      title: "Ownership & Accountability",
      prompt:
        "Describe a situation where you took ownership of a failing project. What did you do and what was the outcome?",
      intention:
        "To assess ownership, problem-solving under pressure, and follow-through.",
      modelAnswer:
        "Outline the situation and why it was failing. Focus on the actions you took (diagnosis, prioritization, communication, technical or process changes). Share the result and one lesson about ownership or communication.",
    },
    {
      id: 3,
      title: "Dealing With Failure",
      prompt:
        "Share an example of a significant technical mistake you made and how you handled it afterwards.",
      intention:
        "To gauge self-awareness, accountability, and learning from failure.",
      modelAnswer:
        "Pick one concrete incident. Briefly state the mistake and impact. Emphasize how you fixed it, communicated to others, and what safeguards or habits you adopted so it wouldn't repeat.",
    },
  ];

  const roadmapItems = [
    {
      day: "Day 1",
      title: "Node.js Internals & Streams",
      bullets: [
        "Deep dive into Event Loop phases and process.nextTick vs setImmediate.",
        "Practice implementing Node.js streams for large data processing.",
      ],
    },
    {
      day: "Day 2",
      title: "Advanced MongoDB & Indexing",
      bullets: [
        "Study compound indexes, TTL indexes, and text indexes.",
        "Practice writing aggregation pipelines and using `.explain()` for query plans.",
      ],
    },
    {
      day: "Day 3",
      title: "Caching & Redis Strategies",
      bullets: [
        "Review Redis data structures beyond strings (sets, hashes, sorted sets).",
        "Implement a rate limiter or caching layer for a sample API.",
      ],
    },
    {
      day: "Day 4",
      title: "System Design & Microservices",
      bullets: [
        "Study microservice communication patterns (sync vs async).",
        "Learn the API Gateway pattern and circuit breakers.",
      ],
    },
    {
      day: "Day 5",
      title: "Queues & DevOps Basics",
      bullets: [
        "Watch introductory content on RabbitMQ / Kafka.",
        "Dockerize a simple service and explore CI workflows.",
      ],
    },
    {
      day: "Day 6",
      title: "Data Structures & Algorithms",
      bullets: [
        "Solve 5–10 LeetCode-style problems focusing on arrays and strings.",
        "Review common sorting and searching algorithms.",
      ],
    },
    {
      day: "Day 7",
      title: "Mock Interview & Review",
      bullets: [
        "Run a mock interview focusing on your target role.",
        "Summarize your learnings and refine your preparation plan.",
      ],
    },
  ];

  const skillGaps = [
    {
      label: "Message Queues (Kafka/RabbitMQ)",
      level: "High priority",
      color: "bg-rose-500/15 text-rose-200 border-rose-500/40",
    },
    {
      label: "Advanced Docker & CI/CD Pipelines",
      level: "Medium priority",
      color: "bg-amber-500/15 text-amber-200 border-amber-500/40",
    },
    {
      label: "Distributed Systems Design",
      level: "Medium priority",
      color: "bg-sky-500/15 text-sky-200 border-sky-500/40",
    },
    {
      label: "Production-level Redis management",
      level: "Low priority",
      color: "bg-emerald-500/15 text-emerald-200 border-emerald-500/40",
    },
  ];

  const renderContent = () => {
    if (activeSection === "technical") {
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
              Personally curated questions
            </span>
          </header>

          <ul className="space-y-4">
            {technicalQuestions.map((q, idx) => (
              <li
                key={q.id}
                className="group rounded-xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm transition hover:border-slate-600"
              >
                <div className="mb-2 flex flex-wrap items-start gap-2">
                  <span className="inline-flex rounded-md bg-rose-500/20 px-2.5 py-1 text-xs font-semibold text-rose-200 ring-1 ring-rose-400/40">
                    Q{q.id}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    {q.category}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-50 sm:text-base">
                  {q.question}
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="inline-flex rounded-md bg-violet-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-200 ring-1 ring-violet-400/40">
                      Intention
                    </span>
                    <p className="mt-2 text-sm text-slate-200">
                      {q.intention}
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex rounded-md bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200 ring-1 ring-emerald-400/40">
                      Model Answer
                    </span>
                    <p className="mt-2 text-sm text-slate-200">
                      {q.modelAnswer}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (activeSection === "behavioral") {
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
          </header>

          <ul className="space-y-4">
            {behavioralQuestions.map((q) => (
              <li
                key={q.id}
                className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm transition hover:border-slate-600"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-md bg-rose-500/20 px-2.5 py-1 text-xs font-semibold text-rose-200 ring-1 ring-rose-400/40">
                    Q{q.id}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {q.title}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-50 sm:text-base">
                  {q.prompt}
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="inline-flex rounded-md bg-violet-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-200 ring-1 ring-violet-400/40">
                      Intention
                    </span>
                    <p className="mt-2 text-sm text-slate-200">
                      {q.intention}
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex rounded-md bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200 ring-1 ring-emerald-400/40">
                      Model Answer
                    </span>
                    <p className="mt-2 text-sm text-slate-200">
                      {q.modelAnswer}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
              A focused 7-day preparation plan aligned with this role.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 transition hover:bg-emerald-500/20"
          >
            7-day plan
          </button>
        </header>

        <ol className="relative space-y-4 border-l border-slate-700 pl-5">
          {roadmapItems.map((item, index) => (
            <li key={item.day} className="relative pl-2">
              <div className="absolute -left-2 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-emerald-400 bg-slate-900" />
              {index !== roadmapItems.length - 1 && (
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
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-slate-300 sm:text-sm">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  };

  const matchScore = 88;

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
                <div className="">
                  <div  />
                  <p className="relative text-3xl font-semibold text-emerald-300">
                    {matchScore}
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-emerald-300">
                    Strong match for this role
                  </p>
                  <p className="text-xs text-slate-400">
                    Based on your resume, job description, and self description.
                    This is a placeholder score for now.
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
                {skillGaps.map((skill) => (
                  <div
                    key={skill.label}
                    className={`flex items-center justify-between rounded-xl border px-3 py-2 text-xs sm:text-sm ${skill.color}`}
                  >
                    <span className="font-medium">{skill.label}</span>
                    <span className="text-[10px] opacity-80">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Focus on closing 1–2 gaps per week. These are sample insights and
                will be generated dynamically once the backend is connected.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Interview;