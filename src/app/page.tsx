const totalHours = 10 * 4.5;

const dailyPlan = [
  {
    day: 1,
    focus: "Foundations: Automation Mindset & Tooling Setup",
    estimatedHours: 4.5,
    objectives: [
      {
        title: "Automation Landscape & Goals",
        hours: 1.0,
        detail:
          "Understand what UI automation can and cannot do, success criteria for the Word add-in scenario, and how Playwright differs from Selenium and Office.js testing."
      },
      {
        title: "Environment Setup",
        hours: 1.5,
        detail:
          "Install Python 3.11, Node.js LTS, VS Code, Git, Edge WebView2 runtime, and configure PowerShell terminal integration. Validate installations with version checks."
      },
      {
        title: "VS Code Productivity",
        hours: 1.0,
        detail:
          "Install Python, Playwright, and Office Add-in tooling extensions. Configure debug profiles, formatters, linting (ruff/flake8), and integrated terminal profiles."
      },
      {
        title: "Primer on Office Add-ins",
        hours: 1.0,
        detail:
          "Read Microsoft documentation on Word add-in architecture, Office.js basics, task pane vs. content add-ins, and how WebView2 hosts the add-in UI."
      }
    ],
    deliverable:
      "Working dev environment with a Git repository initialized and a journal entry capturing goals and constraints."
  },
  {
    day: 2,
    focus: "Python & Playwright Essentials",
    estimatedHours: 4.0,
    objectives: [
      {
        title: "Python Refresher",
        hours: 1.0,
        detail:
          "Review virtual environments, dependency management with pip/uv/poetry, pytest basics, async vs sync Python patterns relevant to Playwright."
      },
      {
        title: "Playwright Basics",
        hours: 2.0,
        detail:
          "Follow the Playwright Python tutorial: selecting elements, waiting strategies, assertions, handling multiple pages/frames."
      },
      {
        title: "Command Line & Inspector",
        hours: 1.0,
        detail:
          "Explore `playwright codegen`, trace viewer, inspector, and record/replay to accelerate element discovery inside WebView contexts."
      }
    ],
    deliverable:
      "Simple Playwright script that opens a public site, performs a login simulation, and records a trace."
  },
  {
    day: 3,
    focus: "Deep Dive: WebView2 & Office Add-in Debugging",
    estimatedHours: 4.5,
    objectives: [
      {
        title: "WebView2 Internals",
        hours: 1.5,
        detail:
          "Study WebView2 lifecycle, DevTools availability, debugging remote targets, and the difference between Evergreen vs. Fixed version runtimes."
      },
      {
        title: "Office Add-in Local Debugging",
        hours: 1.5,
        detail:
          "Use `yo office` to scaffold a Word task pane add-in, sideload into Word (desktop/web), attach Edge DevTools, and observe DOM, frames, and message traffic."
      },
      {
        title: "Playwright + WebView2 Bridge",
        hours: 1.5,
        detail:
          "Learn strategies for attaching Playwright to the WebView2 instance: launching Word with remote debugging port, enumerating contexts, and targeting frames."
      }
    ],
    deliverable:
      "Notes describing how to attach to the WebView2 instance and a checklist for reproducible debugging sessions."
  },
  {
    day: 4,
    focus: "Word Add-in Domain Knowledge",
    estimatedHours: 4.0,
    objectives: [
      {
        title: "Office.js API Usage",
        hours: 1.5,
        detail:
          "Review common Word APIs (body, ranges, content controls) and identify critical workflows for the add-in under test."
      },
      {
        title: "Add-in Commanding & Ribbon",
        hours: 1.0,
        detail:
          "Understand how command buttons trigger task panes or execute functions, and how this maps to automation entry points."
      },
      {
        title: "Test Scenario Inventory",
        hours: 1.5,
        detail:
          "Draft user flows, preconditions, data requirements, and edge cases. Prioritize based on business impact."
      }
    ],
    deliverable:
      "Documented list of high-value automation scenarios with acceptance criteria."
  },
  {
    day: 5,
    focus: "Playwright Advanced Patterns",
    estimatedHours: 4.5,
    objectives: [
      {
        title: "Fixtures & Project Structure",
        hours: 1.5,
        detail:
          "Organize tests with pytest-style fixtures, shared context managers, and page object patterns tailored to the add-in."
      },
      {
        title: "Resilience Techniques",
        hours: 1.5,
        detail:
          "Implement robust waits, handle dialogs, intercept network calls, and manage flakiness with retries and soft assertions."
      },
      {
        title: "State & Data Management",
        hours: 1.5,
        detail:
          "Leverage test data builders, environment variables, and secure secrets handling for Office authentication scenarios."
      }
    ],
    deliverable:
      "Proof-of-concept test suite structure with shared fixtures and a resilient helper for frame selection."
  },
  {
    day: 6,
    focus: "Integrating with Microsoft Word",
    estimatedHours: 4.0,
    objectives: [
      {
        title: "Word Launch & Sideload Automation",
        hours: 1.5,
        detail:
          "Scripted steps to open Word (desktop or web), sideload add-in manifest, and confirm add-in availability through automation."
      },
      {
        title: "Context Attachment Automation",
        hours: 1.5,
        detail:
          "Automate Playwright attaching to the WebView2 DevTools endpoint, detecting the task pane frame, and storing references."
      },
      {
        title: "Smoke Test Flow",
        hours: 1.0,
        detail:
          "Automate a simple end-to-end task: insert text via the add-in, verify Word document body content."
      }
    ],
    deliverable:
      "Executable smoke test that launches Word, attaches to the add-in, and validates a basic workflow."
  },
  {
    day: 7,
    focus: "CI/CD & Reliability",
    estimatedHours: 4.0,
    objectives: [
      {
        title: "Headless vs. Headed Trade-offs",
        hours: 1.0,
        detail:
          "Experiment with headless limitations for WebView2, record run metrics, and decide default execution mode."
      },
      {
        title: "Continuous Integration Pipeline",
        hours: 1.5,
        detail:
          "Design a GitHub Actions or Azure DevOps pipeline that installs dependencies, caches browsers, and runs smoke tests against Word Online."
      },
      {
        title: "Artifacts & Reporting",
        hours: 1.5,
        detail:
          "Configure Playwright reporters, HTML trace artifacts, video capture, and Slack/Teams notifications."
      }
    ],
    deliverable:
      "CI pipeline definition draft and documented fallback strategy for handling flaky tests."
  },
  {
    day: 8,
    focus: "Security, Data, and Maintainability",
    estimatedHours: 4.0,
    objectives: [
      {
        title: "Secrets & Credentials Hygiene",
        hours: 1.0,
        detail:
          "Implement secure storage via environment variables, 1Password/Azure Key Vault, and avoid leaking tokens in logs."
      },
      {
        title: "Modular Architecture",
        hours: 1.5,
        detail:
          "Refine page objects, service abstractions, and helper utilities for interacting with Office.js APIs."
      },
      {
        title: "Documentation & Knowledge Share",
        hours: 1.5,
        detail:
          "Create onboarding docs, runbook for troubleshooting, and annotate code with reasoning behind complex waits."
      }
    ],
    deliverable:
      "README automation guide for the team with setup steps, common issues, and coding standards."
  },
  {
    day: 9,
    focus: "End-to-End Project Build",
    estimatedHours: 4.5,
    objectives: [
      {
        title: "Feature Test Implementation",
        hours: 2.5,
        detail:
          "Automate top-priority scenarios, leverage data-driven tests, and implement validation for rich text, images, and content controls."
      },
      {
        title: "Regression & Edge Cases",
        hours: 1.0,
        detail:
          "Cover negative paths, offline behavior, and Office reauthentication flows."
      },
      {
        title: "Code Review & Refactoring",
        hours: 1.0,
        detail:
          "Polish code, ensure linting passes, add docstrings/comments where clarity is needed."
      }
    ],
    deliverable:
      "Feature-complete automated test suite covering critical paths with trace artifacts for each scenario."
  },
  {
    day: 10,
    focus: "Validation, Demo, and Next Steps",
    estimatedHours: 4.0,
    objectives: [
      {
        title: "Reliability Burn-in",
        hours: 1.5,
        detail:
          "Run the suite multiple times, capture flake statistics, tighten waits/timeouts, and document mitigations."
      },
      {
        title: "Stakeholder Demo Prep",
        hours: 1.0,
        detail:
          "Prepare a live demo script, screenshots, and a report highlighting coverage, ROI, and future enhancements."
      },
      {
        title: "Personal Retrospective",
        hours: 1.5,
        detail:
          "Reflect on learning, log lessons, identify advanced topics (Playwright component testing, API mocking, contract tests) for continued growth."
      }
    ],
    deliverable:
      "Final presentation pack and documented backlog of stretch goals (e.g., performance profiling, cross-platform validation)."
  }
];

