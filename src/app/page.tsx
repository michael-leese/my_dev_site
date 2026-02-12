import { ProjectDrawer } from "@/components/ProjectDrawer";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillFilter } from "@/components/SkillFilter";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  experience,
  profile,
  projects,
  skills,
  socialLinks,
  stackGroups,
} from "@/data/site";
import type { ExperienceEntry, StackGroup } from "@/types/site";

/**
 * Primary landing page for the portfolio.
 */
export default function Home() {
  const summaryPoints: string[] = [
    "Neo-minimal interface, technical depth on demand.",
    "Clear, maintainable code with pragmatic delivery.",
    "Calm leadership and reliable execution for teams and clients.",
    "Evidence-driven delivery: decisions produce artifacts (ADRs, test charters, release notes) that stand up to audit.",
    "Determinism over drama: reproducible builds, pinned dependencies, documented toolchains, predictable releases.",
    "Cross-team orchestration: align dev/test/legal/IP so governance isn’t a bolt-on—it’s the workflow.",
    "Systems thinking for AI products: context design, audit trails, and clean interfaces that scale with complexity.",
  ];

  const tocLinks: { label: string; href: string }[] = [
    { label: "Overview", href: "#overview" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="page">
      <main className="container flex flex-col gap-10">
        <header
          id="overview"
          className="flex flex-wrap items-start justify-between gap-6"
        >
          <div className="flex flex-col gap-4">
            <span className="pill w-fit">Available for freelance & contracts</span>

            {/* Clean hierarchy: name → role → specialty */}
            <div className="space-y-2">
              <h1 className="headline">{profile.name}</h1>

              <div className="flex flex-col gap-1">
                <p className="text-lg md:text-xl font-medium text-[color:var(--text-base)]">
                  {profile.role}
                </p>
                <p className="text-xs md:text-sm uppercase tracking-wide text-[color:var(--text-muted)]">
                  {profile.specialty}
                </p>
              </div>
            </div>

            <p className="subhead">{profile.introduction}</p>

            {/* Soft separators version (no bullets) */}
            <p className="subhead max-w-[62ch]">
              <span className="text-[color:var(--text-muted)]">{profile.summaryLead}</span>{" "}
              <span className="font-medium text-[color:var(--text-base)]">
                {profile.summaryItems.join(" · ")}
              </span>
              {" "}
              <span className="text-[color:var(--text-muted)]">{profile.summaryTail}</span>
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-[color:var(--text-muted)]">
              <span className="tag">{profile.location}</span>
              <span className="tag">Remote-friendly</span>
              <span className="tag">Product & platform delivery</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a className="button button-primary" href={socialLinks[0].href}>
                Email Michael
              </a>
              <a
                className="button"
                href={socialLinks[1].href}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <ThemeToggle />
        </header>

        <nav className="sticky top-6 z-10 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)]/90 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
            <span className="hidden sm:inline">Contents</span>
            <span className="hidden sm:inline">·</span>
            <div className="flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold">
              {tocLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-1 transition hover:text-[color:var(--accent-strong)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="card grid-two items-start">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">How I Work</span>

            <h2 className="text-2xl font-semibold leading-tight">
              Reliable delivery with quiet craft.
            </h2>

            <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">
              I focus on calm execution, strong documentation, and clean handoffs.
              Every feature is built with the next maintainer in mind.
              <br /><br />
              I work across the stack and across teams, bridging build systems,
              test strategy, and delivery so regulated environments can ship with confidence.
            </p>

            <p className="text-sm leading-relaxed text-[color:var(--text-base)]">
              For regulated or high-stakes teams, documentation, governance,
              and traceability are part of engineering — so the product is not only built,
              but <span className="font-medium">defensible</span>.
              <br /><br />
              Governance-first software means auditability, determinism,
              and evidence are designed in — not added later.
            </p>
          </div>

          <ul className="mt-12 flex flex-col gap-4 text-sm text-[color:var(--text-muted)]">
            {summaryPoints.map((point: string) => (
              <li
                key={point}
                className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.45rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[color:var(--brand-accent)]"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>


        <section id="stack" className="section">
          <SectionHeader
            eyebrow="Stack Overview"
            title="Built for clarity and longevity."
            subtitle="A modern stack with emphasis on maintainability, performance, and thoughtful UX."
          />
          <div className="grid-three mt-8">
            {stackGroups.map((group: StackGroup) => (
              <div key={group.title} className="card card-muted flex flex-col gap-4">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <p className="text-sm text-[color:var(--text-muted)]">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item: string) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeader
            eyebrow="Experience"
            title="Proven delivery across product, consulting, and community."
            subtitle="A track record of shipping meaningful software and leading with steadiness."
          />
          <ol className="mt-8 flex flex-col gap-6">
            {experience.map((entry: ExperienceEntry) => (
              <li key={`${entry.company}-${entry.dates}`} className="card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{entry.company}</h3>
                    <p className="text-sm text-[color:var(--text-muted)]">
                      {entry.role} · {entry.location}
                    </p>
                  </div>
                  <span className="tag text-xs">{entry.dates}</span>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-sm text-[color:var(--text-muted)]">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight.detail}>• {highlight.detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work with detail on demand."
            subtitle="Tap a project to explore the delivery context, constraints, and outcomes."
          />
          <div className="mt-8">
            <ProjectDrawer projects={projects} />
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeader
            eyebrow="Skills"
            title="Specialist depth with practical range."
            subtitle="Filter by focus area or scan the full toolkit."
          />
          <div className="mt-8">
            <SkillFilter skills={skills} />
          </div>
        </section>

        <section id="contact" className="section card">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something measured and durable."
            subtitle="Open to freelance, contract, and advisory conversations."
          />
          <div className="mt-6 flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="button"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
                {link.note ? (
                  <span className="text-xs text-[color:var(--text-muted)]">
                    {link.note}
                  </span>
                ) : null}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