const resourceRecommendations = [
  {
    title: "Playwright Python Docs",
    link: "https://playwright.dev/python/docs/intro",
    type: "Official Guide"
  },
  {
    title: "Microsoft 365 Office Add-ins Documentation",
    link: "https://learn.microsoft.com/office/dev/add-ins/",
    type: "Reference"
  },
  {
    title: "WebView2 Samples",
    link: "https://github.com/MicrosoftEdge/WebView2Samples",
    type: "Code Examples"
  },
  {
    title: "VS Code Python Tutorial",
    link: "https://code.visualstudio.com/docs/python/python-tutorial",
    type: "Tooling"
  },
  {
    title: "Playwright Trace Viewer Deep Dive",
    link: "https://playwright.dev/python/docs/trace-viewer",
    type: "Debugging"
  }
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12 md:px-12">
      <div className="w-full max-w-5xl space-y-12 rounded-3xl bg-slate-900/70 p-8 shadow-xl backdrop-blur">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/60 bg-brand/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-brand-light">
            10-Day Intensive Roadmap
          </span>
          <h1 className="text-3xl font-bold text-slate-100 md:text-5xl">
            Playwright Python + WebView2 Automation Mastery
          </h1>
          <p className="text-lg text-slate-300 md:text-xl">
            A personalized, day-by-day plan to go from zero to delivering an
            automated test suite for a Microsoft Word add-in using Playwright,
            WebView2, and Visual Studio Code.
          </p>
        </header>

        <section className="grid gap-6 text-slate-200 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              Total Focused Hours
            </h2>
            <p className="mt-3 text-3xl font-bold text-slate-100">
              {totalHours.toFixed(1)} hrs
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Target 4–5 hours per day of deep, distraction-free learning and
              implementation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              Core Pillars
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Automation fundamentals & tooling fluency</li>
              <li>• Playwright mastery tailored to WebView2 contexts</li>
              <li>• Word add-in domain expertise & CI readiness</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              Learning Rhythm
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Morning: theory and guided tutorials (~40%)</li>
              <li>• Afternoon: hands-on build and reflection (~60%)</li>
              <li>• Daily journal: capture blockers, insights, next steps</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-100">Daily Plan</h2>
          <div className="space-y-6">
            {dailyPlan.map((day) => (
              <article
                key={day.day}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-light">
                      Day {day.day}: {day.focus}
                    </h3>
                    <p className="text-sm text-slate-400">
                      Estimated effort: {day.estimatedHours} hrs
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-light">
                    Deliverable: {day.deliverable}
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {day.objectives.map((objective) => (
                    <li
                      key={objective.title}
                      className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                    >
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
                            {objective.title}
                          </p>
                          <p className="mt-1 text-sm text-slate-300">
                            {objective.detail}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-slate-400">
                          {objective.hours} hrs
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-semibold text-slate-100">
            Study & Reference Resources
          </h2>
          <p className="text-sm text-slate-300">
            Pair each day with the most relevant resources below. Skim during
            the morning theory block; revisit during hands-on time for targeted
            problem solving.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {resourceRecommendations.map((resource) => (
              <a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-800 bg-slate-950/40 p-4 transition hover:border-brand hover:bg-brand/10"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-light">
                  {resource.type}
                </p>
                <p className="mt-2 text-base font-semibold text-slate-100">
                  {resource.title}
                </p>
                <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-200">
                  {resource.link}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-3 rounded-3xl border border-brand/40 bg-brand/10 p-6 text-slate-200">
          <h2 className="text-2xl font-semibold text-brand-light">
            Mindset & Habits for Success
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>
              • Maintain a daily learning log in Notion/Obsidian; capture code
              snippets, blockers, and aha moments.
            </li>
            <li>
              • Use VS Code tasks to chain setup commands (`playwright install`,
              `pytest`) and reduce environment drift.
            </li>
            <li>
              • After each automation breakthrough, build a tiny demo snippet to
              reinforce understanding.
            </li>
            <li>
              • Rehearse the final demo twice on Day 9 to build confidence for
              stakeholder presentation on Day 10.
            </li>
          </ul>
        </section>

        <footer className="text-center text-xs text-slate-500">
          You have full ownership of this journey—adapt the pacing if a topic
          needs deeper exploration, but protect the daily deliverable to keep
          momentum.
        </footer>
      </div>
    </main>
  );
}
